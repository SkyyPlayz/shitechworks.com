import type { ReactNode } from "react";
import Link from "next/link";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import {
  CONTACT_EMAIL,
  CONTACT_MAILTO,
  COOKIES_ROUTE,
  LEGAL_ADDRESS_PLACEHOLDER,
  LEGAL_BUSINESS_NAME_PLACEHOLDER,
  LEGAL_LINKS,
  LEGAL_UPDATED,
  PRIVACY_ROUTE,
  REFUNDS_ROUTE,
  TERMS_ROUTE,
  type LegalSlug,
} from "@/lib/legal";

function Placeholder({ children }: { children: string }) {
  return (
    <code
      className="rounded-sm border bg-raised px-1.5 py-0.5 font-mono text-[0.9em] text-heading"
      style={{ borderColor: "var(--warning)" }}
    >
      {children}
    </code>
  );
}

function H2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2 id={id} className="mt-12 font-heading text-[1.45rem] text-heading">
      {children}
    </h2>
  );
}

function P({ children }: { children: ReactNode }) {
  return <p className="mt-3 text-[1.05rem] leading-[1.75] text-body">{children}</p>;
}

function LegalNav({ current }: { current: LegalSlug }) {
  return (
    <nav aria-label="Legal documents" className="mt-10">
      <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
        {LEGAL_LINKS.map((link) => {
          const slug = link.href.replaceAll("/", "") as LegalSlug;
          const active = slug === current;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "font-medium text-heading underline underline-offset-4"
                    : "text-muted underline-offset-4 hover:text-heading hover:underline"
                }
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

const TITLES: Record<LegalSlug, string> = {
  privacy: "Privacy Policy",
  terms: "Terms and Conditions",
  cookies: "Cookies Policy",
  refunds: "Refund Policy",
};

function PrivacyBody() {
  return (
    <>
      <H2 id="who">Who we are</H2>
      <P>
        This website is published by Sky High Infinite Techwork as a public brand name. The
        legal person behind the site is not yet listed here.
      </P>
      <P>
        Legal name: <Placeholder>{LEGAL_BUSINESS_NAME_PLACEHOLDER}</Placeholder>
      </P>
      <P>
        Postal address: <Placeholder>{LEGAL_ADDRESS_PLACEHOLDER}</Placeholder>
      </P>
      <P>
        Until those fields are filled, write to{" "}
        <a href={CONTACT_MAILTO} className="text-heading underline-offset-4 hover:underline">
          {CONTACT_EMAIL}
        </a>
        . That is the same address used for the Mythos Writer waitlist.
      </P>

      <H2 id="what-we-collect">What we collect</H2>
      <P>We collect as little as we can.</P>
      <P>
        There is no account on this site. There is no signup form. There is no checkout.
      </P>
      <P>
        If you email us, we receive whatever you put in that message: your address, the
        subject, and the body. We use that to reply about Mythos Writer updates or to
        answer your question.
      </P>
      <P>
        We do not buy lists. We do not run ads. We do not require an account to read this
        site or to write in the future desktop app&rsquo;s core editor.
      </P>

      <H2 id="what-we-do-not-collect">What we do not collect here</H2>
      <P>This site does not use analytics, ad pixels, or third-party trackers.</P>
      <P>
        We do not ask for payment details. Mythos Writer is not for sale yet.
      </P>
      <P>
        Theme choice is stored in your browser with localStorage. That value stays on your
        device. See the <Link href={COOKIES_ROUTE} className="text-heading underline-offset-4 hover:underline">Cookies Policy</Link>.
      </P>

      <H2 id="preview">The interactive preview</H2>
      <P>
        The /preview/ page loads a first-party design mockup from this same site. It is a
        concept, not the shipping app. It does not create an account.
      </P>

      <H2 id="sharing">Sharing</H2>
      <P>
        We do not sell your email. We do not share waitlist mail with advertisers.
      </P>
      <P>
        Your message may pass through your email provider and ours. Those services have
        their own terms.
      </P>
      <P>
        We may disclose information if the law requires it, or to protect people from
        serious harm.
      </P>

      <H2 id="retention">How long we keep mail</H2>
      <P>
        We keep waitlist and support mail long enough to reply and to write when a
        storefront opens. You can ask us to delete your address. Write to{" "}
        <a href={CONTACT_MAILTO} className="text-heading underline-offset-4 hover:underline">
          {CONTACT_EMAIL}
        </a>
        .
      </P>

      <H2 id="rights">Your requests</H2>
      <P>
        Email us to ask what we hold, to correct it, or to delete it. We will need enough
        detail to find your message.
      </P>
      <P>
        Governing law and a formal complaints body will be named when{" "}
        <Placeholder>{LEGAL_BUSINESS_NAME_PLACEHOLDER}</Placeholder> is published. This
        draft does not invent a jurisdiction.
      </P>

      <H2 id="children">Children</H2>
      <P>
        This site is a product showcase. We do not knowingly ask children for personal
        data. If you believe a child emailed us, write and we will delete that thread.
      </P>

      <H2 id="changes">Changes</H2>
      <P>
        We will update this page when the legal entity details are filled in, or when we
        start collecting more than email you send us.
      </P>
    </>
  );
}

function TermsBody() {
  return (
    <>
      <H2 id="site">This website</H2>
      <P>
        These terms cover shitechworks.com. The public brand is Sky High Infinite Techwork.
        The legal person is <Placeholder>{LEGAL_BUSINESS_NAME_PLACEHOLDER}</Placeholder>.
      </P>
      <P>
        Address: <Placeholder>{LEGAL_ADDRESS_PLACEHOLDER}</Placeholder>
      </P>
      <P>
        Contact:{" "}
        <a href={CONTACT_MAILTO} className="text-heading underline-offset-4 hover:underline">
          {CONTACT_EMAIL}
        </a>
        .
      </P>

      <H2 id="product">Mythos Writer is not released</H2>
      <P>
        Mythos Writer is a coming-soon desktop app. It is not for sale on this site. There
        is no download, no license grant, and no paid subscription here.
      </P>
      <P>
        Feature text describes what the app is built to do. The interactive preview is a
        design concept. It is not the shipping build.
      </P>

      <H2 id="use">Using the site</H2>
      <P>
        You may browse, try the preview, and email us. Do not attack the site, scrape it
        in a way that harms the service, or pretend to be us.
      </P>
      <P>
        Site text, Liquid Neon styling, and screenshots are shown so you can evaluate the
        product. They are not a license to copy the app or the brand for your own product.
      </P>

      <H2 id="waitlist">Waitlist email</H2>
      <P>
        If you email the waitlist address, you ask us to write when updates exist. That
        is not a purchase. You can ask us to stop. See the{" "}
        <Link href={PRIVACY_ROUTE} className="text-heading underline-offset-4 hover:underline">
          Privacy Policy
        </Link>
        .
      </P>

      <H2 id="future-sales">Future sales</H2>
      <P>
        When Mythos Writer ships, we plan to offer it on this website, the Microsoft
        Store, and Steam. Each storefront will have its own checkout terms. Those listings
        are not live.
      </P>
      <P>
        Refunds for a future purchase are described in the{" "}
        <Link href={REFUNDS_ROUTE} className="text-heading underline-offset-4 hover:underline">
          Refund Policy
        </Link>
        .
      </P>

      <H2 id="disclaimer">No warranties on a showcase</H2>
      <P>
        The site and the preview are offered as-is. We do not promise uptime, or that the
        shipping app will match every mockup pixel.
      </P>
      <P>
        This page is not legal advice. Counsel should review it after the placeholders
        are filled.
      </P>

      <H2 id="law">Governing law</H2>
      <P>
        We will name the governing law and venue when{" "}
        <Placeholder>{LEGAL_BUSINESS_NAME_PLACEHOLDER}</Placeholder> is published. We are
        not inventing a state or country here.
      </P>
    </>
  );
}

function CookiesBody() {
  return (
    <>
      <H2 id="audit">What this site uses</H2>
      <P>
        We audited the marketing site. It does not set advertising cookies. It does not
        load Google Analytics, pixels, or other third-party trackers.
      </P>
      <P>
        Because there are no non-essential cookies, we do not show a blocking accept /
        reject banner.
      </P>

      <H2 id="essential">Essential and technical storage</H2>
      <P>
        Your theme choice is saved in localStorage under the key{" "}
        <code className="font-mono text-heading">mythos-site-theme</code>. That is
        first-party. It stays in your browser so the desk can reopen in the palette you
        picked.
      </P>
      <P>
        The host may set a technical cookie needed to deliver the static files. We do not
        use that for ads or profiling.
      </P>
      <P>
        Fonts are served from this site via next/font. The preview iframe is first-party
        HTML on this same domain.
      </P>

      <H2 id="control">How to clear it</H2>
      <P>
        Clear site data for shitechworks.com in your browser if you want the theme
        preference gone. The site will fall back to Neon Classic.
      </P>

      <H2 id="changes">If that changes</H2>
      <P>
        If we later add analytics or embeds that are not essential, we will add a consent
        choice before those run, and we will update this page.
      </P>
    </>
  );
}

function RefundsBody() {
  return (
    <>
      <H2 id="not-sold">Nothing is for sale yet</H2>
      <P>
        Mythos Writer is not released. This website has no checkout, no prices, and no
        paid downloads. There is nothing to refund today.
      </P>
      <P>
        Do not send payment to {CONTACT_EMAIL} for the app. We will not treat that as an
        order.
      </P>

      <H2 id="when-it-ships">When it ships</H2>
      <P>
        We plan to sell Mythos Writer on this website, on the Microsoft Store, and on
        Steam. Those listings are not live. There are no store URLs to publish yet.
      </P>
      <P>
        A purchase on Microsoft Store or Steam will follow that store&rsquo;s refund
        rules first. A purchase on this website, when it exists, will follow this policy
        as updated on that date.
      </P>
      <P>
        We will rewrite the refund steps, windows, and exceptions before the first paid
        listing goes live. This draft is a placeholder, not a live shop policy.
      </P>

      <H2 id="contact">Questions</H2>
      <P>
        Write to{" "}
        <a href={CONTACT_MAILTO} className="text-heading underline-offset-4 hover:underline">
          {CONTACT_EMAIL}
        </a>
        . Legal entity: <Placeholder>{LEGAL_BUSINESS_NAME_PLACEHOLDER}</Placeholder>.
        Address: <Placeholder>{LEGAL_ADDRESS_PLACEHOLDER}</Placeholder>.
      </P>
    </>
  );
}

const BODIES: Record<LegalSlug, () => ReactNode> = {
  privacy: PrivacyBody,
  terms: TermsBody,
  cookies: CookiesBody,
  refunds: RefundsBody,
};

export function LegalDocument({ slug }: { slug: LegalSlug }) {
  const Body = BODIES[slug];
  return (
    <>
      <Nav />
      <main id="main">
        <article className="bg-cosmos">
          <div className="mx-auto max-w-[42rem] px-6 pb-24 pt-16 sm:pt-20">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-label">
              Legal
            </p>
            <h1 className="mt-4 font-heading text-[clamp(2.2rem,5vw,3.4rem)] text-heading">
              {TITLES[slug]}
            </h1>
            <P>
              Last updated {LEGAL_UPDATED}. This is a coming-soon draft. Placeholders in
              amber marks are empty on purpose. They are not a real company name or
              address.
            </P>
            <LegalNav current={slug} />
            <Body />
            <p className="mt-14 text-sm leading-[1.7] text-muted">
              Related:{" "}
              <Link href={PRIVACY_ROUTE} className="text-heading underline-offset-4 hover:underline">
                Privacy
              </Link>
              {" · "}
              <Link href={TERMS_ROUTE} className="text-heading underline-offset-4 hover:underline">
                Terms
              </Link>
              {" · "}
              <Link href={COOKIES_ROUTE} className="text-heading underline-offset-4 hover:underline">
                Cookies
              </Link>
              {" · "}
              <Link href={REFUNDS_ROUTE} className="text-heading underline-offset-4 hover:underline">
                Refunds
              </Link>
              .
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
