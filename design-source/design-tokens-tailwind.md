# Design Tokens — Next.js + Tailwind wiring (v2, official)

Companion to `frontend-design — SKILL.md`. **Source of truth = `design-handoff/design-tokens.css` +
`themes.json`.** Copy those into the repo (e.g. `app/tokens.css`) and wire them as below. Do **not**
retype token values here — this file only bridges Design's CSS into Tailwind + Next.

## 1. `app/globals.css`
```css
@import "./tokens.css";              /* Design's design-tokens.css — the :root + .theme-* classes */
@tailwind base; @tailwind components; @tailwind utilities;

:root{ color-scheme: dark; }
html{ /* default theme; a switcher swaps this class */ }
html.theme-neon-classic, :root{ } /* apply .theme-neon-classic on <html> by default */

body{
  background: var(--desk);
  color: var(--text-body);
  font-family: var(--font-ui);
  line-height: 1.7;
}
h1,h2,h3{ font-family: var(--font-heading); color: var(--text-heading); line-height: 1.1;
  letter-spacing:-.01em; }
:focus-visible{ outline: 2px solid var(--n1); outline-offset: 3px; border-radius: var(--r-xs); }
@media (prefers-reduced-motion: reduce){ *,*::before,*::after{
  animation-duration:.001ms!important; transition-duration:.001ms!important; } }
```
> Theme switch = set `document.documentElement.className = "theme-<name>"` (persist to localStorage).
> All 10: `theme-neon-classic · theme-aurora · theme-cyberpunk · theme-sunset-coast · theme-ice-mono ·
> theme-emberfall · theme-verdant-reach · theme-royal-arcana · theme-noir-rose · theme-winterlight`.

## 2. `tailwind.config.ts` — expose Design's vars as utilities
```ts
import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        desk:"var(--desk)", app:"var(--app-bg)", glass:"var(--glass)",
        "glass-strong":"var(--glass-strong)", raised:"var(--raised)", hairline:"var(--hairline)",
        heading:"var(--text-heading)", body:"var(--text-body)", muted:"var(--text-muted)",
        label:"var(--text-label)", dim:"var(--text-dim)", inverse:"var(--text-inverse)",
        // theme accent slots (resolve per active .theme-*)
        n1:"var(--n1)", n2:"var(--n2)", n3:"var(--n3)", n4:"var(--n4)", n5:"var(--n5)", n6:"var(--n6)",
        success:"var(--success)", warning:"var(--warning)", error:"var(--error)", info:"var(--info)",
      },
      fontFamily:{ heading:["var(--font-heading)"], sans:["var(--font-ui)"], mono:["var(--font-mono)"] },
      borderRadius:{ xs:"var(--r-xs)", sm:"var(--r-sm)", md:"var(--r-md)", lg:"var(--r-lg)",
        xl:"var(--r-xl)","2xl":"var(--r-2xl)","3xl":"var(--r-3xl)", pill:"var(--r-pill)" },
      backgroundImage:{ brand:"var(--grad)" },
      boxShadow:{ popover:"var(--shadow-popover)", modal:"var(--shadow-modal)",
        "glow-1":"0 0 var(--gr) -6px var(--n1)", "glow-2":"0 0 var(--gr) -6px var(--n2)" },
      transitionTimingFunction:{ enter:"cubic-bezier(.16,1,.3,1)" },
      backdropBlur:{ panel:"var(--blur)" },
    },
  },
} satisfies Config;
```
Usage: `bg-glass border border-hairline rounded-2xl backdrop-blur-panel` · CTA
`bg-brand text-inverse rounded-pill shadow-glow-1` · accent word `bg-brand bg-clip-text text-transparent` ·
heading `font-heading text-heading`.

## 3. Fonts via `next/font` (`app/layout.tsx`)
```tsx
import { Inter, Lora } from "next/font/google";
const inter = Inter({ subsets:["latin"], variable:"--font-ui-next", display:"swap" });
const lora  = Lora({ subsets:["latin"], variable:"--font-heading-next", display:"swap", weight:["500","600","700"] });
// <html className={`theme-neon-classic ${inter.variable} ${lora.variable}`}>
```
Design's `--font-ui`/`--font-heading` already name Inter/Lora; keep them, or point them at the
`next/font` vars for zero-CLS self-hosting.

## 4. Scroll-reveal helper — `components/Reveal.tsx`
```tsx
"use client";
import { motion, useReducedMotion } from "framer-motion";
export function Reveal({ children, delay=0 }:{ children:React.ReactNode; delay?:number }){
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity:0, y:24 }}
      whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-80px" }}
      transition={{ duration:.6, ease:[.16,1,.3,1], delay }}
    >{children}</motion.div>
  );
}
```

## 5. Theme switcher (the #1 marketing feature — build it live)
Render 10 swatches from `themes.json` (each has name + slot hexes + `--grad`); clicking sets
`document.documentElement.className = "theme-<key>"`. The whole page re-themes via the CSS vars —
this literally demos the app's headline feature on the marketing page itself.
