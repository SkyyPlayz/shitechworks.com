# Mythos Writer — Web Handoff

> **Purpose:** everything a web-design team needs to build a marketing website that showcases **Mythos Writer**. Captioned screenshots of every screen and window, detailed feature write-ups, and a machine-readable brand system. Built from the approved product prototype.
>
> **Open `index.html`** for the visual gallery. This `README.md` is the same content in Markdown for agents / docs pipelines.

## The one-paragraph pitch

Mythos Writer is a **local-first writing app** where an author drafts a novel, keeps a wiki-style vault of their world, and works alongside **four specialised AI agents** — all wrapped in a **fully re-themeable neon interface**. It's a desktop-class application (its own window chrome).

## Lead with these — in priority order

1. **Customizability** (the headline) — 10 built-in themes, every one fully editable.
2. **AI agents** — four purpose-built collaborators, your model & keys.
3. **Timeline** — an Aeon-class, self-maintaining story timeline.
4. **Auto-linking** — automatic `[[wiki-links]]` + a living vault graph.

Supporting cast: local-first/offline, Scene Crafter canvas, read-aloud/TTS, multi-vault universes.

---

## ⚠️ Two things before you design

- **It's a desktop app.** Mythos Writer ships as a desktop application with its own title bar (min / maximise / close). The captures are true full-window views. **There is no shipped mobile layout** — the marketing site's responsive/mobile treatment is a design decision for your team, not a mirror of the app. Ask for purpose-built mobile mocks if you want them.
- **Capture resolution.** Screenshots are clean, lossless PNGs at the app's native window size (≈1440-class desktop), intended for **reference & layout**. For pixel-perfect hero art we can re-shoot any screen at 2× / arbitrary crop — just name it.

---

## Feature write-ups (copy you can lift)

### 1. Customizability — "One app, infinite skins" · #1 selling point
- **What:** 10 hand-tuned neon themes, each fully editable — six colour slots, glass opacity, blur, border weight, glow radius, wallpaper, and an animated "Liquid Neon" frame. Same workspace, ten moods.
- **How:** Six slots map to real UI roles (left panel, wiki-links, agents, warm data, cool data, window frame), so one palette change ripples through borders, glows, chips, graph nodes and the frame. Full colour wheel per slot, custom wallpaper upload, or "No background" for a transparent window. A Neon-animation mode (Off / Cycle / Sparkle) drives the frame ring and every border.
- **Why it sells:** Writers live in the app for hours — making it feel like *theirs* is emotional ownership no competitor offers.
- **Screens:** `screenshots/theme-showcase/*.png` (all 10), `screenshots/pages/*/settings-appearance.png`.

### 2. AI agents — "Four agents that actually understand your book" · AI
- **What:** Not a bolt-on chatbot — four collaborators that read your manuscript *and* your world vault: **Writing Coach** (teaches craft, never ghost-writes), **Brainstorm Agent** (files ideas into structured notes), **Archive Agent** (continuity + auto-linking), **Beta Reader** (reader-eye reactions as margin comments).
- **How:** Each agent is renameable with editable instructions/persona/learning files and its own model. One provider for all — **Claude API or a fully local model** — keys stored on-device, never synced. Autonomy is opt-in per agent.
- **Why it sells:** Authors fear AI that writes *for* them; Mythos makes *them* better and keeps their world consistent, with total model/privacy control.
- **Screens:** `screenshots/features/settings-ai-agents.png`, `writing-coach.png`, `beta-reader.png`, `brainstorm-board.png`, `archive-continuity.png`, `screenshots/pages/*/brainstorm.png`.

