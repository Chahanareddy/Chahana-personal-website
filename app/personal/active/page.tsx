import Link from "next/link";
import Image from "next/image";

const activeSections: {
  title: string;
  lines: string[];
  imageSrc?: string;
  imageAlt?: string;
}[] = [
  {
    title: "Gym",
    lines: ["STAIRMASTER"],
  },
  {
    title: "Early morning runs",
    lines: ["5am runs"],
  },
  {
    title: "Swimming",
    lines: ["Retired competitive swimmer"],
    imageSrc: "/images/active-swimming.png",
    imageAlt: "Indoor swimming pool lanes",
  },
  {
    title: "Hiking",
    lines: ["TELL ME YOUR FAV HIKING PATH"],
  },
  {
    title: "Exploring - walks and road trips",
    lines: ["I took that pic on a late night walk in Waterloo (shocking)"],
    imageSrc: "/images/active-exploring.png",
    imageAlt: "Waterfront view during a road trip",
  },
];

export default function ActivePage() {
  return (
    <div className="personal-shell min-h-screen bg-black px-6 py-20 text-slate-100 md:px-12">
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-3xl font-semibold md:text-5xl">Active</h1>
          <Link
            href="/personal"
            className="contact-pill border-violet-300/60 bg-violet-500/18 text-violet-100"
          >
            back
          </Link>
        </div>

        <div className="max-w-3xl space-y-2">
          <p className="text-slate-300">
            I love exploring new places to stay active, especially in the summer.
          </p>
          <p className="text-slate-400">Here&apos;s how I stay active:</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {activeSections.map((section) => (
            <article key={section.title} className="glass-panel rounded-2xl border border-white/10 p-4">
              <div className="mb-4 h-40 overflow-hidden rounded-xl border border-dashed border-violet-300/45 bg-violet-500/8">
                {section.imageSrc ? (
                  <Image
                    src={section.imageSrc}
                    alt={section.imageAlt ?? `${section.title} photo`}
                    width={1024}
                    height={640}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-xs tracking-wide text-violet-200 uppercase">
                    Photo Placeholder
                  </div>
                )}
              </div>
              <h2 className="text-lg font-semibold">{section.title}</h2>
              <ul className="mt-3 space-y-1 text-sm text-slate-300">
                {section.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
