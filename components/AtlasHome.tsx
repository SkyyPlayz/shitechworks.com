import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Nav } from "./Nav";
import { WaitlistConsent } from "./WaitlistConsent";
import { PREVIEW_ROUTE, SUPPORT_ROUTE, WAITLIST_CTA_LABEL, WAITLIST_MAILTO } from "@/lib/site";
import "@/app/atlas.css";

type Destination = {
  title: string;
  copy: string;
  href: string;
  image: string;
  tint: string;
  id?: string;
};

const DESTINATIONS: readonly Destination[] = [
  {
    title: "Mythos Writer",
    copy: "One writing partner",
    href: "#mythos",
    image: "/atlas/forest.webp",
    tint: "var(--atlas-tint-mythos)",
    id: "partner",
  },
  {
    title: "Changelog",
    copy: "Release notes for Mythos Writer.",
    href: "/changelog/",
    image: "/atlas/bones.webp",
    tint: "var(--atlas-tint-changelog)",
  },
  {
    title: "Support",
    copy: "Talk it through",
    href: SUPPORT_ROUTE,
    image: "/atlas/cave.webp",
    tint: "var(--atlas-tint-support)",
  },
  {
    title: "Creed",
    copy: "Your words should live in open, portable formats.",
    href: "#creed",
    image: "/atlas/cliff.webp",
    tint: "var(--atlas-tint-creed)",
    id: "creed",
  },
];

function isAppRoute(href: string) {
  return href.startsWith("/") && !href.includes("#");
}

function TextLink({
  href,
  className,
  id,
  style,
  children,
}: {
  href: string;
  className?: string;
  id?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  if (isAppRoute(href)) {
    return (
      <Link href={href} className={className} id={id} style={style}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className} id={id} style={style}>
      {children}
    </a>
  );
}

export function AtlasHome() {
  return (
    <div className="atlas">
      <Nav />

      <main id="main">
        <section className="atlas-hero" id="mythos" aria-labelledby="mythos-title">
          <div className="atlas-stage">
            <Image
              src="/atlas/cliff.webp"
              alt=""
              fill
              priority
              sizes="100vw"
              className="atlas-cover"
            />
            <div className="atlas-scrim" />
            <div className="atlas-intro">
              <p className="atlas-soon">Coming soon</p>
              <h1 id="mythos-title">Mythos Writer</h1>
              <p id="keys" className="atlas-tagline">
                Your keys. Or none.
              </p>
            </div>
          </div>

          <ul className="atlas-markers">
            <li className="is-mythos is-active">
              <a className="atlas-marker" href="#mythos">
                <span className="atlas-dot" aria-hidden="true" />
                <span className="atlas-marker-label">Mythos Writer</span>
              </a>
              <div className="atlas-card" id="waitlist">
                <p className="atlas-soon">Coming soon</p>
                <p className="atlas-card-title">Mythos Writer</p>
                <p className="atlas-card-copy">Write without an account</p>
                <div className="atlas-card-actions">
                  <a
                    className="atlas-btn"
                    href={WAITLIST_MAILTO}
                    aria-describedby="waitlist-consent-atlas"
                  >
                    {WAITLIST_CTA_LABEL}
                  </a>
                  <Link href={PREVIEW_ROUTE} className="atlas-btn atlas-btn-soft">
                    Interactive preview
                  </Link>
                </div>
                <WaitlistConsent id="waitlist-consent-atlas" className="atlas-consent" />
              </div>
            </li>
            <li className="is-changelog">
              <TextLink href="/changelog/" className="atlas-marker">
                <span className="atlas-dot" aria-hidden="true" />
                <span className="atlas-marker-label">Changelog</span>
              </TextLink>
            </li>
            <li className="is-support">
              <TextLink href={SUPPORT_ROUTE} className="atlas-marker">
                <span className="atlas-dot" aria-hidden="true" />
                <span className="atlas-marker-label">Support</span>
              </TextLink>
            </li>
            <li className="is-creed">
              <a className="atlas-marker" href="#creed">
                <span className="atlas-dot" aria-hidden="true" />
                <span className="atlas-marker-label">Creed</span>
              </a>
            </li>
            <li className="is-preview">
              <TextLink href={PREVIEW_ROUTE} className="atlas-marker">
                <span className="atlas-dot" aria-hidden="true" />
                <span className="atlas-marker-label">Interactive preview</span>
              </TextLink>
            </li>
          </ul>
        </section>

        <section className="atlas-strip" aria-labelledby="destinations-heading">
          <h2 id="destinations-heading">Destinations</h2>
          <ul className="atlas-grid">
            {DESTINATIONS.map((dest) => (
              <li key={dest.title}>
                <TextLink
                  href={dest.href}
                  id={dest.id}
                  className="atlas-dest"
                  style={{ "--atlas-tint": dest.tint } as CSSProperties}
                >
                  <span className="atlas-dest-img">
                    <Image
                      src={dest.image}
                      alt=""
                      fill
                      sizes="(min-width: 900px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="atlas-cover"
                    />
                  </span>
                  <span className="atlas-dest-body">
                    <h3>{dest.title}</h3>
                    <p>{dest.copy}</p>
                  </span>
                </TextLink>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
