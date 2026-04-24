"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";

type ShardStyle = CSSProperties & Record<`--${string}`, string>;

export default function PersonalPage() {
  const [showBurst, setShowBurst] = useState(false);
  const rocketRef = useRef<HTMLSpanElement | null>(null);
  const phase: "burst" | "done" = showBurst ? "burst" : "done";

  useEffect(() => {
    const shouldBurst = new URLSearchParams(window.location.search).get("burst") === "1";
    if (!shouldBurst) return;
    setShowBurst(true);
    const doneTimer = window.setTimeout(() => setShowBurst(false), 1500);
    return () => {
      window.clearTimeout(doneTimer);
    };
  }, []);

  useEffect(() => {
    const rocket = rocketRef.current;
    if (!rocket) return;

    const rocketWidth = 24;
    const rocketHeight = 10;
    let rafId = 0;
    let lastTs = 0;
    let x = window.innerWidth * 0.28;
    let y = window.innerHeight * 0.46;
    const speed = 128;
    let angle = Math.random() * Math.PI * 2;

    const randomNudge = () => (Math.random() - 0.5) * 0.44;

    const updateRocket = () => {
      const rotationDeg = (Math.atan2(vy, vx) * 180) / Math.PI;
      rocket.style.setProperty("--rx", `${x}px`);
      rocket.style.setProperty("--ry", `${y}px`);
      rocket.style.setProperty("--rrot", `${rotationDeg.toFixed(2)}deg`);
    };

    let vx = Math.cos(angle) * speed;
    let vy = Math.sin(angle) * speed;
    updateRocket();

    const tick = (ts: number) => {
      if (!lastTs) lastTs = ts;
      const dt = Math.min((ts - lastTs) / 1000, 0.03);
      lastTs = ts;

      x += vx * dt;
      y += vy * dt;

      const maxX = window.innerWidth - rocketWidth;
      const maxY = window.innerHeight - rocketHeight;

      if (x <= 0 || x >= maxX) {
        x = Math.max(0, Math.min(x, maxX));
        vx *= -1;
        angle = Math.atan2(vy, vx) + randomNudge();
        vx = Math.cos(angle) * speed;
        vy = Math.sin(angle) * speed;
      }

      if (y <= 0 || y >= maxY) {
        y = Math.max(0, Math.min(y, maxY));
        vy *= -1;
        angle = Math.atan2(vy, vx) + randomNudge();
        vx = Math.cos(angle) * speed;
        vy = Math.sin(angle) * speed;
      }

      updateRocket();
      rafId = window.requestAnimationFrame(tick);
    };

    rafId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(rafId);
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
      <div className="mini-rocket-wrap" aria-hidden="true">
        <span ref={rocketRef} className="mini-rocket" />
      </div>
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
        className={`relative z-10 mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-20 transition-opacity duration-500 md:px-12 ${
          phase === "done" ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="space-y-6">
          <p className="text-xs font-semibold tracking-[0.22em] text-violet-200 uppercase">
            Personal Space
          </p>
          <h1 className="text-4xl font-semibold md:text-6xl">Welcome to the other side</h1>
          <p className="max-w-2xl text-base text-slate-300 md:text-lg">
            Explore my personal life through hobbies, side projects, and what I am up to!
          </p>

          <div className="flex max-w-xl flex-col gap-3 pt-1">
            <Link
              href="/personal/active"
              className="personal-nav-button contact-pill w-full border-violet-300/65 bg-violet-500/14 px-5 py-3 text-left text-base font-semibold text-violet-100 hover:bg-violet-500/24"
            >
              Active
            </Link>
            <Link
              href="/personal/hardware"
              className="personal-nav-button contact-pill w-full border-violet-300/65 bg-violet-500/14 px-5 py-3 text-left text-base font-semibold text-violet-100 hover:bg-violet-500/24"
            >
              Hardware
            </Link>
            <Link
              href="/personal/hackathons"
              className="personal-nav-button contact-pill w-full border-violet-300/65 bg-violet-500/14 px-5 py-3 text-left text-base font-semibold text-violet-100 hover:bg-violet-500/24"
            >
              Hackathons
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
