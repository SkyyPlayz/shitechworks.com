"use client";

import { THEMES } from "@/lib/themes";
import { useTheme } from "./ThemeProvider";

export function ThemeSwitcher({ compact = false }: { compact?: boolean }) {
  const { theme, setTheme } = useTheme();

  return (
    <div
      role="radiogroup"
      aria-label="Site theme"
      className={compact ? "flex items-center gap-1.5" : "flex flex-wrap items-center gap-3"}
    >
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
              "relative grid place-items-center rounded-full transition-transform duration-200 ease-enter",
              compact ? "h-8 w-8 md:h-6 md:w-6" : "h-9 w-9",
              active ? "scale-110" : "hover:scale-105",
            ].join(" ")}
            style={{
              background: `conic-gradient(from 180deg, ${t.swatch[0]}, ${t.swatch[1]}, ${t.swatch[2]}, ${t.swatch[0]})`,
              boxShadow: active ? `0 0 14px -2px ${t.swatch[0]}` : undefined,
              outline: active ? "2px solid var(--text-heading)" : "1px solid var(--hairline)",
              outlineOffset: 2,
            }}
          />
        );
      })}
    </div>
  );
}
