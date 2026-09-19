"use client";

import { THEMES } from "@/lib/themes";
import { useTheme } from "./ThemeProvider";

function swatchGradient(swatch: [string, string, string]) {
  return `conic-gradient(from 180deg, ${swatch[0]}, ${swatch[1]}, ${swatch[2]}, ${swatch[0]})`;
}

export function ThemeSwitcher({ compact = false }: { compact?: boolean }) {
  const { theme, setTheme } = useTheme();

  if (compact) {
    // Single active swatch, tap to cycle (SKY-6358 spec v2 §2 Option A).
    // One 44×44px button replaces the 10-swatch row that overflowed mobile nav.
    const index = THEMES.findIndex((t) => t.className === theme.className);
    const next = THEMES[(index + 1) % THEMES.length]!;
    return (
      <button
        type="button"
        onClick={() => setTheme(next.className)}
        aria-label={`Theme: ${theme.name}. Activate to switch to ${next.name}.`}
        title={`${theme.name} — tap to cycle themes`}
        className="grid h-11 w-11 place-items-center rounded-full transition-transform duration-200 ease-enter hover:scale-105"
      >
        <span
          aria-hidden="true"
          className="h-6 w-6 rounded-full"
          style={{
            background: swatchGradient(theme.swatch),
            boxShadow: `0 0 14px -2px ${theme.swatch[0]}, 0 0 0 1px var(--hairline)`,
          }}
        />
      </button>
    );
  }

  return (
    <div role="radiogroup" aria-label="Site theme" className="flex flex-wrap items-center gap-3">
      {THEMES.map((t) => {
        const active = t.className === theme.className;
        return (
          <button
            key={t.className}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={t.name}
            title={t.name}
            onClick={() => setTheme(t.className)}
            className={[
              "relative grid h-11 w-11 place-items-center rounded-full transition-transform duration-200 ease-enter",
              active ? "scale-110" : "hover:scale-105",
            ].join(" ")}
            style={{
              background: swatchGradient(t.swatch),
              // Use box-shadow instead of outline so :focus-visible can apply its neon ring
              boxShadow: active
                ? `0 0 14px -2px ${t.swatch[0]}, 0 0 0 3px var(--desk), 0 0 0 5px var(--text-heading)`
                : `0 0 0 1px var(--hairline)`,
            }}
          />
        );
      })}
    </div>
  );
}
