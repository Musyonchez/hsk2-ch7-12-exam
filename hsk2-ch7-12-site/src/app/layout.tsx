import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "HSK 2 · Ch7–12 Character Reference",
  description: "Character identification reference for HSK 2, Chapters 7-12.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="font-sans min-h-full bg-bg text-ink">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
