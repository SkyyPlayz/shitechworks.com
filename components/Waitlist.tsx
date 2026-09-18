import { Reveal } from "./Reveal";
import { WaitlistConsent } from "./WaitlistConsent";
import { PREVIEW_ROUTE, WAITLIST_CTA_LABEL, WAITLIST_MAILTO } from "@/lib/site";
import Link from "next/link";

const TRUST_CHIPS = [
  { label: "Desktop app" },
  { label: "Local-first" },
  { label: "Bring your own keys" },
  { label: "No account to write" },
];

export function Waitlist() {
  return (
    <section id="waitlist" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24">
      <Reveal>
        <div className="bg-cosmos relative overflow-hidden rounded-3xl border border-hairline px-8 py-16 text-center sm:px-16">
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-label">
            Coming soon
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl font-heading text-[clamp(1.8rem,3.5vw,2.6rem)] text-heading">
            Mythos Writer is not released yet
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[1.02rem] leading-[1.7] text-body">
            Join the waitlist and we&rsquo;ll write when early access opens. Until then, click
            through the interactive design preview &mdash; concept chrome, labeled as such.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={WAITLIST_MAILTO}
              aria-describedby="waitlist-consent-section"
              className="rounded-pill bg-brand px-7 py-3 text-sm font-semibold text-inverse shadow-glow-1 transition-transform duration-200 ease-enter hover:scale-[1.03]"
            >
              {WAITLIST_CTA_LABEL}
            </a>
            <Link
              href={PREVIEW_ROUTE}
              className="rounded-pill border border-hairline bg-glass px-7 py-3 text-sm font-medium text-heading backdrop-blur-panel transition-colors duration-200 ease-enter hover:border-n1/50"
            >
              Try interactive preview
            </Link>
          </div>
          <WaitlistConsent id="waitlist-consent-section" />

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2" aria-label="Product attributes">
            {TRUST_CHIPS.map((chip) => (
              <span
                key={chip.label}
                className="rounded-pill border border-hairline bg-glass/60 px-3 py-1 text-[0.72rem] font-medium uppercase tracking-[0.08em] text-muted backdrop-blur-panel"
              >
                {chip.label}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
