"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CHAPTERS, DIALOGUE_ONLY_CHARS, TOTAL_CHARS } from "@/lib/characters";

export default function CharacterReference() {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  const filteredChapters = useMemo(() => {
    if (!q) return CHAPTERS;
    return CHAPTERS.map((chapter) => ({
      ...chapter,
      rows: chapter.rows.filter((r) =>
        `${r.char}${r.pinyin}${r.meaning}${r.word}`.toLowerCase().includes(q)
      ),
    })).filter((chapter) => chapter.rows.length > 0);
  }, [q]);

  const noResults = q.length > 0 && filteredChapters.length === 0;

  return (
    <div className="mx-auto max-w-[760px] px-5 pt-9 pb-20">
      <header className="mb-6 flex flex-col gap-1.5">
        <div className="text-xs font-bold tracking-[0.12em] text-accent uppercase">
          HSK 2 · Chapters 7–12
        </div>
        <h1 className="font-display text-[30px] leading-tight font-semibold text-balance text-ink">
          Character Reference
        </h1>
        <p className="mt-1 max-w-[62ch] text-[14.5px] leading-relaxed text-ink-soft">
          All {TOTAL_CHARS} characters from the New Words tables, grouped by
          chapter, with pinyin, meaning, and the word they come from.
          Companion to the{" "}
          <Link href="/drill" className="underline decoration-border-strong hover:decoration-accent">
            flashcard &amp; quiz drill
          </Link>
          .
        </p>
      </header>

      <nav className="sticky top-0 z-10 mb-1.5 border-b border-border bg-bg py-3">
        <div className="flex flex-wrap items-center gap-1.5">
          {CHAPTERS.map((chapter) => (
            <a
              key={chapter.id}
              href={`#${chapter.id}`}
              className="scroll-mt-16 rounded-full border border-border bg-surface px-[11px] py-[5px] text-[12.5px] font-bold text-ink-soft tabular-nums no-underline hover:border-accent hover:text-accent"
            >
              Ch {chapter.num}
            </a>
          ))}
          <a
            href="#appendix"
            className="scroll-mt-16 rounded-full border border-border bg-surface px-[11px] py-[5px] text-[12.5px] font-bold text-ink-soft no-underline hover:border-accent hover:text-accent"
          >
            Appendix
          </a>

          <div className="relative ml-auto">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="pointer-events-none absolute top-1/2 left-[10px] -translate-y-1/2 text-ink-faint"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Filter characters…"
              aria-label="Filter characters"
              className="w-[170px] rounded-full border border-border bg-surface py-[7px] pr-3 pl-[30px] text-[13.5px] text-ink outline-none focus-visible:ring-2 focus-visible:ring-accent"
            />
          </div>
        </div>
      </nav>

      <main>
        {filteredChapters.map((chapter) => (
          <section key={chapter.id} id={chapter.id} className="mt-8 scroll-mt-16">
            <div className="mb-2.5 flex items-baseline gap-2.5">
              <span className="font-display rounded-md bg-accent-soft px-[9px] py-0.5 text-[15px] font-bold text-accent tabular-nums">
                Ch {chapter.num}
              </span>
              <span className="font-display text-[19px] font-semibold text-ink">
                {chapter.title}
              </span>
              <span className="ml-auto text-xs text-ink-faint tabular-nums">
                {chapter.rows.length} characters
              </span>
            </div>

            <div className="overflow-x-auto rounded-xl border border-border bg-surface shadow-[0_1px_2px_rgba(42,35,32,0.06),0_6px_20px_rgba(42,35,32,0.07)]">
              <table className="w-full min-w-[480px] border-collapse">
                <thead>
                  <tr>
                    {["Char", "Pinyin", "Meaning", "From word"].map((h) => (
                      <th
                        key={h}
                        className="border-b border-border bg-surface-2 px-3.5 py-2.5 text-left text-[11px] font-bold tracking-[0.06em] text-ink-faint uppercase"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {chapter.rows.map((r) => (
                    <tr key={r.char + r.word} className="last:[&>td]:border-b-0 hover:[&>td]:bg-surface-2">
                      <td className="font-hanzi border-b border-border px-3.5 py-2.5 text-2xl whitespace-nowrap">
                        {r.char}
                      </td>
                      <td className="font-display border-b border-border px-3.5 py-2.5 text-sm font-semibold whitespace-nowrap text-accent">
                        {r.pinyin}
                      </td>
                      <td className="border-b border-border px-3.5 py-2.5 text-sm text-ink">
                        {r.meaning}
                        {r.review && (
                          <span className="ml-1.5 inline-block rounded-full border border-border bg-surface-2 px-1.5 py-px text-[10px] font-bold tracking-[0.04em] text-ink-soft uppercase">
                            Review
                          </span>
                        )}
                      </td>
                      <td className="font-hanzi border-b border-border px-3.5 py-2.5 text-sm whitespace-nowrap text-ink-soft">
                        {r.word}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}

        {noResults && (
          <p className="py-5 text-center text-[13.5px] text-ink-faint">
            No characters match &ldquo;{query}&rdquo;.
          </p>
        )}
      </main>

      <div className="mt-8 mb-1.5 flex justify-center">
        <Link
          href="/drill"
          className="inline-flex items-center gap-2 rounded-[10px] bg-accent px-5 py-[11px] text-sm font-bold text-[#FBF3EE] shadow-[0_1px_2px_rgba(42,35,32,0.06),0_6px_20px_rgba(42,35,32,0.07)]"
        >
          Practice these in the quiz drill →
        </Link>
      </div>

      <section id="appendix" className="mt-11 scroll-mt-16 border-t border-dashed border-border-strong pt-5.5">
        <h2 className="font-display mb-2 text-lg text-ink">Dialogue-only characters</h2>
        <p className="max-w-[62ch] text-sm leading-relaxed text-ink-soft">
          The Ch7–12 dialogues also use these characters beyond the New Words
          tables — almost all are basic HSK1 vocabulary you already know (我,
          你, 是, 的, 了, 吗, 呢, 在, 不, 很…). Listed here in case your exam
          covers dialogue text more broadly than the New Words lists.
        </p>
        <div className="font-hanzi mt-2.5 rounded-xl border border-border bg-surface px-[18px] py-4 text-[19px] leading-[1.9] tracking-[0.06em] text-ink-faint">
          {DIALOGUE_ONLY_CHARS}
        </div>
      </section>

      <p className="mt-6 text-center text-xs text-ink-faint">
        Source: HSK-DIALOGS.md
      </p>
    </div>
  );
}
