import type { Metadata } from "next";
import Link from "next/link";
import DrillClientOnly from "@/components/DrillClientOnly";

export const metadata: Metadata = {
  title: "HSK 2 · Ch7–12 Character Drill",
  description: "Flashcards and multiple-choice quiz for HSK 2 Chapters 7-12 characters.",
};

export default function DrillPage() {
  return (
    <>
      <DrillClientOnly />
      <div className="pb-10 text-center">
        <Link href="/" className="text-sm font-semibold text-accent hover:underline">
          ← Back to the reference table
        </Link>
      </div>
    </>
  );
}
