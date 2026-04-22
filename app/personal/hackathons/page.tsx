import Link from "next/link";

const hackathons = [
  { name: "Hack the Valley x Snowflake", badge: "Winner" },
  { name: "CursorAI Freeform", badge: "Winner" },
  { name: "UofT Hacks 13", badge: "Solo hacking for the first time" },
  { name: "Queen's Hacks", badge: "" },
  { name: "Hack the Globe x BCG", badge: "6th Place" },
  { name: "Hack Canada", badge: "" },
  { name: "Technova", badge: "first hackathon" },
];

export default function HackathonsPage() {
  return (
    <div className="personal-shell min-h-screen bg-black px-6 py-20 text-slate-100 md:px-12">
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-3xl font-semibold md:text-5xl">Hackathons</h1>
          <Link
            href="/personal"
            className="contact-pill border-violet-300/60 bg-violet-500/18 text-violet-100"
          >
            back
          </Link>
        </div>

        <p className="max-w-3xl text-slate-300">
          I started hackathons, learned a lot from each one, picked up tips to build stronger projects, won a few, and plan to keep attending to learn and grow.
        </p>

        <div className="space-y-3">
          {hackathons.map((event) => (
            <article
              key={event.name}
              className="glass-panel flex items-center justify-between rounded-2xl border border-white/10 px-5 py-4 transition hover:border-violet-300/55"
            >
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-violet-300 shadow-[0_0_12px_rgba(196,181,253,0.9)]" />
                <h2 className="text-base font-semibold text-slate-100 md:text-lg">{event.name}</h2>
              </div>
              {event.badge ? (
                <span className="rounded-full border border-amber-300/45 bg-amber-300/15 px-3 py-1 text-xs font-semibold tracking-wide text-amber-100">
                  {event.badge}
                </span>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
