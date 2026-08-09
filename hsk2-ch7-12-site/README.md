# HSK 2 · Chapters 7–12 Character Reference

A Next.js + Tailwind reference site for exam study: all 89 characters from
the HSK 2 New Words tables (Chapters 7–12), grouped by chapter, with pinyin,
meaning, source word, and a jump nav + live filter. Character data lives in
[src/lib/characters.ts](src/lib/characters.ts), sourced from
[../HSK-DIALOGS.md](../HSK-DIALOGS.md). See
[../docs/01-hsk2-ch7-12-character-quiz-plan.md](../docs/01-hsk2-ch7-12-character-quiz-plan.md)
for scope notes.

## Run it

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

Next.js 16 (App Router), TypeScript, Tailwind CSS v4. No backend, no data
fetching — it's a static reference page with client-side filtering.
