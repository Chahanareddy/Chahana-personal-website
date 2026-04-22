import Link from "next/link";

export default function ResearchPage() {
  return (
    <div className="personal-shell min-h-screen bg-black px-6 py-20 text-slate-100 md:px-12">
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-3xl font-semibold md:text-5xl">Research</h1>
          <Link
            href="/personal"
            className="contact-pill border-violet-300/60 bg-violet-500/18 text-violet-100"
          >
            Back to Personal
          </Link>
        </div>

        <p className="max-w-3xl text-slate-300">
          Harvard and Smithsonian Center for Astrophysics data research.
        </p>

        <article className="glass-panel max-w-3xl rounded-2xl border border-white/10 p-5">
          <div className="mb-4 flex h-56 items-center justify-center rounded-xl border border-dashed border-violet-300/45 bg-violet-500/8 text-xs tracking-wide text-violet-200 uppercase">
            Photo Placeholder
          </div>
          <h2 className="text-xl font-semibold">
            Harvard and Smithsonian Center for Astrophysics
          </h2>
          <p className="mt-2 text-slate-300">
            Data research and analysis work.
          </p>
        </article>
      </div>
    </div>
  );
}
