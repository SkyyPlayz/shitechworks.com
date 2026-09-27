import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ComingSoonBadge } from "./ComingSoonBadge";
import { StoreLegalLinks } from "./StoreLegalLinks";
import { WAITLIST_CTA_LABEL, WAITLIST_MAILTO, STORE_ROUTE } from "@/lib/site";
import { COMMERCE_ENABLED } from "@/lib/site-config";

type StoreSubpageProps = {
  title: string;
  lead: string[];
  detail?: string;
};

export function StoreSubpage({ title, lead, detail }: StoreSubpageProps) {
  return (
    <>
      <Nav />
      <main id="main">
        <section className="bg-cosmos relative overflow-hidden pb-20 pt-16 sm:pb-28 sm:pt-24">
          <div className="mx-auto max-w-[40rem] px-6 text-center">
            <Reveal>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-label">
                Mythos Writer store
              </p>
            </Reveal>
            {!COMMERCE_ENABLED && (
              <Reveal delay={0.06}>
                <div className="mt-5">
                  <ComingSoonBadge />
                </div>
              </Reveal>
            )}
            <Reveal delay={0.1}>
              <h1 className="mt-6 text-balance font-heading text-[clamp(2rem,5vw,3.2rem)] text-heading">
                {title}
              </h1>
            </Reveal>
            {lead.map((line, index) => (
              <Reveal key={line} delay={0.14 + index * 0.06}>
                <p className="mx-auto mt-4 text-pretty text-[1.08rem] leading-[1.75] text-body">
                  {line}
                </p>
              </Reveal>
            ))}
            {detail && (
              <Reveal delay={0.28}>
                <p className="mx-auto mt-4 text-pretty text-sm leading-[1.75] text-muted">{detail}</p>
              </Reveal>
            )}
            <Reveal delay={0.34}>
              <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
                <a
                  href={WAITLIST_MAILTO}
                  className="rounded-pill bg-brand px-7 py-3 text-center text-sm font-semibold text-inverse shadow-glow-1 transition-transform duration-200 ease-enter hover:scale-[1.03]"
                >
                  {WAITLIST_CTA_LABEL}
                </a>
                <Link
                  href={STORE_ROUTE}
                  className="rounded-pill border border-hairline bg-glass px-7 py-3 text-center text-sm font-medium text-heading backdrop-blur-panel transition-colors duration-200 ease-enter hover:border-n1/50"
                >
                  Back to store
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-10">
                <StoreLegalLinks />
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
