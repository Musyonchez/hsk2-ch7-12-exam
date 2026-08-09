"use client";

import { useEffect, useMemo, useState } from "react";
import { CHAPTERS, ALL_CHARS, FlatCharEntry } from "@/lib/characters";

const CHAPTER_NUMS = CHAPTERS.map((c) => c.num);

type Mode = "study" | "quiz";
type QuizMode = "identify" | "select" | "mixed";
// identify = shown the character, pick the meaning/pinyin (char -> meaning)
// select   = shown the meaning/pinyin, pick the character (meaning -> char)
// mixed    = each question randomly picks one of the above

const STORAGE_KEY = "hsk2-ch7-12-drill-v2";

function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function pick<T>(arr: T[], n: number): T[] {
  return shuffle(arr).slice(0, n);
}

export default function Drill() {
  const [mode, setMode] = useState<Mode>("study");
  const [activeChapters, setActiveChapters] = useState<number[]>(CHAPTER_NUMS);

  // Load the persisted chapter filter after mount (localStorage isn't
  // available during SSR, so this can't be a lazy useState initializer
  // without a hydration mismatch).
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed.activeChapters) && parsed.activeChapters.length) {
          // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing from an external store (localStorage) on mount, not derived from props/state
          setActiveChapters(parsed.activeChapters);
        }
      }
    } catch {
      /* ignore */
    }
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ activeChapters }));
    } catch {
      /* ignore */
    }
  }, [activeChapters]);

  const filtered = useMemo(
    () => ALL_CHARS.filter((d) => activeChapters.includes(d.chapter)),
    [activeChapters]
  );

  function toggleChapter(ch: number) {
    setActiveChapters((prev) =>
      prev.includes(ch)
        ? prev.length > 1
          ? prev.filter((x) => x !== ch)
          : prev
        : [...prev, ch]
    );
  }

  return (
    <div className="mx-auto max-w-[600px] px-4 pt-8 pb-16">
      <header className="mb-5 flex flex-col items-center gap-1 text-center">
        <div className="text-xs font-bold tracking-[0.12em] text-accent uppercase">
          HSK 2 · Chapters 7–12
        </div>
        <h1 className="font-display text-balance text-[26px] leading-tight font-semibold text-ink">
          Character Identification Drill
        </h1>
        <p className="mt-1 max-w-[46ch] text-sm text-ink-soft">
          {ALL_CHARS.length} characters from the New Words tables — flip
          through them or quiz yourself.
        </p>
      </header>

      <div className="mb-5 flex gap-1.5 rounded-[10px] border border-border bg-surface-2 p-1">
        <button
          onClick={() => setMode("study")}
          className={`flex-1 rounded-[7px] py-[9px] text-sm font-semibold ${
            mode === "study" ? "bg-surface text-accent shadow-sm" : "text-ink-soft"
          }`}
        >
          Study (flashcards)
        </button>
        <button
          onClick={() => setMode("quiz")}
          className={`flex-1 rounded-[7px] py-[9px] text-sm font-semibold ${
            mode === "quiz" ? "bg-surface text-accent shadow-sm" : "text-ink-soft"
          }`}
        >
          Quiz
        </button>
      </div>

      <div className="mb-2 flex flex-wrap justify-center gap-1.5">
        <button
          onClick={() => setActiveChapters(CHAPTER_NUMS)}
          className={`rounded-full border px-[11px] py-[5px] text-[12.5px] font-bold tabular-nums ${
            activeChapters.length === CHAPTER_NUMS.length
              ? "border-accent bg-accent-soft text-accent"
              : "border-border bg-surface text-ink-soft"
          }`}
        >
          All
        </button>
        {CHAPTER_NUMS.map((ch) => (
          <button
            key={ch}
            onClick={() => toggleChapter(ch)}
            className={`rounded-full border px-[11px] py-[5px] text-[12.5px] font-bold tabular-nums ${
              activeChapters.includes(ch)
                ? "border-accent bg-accent-soft text-accent"
                : "border-border bg-surface text-ink-soft"
            }`}
          >
            Ch {ch}
          </button>
        ))}
      </div>
      <p className="mb-5 text-center text-xs text-ink-faint">
        {filtered.length} character{filtered.length === 1 ? "" : "s"} in scope
      </p>

      {mode === "study" ? (
        <Study key={activeChapters.join(",")} pool={filtered} />
      ) : (
        <Quiz key={activeChapters.join(",")} pool={filtered} />
      )}

      <p className="mt-6 text-center text-xs text-ink-faint">
        Tap the character card to flip it. Review characters (from earlier
        chapters) are marked · REVIEW.
      </p>
    </div>
  );
}

// ---------------- Study (flashcards) ----------------

