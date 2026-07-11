# shitechworks.com

Sky High Infinite Techwork's company site — a Next.js (App Router) marketing site for
[Mythos Writer](https://github.com/SkyyPlayz/Mythos-Writer), built on the in-repo Liquid Neon
design system.

## Stack

Next.js (App Router) + TypeScript · Tailwind CSS · Framer Motion · `next/font` (Lora + Inter).
Ships as a static export (`output: 'export'`) to GitHub Pages via `.github/workflows/deploy.yml`.

## Design system

Never hardcode a hex or invent a token — the design system is source-of-truth in this repo:

- `.claude/skills/frontend-design/SKILL.md` — the house style (Claude agents)
- `DESIGN.md` — the same rules for non-Claude agents
- `design-source/brand/` — `design-tokens.css` (copied verbatim into `app/tokens.css`) and
  `themes.json` (the 10 palettes)
- `design-source/DESIGN-HANDOFF-brief.md` — lift-ready copy and section priority
- `design-source/screenshots/` — 41 reference captures (copied into `public/screenshots/`)

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # static export -> out/
```
