import Link from "next/link";

export default function ActivePage() {
  return (
    <div className="personal-shell min-h-screen bg-black px-6 py-20 text-slate-100 md:px-12">
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-3xl font-semibold md:text-5xl">I am very active</h1>
          <Link
            href="/personal"
            className="contact-pill border-violet-300/60 bg-violet-500/18 text-violet-100"
          >
            back
          </Link>
        </div>

        <p className="max-w-3xl text-slate-300">
          Staying active helps me stay creative and disciplined across engineering and design.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {["Gym", "Early morning runs", "Swimming"].map((item) => (
            <article key={item} className="glass-panel rounded-2xl border border-white/10 p-4">
              <div className="mb-4 flex h-40 items-center justify-center rounded-xl border border-dashed border-violet-300/45 bg-violet-500/8 text-xs tracking-wide text-violet-200 uppercase">
                Photo Placeholder
              </div>
              <h2 className="text-lg font-semibold">{item}</h2>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