// `pool` is fixed for the lifetime of this component instance — the parent
// remounts it (via `key`) whenever the chapter filter changes — so it's
// safe to shuffle once as the initial state instead of syncing via effect.
function Study({ pool }: { pool: FlatCharEntry[] }) {
  const [queue, setQueue] = useState<FlatCharEntry[]>(() => shuffle(pool));
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  if (!queue.length) {
    return (
      <Card>
        <p className="text-ink">No characters in the selected chapters.</p>
      </Card>
    );
  }

  const item = queue[index];

  return (
    <>
      <Progress value={((index + 1) / queue.length) * 100} />
      <Card>
        <div
          role="button"
          tabIndex={0}
          onClick={() => setFlipped((f) => !f)}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setFlipped((f) => !f)}
          className="relative flex h-[168px] w-[168px] cursor-pointer items-center justify-center"
        >
          <TianZiGeGrid />
          <span className="font-hanzi relative text-[108px] leading-none text-ink select-none">
            {item.char}
          </span>
        </div>
        <div className="text-xs text-ink-faint">
          {flipped ? "click to hide" : "click the character to reveal"}
        </div>
        <div className="flex min-h-[170px] max-w-[400px] flex-col items-center gap-1.5 text-center">
          {flipped && (
            <>
              <div className="font-sans text-[22px] font-semibold text-accent">{item.pinyin}</div>
              <div className="text-[15px] text-ink">{item.meaning}</div>
              <div className="text-xs text-ink-faint">
                from <span className="font-hanzi">{item.word}</span> ({item.wordPinyin}) · Chapter{" "}
                {item.chapter}
              </div>
              {item.review && <ReviewBadge />}
              <div className="mt-2 rounded-[10px] border border-border bg-surface-2 px-3.5 py-3 text-left text-[13px] leading-snug text-ink-soft">
                <span className="mb-1 block text-[10.5px] font-bold tracking-[0.06em] text-ink-faint uppercase">
                  Memory aid
                </span>
                {item.mnemonic}
              </div>
            </>
          )}
        </div>
        <div className="flex justify-center gap-2.5">
          <Btn
            onClick={() => {
              setIndex((i) => (i - 1 + queue.length) % queue.length);
              setFlipped(false);
            }}
          >
            ← Prev
          </Btn>
          <Btn
            onClick={() => {
              setQueue(shuffle(pool));
              setIndex(0);
              setFlipped(false);
            }}
          >
            Shuffle
          </Btn>
          <Btn
            primary
            onClick={() => {
              setIndex((i) => (i + 1) % queue.length);
              setFlipped(false);
            }}
          >
            Next →
          </Btn>
        </div>
        <div className="text-xs text-ink-faint tabular-nums">
          {index + 1} / {queue.length}
        </div>
      </Card>
    </>
  );
}

// ---------------- Quiz ----------------

type Question = {
  item: FlatCharEntry;
  direction: "identify" | "select"; // identify = char->meaning, select = meaning->char
  options: FlatCharEntry[];
  correctIndex: number;
};

function buildQuestion(item: FlatCharEntry, quizMode: QuizMode, pool: FlatCharEntry[]): Question {
  const direction: "identify" | "select" =
    quizMode === "mixed" ? (Math.random() < 0.5 ? "identify" : "select") : quizMode;
  const distractorPool = (pool.length >= 4 ? pool : ALL_CHARS).filter((d) => d.char !== item.char);
  const options = shuffle(pick(distractorPool, 3).concat([item]));
  return { item, direction, options, correctIndex: options.indexOf(item) };
}

function newRound(pool: FlatCharEntry[], quizMode: QuizMode) {
  const q = shuffle(pool).slice(0, Math.min(15, pool.length));
  return { queue: q, question: q.length ? buildQuestion(q[0], quizMode, pool) : null };
}

