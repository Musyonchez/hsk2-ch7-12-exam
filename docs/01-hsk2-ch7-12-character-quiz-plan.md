# Plan: HSK2 Ch7–12 Character Identification Study Materials

## Goal
Exam covers character identification for HSK 2, Chapters 7–12. Need study
materials covering every character that appears in those chapters' New Words
tables and Dialogues, sourced from [../HSK-DIALOGS.md](../HSK-DIALOGS.md)
(lines 867–1127).

## Scope decision
- **Primary scope (quiz + study sheet): the 89 unique single characters**
  that make up the 60 New Words entries across Chapters 7–12. This is the
  chapter-specific target vocabulary and the most defensible "character
  identification" scope for an exam scoped to these chapters.
- Of those 89, 9 are review characters carried over from earlier chapters
  (小, 一, 问, 上, 在, 说, 能, 去, 年) — flagged as review, not new, but kept
  in scope since they appear inside this range's New Words compounds.
- **Secondary scope (reference only, not drilled by default):** dialogues
  also contain ~185 additional characters not in the New Words tables, but
  nearly all of those are basic HSK1 vocabulary (我, 你, 是, 的, 了, 吗, 呢,
  etc.) already assumed known — not worth quizzing, listed as an appendix in
  the study sheet in case the exam is broader than expected.

## Verification method
Extracted characters with a Node script (see
[extract.js logic] — parsed New Words table rows and Dialog lines
separately, CJK-range regex, deduped) to cross-check manual per-character
pinyin/meaning breakdown of the 60 words. Script count (89) matched the
manual breakdown exactly.

## Deliverables
1. `EXAMS/HSK2-CH7-12-CHARACTERS.md` — printable study sheet: character,
   pinyin, meaning, source word, chapter, new/review flag, plus the
   dialogue-only appendix.
2. Interactive quiz artifact (published, link given to user) — flashcard
   mode (flip to reveal) + multiple-choice quiz mode testing both
   directions (character→pinyin/meaning and pinyin/meaning→character),
   mixed randomly, with score tracking.
3. `EXAMS/hsk2-ch7-12-site/` — a real Next.js + Tailwind site (not just an
   artifact) with the same character reference table, requested so it's a
   standalone project the user can run/deploy independently of Claude
   artifacts. Kept fully separate from `~/Code/hsk-quiz` (an existing,
   unrelated Next.js project) per explicit instruction not to cross-pollinate.

## Status
- [x] Character extraction + verification
- [x] Study sheet
- [x] Quiz artifact
- [x] Next.js + Tailwind site (`hsk2-ch7-12-site/`)
