import type { ReactNode } from "react";
import Link from "next/link";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { CookieSettingsButton } from "./CookieSettingsButton";
import {
  CLOUDFLARE_PRIVACY_URL,
  CONTACT_EMAIL,
  CONTACT_MAILTO,
  COOKIES_ROUTE,
  GITHUB_PRIVACY_URL,
  LEGAL_ADDRESS_PLACEHOLDER,
  LEGAL_BUSINESS_NAME,
  LEGAL_DRAFT_LABEL,
  LEGAL_DRAFT_SLUGS,
  LEGAL_LINKS,
  LEGAL_MARKET,
  LEGAL_UPDATED_BY_SLUG,
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

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      className="text-heading underline-offset-4 hover:underline"
    >
      {children}
    </a>
  );
}

function Key({ children }: { children: string }) {
  return <code className="font-mono text-heading">{children}</code>;
}

function StorageList({ items }: { items: { name: string; what: ReactNode }[] }) {
  return (
    <dl className="mt-4 divide-y divide-hairline rounded-sm border border-hairline text-[1.05rem] leading-[1.75]">
      {items.map((item) => (
        <div key={item.name} className="grid gap-1 px-4 py-3 sm:grid-cols-[11rem_1fr] sm:gap-4">
          <dt>
            <Key>{item.name}</Key>
          </dt>
          <dd className="text-body">{item.what}</dd>
        </div>
      ))}
    </dl>
  );
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
        This website is published by {LEGAL_BUSINESS_NAME}, doing business as Sky High
        Infinite Techwork. The first market is the {LEGAL_MARKET}.
      </P>
      <P>
        Legal name: <span className="text-heading">{LEGAL_BUSINESS_NAME}</span>
      </P>
      <P>
        Postal address: <Placeholder>{LEGAL_ADDRESS_PLACEHOLDER}</Placeholder>. A street
        address is not published in this repository. Write to{" "}
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
      <P>This site does not use ad pixels or advertising cookies.</P>
      <P>
        We do not ask for payment details. Mythos Writer is not for sale yet.
      </P>
      <P>
        Your theme choice, the preview&rsquo;s demo state, and your analytics choice are
        stored in your browser with localStorage. Those values stay on your device. See
        the <Link href={COOKIES_ROUTE} className="text-heading underline-offset-4 hover:underline">Cookies Policy</Link>.
      </P>

      <H2 id="analytics">Analytics</H2>
      <P>
        We use Cloudflare Web Analytics only if you click Accept on the consent banner.
        The script does not load before you choose. It is cookieless and gives us
        aggregate page-view counts. For each page view, it sends Cloudflare details such
        as the page, the referring page, and browser details.
      </P>
      <P>
        If you click Reject, the analytics script does not load. Your choice is saved in
        your browser under <Key>site-consent</Key>. Use the Cookie settings link in the
        footer to change it.
      </P>
      <P>
        Global Privacy Control: if your browser sends a GPC signal, we treat it as a
        Reject, so the analytics script does not load.
      </P>

      <H2 id="providers">Service providers</H2>
      <P>
        GitHub Pages (GitHub, Inc.) hosts this site. Cloudflare, Inc. sits in front of it
        to deliver and protect it, and runs Web Analytics if you accept.
      </P>
      <P>
        To do that, they process technical data such as your IP address, browser and
        device details, and the pages you request. See the{" "}
        <ExternalLink href={GITHUB_PRIVACY_URL}>GitHub General Privacy Statement</ExternalLink>{" "}
        and the <ExternalLink href={CLOUDFLARE_PRIVACY_URL}>Cloudflare Privacy Policy</ExternalLink>.
      </P>

      <H2 id="preview">The interactive preview</H2>
      <P>
        The /preview/ page loads a first-party design mockup from this same site. It is a
        concept, not the shipping app. It does not create an account.
      </P>
      <P>
        The mockup&rsquo;s fonts and scripts are served from this site too. It does not
        call Google Fonts or other script hosts.
      </P>

      <H2 id="sharing">Sharing</H2>
      <P>
        We do not sell your email. We do not share waitlist mail with advertisers.
      </P>
      <P>
        The service providers above process site traffic to host, protect, and measure
        this site. We do not share it with advertisers.
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
        These pages are written for a {LEGAL_MARKET} company. We do not name a specific
        state court here. This is not a formal complaints-body filing guide.
      </P>

      <H2 id="state-rights">State privacy rights</H2>
      <P>
        We do not sell or share personal information, including for cross-context
        behavioral advertising.
      </P>
      <P>
        Depending on your state, you may have the right to know what personal information
        we hold, and to access, correct, or delete it. Write to{" "}
        <a href={CONTACT_MAILTO} className="text-heading underline-offset-4 hover:underline">
          {CONTACT_EMAIL}
        </a>
        . We will not discriminate against you for using these rights.
      </P>

      <H2 id="children">Children</H2>
      <P>
        This site is a product showcase. We do not knowingly ask children for personal
        data. If you believe a child emailed us, write and we will delete that thread.
      </P>

      <H2 id="changes">Changes</H2>
      <P>
        We will update this page when a postal address is published, when we change
        analytics or service providers, or when we start collecting more than the email
        you send us and the data described above.
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
        The legal person is {LEGAL_BUSINESS_NAME}.
      </P>
      <P>
        Address: <Placeholder>{LEGAL_ADDRESS_PLACEHOLDER}</Placeholder>. A street address
        is not published here.
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
        This page is not legal advice. Counsel should still review it.
      </P>

      <H2 id="law">Governing law</H2>
      <P>
        {LEGAL_BUSINESS_NAME} is a {LEGAL_MARKET} company. Mythos Writer will launch in the{" "}
        {LEGAL_MARKET} first. Other countries may follow later.
      </P>
      <P>
        These terms are meant to be read under United States law as it applies to the LLC.
        We are not naming a specific state court or venue.
      </P>
    </>
  );
}