// `pool` is fixed for the lifetime of this component instance — the parent
// remounts it (via `key`) whenever the chapter filter changes.
function Quiz({ pool }: { pool: FlatCharEntry[] }) {
  const [quizMode, setQuizMode] = useState<QuizMode>("mixed");
  const [round, setRound] = useState(() => newRound(pool, "mixed"));
  const { queue, question } = round;
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<number | null>(null); // selected option index

  function startRound(newQuizMode = quizMode) {
    setRound(newRound(pool, newQuizMode));
    setIndex(0);
    setScore(0);
    setAnswered(null);
  }

  function changeQuizMode(m: QuizMode) {
    setQuizMode(m);
    startRound(m);
  }

  function selectOption(i: number) {
    if (answered !== null || !question) return;
    setAnswered(i);
    if (i === question.correctIndex) setScore((s) => s + 1);
    setTimeout(() => {
      const next = index + 1;
      setIndex(next);
      setAnswered(null);
      if (next < queue.length) {
        setRound((r) => ({ ...r, question: buildQuestion(queue[next], quizMode, pool) }));
      }
    }, 700);
  }

  if (!pool.length) {
    return (
      <Card>
        <p className="text-ink">No characters in the selected chapters.</p>
      </Card>
    );
  }

  return (
    <>
      <div className="mb-4 flex gap-1.5 rounded-[10px] border border-border bg-surface-2 p-1">
        {(
          [
            ["identify", "Identify"],
            ["select", "Select"],
            ["mixed", "Mixed"],
          ] as [QuizMode, string][]
        ).map(([m, label]) => (
          <button
            key={m}
            onClick={() => changeQuizMode(m)}
            className={`flex-1 rounded-[7px] py-2 text-[13px] font-semibold ${
              quizMode === m ? "bg-surface text-accent shadow-sm" : "text-ink-soft"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {index >= queue.length ? (
        <Summary score={score} total={queue.length} onRestart={() => startRound()} />
      ) : (
        question && (
          <>
            <Progress value={(index / queue.length) * 100} />
            <Card>
              <div className="flex w-full items-baseline justify-between text-[12.5px] text-ink-soft tabular-nums">
                <span>
                  Question {index + 1} / {queue.length}
                </span>
                <span className="font-bold text-good">Score {score}</span>
              </div>

              {question.direction === "identify" ? (
                <div className="flex flex-col items-center gap-2.5 text-center">
                  <div className="text-[11.5px] font-bold tracking-[0.08em] text-ink-faint uppercase">
                    Identify this character
                  </div>
                  <div className="font-hanzi text-[86px] leading-none text-ink">{question.item.char}</div>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-2.5 text-center">
                  <div className="text-[11.5px] font-bold tracking-[0.08em] text-ink-faint uppercase">
                    Which character is this?
                  </div>
                  <div className="max-w-[380px] text-xl font-semibold text-ink">{question.item.meaning}</div>
                  <div className="font-sans text-[15px] text-ink-soft">{question.item.pinyin}</div>
                </div>
              )}

              <div className="grid w-full grid-cols-2 gap-2.5">
                {question.options.map((opt, i) => {
                  const isHanzi = question.direction === "select";
                  const label = isHanzi ? opt.char : `${opt.pinyin} — ${opt.meaning}`;
                  let stateClasses = "border-border bg-surface-2 hover:border-accent";
                  if (answered !== null) {
                    if (i === question.correctIndex) stateClasses = "border-good bg-good-soft text-good";
                    else if (i === answered) stateClasses = "border-bad bg-bad-soft text-bad";
                  }
                  return (
                    <button
                      key={opt.char + i}
                      disabled={answered !== null}
                      onClick={() => selectOption(i)}
                      className={`flex min-h-[52px] items-center justify-center rounded-[10px] border-[1.5px] px-2.5 py-3.5 text-center font-semibold ${stateClasses} ${
                        isHanzi ? "font-hanzi text-3xl" : "text-[15px]"
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </Card>
          </>
        )
      )}
    </>
  );
}

function Summary({ score, total, onRestart }: { score: number; total: number; onRestart: () => void }) {
  const pct = total ? Math.round((100 * score) / total) : 0;
  return (
    <Card>
      <div className="text-[11.5px] font-bold tracking-[0.08em] text-ink-faint uppercase">
        Round complete
      </div>
      <div className="font-display text-[40px] font-bold text-accent">
        {score} / {total}
      </div>
      <div className="text-[15px] text-ink">{pct}% correct</div>
      <Btn primary onClick={onRestart}>
        Try again
      </Btn>
    </Card>
  );
}

// ---------------- Shared bits ----------------

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center gap-4 rounded-[14px] border border-border bg-surface px-5 py-7 shadow-[0_1px_2px_rgba(42,35,32,0.06),0_6px_20px_rgba(42,35,32,0.07)]">
      {children}
    </div>
  );
}

function Progress({ value }: { value: number }) {
  return (
    <div className="mb-3 h-[5px] overflow-hidden rounded-full border border-border bg-surface-2">
      <div className="h-full bg-accent transition-[width] duration-200" style={{ width: `${value}%` }} />
    </div>
  );
}

function Btn({
  children,
  onClick,
  primary,
}: {
  children: React.ReactNode;
  onClick: () => void;
  primary?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-[9px] border px-[18px] py-2.5 text-sm font-semibold active:translate-y-px ${
        primary ? "border-accent bg-accent text-[#FBF3EE]" : "border-border bg-surface text-ink"
      }`}
    >
      {children}
    </button>
  );
}

function ReviewBadge() {
  return (
    <span className="mt-0.5 inline-block rounded-full border border-border bg-surface-2 px-[7px] py-px text-[10.5px] font-bold tracking-[0.05em] text-ink-soft uppercase">
      Review
    </span>
  );
}

function TianZiGeGrid() {
  return (
    <div className="absolute inset-0 rounded border-[1.5px] border-grid">
      <div className="absolute inset-y-0 left-1/2 w-px bg-grid" />
      <div className="absolute inset-x-0 top-1/2 h-px bg-grid" />
    </div>
  );
}
