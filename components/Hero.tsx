"use client";

import Link from "next/link";
import { Reveal } from "./Reveal";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { ProductFrame } from "./ProductFrame";
import { MockupShot } from "./MockupShot";
import { MOCKUP_SRC_2X, PREVIEW_ROUTE, WAITLIST_MAILTO } from "@/lib/site";

export function Hero() {
  return (
    <section className="bg-cosmos relative overflow-hidden pb-20 pt-16 sm:pb-28 sm:pt-24">
      <div className="mx-auto max-w-[88rem] px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-label">
              Sky High Infinite Techwork presents
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-5 text-balance font-heading text-[clamp(2.6rem,6vw,4.4rem)] text-heading">
              Draft the story.{" "}
              <span className="bg-brand bg-clip-text text-transparent">Own the vault.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-2xl text-balance text-[1.02rem] leading-[1.7] text-body">
              Mythos Writer is a local-first Electron studio for fiction &mdash; Stories to
              Chapters to Scenes as Markdown you keep, a Notes Vault for the world, and AI
              collaborators that use your keys or run locally. Wrapped in Liquid Neon glass.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={PREVIEW_ROUTE}
                className="rounded-pill bg-brand px-7 py-3 text-sm font-semibold text-inverse shadow-glow-1 transition-transform duration-200 ease-enter hover:scale-[1.03]"
              >
                Try interactive preview
              </Link>
              <a
                href={WAITLIST_MAILTO}
                className="rounded-pill border border-hairline bg-glass px-7 py-3 text-sm font-medium text-heading backdrop-blur-panel transition-colors duration-200 ease-enter hover:border-n1/50"
              >
                Join waitlist
              </a>
            </div>
            <p className="mt-4 text-sm text-muted">Coming soon &mdash; not released yet.</p>
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

        {/* LCP candidate stays out of Reveal so it paints with the first HTML. */}
        <div className="mx-auto mt-14 max-w-[80rem]">
          <ProductFrame caption="Design mockup of the Story Writer — ultrawide Liquid Neon chrome. Interactive preview available.">
            <MockupShot crop="full" priority />
          </ProductFrame>
          <p className="mt-3 text-center text-sm text-muted">
            <a
              href={MOCKUP_SRC_2X}
              className="underline-offset-4 hover:text-heading hover:underline"
            >
              Full-resolution capture
            </a>
            <span className="text-dim"> · 5504×2304</span>
          </p>
        </div>
      </div>
    </section>
  );
}
