"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-cosmos relative overflow-hidden pb-24 pt-20 sm:pb-32 sm:pt-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-label">
              Sky High Infinite Techwork presents
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-5 text-balance font-heading text-[clamp(2.6rem,6vw,4.4rem)] text-heading">
              One app.{" "}
              <span className="bg-brand bg-clip-text text-transparent">Infinite skins.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-xl text-balance text-[1.02rem] leading-[1.7] text-body">
              Mythos Writer is a local-first novel-writing companion with ten fully-editable neon
              themes, four AI collaborators, a self-maintaining timeline, and a living wiki of your
              world &mdash; wrapped in an interface that&rsquo;s entirely yours.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#pricing"
                className="rounded-pill bg-brand px-7 py-3 text-sm font-semibold text-inverse shadow-glow-1 transition-transform duration-200 ease-enter hover:scale-[1.03]"
              >
                Get Mythos Writer
              </a>
              <a
                href="#customizability"
                className="rounded-pill border border-hairline bg-glass px-7 py-3 text-sm font-medium text-heading backdrop-blur-panel transition-colors duration-200 ease-enter hover:border-n1/50"
              >
                See all 10 themes
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-8 flex flex-col items-center gap-3">
              <span className="text-[0.68rem] uppercase tracking-[0.12em] text-label">
                Live theme preview &mdash; try one
              </span>
              <ThemeSwitcher />
            </div>
          </Reveal>
        </div>

        {/* Not wrapped in Reveal: this image is the LCP candidate, so it must paint
            immediately from server-rendered HTML rather than wait on JS hydration
            + IntersectionObserver. The glow pulse behind it is purely decorative. */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="relative mx-auto">
            <motion.div
              aria-hidden
              className="absolute -inset-3 rounded-[1.6rem] bg-brand opacity-70 blur-2xl"
              animate={reduce ? undefined : { opacity: [0.5, 0.85, 0.5] }}
              transition={reduce ? undefined : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative rounded-3xl border border-hairline bg-glass-strong p-2 shadow-modal backdrop-blur-panel">
              <div className="overflow-hidden rounded-[1.1rem] border border-hairline">
                <Image
                  src="/screenshots/pages/neon-classic/story-writer.png"
                  alt="Mythos Writer's Story Writer workspace, showing a manuscript with the Neon Classic theme"
                  width={924}
                  height={540}
                  priority
                  fetchPriority="high"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
