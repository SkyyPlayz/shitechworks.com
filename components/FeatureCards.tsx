import Image from "next/image";
import { RevealGroup, RevealItem } from "./Reveal";

type Feature = {
  id: string;
  slot: "n1" | "n2" | "n5" | "n6";
  kicker: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

const FEATURES: Feature[] = [
  {
    id: "customizability",
    slot: "n1",
    kicker: "01 · The headline",
    title: "One app, infinite skins",
    description:
      "Ten hand-tuned neon themes, each fully editable: six colour slots, glass opacity, blur, border weight, glow radius, wallpaper, and an animated Liquid Neon frame. Same workspace, ten moods.",
    image: "/screenshots/theme-showcase/aurora.png",
    alt: "Mythos Writer in the Aurora theme",
  },
  {
    id: "agents",
    slot: "n2",
    kicker: "02 · AI",
    title: "Four agents that understand your book",
    description:
      "Writing Coach teaches craft without ghost-writing. Brainstorm Agent files ideas into notes. Archive Agent tracks continuity and auto-links your world. Beta Reader leaves margin reactions. Your model, your keys, on-device.",
    image: "/screenshots/features/settings-ai-agents.png",
    alt: "Mythos Writer AI agents settings panel",
  },
  {
    id: "timeline",
    slot: "n5",
    kicker: "03 · Timeline",
    title: "An Aeon-class timeline, built for you",
    description:
      "The Archive Agent builds a professional story timeline from your notes and scenes, then flags continuity problems. Progress, Spreadsheet, Relationships, and Subway views &mdash; always in sync with the draft.",
    image: "/screenshots/features/timeline-subway.png",
    alt: "Mythos Writer Subway timeline view",
  },
  {
    id: "auto-linking",
    slot: "n6",
    kicker: "04 · Auto-linking",
    title: "Your world, wired together automatically",
    description:
      "Type a character or place name and it becomes a live [[wiki-link]] &mdash; no AI needed. Every note connects into a glowing, force-directed Vault Graph, with hover previews and one-click continuity fixes.",
    image: "/screenshots/features/auto-note-linker.png",
    alt: "Mythos Writer Vault Graph auto-linking view",
  },
];

export function FeatureCards() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24" aria-labelledby="features-heading">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-label">
          Why writers switch
        </span>
        <h2 id="features-heading" className="mt-4 font-heading text-[clamp(1.8rem,3.5vw,2.6rem)]">
          Built for the way novels actually get written
        </h2>
      </div>

      <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2">
        {FEATURES.map((feature) => (
          <RevealItem key={feature.id}>
            <article
              id={feature.id}
              className="group h-full scroll-mt-24 rounded-2xl border border-hairline bg-glass p-6 backdrop-blur-panel transition-[transform,box-shadow] duration-200 ease-enter motion-safe:hover:-translate-y-1 hover:[box-shadow:0_0_var(--gr)_-8px_var(--slot-glow,transparent)]"
              style={{
                "--slot-glow": `var(--${feature.slot.replace("n", "g")})`,
                boxShadow: "0 0 0 0 transparent",
              } as React.CSSProperties}
            >
              <div className="overflow-hidden rounded-xl border border-hairline">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={924}
                  height={540}
                  loading="lazy"
                  className="h-auto w-full transition-transform duration-500 ease-enter group-hover:scale-[1.02]"
                />
              </div>
              <span
                className="mt-5 inline-block text-[0.68rem] font-semibold uppercase tracking-[0.12em]"
                style={{ color: `var(--${feature.slot})` }}
              >
                {feature.kicker}
              </span>
              <h3 className="mt-2 font-heading text-xl text-heading">{feature.title}</h3>
              <p className="mt-3 text-[0.98rem] leading-[1.7] text-body">{feature.description}</p>
            </article>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
