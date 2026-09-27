"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { ProductFrame } from "./ProductFrame";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useTheme } from "./ThemeProvider";
import { ComingSoonBadge } from "./store/ComingSoonBadge";
import { StoreLegalLinks } from "./store/StoreLegalLinks";
import {
  AI_PLANS,
  APP_LICENSE,
  BUY_CREDITS,
  CADENCE_LABELS,
  TAX_EXCLUSIVE_NOTE,
} from "@/lib/commerce-display";
import { COMMERCE_ENABLED } from "@/lib/site-config";
import {
  PLANNED_STOREFRONTS,
  PREVIEW_ROUTE,
  WAITLIST_CTA_LABEL,
  WAITLIST_MAILTO,
} from "@/lib/site";
import { THEME_SHOWCASE_SIZE, themeShowcaseSrc } from "@/lib/themes";

const INCLUDED = [
  {
    title: "Story Vault",
    body: "Stories, chapters, and scenes as Markdown you keep on disk.",
  },
  {
    title: "Notes Vault",
    body: "World and research beside the book — not in a cloud silo.",
  },
  {
    title: "Liquid Neon",
    body: "Ten themes. Frosted glass. A desk that follows the palette you pick.",
  },
  {
    title: "Your keys. Or none.",
    body: "Bring your own API key, run a local model, buy Mythos AI credits later, or turn All AI off and write by hand. Core writing never needs AI or an account.",
  },
];

function CtaRow() {
  return (
    <div className="flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
      <a
        href={WAITLIST_MAILTO}
        className="rounded-pill bg-brand px-7 py-3 text-center text-sm font-semibold text-inverse shadow-glow-1 transition-transform duration-200 ease-enter hover:scale-[1.03]"
      >
        {WAITLIST_CTA_LABEL}
      </a>
      <Link
        href={PREVIEW_ROUTE}
        className="rounded-pill border border-hairline bg-glass px-7 py-3 text-center text-sm font-medium text-heading backdrop-blur-panel transition-colors duration-200 ease-enter hover:border-n1/50"
      >
        Try interactive preview
      </Link>
    </div>
  );
}

function PrepShellActions() {
  if (COMMERCE_ENABLED) {
    return (
      <p className="mt-6 text-sm text-muted">
        Checkout wiring is in progress. Email us if you need help before launch.
      </p>
    );
  }

  return (
    <div className="mt-6">
      <ComingSoonBadge />
      <p className="mt-4 text-sm leading-[1.75] text-muted">No buy button. No checkout link.</p>
    </div>
  );
}

