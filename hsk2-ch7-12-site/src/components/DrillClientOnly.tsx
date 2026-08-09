"use client";

import dynamic from "next/dynamic";

// The drill shuffles characters with Math.random() on first render, which
// would differ between the server-rendered HTML and the client's hydration
// pass and throw a hydration mismatch. It's an interactive, randomized tool
// with no SEO content to gain from SSR, so render it client-only instead.
// (`ssr: false` in next/dynamic is only permitted inside a Client Component.)
const Drill = dynamic(() => import("@/components/Drill"), { ssr: false });

export default function DrillClientOnly() {
  return <Drill />;
}