### 3. Timeline — "An Aeon-class timeline, built into your draft" · Timeline
- **What:** A professional story timeline the Archive Agent **builds for you** from notes + written scenes, then flags problems (e.g. a scene that jumps backward in time). Eras, arcs, chapters, key events, characters, world events, themes.
- **How (five views):** **Progress** (written = colour, planned = greyscale, "you are here"), **Spreadsheet** (events as data rows, narrative vs chronological), **Relationships** (who's present at each beat), **Subway** (each character a coloured line through event stations), plus Structure. Per-story, always in sync; filter by view/group/show, jump to Today.
- **Why it sells:** Series writers pay for standalone timeline tools; Mythos gives them one that maintains itself and lives inside the draft.
- **Screens:** `screenshots/pages/*/timeline.png`, `screenshots/features/timeline-spreadsheet.png`, `timeline-relationships.png`, `timeline-subway.png`.

### 4. Auto-linking — "Your world, wired together automatically" · Auto-linking
- **What:** Type a character/place name and it becomes a live `[[wiki-link]]` — deterministically, no AI needed. Obsidian-parity links connect notes to each other *and* into story scenes, rendered as a glowing star-map in the Vault Graph.
- **How:** Built-in no-AI linker with fine controls (aliases, proximity, ignore-case, excluded folders); hover previews; unresolved dashed links that offer to create the note; backlinks; force-directed graph coloured by category. The Archive Agent layers continuity checks with one-click fixes.
- **Why it sells:** Turns a pile of disconnected notes into a living, self-maintaining wiki.
- **Screens:** `screenshots/pages/*/vault-graph.png`, `screenshots/features/auto-note-linker.png`, `archive-continuity.png`, `screenshots/pages/*/notes-editor.png`.

### 5. Local-first & offline — "Your world lives on your disk"
- **What/How:** Files are plain folders on the user's machine (movable to any local path); works fully offline; AI can run on a local model. Sync & backup opt-in. Import from Obsidian / Notion / Scrivener / Markdown; import a manuscript from docx / gdocs / md / scriv / epub (headings map to structure).
- **Why it sells:** Privacy, longevity, ownership — the exact anxieties around cloud writing tools.
- **Screens:** `screenshots/features/auto-note-linker.png` (Vault & Files), `screenshots/windows/account-menu.png` ("local-first").

### 6. Scene Crafter — "Draft scenes on a visual canvas"
- **What/How:** Set a scene's shape (POV, goal, conflict, beats, tone); the coach drafts a first-pass scaffold from *your* beats and annotates its choices. Promote to an Obsidian-style canvas board of draggable, connectable cards with zoom & pan.
- **Why it sells:** Turns blank-page paralysis into tactile assembly of pieces the writer already owns.
- **Screens:** `screenshots/pages/*/scene-crafter.png`, `screenshots/features/story-structure.png`.

### 7. Read-aloud / TTS — "Hear your prose, catch what your eyes miss"
- **What/How:** Speechify-style moving highlight; read from cursor / start / selection; ±10s & ±scene skips; 50–200% speed; voices across system, Edge naturals and offline open models (Piper / Kokoro). Book preview gets an audiobook bar.
- **Why it sells:** Reading aloud is how writers catch clunky prose — now built in and offline-capable.
- **Screens:** `screenshots/features/tts-reader.png`, `book-preview.png`.

### 8. Multi-vault universes — "Many stories, many worlds, one home"
- **What/How:** Separate universes as separate vaults (each with its own theme); switch stories in a click; the Brainstorm Agent reads across all. Stories popover creates a Story Plan note (name, genre, tone, POV). Imported vaults appear as a second library.
- **Why it sells:** Prolific authors run multiple series — Mythos is built for a career, not a single book.
- **Screens:** `screenshots/windows/story-switcher.png`, `screenshots/pages/*/notes-editor.png`.

---

## Screens (the 7 workspaces)

Each shown in **Neon Classic** (signature dark) and **Winterlight** (calm pale) under `screenshots/pages/neon-classic/` and `screenshots/pages/winterlight/`:

| File | Screen | What it is |
|---|---|---|
| `story-writer.png` | Story Writer | Heading-zoom manuscript (Full Book → Part → Chapter → Scene), Word-like toolbar, draggable paragraphs, inline comments, drafts, read-aloud. |
| `notes-editor.png` | Notes Editor | Wiki-style vault: folder tree, rich-text notes, tags, properties, backlinks, AI agent panel with continuity flags. |
| `scene-crafter.png` | Scene Crafter | Scene setup → AI first-pass scaffold → canvas board of connectable cards. |
| `brainstorm.png` | Brainstorm | Converse with the Brainstorm Agent; it files ideas into notes and builds a concept board. |
| `timeline.png` | Timeline | Aeon-class, per-story timeline; auto-built; five views; continuity flags. |
| `vault-graph.png` | Vault Graph | Force-directed star-map of notes & scenes, coloured by category, with a node inspector. |
| `settings-appearance.png` | Settings | Everything tunable — Appearance, AI Agents, Editor, Vault & Files, Sync, Shortcuts. |

## Windows & overlays (`screenshots/windows/`)

`notifications.png` (agent-event centre) · `template-picker.png` (new-note templates) · `drafts-history.png` (version compare/restore) · `account-menu.png` (local-first plan) · `story-switcher.png` (multi-story). Also in-app but not captured here: Ctrl-K command palette, Export dialog (PDF/DOCX/EPUB), 4-step Welcome wizard, right-click context menus — request captures anytime.

---

## Brand system

Machine-readable tokens live in `brand/` — **use these as the source of truth**:

- `brand/design-tokens.json` — neutrals, semantic colours, text, surfaces, typography (families + scale), spacing, radius, borders, glow, blur, elevation, motion, iconography, imagery, plus vibe words & reference feel.
- `brand/design-tokens.css` — the same as CSS custom properties, with a `.theme-*` class per palette.
- `brand/themes.json` — all 10 palettes; six slots each with role, hex, and derived border/glow/soft-fill (derivation formulas included).
- `brand/logo.png` — app mark (book + quill).

**Quick reference:**
- **Vibe:** Neon-noir · Cinematic · Tactile/glassy · Focused · Alive (subtle motion).
- **Reference feel:** the depth of Obsidian + Aeon Timeline, with the luminous glass-over-cosmos glow of a Tron/cyberpunk HUD. *Not* flat corporate SaaS, pastel gradients, or Inter-on-white.
- **Neutrals:** cool near-black ramp `#04050b` (desk) → `#eef2fb` (brightest heading).
- **Semantic:** success `#4ade80` · warning `#ffd319` · error `#ff4d88` · info `#00f0ff`.
- **Accent:** theme-driven. Default/hero = **Neon Classic** `#00f0ff` / `#9b5fff` / `#ff4dff`.
- **Type:** **Lora** (serif — story/editorial headings) + **Inter** (sans — all UI) + mono for paths. Scale: Display 30 · H1 21 · H2 19 · body 13/1.8 · UI 12 · label 11 · overline 10 (0.12em upper).
- **Space:** 2px base; common 8–24px. **Radius:** 8 / 11 / 14 / 18 / pill. **Border:** 1px (user 1–4). **Glow:** `0 0 26px -Npx <accent>` (user 8–160).
- **Motion:** calm & ambient; menus .12–.18s, hover .16–.26s, neon frame 3.4–9s, wallpaper drift 70s; ease `cubic-bezier(.16,1,.3,1)`; honours `prefers-reduced-motion`.
- **Icons:** custom thin-line, 1.7–1.8px stroke, round caps, colour = active neon slot. **Imagery:** frosted glass over dark cosmic wallpapers; dark, atmospheric, high-contrast — never bright stock on white.
- **Branding:** per direction, **no company (S.H.I.T.) branding** anywhere — purely about the app.

---

## Package contents

```
handoff-web/
├─ index.html                     ← the visual gallery (open this)
├─ README.md                      ← this file
├─ brand/
│  ├─ design-tokens.json          ← global tokens
│  ├─ design-tokens.css           ← tokens as CSS vars + .theme-* classes
│  ├─ themes.json                 ← all 10 palettes (slots + derived)
│  └─ logo.png                    ← app icon
└─ screenshots/
   ├─ theme-showcase/             ← anchor screen × 10 themes (customizability)
   ├─ pages/neon-classic/         ← 7 workspaces (dark theme)
   ├─ pages/winterlight/          ← 7 workspaces (pale theme)
   ├─ features/                   ← 12 feature close-ups / sub-views
   └─ windows/                    ← 5 overlay / popover captures
```

**41 reference captures total.** Need a screen re-shot at 2×, a mobile mock, or the Export/Command-palette/Welcome overlays captured? Just ask.
