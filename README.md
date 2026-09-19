# shitechworks.com

Sky High Infinite Techwork's company site — a Next.js (App Router) marketing site for
Mythos Writer, built on the in-repo Liquid Neon design system.

The app is **not released**. This site is a showcase: features, themes, waitlist, and an
interactive design preview. There are no download, App Store, or product-repo links.

## Stack

Next.js (App Router) + TypeScript · Tailwind CSS · Framer Motion · `next/font` (Lora + Inter).
Ships as a static export (`output: 'export'`) to GitHub Pages via `.github/workflows/deploy.yml`.

## Design system

Never hardcode a hex or invent a token — the design system is source-of-truth in this repo:

- `.claude/skills/frontend-design/SKILL.md` — the house style (Claude agents)
- `DESIGN.md` — the same rules for non-Claude agents
- `design-source/brand/` — `design-tokens.css` (copied verbatim into `app/tokens.css`) and
  `themes.json` (the 10 palettes)
- `design-source/DESIGN-HANDOFF-brief.md` — historical handoff copy (marketing pages follow
  current product facts, not unreleased punch-list items)
- `public/screenshots/` — theme-showcase captures plus the Liquid Neon mockup shots
- `public/preview/` — v2.3 unified-partner design mock (`mockup.html`, `support.js`, `assets/`). Concept chrome only; not the shipping Electron build.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # static export -> out/
```