export function StorePage() {
  const { theme } = useTheme();
  const heroTitle = COMMERCE_ENABLED ? "Store prep" : "Not for sale yet";
  const heroLead = COMMERCE_ENABLED
    ? "Shells are wired. Checkout stays gated until launch."
    : "Mythos Writer is still in the studio.";

  return (
    <>
      <section className="bg-cosmos relative overflow-hidden pb-20 pt-16 sm:pb-28 sm:pt-24">
        <div className="mx-auto max-w-[88rem] px-6">
          <div className="mx-auto max-w-[40rem] text-center">
            <Reveal>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-label">
                Mythos Writer store
              </p>
            </Reveal>
            {!COMMERCE_ENABLED && (
              <Reveal delay={0.08}>
                <div className="mt-5">
                  <ComingSoonBadge />
                </div>
              </Reveal>
            )}
            <Reveal delay={0.14}>
              <h1 className="mt-6 text-balance font-heading text-[clamp(2.6rem,6vw,4.4rem)] text-heading">
                {heroTitle}
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mx-auto mt-6 text-pretty text-[1.08rem] leading-[1.75] text-body">
                {heroLead}
              </p>
              {!COMMERCE_ENABLED && (
                <>
                  <p className="mx-auto mt-3 text-pretty text-[1.08rem] leading-[1.75] text-body">
                    There is no checkout, no live buy button, and no download on this page.
                  </p>
                  <p className="mx-auto mt-3 text-pretty text-[1.08rem] leading-[1.75] text-body">
                    Ask us to write when a storefront opens.
                  </p>
                </>
              )}
            </Reveal>
            <Reveal delay={0.28}>
              <div className="mt-10">
                <CtaRow />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="mx-auto mt-16 max-w-[80rem]">
            <div className="mb-6 flex flex-col items-center gap-3">
              <ThemeSwitcher />
              <p aria-live="polite" aria-atomic="true" className="text-sm text-muted">
                Showing <span className="font-medium text-heading">{theme.name}</span>
              </p>
            </div>
            <ProductFrame caption={`Story Writer in ${theme.name} — design capture, not a store listing.`}>
              <div className="relative w-full bg-desk">
                <Image
                  src={themeShowcaseSrc(theme.slug)}
                  alt={`Mythos Writer Story Writer workspace in the ${theme.name} theme`}
                  width={THEME_SHOWCASE_SIZE.width}
                  height={THEME_SHOWCASE_SIZE.height}
                  priority
                  className="h-auto w-full"
                />
              </div>
            </ProductFrame>
          </Reveal>
        </div>
      </section>

      <section
        id="app"
        className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24"
        aria-labelledby="app-heading"
      >
        <Reveal>
          <div className="mx-auto max-w-[40rem] text-center">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-label">App</p>
            <h2
              id="app-heading"
              className="mt-4 font-heading text-[clamp(1.8rem,3.5vw,2.6rem)] text-heading"
            >
              {APP_LICENSE.name}
            </h2>
            <p className="mt-5 text-pretty text-[1.08rem] leading-[1.75] text-body">
              {APP_LICENSE.tagline}
            </p>
            <p className="mt-3 text-pretty text-[1.08rem] leading-[1.75] text-body">
              Website list price:{" "}
              <span className="font-medium text-heading">{APP_LICENSE.listPrice}</span>{" "}
              <span className="text-muted">(one-time)</span>
            </p>
            <p className="mt-3 text-pretty text-sm leading-[1.75] text-muted">{TAX_EXCLUSIVE_NOTE}</p>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="mx-auto mt-12 max-w-xl">
          <article className="rounded-2xl border border-hairline bg-glass px-8 py-10 text-center backdrop-blur-panel">
            <p className="font-heading text-[2rem] text-heading">{APP_LICENSE.listPrice}</p>
            <p className="mt-2 text-sm text-muted">Desktop app license · this website</p>
            <PrepShellActions />
          </article>
        </Reveal>
      </section>

      <section
        id="plans"
        className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24"
        aria-labelledby="plans-heading"
      >
        <Reveal>
          <div className="mx-auto max-w-[40rem] text-center">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-label">Plans</p>
            <h2
              id="plans-heading"
              className="mt-4 font-heading text-[clamp(1.8rem,3.5vw,2.6rem)] text-heading"
            >
              AI subscription packs
            </h2>
            <p className="mt-5 text-pretty text-[1.08rem] leading-[1.75] text-body">
              Spark, Writer, and Studio — monthly, quarterly, or yearly.
            </p>
            <p className="mt-3 text-pretty text-[1.08rem] leading-[1.75] text-body">
              Quarterly saves 6%. Yearly saves 16%.
            </p>
            <p className="mt-3 text-pretty text-sm leading-[1.75] text-muted">{TAX_EXCLUSIVE_NOTE}</p>
          </div>
        </Reveal>

        <RevealGroup className="mx-auto mt-14 grid max-w-6xl gap-5 lg:grid-cols-3" stagger={0.08}>
          {AI_PLANS.map((plan) => (
            <RevealItem key={plan.id}>
              <article className="flex h-full flex-col rounded-2xl border border-hairline bg-glass px-6 py-8 text-left backdrop-blur-panel">
                <h3 className="font-heading text-[1.45rem] text-heading">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted">{plan.credits.toLocaleString()} credits / month</p>
                <ul className="mt-6 space-y-4">
                  {(Object.keys(plan.prices) as Array<keyof typeof plan.prices>).map((cadence) => {
                    const row = plan.prices[cadence];
                    return (
                      <li
                        key={cadence}
                        className="flex flex-col gap-1 border-b border-hairline pb-4 last:border-0 last:pb-0"
                      >
                        <span className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-label">
                          {CADENCE_LABELS[cadence]}
                        </span>
                        <span className="text-[1.05rem] font-medium text-heading">{row.label}</span>
                        {row.note && <span className="text-sm text-muted">{row.note}</span>}
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-8">
                  <PrepShellActions />
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section
        id="credits"
        className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24"
        aria-labelledby="credits-heading"
      >
        <Reveal>
          <div className="mx-auto max-w-[40rem] text-center">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-label">Credits</p>
            <h2
              id="credits-heading"
              className="mt-4 font-heading text-[clamp(1.8rem,3.5vw,2.6rem)] text-heading"
            >
              {BUY_CREDITS.name}
            </h2>
            <p className="mt-5 text-pretty text-[1.08rem] leading-[1.75] text-body">
              {BUY_CREDITS.tagline}
            </p>
            <p className="mt-3 text-pretty text-[1.08rem] leading-[1.75] text-body">
              Choose an amount from{" "}
              <span className="font-medium text-heading">{BUY_CREDITS.rangeLabel}</span>.
            </p>
            <p className="mt-3 text-pretty text-sm leading-[1.75] text-muted">{TAX_EXCLUSIVE_NOTE}</p>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="mx-auto mt-12 max-w-xl">
          <article className="rounded-2xl border border-hairline bg-glass px-8 py-10 text-center backdrop-blur-panel">
            <p className="font-heading text-[1.6rem] text-heading">{BUY_CREDITS.rangeLabel}</p>
            <p className="mt-2 text-sm text-muted">{BUY_CREDITS.minLabel}</p>
            {COMMERCE_ENABLED && (
              <p className="mt-4 text-sm leading-[1.75] text-muted">{BUY_CREDITS.walletNote}</p>
            )}
            <PrepShellActions />
          </article>
        </Reveal>
      </section>

      <section
        id="storefronts"
        className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24"
        aria-labelledby="storefronts-heading"
      >
        <Reveal>
          <div className="mx-auto max-w-[40rem] text-center">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-label">
              Planned channels
            </p>
            <h2
              id="storefronts-heading"
              className="mt-4 font-heading text-[clamp(1.8rem,3.5vw,2.6rem)] text-heading"
            >
              Website · Microsoft Store · Steam · Apple
            </h2>
            <p className="mt-5 text-pretty text-[1.08rem] leading-[1.75] text-body">
              These are the places we plan to sell Mythos Writer.
            </p>
            <p className="mt-3 text-pretty text-[1.08rem] leading-[1.75] text-body">
              None of them have a live listing yet. The names below are not links.
            </p>
          </div>
        </Reveal>

        <RevealGroup className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {PLANNED_STOREFRONTS.map((channel) => (
            <RevealItem key={channel.name}>
              <article className="flex h-full flex-col rounded-2xl border border-hairline bg-glass px-6 py-8 text-left backdrop-blur-panel">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-label">
                  Coming soon
                </p>
                <h3 className="mt-4 font-heading text-[1.35rem] text-heading">{channel.name}</h3>
                <p className="mt-3 text-[1.02rem] leading-[1.75] text-body">{channel.detail}</p>
                {channel.plannedListPrice && (
                  <p className="mt-4 text-sm text-muted">
                    Planned list:{" "}
                    <span className="font-medium text-heading">{channel.plannedListPrice}</span>
                  </p>
                )}
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section
        id="included"
        className="mx-auto max-w-7xl scroll-mt-24 px-6 pb-8 pt-8 sm:pb-12"
        aria-labelledby="included-heading"
      >
        <Reveal>
          <div className="mx-auto max-w-[40rem] text-center">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-label">
              When it ships
            </p>
            <h2
              id="included-heading"
              className="mt-4 font-heading text-[clamp(1.8rem,3.5vw,2.6rem)] text-heading"
            >
              A local-first fiction studio
            </h2>
            <p className="mt-5 text-pretty text-[1.08rem] leading-[1.75] text-body">
              Mythos Writer is a desktop app. Your vault stays on your computer as a folder you own.
            </p>
            <p className="mt-3 text-pretty text-[1.08rem] leading-[1.75] text-body">
              This is what the app is built to do — not a price list.
            </p>
          </div>
        </Reveal>

        <RevealGroup className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2" stagger={0.07}>
          {INCLUDED.map((item) => (
            <RevealItem key={item.title}>
              <article className="h-full rounded-2xl border border-hairline bg-glass/70 px-6 py-7 text-left backdrop-blur-panel">
                <h3 className="font-heading text-[1.35rem] text-heading">{item.title}</h3>
                <p className="mt-3 text-[1.02rem] leading-[1.75] text-body">{item.body}</p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        <p className="mx-auto mt-10 max-w-[40rem] text-center text-[1.02rem] leading-[1.75] text-muted">
          Want the longer tour?{" "}
          <Link href="/#features" className="text-heading underline-offset-4 hover:underline">
            See features
          </Link>
          {" · "}
          <Link href={PREVIEW_ROUTE} className="text-heading underline-offset-4 hover:underline">
            Try the preview
          </Link>
          .
        </p>
      </section>

      <section id="updates" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24">
        <Reveal>
          <div className="bg-cosmos relative overflow-hidden rounded-3xl border border-hairline px-8 py-16 text-center sm:px-16">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-label">
              Coming soon
            </p>
            <h2 className="mx-auto mt-5 max-w-[40rem] font-heading text-[clamp(1.8rem,3.5vw,2.6rem)] text-heading">
              We will write when the store opens
            </h2>
            <p className="mx-auto mt-5 max-w-[36rem] text-pretty text-[1.08rem] leading-[1.75] text-body">
              One email. Same waitlist as the rest of the site.
            </p>
            <p className="mx-auto mt-3 max-w-[36rem] text-pretty text-[1.08rem] leading-[1.75] text-body">
              No cart. No fake &ldquo;available now.&rdquo;
            </p>
            <div className="mt-10">
              <CtaRow />
            </div>
            <p className="mt-6 text-sm text-muted">A coming-soon store. Not a shop.</p>
            <div className="mt-8">
              <StoreLegalLinks />
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
