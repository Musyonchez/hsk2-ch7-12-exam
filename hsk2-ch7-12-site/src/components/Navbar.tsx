"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Reference" },
  { href: "/drill", label: "Drill" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-30 border-b border-border bg-bg/95 backdrop-blur">
      <div className="mx-auto flex max-w-[760px] items-center gap-1 px-5 py-2.5">
        <span className="font-display mr-1 text-sm font-semibold text-ink">
          HSK 2 <span className="text-ink-faint">· Ch7–12</span>
        </span>
        <div className="ml-auto flex gap-1">
          {LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-1.5 text-[13px] font-semibold ${
                  active ? "bg-accent-soft text-accent" : "text-ink-soft hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
