"use client";

import Image from "next/image";
import { RevealGroup, RevealItem } from "./Reveal";
import { THEMES } from "@/lib/themes";
import { useTheme } from "./ThemeProvider";

export function ThemeShowcase() {
  const { theme, setTheme } = useTheme();

  return (
    <section
      id="customizability"
      className="mx-auto max-w-7xl px-6 py-24"
      aria-labelledby="themes-heading"
    >
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-label">
          10 themes, all editable
        </span>
        <h2 id="themes-heading" className="mt-4 font-heading text-[clamp(1.8rem,3.5vw,2.6rem)]">
          Pick a mood. The whole app follows.
        </h2>
        <p className="mt-4 text-[1.02rem] leading-[1.7] text-body">
          Every theme drives the same six roles &mdash; left panel, wiki-links, agents, warm data,
          cool data, window frame &mdash; so one palette change ripples through borders, glows,
          chips, graph nodes, and the frame.
        </p>
      </div>

      <p
        aria-live="polite"
        aria-atomic="true"
        className="mt-6 text-center text-sm text-label"
      >
        Active theme:{" "}
        <span className="font-medium text-heading">{theme.name}</span>
      </p>

      <RevealGroup className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {THEMES.map((t) => {
          const active = t.className === theme.className;
          return (
            <RevealItem key={t.className}>
              <button
                type="button"
                onClick={() => setTheme(t.className)}
                aria-pressed={active}
                className={[
                  "group w-full overflow-hidden rounded-2xl border bg-glass text-left backdrop-blur-panel transition-all duration-200 ease-enter",
                  active ? "border-n1/60" : "border-hairline hover:border-n1/30",
                ].join(" ")}
                style={active ? { boxShadow: `0 0 24px -8px ${t.swatch[0]}` } : undefined}
              >
                <Image
                  src={`/screenshots/theme-showcase/${t.slug}.png`}
                  alt={`Mythos Writer in the ${t.name} theme`}
                  width={924}
                  height={540}
                  loading="lazy"
                  className="h-auto w-full"
                />
                <div className="flex items-center justify-between gap-2 px-4 py-3">
                  <span className="text-sm font-medium text-heading">{t.name}</span>
                  <span
                    aria-hidden
                    className="h-3 w-3 rounded-full"
                    style={{
                      background: `conic-gradient(from 180deg, ${t.swatch[0]}, ${t.swatch[1]}, ${t.swatch[2]}, ${t.swatch[0]})`,
                    }}
                  />
                </div>
              </button>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </section>
  );
}
