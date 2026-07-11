---
name: frontend-design
description: Use when building or restyling ANY web UI that showcases Mythos Writer — the marketing site, product/store pages, feature sections. Encodes the "Liquid Neon" brand so output looks agency-grade and on-brand, never generic-AI. Drop at .claude/skills/frontend-design/SKILL.md in the website repo. v2 — locked to Design's official handoff tokens.
---

# Frontend Design — Liquid Neon (Mythos Writer)

The house style for Mythos Writer's web presence. **Source of truth = the Design handoff:**
`design-handoff/design-tokens.css`, `themes.json`, `design-tokens.json`, `Design Handoff — README.md`
(41 reference captures + lift-ready copy). **Copy those token files into the repo verbatim — never
re-type or fork the values.**

## 0. The look, in one line
**Neon-noir · cinematic · tactile/glassy · focused · alive.** Frosted glass panels over a dark cosmic
backdrop, theme-driven neon accents that glow, serif editorial headings. Reference feel: the depth of
**Obsidian + Aeon Timeline** with the luminous **glass-over-cosmos glow of a Tron/cyberpunk HUD.**
**NOT** flat corporate SaaS, pastel gradients, or Inter-on-white. If it looks like a generic startup
template, it's wrong.

## 1. Stack & token discipline
- **Next.js (App Router) + TS · Tailwind · Framer Motion · 21st.dev.** (Owner's call; the app stays
  plain CSS — both consume the **same tokens**, so the brand can't drift.)
- **Tokens are Design's `design-tokens.css` (global `:root`) + the 10 `.theme-*` classes.** Import it;
  map into Tailwind (see `design-tokens (Tailwind + globals).md`). **Never hardcode a hex** — always a
  token: `var(--text-heading)`, `var(--glass)`, `var(--n1)`, `var(--grad)`.

## 2. Tokens (summary — the CSS file is authoritative)
- **Neutrals:** cool near-black ramp `--slate-950 #04050b` (desk) → `--slate-50 #eef2fb` (heading).
- **Text:** `--text-heading #eef2fb · --text-body #c6d1e5 · --text-muted #8e9db8 · --text-label · --text-dim`.
- **Surfaces (frosted glass):** `--desk` / `--app-bg` backdrops; `--glass rgba(13,16,28,.72)`,
  `--glass-strong`, `--raised`, `--hairline`. Panels are glass with `backdrop-filter: blur(var(--blur))`.
- **Semantic:** success `#4ade80` · warning `#ffd319` · error `#ff4d88` · info `#00f0ff`.
- **Accent = theme-driven.** Each `.theme-*` sets six slots `--n1…--n6` (roles: left panel, wiki-links,
  agents, warm data, cool data, window frame) + derived `--b*` border, `--g*` glow, `--gs*` soft-fill,
  and a 6-stop `--grad`. **Default/hero theme = Neon Classic** (`--n1 #00f0ff`, `--n2 #9b5fff`, `--n3 #ff4dff`).
- **Radius:** `--r-sm 8 · --r-lg 11 · --r-2xl 14 · --r-3xl 18 · --r-pill`. **Border** `--bw 1px`.
  **Glow** `0 0 var(--gr,26px) -Npx <accent>`. **Elevation** `--shadow-popover`, `--shadow-modal`.

## 3. Typography — serif headings are part of the brand
- **Lora** (serif) → display/editorial headings. This is a *writing* app; serif = authorship. Use it
  for hero + section titles. **Inter** → all UI, body, nav, buttons. **Mono** → paths/code/keys.
- App UI scale is dense (desktop app: H1 21 · body 13/1.8). **The marketing site scales UP** for impact
  but keeps the families + the serif-heading identity. Site scale:
  hero `clamp(2.6rem,6vw,4.4rem)` Lora · h2 `clamp(1.8rem,3.5vw,2.6rem)` Lora · body `1.02rem/1.7` Inter ·
  overline `.68rem`, `.12em`, uppercase, Inter 600.
- Headings: tight leading (~1.1), slight negative tracking. Never set body in the serif.

## 4. Component patterns
- **Glass panel/card** — `background: var(--glass)`, `1px var(--hairline)`, `radius var(--r-2xl)`,
  `backdrop-blur`; hover lifts 2–4px, border adopts the active neon slot, adds `--g1` glow.
- **Buttons** — pill (`--r-pill`). *Primary* = `--grad` fill (or `--n1`) + neon glow, `--text-inverse`.
  *Ghost* = glass + hairline; hover → neon-tinted border + lift.
- **Liquid Neon frame** — the signature: a masked gradient ring (`--grad`) around hero/product frames
  with a slow animated glow. Use for the main product screenshot.
- **Neon accents** — chips, `[[wiki-link]]` pills, graph nodes, kickers use the slot colors + `--gs*`
  soft-fills. One focal gradient per view; everything else is a single slot.

## 5. Motion — Framer Motion, calm & ambient
- Ease everything with **`cubic-bezier(.16,1,.3,1)`** (`--ease-enter`). Durations mirror the app:
  micro/hover **.16–.26s**, neon-frame pulse **3.4–9s**, wallpaper drift **~70s**.
- **Scroll reveal**: fade + `y:24→0`, `once:true`. **Stagger** grids 60–90ms. **Hover**: lift + glow.
- Ambient only in the background (frame pulse, slow cosmic drift). It should never pull focus.
- **ALWAYS** honor `prefers-reduced-motion` → no transforms, instant opacity.

## 6. Avoid the generic-AI aesthetic
1. Frosted **glass over a dark cosmic backdrop** — never flat gray cards on white.
2. **Serif (Lora) headings + Inter body.** Inter-on-white everywhere is explicitly the anti-pattern.
3. Neon is a **theme-driven accent** (slots + one focal gradient), not large fills or gradient body text.
4. High contrast, atmospheric imagery — frosted glass over dark wallpapers, **never bright stock on white**.
5. Real hierarchy + generous rhythm; consistent radii (8–18) and pill buttons.
6. Every interactive element: hover **and** `:focus-visible` (neon outline).

## 7. Themes (all 10 — token swap only)
Apply a `.theme-*` class to switch; components never change. Themes:
**neon-classic** (default/hero) · aurora · cyberpunk · sunset-coast · ice-mono · emberfall ·
verdant-reach · royal-arcana · noir-rose · **winterlight** (the pale/light one).
The "10 editable themes" IS the #1 marketing story — show a live theme switcher on the site.

## 8. Icons & imagery
- **Icons:** custom **thin-line, 1.7–1.8px stroke, round caps**, colored by the active neon slot. (Lucide
  as a base is OK if tuned to that weight.) No filled/duotone icon sets.
- **Imagery:** frosted glass over dark, atmospheric cosmic wallpapers; high-contrast, luminous. Product
  shots sit in the Liquid Neon frame. Never bright/flat stock photography.

## 9. Content & positioning (from the handoff — read the README for lift-ready copy)
- **It's the Sky High Infinite Techwork company page, built entirely around Mythos Writer — the only
  current product.** Keep light company identity in the chrome (logo, nav, footer, domain); the body is
  ~all Mythos Writer. (Owner + Ivy, 2026-07-10 — supersedes the handoff's "no company branding" line.)
- **Section priority:** 1) **Customizability** — 10 fully-editable neon themes (the headline) ·
  2) **AI agents** — four collaborators, your model/keys · 3) **Timeline** — Aeon-class, self-maintaining ·
  4) **Auto-linking** — live `[[wiki-links]]` + vault graph. Supporting: local-first/offline, Scene
  Crafter, read-aloud/TTS, multi-vault.
- **It's a desktop app** (own title bar); captures are full-window desktop. **No shipped mobile layout** —
  the site's responsive/mobile treatment is *our* design decision, not a mirror of the app.

## 10. Accessibility & performance (ship criteria)
Contrast AA (Winterlight/light handling matters); `:focus-visible` everywhere; reduced-motion respected;
`next/font` for Lora+Inter; `next/image` + lazy-load for the 41 captures; **Lighthouse ≥ 90** before "done".

---
*v2 — locked to Design's official handoff (10 themes, real tokens, copy, 41 captures). Supersedes v1's
approximated tokens. Questions → Cass.*