function CookiesBody() {
  return (
    <>
      <H2 id="audit">What this site uses</H2>
      <P>
        This site does not set advertising cookies. It does not load Google Analytics or
        ad pixels.
      </P>
      <P>
        It uses Cloudflare Web Analytics only if you click Accept on the consent banner.
        Nothing third-party loads before you choose. Web Analytics is cookieless and
        gives us aggregate page-view counts.
      </P>
      <P>
        If you click Reject, or your browser sends a Global Privacy Control signal, the
        analytics script does not load. We treat GPC as a Reject.
      </P>

      <H2 id="essential">Strictly necessary cookies</H2>
      <P>
        Cloudflare, Inc. sits in front of this site and may set these security cookies.
        They protect the site from bots and abuse. We do not use them for ads or
        profiling. The consent banner does not block them, because the site needs them to
        work safely.
      </P>
      <StorageList
        items={[
          { name: "__cf_ob", what: "Cloudflare security cookie, part of its protection of this site." },
          { name: "cf_clearance", what: "Cloudflare cookie that records a passed bot or challenge check." },
        ]}
      />
      <P>
        See the <ExternalLink href={CLOUDFLARE_PRIVACY_URL}>Cloudflare Privacy Policy</ExternalLink>.
        GitHub Pages (GitHub, Inc.) hosts the files. See the{" "}
        <ExternalLink href={GITHUB_PRIVACY_URL}>GitHub General Privacy Statement</ExternalLink>.
      </P>

      <H2 id="local-storage">Local storage</H2>
      <P>
        These first-party values are saved in your browser with localStorage. They stay on
        your device. We do not receive them.
      </P>
      <StorageList
        items={[
          { name: "mythos-site-theme", what: "Your theme choice, so the desk reopens in the palette you picked." },
          { name: "mythos-demo-v1", what: "The interactive preview’s demo state." },
          { name: "site-consent", what: "Your analytics choice: accepted or rejected." },
        ]}
      />
      <P>
        Fonts are served from this site via next/font. The preview iframe is first-party
        HTML on this same domain, and its fonts and scripts are served from here too.
      </P>

      <H2 id="control">How to change or clear it</H2>
      <P>
        To change your analytics choice, use{" "}
        <CookieSettingsButton className="text-heading underline underline-offset-4 hover:no-underline" />{" "}
        or the Cookie settings link in the footer.
      </P>
      <P>
        Clear site data for shitechworks.com in your browser if you want these values
        gone. The site will fall back to Neon Classic, and the consent banner will ask
        again (unless your browser sends a GPC signal, which we treat as a Reject).
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
        When a purchase exists, this is the refund we intend to offer:
      </P>
      <P>
        App purchase (a one-time license): bought on our website? Ask within 14 days and we&rsquo;ll refund the full amount you paid, tax included. Bought on Steam? Steam&rsquo;s refund policy applies.
      </P>
      <P>
        Subscriptions, when we offer them: if you cancel in the first week, you may
        request a refund for that first week, the first time only.
      </P>
      <P>
        A purchase on the Microsoft Store or Steam may also follow that storefront&rsquo;s
        refund rules. A purchase on this website will follow this page as updated on that
        date. If store rules and this policy both apply, the store&rsquo;s process still
        matters for that receipt.
      </P>
      <P>
        We will confirm the exact steps (how to ask, what proof we need) before the first
        paid listing goes live. Until then this is intent, not a live shop checkout.
      </P>

      <H2 id="contact">Questions</H2>
      <P>
        Write to{" "}
        <a href={CONTACT_MAILTO} className="text-heading underline-offset-4 hover:underline">
          {CONTACT_EMAIL}
        </a>
        . Legal entity: {LEGAL_BUSINESS_NAME}. Address:{" "}
        <Placeholder>{LEGAL_ADDRESS_PLACEHOLDER}</Placeholder>.
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
            {LEGAL_DRAFT_SLUGS.includes(slug) ? (
              <p
                className="mt-4 inline-block rounded-full border bg-raised px-3 py-1 text-sm font-medium text-heading"
                style={{ borderColor: "var(--warning)" }}
              >
                {LEGAL_DRAFT_LABEL}
              </p>
            ) : null}
            <P>
              Last updated {LEGAL_UPDATED_BY_SLUG[slug]}. This is a coming-soon draft for{" "}
              {LEGAL_BUSINESS_NAME}.
              {slug === "cookies"
                ? " Analytics is cookieless and runs only after you accept."
                : " The postal line stays marked [ADDRESS — private] on purpose. It is not a street address."}
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
