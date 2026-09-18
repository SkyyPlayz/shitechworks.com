"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { ProductFrame } from "./ProductFrame";
import { useTheme } from "./ThemeProvider";
import { MOCKUP_SRC_2X, PREVIEW_ROUTE, STORE_ROUTE } from "@/lib/site";
import { THEME_SHOWCASE_SIZE, themeShowcaseSrc } from "@/lib/themes";

export function Hero() {
  const { theme } = useTheme();

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
              <Link
                href={STORE_ROUTE}
                className="rounded-pill border border-hairline bg-glass px-7 py-3 text-sm font-medium text-heading backdrop-blur-panel transition-colors duration-200 ease-enter hover:border-n1/50"
              >
                See the store
              </Link>
            </div>
            <p className="mt-4 text-sm text-muted">Coming soon &mdash; not released yet.</p>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-8 flex flex-col items-center gap-3">
              <span className="text-[0.68rem] uppercase tracking-[0.12em] text-label">
                Live theme preview &mdash; try one
              </span>
              <ThemeSwitcher />
              <p aria-live="polite" aria-atomic="true" className="text-sm text-muted">
                Showing <span className="font-medium text-heading">{theme.name}</span>
              </p>
            </div>
          </Reveal>
        </div>

        {/* Not wrapped in Reveal: this image is the LCP candidate. Theme swaps
            reuse a fixed 924×540 box so the frame does not jump. */}
        <div className="mx-auto mt-14 max-w-[80rem]">
          <ProductFrame caption={`Story Writer in ${theme.name} — live theme preview.`}>
            <div className="relative aspect-[924/540] w-full bg-desk">
              <Image
                src={themeShowcaseSrc(theme.slug)}
                alt={`Mythos Writer Story Writer workspace in the ${theme.name} theme`}
                width={THEME_SHOWCASE_SIZE.width}
                height={THEME_SHOWCASE_SIZE.height}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </ProductFrame>
          <p className="mt-3 text-center text-sm text-muted">
            <a
              href={MOCKUP_SRC_2X}
              className="underline-offset-4 hover:text-heading hover:underline"
            >
              Full-resolution design mockup
            </a>
            <span className="text-dim"> · ultrawide Liquid Neon capture</span>
          </p>
        </div>
      </div>
    </section>
  );
}
