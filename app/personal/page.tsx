"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type ShardStyle = {
  "--x": string;
  "--y": string;
  "--delay": string;
  "--dur": string;
  "--rot": string;
  "--floatY": string;
  "--scale": string;
  "--size": string;
  "--blur": string;
  "--radius": string;
  "--driftX": string;
};

export default function PersonalPage() {
  const [phase, setPhase] = useState<"burst" | "done">("burst");

  useEffect(() => {
    const doneTimer = window.setTimeout(() => setPhase("done"), 1500);
    return () => {
      window.clearTimeout(doneTimer);
    };
  }, []);

  const shards = useMemo(
    () =>
      Array.from({ length: 34 }, (_, i) => {
        const rand = (seed: number) => {
          const x = Math.sin(seed * 12.9898) * 43758.5453;
          return x - Math.floor(x);
        };
        const angle = rand(i + 1) * Math.PI * 2;
        const distance = 160 + rand(i + 11) * 460;
        const rotation = -380 + rand(i + 21) * 760;
        const floatY = -70 + rand(i + 31) * 140;
        const driftX = -50 + rand(i + 51) * 100;
        const delay = rand(i + 61) * 700;
        const duration = 720 + rand(i + 71) * 760;
        const blur = rand(i + 81) * 2.8;
        const radius = 10 + rand(i + 91) * 45;
        const scale = 0.5 + rand(i + 101);
        return {
          "--x": `${Math.cos(angle) * distance}px`,
          "--y": `${Math.sin(angle) * distance}px`,
          "--delay": `${delay.toFixed(0)}ms`,
          "--dur": `${duration.toFixed(0)}ms`,
          "--rot": `${rotation}deg`,
          "--floatY": `${floatY}px`,
          "--scale": `${scale.toFixed(2)}`,
          "--size": `${(8 + rand(i + 41) * 22).toFixed(1)}px`,
          "--blur": `${blur.toFixed(2)}px`,
          "--radius": `${radius.toFixed(1)}%`,
          "--driftX": `${driftX.toFixed(0)}px`,
        } as ShardStyle;
      }),
    [],
  );

  return (
    <div className="personal-shell min-h-screen bg-black text-slate-100">
      {phase !== "done" ? (
        <div className="blast-overlay" aria-hidden="true">
          <div className="blast-core" />
          {shards.map((style, idx) => (
            <span key={idx} className="blast-shard" style={style} />
          ))}
        </div>
      ) : null}

      <div className="absolute right-6 top-6 z-20 flex items-center gap-2 md:right-14 md:top-8">
        <Link
          href="/"
          className="rounded-full border border-white/20 bg-white/6 px-4 py-2 text-xs font-semibold tracking-wide text-slate-200 transition hover:border-violet-300/50 hover:bg-violet-500/10"
        >
          Professional
        </Link>
        <Link
          href="/personal"
          className="rounded-full border border-violet-300/45 bg-violet-500/18 px-4 py-2 text-xs font-semibold tracking-wide text-violet-100 transition hover:bg-violet-500/28"
        >
          Personal
        </Link>
      </div>

      <main
        className={`mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-20 transition-opacity duration-500 md:px-12 ${
          phase === "done" ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="space-y-6">
          <p className="text-xs font-semibold tracking-[0.22em] text-violet-200 uppercase">
            Personal Space
          </p>
          <h1 className="text-4xl font-semibold md:text-6xl">Welcome to my other world!</h1>
          <p className="max-w-2xl text-base text-slate-300 md:text-lg">
            Explore my personal life through hobbies, side projects, and what I am up to!
          </p>

          <div className="flex max-w-xl flex-col gap-3 pt-2">
            <Link
              href="/personal/active"
              className="contact-pill w-full border-violet-300/65 bg-violet-500/14 px-5 py-3 text-left text-base font-semibold text-violet-100 hover:bg-violet-500/24"
            >
              Active
            </Link>
            <Link
              href="/personal/hardware"
              className="contact-pill w-full border-violet-300/65 bg-violet-500/14 px-5 py-3 text-left text-base font-semibold text-violet-100 hover:bg-violet-500/24"
            >
              Hardware
            </Link>
            <Link
              href="/personal/hackathons"
              className="contact-pill w-full border-violet-300/65 bg-violet-500/14 px-5 py-3 text-left text-base font-semibold text-violet-100 hover:bg-violet-500/24"
            >
              Hackathons
            </Link>
            <Link
              href="/personal/research"
              className="contact-pill w-full border-violet-300/65 bg-violet-500/14 px-5 py-3 text-left text-base font-semibold text-violet-100 hover:bg-violet-500/24"
            >
              Research
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
