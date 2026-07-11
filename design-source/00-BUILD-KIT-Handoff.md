# Website Build Kit — Team Handoff (from Cass) · v2

#status/active · #handoff · *(Cass → Ivy)* · updated 2026-07-10 · back to [[Ivy/Ivy|Ivy]]

**Goal:** build an agency-grade **Mythos Writer** marketing site. This kit = the design system + setup;
**Design's official handoff** (in `design-handoff/`) = the source of truth for tokens, themes, copy,
and 41 reference captures. **v2 is live — the full 10-theme brand system is now baked in.**

## The stack (owner-decided)
**Next.js (App Router) + TS · Tailwind · Framer Motion · 21st.dev.** Migrate/rebuild from
`SkyyPlayz/shitechworks.com` (currently plain HTML/CSS). The **app stays plain CSS, untouched** — site
and app use different styling systems but **consume the same Liquid Neon tokens**, so the brand can't drift.

## What's in this kit
1. **`frontend-design — SKILL.md`** — the house design system (Neon-noir look, tokens, components, motion,
   "avoid generic-AI" rules, content/section priority, a11y). For Claude-backed agents.
2. **`design-tokens (Tailwind + globals).md`** — copy-paste wiring: import Design's `design-tokens.css`,
   the Tailwind mapping, `next/font` (Lora+Inter), a Framer reveal helper, the live theme-switcher.
3. **`design-handoff/`** — Design's official package: `design-tokens.css`, `themes.json`,
   `design-tokens.json`, `Design Handoff — README.md` (feature write-ups + section priority + captures).

## Non-negotiables from the handoff
- **It's the Sky High Infinite Techwork company page, built around Mythos Writer — our only current
  product.** Company identity stays in the chrome (logo, nav, footer, domain); the body is ~all Mythos
  Writer. (Owner decided w/ Ivy 2026-07-10 — this overrides the handoff's "no company branding" note.)
- **Copy Design's `design-tokens.css` + `themes.json` into the repo verbatim.** Don't retype or fork values.
- **Section priority:** 1) Customizability (10 editable themes — the headline; build a **live theme
  switcher**, it demos the #1 feature on the page itself) · 2) AI agents · 3) Timeline · 4) Auto-linking ·
  then local-first, Scene Crafter, TTS, multi-vault.
- **Desktop app, no shipped mobile** — the site's mobile/responsive treatment is *your* design decision.
- **Type:** Lora (serif) headings + Inter (UI/body). Never Inter-on-white.

## Two delivery channels (mixed fleet)
Claude Code **Skills only load for Claude-backed agents.** Your **GPT-5.5 engineers can't read
`.claude/skills/`.**
- **Claude agents:** `frontend-design — SKILL.md` → `.claude/skills/frontend-design/SKILL.md` in the repo.
- **GPT-5.5 engineers:** paste the same rules into repo `CLAUDE.md` / `AGENTS.md` / `DESIGN.md`.
Design's token files go in the repo as code either way.

## Team setup checklist
1. Scaffold Next.js + Tailwind + TS (migrate `shitechworks.com`, or fresh repo — carry the domain/content).
2. `npm i framer-motion`; `next/font` Lora + Inter; copy `design-tokens.css` → `app/tokens.css`, wire
   `globals.css` + `tailwind.config` from the companion file.
3. Add **21st.dev** (ideally the Magic MCP) for layout scaffolds — always re-skin to our tokens; never
   ship 21st.dev defaults.
4. Place the skill (Claude agents) + rules in repo docs (GPT agents).
5. Assign: a Claude agent leads design/review (taste = the skill); GPT engineers implement sections.
   Use the 41 captures in `design-handoff/screenshots/` as layout/reference (they're desktop 1440-class PNGs).

## Starter prompt (after setup)
> Build the Mythos Writer landing page. Stack: Next.js App Router, Tailwind, Framer Motion, 21st.dev.
> Follow the **frontend-design skill** — Liquid Neon tokens only, no hardcoded hex, Lora headings +
> Inter body, frosted glass over dark cosmic. Section order: hero (with a **live 10-theme switcher**),
> Customizability, AI agents (4 collaborators), Timeline, Auto-linking, local-first, footer. Framer
> Motion scroll reveals + hover glow, reduced-motion honored. Default theme = Neon Classic. Sky High
> Infinite Techwork company chrome (logo/nav/footer); body is all Mythos Writer. Build section by section,
> show me each; end with a Lighthouse audit (≥90).

## Framing (resolved — owner + Ivy, 2026-07-10)
It stays the **Sky High Infinite Techwork company page**, built entirely around **Mythos Writer** (the
only current product). Company identity lives in the chrome (logo, nav, footer, `shitechworks.com`
domain); the body — hero through footer — showcases Mythos Writer. This overrides the handoff README's
"no company branding" line (Design was given that as direction; owner has since decided otherwise).

## Notes
- Don't disturb the live PaperclipAI service; this is website work in a separate repo.
- Questions on tokens/stack/the two-channel split → **Cass**.
