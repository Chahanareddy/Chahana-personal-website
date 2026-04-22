"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const hardwareImages = [
  { src: "/images/hardware-trash-bin-v2.png", alt: "Automatic lid opener prototype render" },
  { src: "/images/hardware-cad-1.png", alt: "CAD view of garbage bin body" },
  { src: "/images/hardware-cad-2.png", alt: "CAD view of lid component" },
  { src: "/images/hardware-cad-3.png", alt: "CAD assembly view" },
  { src: "/images/hardware-arduino.jpg", alt: "Arduino Uno hardware setup" },
  { src: "/images/hardware-wiring-diagram.png", alt: "Arduino and sensor wiring diagram" },
];

export default function HardwarePage() {
  const [activeImage, setActiveImage] = useState(0);
  const currentImage = hardwareImages[activeImage];

  const showPrev = () => {
    setActiveImage((prev) => (prev === 0 ? hardwareImages.length - 1 : prev - 1));
  };

  const showNext = () => {
    setActiveImage((prev) => (prev === hardwareImages.length - 1 ? 0 : prev + 1));
  };

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
          Projects at the intersection of mechanical + electrical + software engineering.
        </p>

        <article className="glass-panel max-w-4xl rounded-2xl border border-white/10 p-5">
          <div className="mb-5 w-full max-w-xl rounded-xl border border-violet-300/35 bg-black/20 p-3">
            <div className="relative h-72 overflow-hidden rounded-lg md:h-80">
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                width={1024}
                height={1024}
                className="h-full w-full object-contain"
                priority
              />
              <button
                onClick={showPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-violet-300/60 bg-black/45 px-3 py-2 text-lg font-semibold text-violet-100 transition hover:bg-violet-500/20"
                aria-label="Previous image"
              >
                ←
              </button>
              <button
                onClick={showNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-violet-300/60 bg-black/45 px-3 py-2 text-lg font-semibold text-violet-100 transition hover:bg-violet-500/20"
                aria-label="Next image"
              >
                →
              </button>
            </div>
          </div>
          <h2 className="text-xl font-semibold">Automatic Lid Opener</h2>
          <p className="mt-2 text-slate-300">
            A touchless garbage bin that uses an ultrasonic sensor and SG90 servo to
            automatically open/close the lid.
            <br />
            CAD-modeled bin and mechanical parts in SolidWorks and 3D printed in PLA.
          </p>

          <div className="mt-5 grid gap-5 md:grid-cols-1">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold tracking-[0.12em] text-violet-200 uppercase">
                System Breakdown
              </h3>
              <ul className="space-y-1 text-sm text-slate-300">
                <li>- Microcontroller: Arduino Uno</li>
                <li>- Input Device: Ultrasonic Distance Sensor</li>
                <li>- Output Device: SG90 Servo Motor</li>
                <li>- Electrical: Wiring, sensor, servo, microcontroller</li>
                <li>- Mechanical: 3D-printed garbage bin moving system</li>
                <li>- Software/Firmware: Arduino code</li>
                <li>- Design/Fabrication: CAD in SolidWorks + 3D printing in PLA</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
