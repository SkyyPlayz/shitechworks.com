export type ThemeDef = {
  className: string;
  name: string;
  slug: string;
  swatch: [string, string, string];
};

// Verbatim from design-source/brand/design-tokens.css (n1/n2/n3 per .theme-*).
// Token-swap only — never hand-pick new hexes here.
// `slug` matches the /public/screenshots/theme-showcase/<slug>.png filenames.
export const THEMES: ThemeDef[] = [
  { className: "theme-neon-classic", name: "Neon Classic", slug: "neon-classic", swatch: ["#00f0ff", "#9b5fff", "#ff4dff"] },
  { className: "theme-aurora", name: "Aurora", slug: "aurora", swatch: ["#34ffc8", "#00d4ff", "#a78bfa"] },
  { className: "theme-cyberpunk", name: "Cyberpunk", slug: "cyberpunk", swatch: ["#ff2d95", "#ffd319", "#00e5ff"] },
  { className: "theme-sunset-coast", name: "Sunset Coast", slug: "sunset-coast", swatch: ["#ff9a3d", "#ff4d88", "#b06bff"] },
  { className: "theme-ice-mono", name: "Ice Mono", slug: "ice-mono", swatch: ["#7ae7ff", "#00c8f0", "#3d9bff"] },
  { className: "theme-emberfall", name: "Emberfall", slug: "emberfall", swatch: ["#ff6b4d", "#ffd319", "#ff2d95"] },
  { className: "theme-verdant-reach", name: "Verdant Reach", slug: "verdant-reach", swatch: ["#a3ff57", "#2fe6c8", "#00d4ff"] },
  { className: "theme-royal-arcana", name: "Royal Arcana", slug: "royal-arcana", swatch: ["#c86bff", "#7a5cff", "#ff4dff"] },
  { className: "theme-noir-rose", name: "Noir Rose", slug: "noir-rose", swatch: ["#ff5f8f", "#8a9bff", "#ffd319"] },
  { className: "theme-winterlight", name: "Winterlight", slug: "winterlight", swatch: ["#eaf6ff", "#9fd4ff", "#6fa8ff"] },
];

export const DEFAULT_THEME = THEMES[0]!;
export const THEME_STORAGE_KEY = "mythos-site-theme";
