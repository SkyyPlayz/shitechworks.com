import { Reveal } from "./Reveal";

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-6 py-24">
      <Reveal>
        <div className="bg-cosmos relative overflow-hidden rounded-3xl border border-hairline px-8 py-16 text-center sm:px-16">
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-label">
            Local-first &middot; no subscriptions
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl font-heading text-[clamp(1.8rem,3.5vw,2.6rem)] text-heading">
            Your files, your machine, your world
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[1.02rem] leading-[1.7] text-body">
            Mythos Writer runs on your desktop and keeps every note, draft, and vault on your own
            disk. Bring your own AI keys or run fully local &mdash; nothing is required to sync.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://github.com/SkyyPlayz/Mythos-Writer"
              className="rounded-pill bg-brand px-7 py-3 text-sm font-semibold text-inverse shadow-glow-1 transition-transform duration-200 ease-enter hover:scale-[1.03]"
            >
              Get Mythos Writer
            </a>
            <a
              href="#faq"
              className="rounded-pill border border-hairline bg-glass px-7 py-3 text-sm font-medium text-heading backdrop-blur-panel transition-colors duration-200 ease-enter hover:border-n1/50"
            >
              Read the FAQ
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
