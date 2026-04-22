import Link from "next/link";

export default function HardwarePage() {
  return (
    <div className="personal-shell min-h-screen bg-black px-6 py-20 text-slate-100 md:px-12">
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-3xl font-semibold md:text-5xl">Hardware</h1>
          <Link
            href="/personal"
            className="contact-pill border-violet-300/60 bg-violet-500/18 text-violet-100"
          >
            back
          </Link>
        </div>

        <p className="max-w-3xl text-slate-300">
          I have been exploring hardware-focused projects and prototyping physical systems.
        </p>

        <article className="glass-panel max-w-3xl rounded-2xl border border-white/10 p-5">
          <div className="mb-4 flex h-56 items-center justify-center rounded-xl border border-dashed border-violet-300/45 bg-violet-500/8 text-xs tracking-wide text-violet-200 uppercase">
            Photo Placeholder
          </div>
          <h2 className="text-xl font-semibold">Automatic Lid Opener</h2>
          <p className="mt-2 text-slate-300">
            A hardware build focused on practical automation and everyday usability.
          </p>
        </article>
      </div>
    </div>
  );
}
