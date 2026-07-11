"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { DEFAULT_THEME, THEME_STORAGE_KEY, THEMES, type ThemeDef } from "@/lib/themes";

type ThemeContextValue = {
  theme: ThemeDef;
  setTheme: (className: string) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeDef>(DEFAULT_THEME);

  useEffect(() => {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    const found = THEMES.find((t) => t.className === stored);
    if (found) setThemeState(found);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    // Preserve non-theme classes (Next.js font variable classes, etc.)
    const keep = Array.from(html.classList).filter((c) => !c.startsWith("theme-"));
    html.className = [theme.className, ...keep].join(" ");
  }, [theme]);

  const setTheme = useCallback((className: string) => {
    const found = THEMES.find((t) => t.className === className);
    if (!found) return;
    setThemeState(found);
    window.localStorage.setItem(THEME_STORAGE_KEY, className);
  }, []);

  const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
