import Link from "next/link";
import Image from "next/image";

type ProjectCard = {
  title: string;
  text: string;
  stack: string;
  inlineTitleSuffix: string;
  placement?: string;
  link?: string;
  imageSrc?: string;
  imageAlt?: string;
  videoSrc?: string;
  tags?: string[];
};

export default function Home() {
  const projects: ProjectCard[] = [
    {
      title: "Ecotoken",
      text: "Extension that optimizes LLM user prompts, reducing token usage and estimating environment savings in CO2/water.",
      stack: "",
      inlineTitleSuffix: "- AI prompt optimizer.",
      placement: "1st @ Hack the Valley X Snowflake",
      link: "https://devpost.com/software/ecotoken-gb0ecp",
      imageSrc: "/images/project-ecotoken.png",
      imageAlt: "EcoToken extension dashboard screenshot",
      tags: ["Snowflake API", "Node.js", "Next.js", "TypeScript", "SQL"],
    },
    {
      title: "Adversor",
      text: "Transforms product URLs into advertisements to help businesses cut marketing budgets.",
      stack: "",
      inlineTitleSuffix: "- AI Ad Generator.",
      placement: "3rd @ cursor freeform hack",
      link: "https://devpost.com/software/adversor",
      imageSrc: "/images/project-cursor-hack.png",
      imageAlt: "Cursor Freeform hackathon graphic",
      tags: ["TypeScript", "Next.js", "React", "ElevenLabs API", "Gemini API"],
    },
    {
      title: "Slot Machine",
      text: "Console-based slot machine game in Java.",
      stack: "",
      inlineTitleSuffix: "- Console-based slot machine game in Java.",
      videoSrc: "/images/slotmachinedemo.mp4",
      tags: ["Java", "OOP", "File Handling"],
      link: "https://github.com/Chahanareddy/SlotMachine",
    },
  ];

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-black text-slate-100">
      <main className="flex flex-col">
        <section className="relative flex min-h-screen flex-col justify-start overflow-hidden bg-[radial-gradient(circle_at_50%_25%,rgba(30,27,75,0.3),transparent_46%),#02030a] px-6 pt-20 text-left md:px-14">
          <div className="starfield" aria-hidden="true">
            {Array.from({ length: 17 }, (_, i) => {
              const rand = (seed: number) => {
                const x = Math.sin(seed * 12.9898) * 43758.5453;
                return x - Math.floor(x);
              };
              const left = rand(i + 1) * 100;
              const top = rand(i + 101) * 88;
              const duration = 4.5 + rand(i + 201) * 4.2;
              const delay = rand(i + 301) * 5;
              const size = rand(i + 401) > 0.82 ? 3 : rand(i + 501) > 0.4 ? 2 : 1;
              return (
                <span
                  key={i}
                  className="star"
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    width: `${size}px`,
                    height: `${size}px`,
                    animationDuration: `${duration}s`,
                    animationDelay: `${delay}s`,
                  }}
                />
              );
            })}
            <span className="shooting-star shooting-star-one" />
            <span className="shooting-star shooting-star-two" />
            <span className="shooting-star shooting-star-three" />
          </div>

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
              href="/personal?burst=1"
              className="rounded-full border border-white/20 bg-white/6 px-4 py-2 text-xs font-semibold tracking-wide text-slate-200 transition hover:border-violet-300/50 hover:bg-violet-500/10"
            >
              Personal
            </Link>
          </div>

          <div className="relative z-10 mx-auto mt-8 w-full max-w-6xl md:mt-12">
            <div className="max-w-2xl space-y-6">
              <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
                Hey, I am <br></br>{" "}
                <span className="gradient-text name-bounce [font-family:Georgia,'Times_New_Roman',serif]">
                  Chahana Reddy
                </span>
              </h1>
              <div className="typing-pill max-w-full">
                <p className="typing-text">SYSTEMS DESIGN ENGINEERING @ UNIVERSITY OF WATERLOO</p>
              </div>
              <p className="max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
                Integrating tech with various industries.
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 py-16 md:px-10">
        <section id="experience" className="space-y-5">
          <h2 className="text-2xl font-semibold md:text-3xl">Experience</h2>
          <div className="grid gap-4">
            {[
              {
                role: "Software Engineering Intern",
                company: "Symmetry Commerce",
                period: "May-Aug 2026",
                details: "Shopify Plus partner.",
                skills: [],
              },
              {
                role: "Software Engineering Intern",
                company: "Kenna Technologies",
                period: "Sep-Dec 2025",
                details: "Full stack app dev.",
                skills: ["TypeScript", "React", "Node.js", "JavaScript", "SQL", "IBM", "AWS", "Jenkins"],
              },
              {
                role: "Software Engineer",
                company: "Electrium Mobility",
                period: "Apr-Dec 2025",
                details: "Building Electrimap.",
                skills: ["TypeScript","Next.js", "Firebase", "Cloud Firestore"],
              },
              {
                role: "Engineering Intern",
                company: "Sable",
                period: "Jan-Apr 2025",
                details: "PM & Data.",
                skills: [
                  "Data",
                  "SQL",
                  "Python",
                  "Power Apps",
                  "Automation",
                  "Solidworks",
                  "Engineering Drawings",
                  "QA",
                ],
              },
            ].map((item) => (
              <article
                key={`${item.role}-${item.company}`}
                className="glass-panel group rounded-2xl border border-white/10 p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-300/60"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-white">{item.role}</h3>
                  {item.period ? <span className="text-xs text-violet-200">{item.period}</span> : null}
                </div>
                <p className="mt-1 text-xs text-slate-300">{item.company}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-300/90">{item.details}</p>
                {/* {item.skills.length > 0 ? (
                  <div className="mt-3 border-t border-white/10 pt-2.5">
                    <p className="mb-1.5 text-[10px] font-semibold tracking-[0.14em] text-violet-200 uppercase">
                      Skills
                    </p>
                    <p className="text-xs text-slate-300/95">{item.skills.join(", ")}</p>
                  </div>
                ) : null} */}
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="space-y-6">
          <h2 className="text-3xl font-semibold md:text-4xl">Projects</h2>
          <div className="grid gap-4 lg:grid-cols-3">
            {projects.map((project) => {
              const isGithubLink = Boolean(project.link?.includes("github.com"));
              return (
              <article
                key={project.title}
                className="glass-panel group relative overflow-hidden rounded-2xl border border-white/10 p-4 transition duration-300 hover:-translate-y-1 hover:border-violet-300/60"
              >
                <div className="relative z-10">
                  {project.videoSrc ? (
                    <div className="relative overflow-hidden rounded-xl border border-white/10">
                      <video
                        src={project.videoSrc}
                        className="h-44 w-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      />
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="absolute inset-0 grid place-items-center bg-black/0 text-white opacity-0 transition duration-300 group-hover:bg-black/45 group-hover:opacity-100"
                          aria-label={`Open ${project.title} project`}
                        >
                          <span className="rounded-xl border border-white/35 bg-white/10 p-3 backdrop-blur-sm">
                            {isGithubLink ? (
                              <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
                                <path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.82-.26.82-.58 0-.28-.01-1.02-.02-2-3.34.72-4.04-1.61-4.04-1.61A3.2 3.2 0 0 0 3.62 18c-1.1-.75.08-.74.08-.74a2.55 2.55 0 0 1 1.86 1.25 2.6 2.6 0 0 0 3.55 1 2.6 2.6 0 0 1 .77-1.64c-2.66-.3-5.47-1.33-5.47-5.93a4.64 4.64 0 0 1 1.24-3.22 4.3 4.3 0 0 1 .12-3.17s1-.33 3.3 1.23a11.37 11.37 0 0 1 6 0c2.28-1.56 3.3-1.23 3.3-1.23a4.3 4.3 0 0 1 .12 3.17 4.64 4.64 0 0 1 1.24 3.22c0 4.61-2.81 5.62-5.49 5.91a2.91 2.91 0 0 1 .83 2.26c0 1.63-.01 2.94-.01 3.34 0 .32.21.7.83.58A12 12 0 0 0 12 .5Z" />
                              </svg>
                            ) : (
                              <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
                                <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3Zm5 16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6v2H5v12h12v-6h2v6Z" />
                              </svg>
                            )}
                          </span>
                        </a>
                      ) : null}
                    </div>
                  ) : project.imageSrc ? (
                    <div className="relative overflow-hidden rounded-xl border border-white/10">
                      <Image
                        src={project.imageSrc}
                        alt={project.imageAlt ?? `${project.title} screenshot`}
                        width={782}
                        height={573}
                        className="h-44 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                      />
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="absolute inset-0 grid place-items-center bg-black/0 text-white opacity-0 transition duration-300 group-hover:bg-black/45 group-hover:opacity-100"
                          aria-label={`Open ${project.title} project`}
                        >
                          <span className="rounded-xl border border-white/35 bg-white/10 p-3 backdrop-blur-sm">
                            {isGithubLink ? (
                              <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
                                <path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.82-.26.82-.58 0-.28-.01-1.02-.02-2-3.34.72-4.04-1.61-4.04-1.61A3.2 3.2 0 0 0 3.62 18c-1.1-.75.08-.74.08-.74a2.55 2.55 0 0 1 1.86 1.25 2.6 2.6 0 0 0 3.55 1 2.6 2.6 0 0 1 .77-1.64c-2.66-.3-5.47-1.33-5.47-5.93a4.64 4.64 0 0 1 1.24-3.22 4.3 4.3 0 0 1 .12-3.17s1-.33 3.3 1.23a11.37 11.37 0 0 1 6 0c2.28-1.56 3.3-1.23 3.3-1.23a4.3 4.3 0 0 1 .12 3.17 4.64 4.64 0 0 1 1.24 3.22c0 4.61-2.81 5.62-5.49 5.91a2.91 2.91 0 0 1 .83 2.26c0 1.63-.01 2.94-.01 3.34 0 .32.21.7.83.58A12 12 0 0 0 12 .5Z" />
                              </svg>
                            ) : (
                              <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
                                <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3Zm5 16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6v2H5v12h12v-6h2v6Z" />
                              </svg>
                            )}
                          </span>
                        </a>
                      ) : null}
                    </div>
                  ) : null}

                  <div className="mt-4 space-y-3">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-semibold leading-tight text-white">{project.title}</h3>
                      {project.placement ? (
                        <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide text-amber-100">
                          <span aria-hidden="true">🏆</span>
                          <span>{project.placement}</span>
                        </div>
                      ) : null}
                    </div>

                    {project.tags?.length ? (
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-violet-400/45 bg-violet-500/14 px-3 py-1 text-xs text-violet-100"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}

                    <div className="max-h-0 space-y-2 overflow-hidden text-sm text-slate-300 opacity-0 transition-all duration-300 group-hover:max-h-52 group-hover:opacity-100">
                      {project.text ? (
                        <p className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                          <span>{project.text}</span>
                        </p>
                      ) : null}
                      {project.stack ? (
                        <p className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                          <span>{project.stack}</span>
                        </p>
                      ) : null}
                    </div>

                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-9 w-14 items-center justify-center rounded-lg bg-gradient-to-b from-fuchsia-400 to-violet-600 text-white transition hover:brightness-110"
                        aria-label={`Open ${project.title} project`}
                      >
                        {isGithubLink ? (
                          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                            <path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.82-.26.82-.58 0-.28-.01-1.02-.02-2-3.34.72-4.04-1.61-4.04-1.61A3.2 3.2 0 0 0 3.62 18c-1.1-.75.08-.74.08-.74a2.55 2.55 0 0 1 1.86 1.25 2.6 2.6 0 0 0 3.55 1 2.6 2.6 0 0 1 .77-1.64c-2.66-.3-5.47-1.33-5.47-5.93a4.64 4.64 0 0 1 1.24-3.22 4.3 4.3 0 0 1 .12-3.17s1-.33 3.3 1.23a11.37 11.37 0 0 1 6 0c2.28-1.56 3.3-1.23 3.3-1.23a4.3 4.3 0 0 1 .12 3.17 4.64 4.64 0 0 1 1.24 3.22c0 4.61-2.81 5.62-5.49 5.91a2.91 2.91 0 0 1 .83 2.26c0 1.63-.01 2.94-.01 3.34 0 .32.21.7.83.58A12 12 0 0 0 12 .5Z" />
                          </svg>
                        ) : (
                          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                            <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3Zm5 16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6v2H5v12h12v-6h2v6Z" />
                          </svg>
                        )}
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            );
            })}
          </div>
        </section>

        <section id="contact" className="space-y-6 pb-12">
          <h2 className="text-3xl font-semibold md:text-4xl">Contact Me</h2>
          <div className="flex flex-wrap gap-3">
            <a className="contact-pill inline-flex items-center gap-2" href="mailto:c3reddy@uwaterloo.ca">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                <path d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.22-.25 6.42 4.8a.6.6 0 0 0 .72 0l6.42-4.8a1.25 1.25 0 0 0-.53-.1H5.75c-.19 0-.37.04-.53.1Zm14.28 1.24-5.93 4.43a2.1 2.1 0 0 1-2.54 0L5.1 7.74a1.3 1.3 0 0 0-.1.51v9a1.25 1.25 0 0 0 1.25 1.25h12.5A1.25 1.25 0 0 0 20 17.25v-9c0-.19-.04-.37-.1-.51Z" />
              </svg>
              c3reddy@uwaterloo.ca
            </a>
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
