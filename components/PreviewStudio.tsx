"use client";

import Link from "next/link";
import { MockupShot } from "./MockupShot";
import { PreviewDesktopStage } from "./PreviewDesktopStage";
import { WaitlistConsent } from "./WaitlistConsent";
import { PREVIEW_MOCKUP_HREF, WAITLIST_CTA_LABEL, WAITLIST_MAILTO } from "@/lib/site";

export function PreviewStudio() {
  return (
    <div className="flex h-[calc(100dvh-4rem)] flex-col">
      <div className="flex-none border-b border-hairline bg-glass/80 backdrop-blur-panel">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-3 sm:flex-row sm:items-start sm:justify-between">
          <p className="text-sm leading-[1.6] text-body">
            <span className="font-semibold text-heading">Interactive design preview</span>
            {" — "}
            a Liquid Neon concept of Mythos Writer, not the shipping Electron build. The
            single writing partner is design exploration; the shipping app today still uses
            four named agents (Coach, Brainstorm, Archive, Beta). Demo is a site walkthrough
            only. The stage matches your display&rsquo;s aspect ratio and scales to fit.
          </p>
          <div className="flex flex-none flex-col items-stretch gap-2 sm:items-end">
            <div className="flex flex-wrap gap-3">
              <a
                href={PREVIEW_MOCKUP_HREF}
                className="rounded-pill border border-hairline bg-glass px-4 py-2 text-sm font-medium text-heading transition-colors duration-200 ease-enter hover:border-n1/50"
              >
                Open raw mockup
              </a>
              <a
                href={WAITLIST_MAILTO}
                aria-describedby="waitlist-consent-preview"
                className="rounded-pill bg-brand px-4 py-2 text-sm font-semibold text-inverse shadow-glow-1"
              >
                {WAITLIST_CTA_LABEL}
              </a>
            </div>
            <WaitlistConsent
              id="waitlist-consent-preview"
              className="max-w-sm text-left text-xs leading-[1.6] text-muted sm:text-right"
            />
          </div>
        </div>
      </div>

      <PreviewDesktopStage />

      <div className="mx-auto flex max-w-3xl flex-1 flex-col justify-center px-6 py-12 md:hidden">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-label">
          Desktop-sized concept
        </p>
        <h2 className="mt-3 font-heading text-[clamp(1.6rem,6vw,2.1rem)] text-heading">
          This preview is built for a wide desktop window
        </h2>
        <p className="mt-3 text-[1.02rem] leading-[1.7] text-body">
          The mockup mirrors unreleased desktop chrome &mdash; there is no shipped mobile
          layout. Open the screenshot below, or load the design mock anyway. It is not the
          shipping Electron build.
        </p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-hairline">
          <MockupShot crop="full" />
        </div>
        <div className="mt-6 flex flex-col gap-3">
          <a
            href={PREVIEW_MOCKUP_HREF}
            className="rounded-pill bg-brand px-5 py-3 text-center text-sm font-semibold text-inverse shadow-glow-1"
          >
            Open interactive preview anyway
          </a>
          <Link
            href="/#features"
            className="rounded-pill border border-hairline bg-glass px-5 py-3 text-center text-sm font-medium text-heading"
          >
            Back to features
          </Link>
        </div>
      </div>
    </div>
  );
}
