import Link from "next/link";

export default function Home() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-black text-slate-100">
      <main className="flex flex-col">
        <section className="relative flex min-h-screen flex-col justify-start overflow-hidden bg-[radial-gradient(circle_at_50%_25%,rgba(30,27,75,0.3),transparent_46%),#02030a] px-6 pt-20 text-left md:px-14">
          <div className="wave-scene" aria-hidden="true">
            <svg className="wave-svg wave-svg-back" viewBox="0 0 1600 420" preserveAspectRatio="none">
              <defs>
                <filter id="waveBlurA" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="8" />
                </filter>
                <linearGradient id="waveFillBack" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.35" />
                  <stop offset="50%" stopColor="#4f46e5" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#a855f7" stopOpacity="0.35" />
                </linearGradient>
                <linearGradient id="waveFillMid" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#9333ea" stopOpacity="0.65" />
                  <stop offset="50%" stopColor="#6366f1" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#c026d3" stopOpacity="0.65" />
                </linearGradient>
                <linearGradient id="waveFillFront" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#c026d3" stopOpacity="0.9" />
                  <stop offset="55%" stopColor="#7c3aed" stopOpacity="0.65" />
                  <stop offset="100%" stopColor="#d946ef" stopOpacity="0.95" />
                </linearGradient>
              </defs>
              <path
                className="wave-path wave-path-back"
                d="M0 255 C 210 170, 470 340, 780 250 C 1090 160, 1340 325, 1600 235 L1600 420 L0 420 Z"
                filter="url(#waveBlurA)"
              >
                <animate
                  attributeName="d"
                  dur="14s"
                  repeatCount="indefinite"
                  values="M0 255 C 210 170, 470 340, 780 250 C 1090 160, 1340 325, 1600 235 L1600 420 L0 420 Z;
                          M0 242 C 190 330, 485 170, 790 258 C 1075 330, 1365 170, 1600 230 L1600 420 L0 420 Z;
                          M0 255 C 210 170, 470 340, 780 250 C 1090 160, 1340 325, 1600 235 L1600 420 L0 420 Z"
                />
              </path>
              <path
                className="wave-path wave-path-mid"
                d="M0 274 C 230 360, 500 180, 810 268 C 1130 350, 1360 180, 1600 248 L1600 420 L0 420 Z"
              >
                <animate
                  attributeName="d"
                  dur="11s"
                  repeatCount="indefinite"
                  values="M0 274 C 230 360, 500 180, 810 268 C 1130 350, 1360 180, 1600 248 L1600 420 L0 420 Z;
                          M0 260 C 220 200, 510 360, 805 272 C 1110 200, 1370 352, 1600 252 L1600 420 L0 420 Z;
                          M0 274 C 230 360, 500 180, 810 268 C 1130 350, 1360 180, 1600 248 L1600 420 L0 420 Z"
                />
              </path>
            </svg>
            <svg className="wave-svg wave-svg-front" viewBox="0 0 1600 420" preserveAspectRatio="none">
              <path
                className="wave-path wave-path-front"
                d="M0 292 C 250 385, 470 215, 805 292 C 1120 370, 1360 210, 1600 272 L1600 420 L0 420 Z"
              >
                <animate
                  attributeName="d"
                  dur="9s"
                  repeatCount="indefinite"
                  values="M0 292 C 250 385, 470 215, 805 292 C 1120 370, 1360 210, 1600 272 L1600 420 L0 420 Z;
                          M0 278 C 240 235, 470 390, 810 286 C 1115 220, 1375 370, 1600 268 L1600 420 L0 420 Z;
                          M0 292 C 250 385, 470 215, 805 292 C 1120 370, 1360 210, 1600 272 L1600 420 L0 420 Z"
                />
              </path>
            </svg>
          </div>

          <div className="absolute right-6 top-6 z-20 flex items-center gap-2 md:right-14 md:top-8">
            <Link
              href="/"
              className="rounded-full border border-violet-300/45 bg-violet-500/18 px-4 py-2 text-xs font-semibold tracking-wide text-violet-100 transition hover:bg-violet-500/28"
            >
              Professional
            </Link>
            <Link
              href="/personal"
              className="rounded-full border border-white/20 bg-white/6 px-4 py-2 text-xs font-semibold tracking-wide text-slate-200 transition hover:border-violet-300/50 hover:bg-violet-500/10"
            >
              Personal
            </Link>
          </div>

          <div className="relative z-10 mx-auto w-full max-w-6xl">
            <div className="max-w-2xl space-y-6">
              <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
                Hey, I am <br></br> <span className="gradient-text">Chahana Reddy</span>
              </h1>
              <div className="typing-pill max-w-full">
                <p className="typing-text">SYSTEMS DESIGN ENGINEERING @ UNIVERSITY OF WATERLOO</p>
              </div>
              <p className="max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
                Integrating tech with various industries.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                className="rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-400 to-indigo-500 px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-[1.04] hover:shadow-[0_0_45px_rgba(168,85,247,0.5)]"
                href="#projects"
              >
                View Projects
              </a>
              <a
                className="rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:border-violet-300 hover:bg-violet-500/10"
                href="#contact"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>

        <div className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 py-16 md:px-10">
        <section id="experience" className="space-y-6">
          <h2 className="text-3xl font-semibold md:text-4xl">Experience</h2>
          <div className="grid gap-4">
            {[
              {
                role: "Software Engineering Intern",
                company: "Symmetry Commerce",
                period: "May-Aug 2026",
                details: "Shopify migrations.",
              },
              {
                role: "Software Engineering Intern",
                company: "Kenna Technologies",
                period: "Sep-Dec 2025",
                details: "Full stack app dev.",
              },
              {
                role: "Software Engineer",
                company: "Electrium Mobility",
                period: "Apr-Dec 2025",
                details: "Building Electrimap.",
              },
              {
                role: "Engineering Intern",
                company: "Sable",
                period: "Jan-Apr 2025",
                details: "PM & Data.",
              },
            ].map((item) => (
              <article
                key={item.role}
                className="glass-panel group rounded-2xl border border-white/10 p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-300/60"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                  {item.period ? <span className="text-sm text-violet-200">{item.period}</span> : null}
                </div>
                <p className="mt-1 text-sm text-slate-300">{item.company}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300/90">{item.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="space-y-6">
          <h2 className="text-3xl font-semibold md:text-4xl">Projects</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { title: "Ecotoken", text: "AI prompt optimizer." },
              { title: "Adversor", text: "AI Ad Generator." },
              { title: "Slot Machine", text: "Console-based slot machine game in Java." },
            ].map((project) => (
              <article
                key={project.title}
                className="tilt-card glass-panel rounded-2xl border border-white/10 p-6 transition duration-300 hover:border-fuchsia-300/60"
              >
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-200">{project.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="space-y-6 pb-12">
          <h2 className="text-3xl font-semibold md:text-4xl">Contact Me</h2>
          <div className="flex flex-wrap gap-3">
            <a
              className="contact-pill inline-flex items-center gap-2"
              href="https://www.linkedin.com/in/chahana-reddy-952a43281"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                <path d="M4.98 3.5A2.48 2.48 0 0 0 2.5 5.98 2.48 2.48 0 0 0 4.98 8.5 2.49 2.49 0 0 0 7.5 5.98 2.49 2.49 0 0 0 4.98 3.5ZM2.88 9.75h4.2V21h-4.2zM9.75 9.75h4.03v1.54h.06c.56-1 1.93-2.06 3.98-2.06 4.25 0 5.03 2.8 5.03 6.44V21h-4.2v-4.72c0-1.13-.02-2.58-1.57-2.58-1.58 0-1.82 1.24-1.82 2.5V21h-4.2z" />
              </svg>
              LinkedIn
            </a>
            <a
              className="contact-pill inline-flex items-center gap-2"
              href="https://github.com/Chahanareddy"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                <path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.82-.26.82-.58 0-.28-.01-1.02-.02-2-3.34.72-4.04-1.61-4.04-1.61A3.2 3.2 0 0 0 3.62 18c-1.1-.75.08-.74.08-.74a2.55 2.55 0 0 1 1.86 1.25 2.6 2.6 0 0 0 3.55 1 2.6 2.6 0 0 1 .77-1.64c-2.66-.3-5.47-1.33-5.47-5.93a4.64 4.64 0 0 1 1.24-3.22 4.3 4.3 0 0 1 .12-3.17s1-.33 3.3 1.23a11.37 11.37 0 0 1 6 0c2.28-1.56 3.3-1.23 3.3-1.23a4.3 4.3 0 0 1 .12 3.17 4.64 4.64 0 0 1 1.24 3.22c0 4.61-2.81 5.62-5.49 5.91a2.91 2.91 0 0 1 .83 2.26c0 1.63-.01 2.94-.01 3.34 0 .32.21.7.83.58A12 12 0 0 0 12 .5Z" />
              </svg>
              GitHub
            </a>
            <a
              className="contact-pill inline-flex items-center gap-2"
              href="https://x.com/chahana_reddy"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                <path d="M18.9 2H22l-6.77 7.74L23 22h-6.1l-4.78-6.25L6.6 22H3.5l7.24-8.27L1 2h6.26l4.32 5.7L18.9 2Zm-1.07 18h1.7L6.33 3.9H4.5L17.83 20Z" />
              </svg>
              Twitter
            </a>
          </div>
        </section>
        </div>
      </main>
    </div>
  );
}
