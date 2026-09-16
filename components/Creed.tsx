import { RevealGroup, RevealItem } from "./Reveal";

const STATS = [
  { value: "10", label: "Liquid Neon themes" },
  { value: "3", label: "in-app AI agents" },
  { value: "2", label: "vaults — story & notes" },
  { value: "0", label: "accounts required to write" },
];

export function Creed() {
  return (
    <section
      id="creed"
      className="scroll-mt-24 border-y border-hairline bg-glass/40 py-20"
      aria-labelledby="creed-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <RevealGroup className="grid gap-4 sm:grid-cols-4">
          {STATS.map((stat) => (
            <RevealItem key={stat.label}>
              <div className="rounded-2xl border border-hairline bg-glass/60 px-6 py-8 text-center backdrop-blur-panel">
                <div className="font-heading text-4xl text-heading">{stat.value}</div>
                <div className="mt-2 text-sm text-muted">{stat.label}</div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <RevealItem className="mx-auto mt-16 max-w-2xl text-center">
          <h2 id="creed-heading" className="font-heading text-xl text-heading sm:text-2xl">
            &ldquo;Your words should live in open, portable formats. Your vault is yours &mdash; no
            one mines your creative process. Your AI co-pilot amplifies your vision; it never
            replaces it.&rdquo;
          </h2>
          <p className="mt-4 text-sm uppercase tracking-[0.12em] text-label">The Mythos Writer creed</p>
        </RevealItem>
      </div>
    </section>
  );
}
