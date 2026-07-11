import { RevealGroup, RevealItem } from "./Reveal";

const STATS = [
  { value: "10", label: "editable neon themes" },
  { value: "4", label: "specialised AI agents" },
  { value: "5", label: "timeline views" },
  { value: "0", label: "forced subscriptions" },
];

// No fabricated testimonials: pre-launch product, so this section leads with
// verifiable product facts + the creed instead of invented quotes.
export function SocialProof() {
  return (
    <section className="border-y border-hairline bg-glass/40 py-20" aria-labelledby="proof-heading">
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
          <h2 id="proof-heading" className="font-heading text-xl text-heading sm:text-2xl">
            &ldquo;Your words should live in open, portable formats. Your vault is yours &mdash; no
            one mines your creative process. Your AI co-pilot amplifies your vision; it never
            replaces it.&rdquo;
          </h2>
          <p className="mt-4 text-sm uppercase tracking-[0.12em] text-label">
            The Mythos Writer creed
          </p>
        </RevealItem>
      </div>
    </section>
  );
}
