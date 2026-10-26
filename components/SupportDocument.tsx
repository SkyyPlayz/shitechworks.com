import type { ReactNode } from "react";
import Link from "next/link";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { CONTACT_EMAIL, CONTACT_MAILTO, REFUNDS_ROUTE } from "@/lib/legal";
import { SUPPORT_LINKS, SUPPORT_ROUTE, type SupportSlug } from "@/lib/site";

const TITLES: Record<SupportSlug, string> = {
  index: "Support",
  contact: "Contact support",
  billing: "Billing and refunds",
};

function P({ children }: { children: ReactNode }) {
  return <p className="mt-3 text-[1.05rem] leading-[1.75] text-body">{children}</p>;
}

function IndexBody() {
  return (
    <nav aria-label="Support topics" className="mt-10">
      <ul className="space-y-3 text-[1.05rem]">
        {SUPPORT_LINKS.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-heading underline-offset-4 hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function ContactBody() {
  return (
    <P>
      Email{" "}
      <a href={CONTACT_MAILTO} className="text-heading underline-offset-4 hover:underline">
        {CONTACT_EMAIL}
      </a>
      .
    </P>
  );
}

function BillingBody() {
  return (
    <>
      <P>Purchases aren&rsquo;t open yet (Mythos Writer is coming soon).</P>
      <P>
        App purchase (a one-time license): bought on our website? Ask within 14 days and we&rsquo;ll refund the full amount you paid, tax included. Bought on Steam? Steam&rsquo;s refund policy applies.
      </P>
      <P>
        Questions:{" "}
        <a href={CONTACT_MAILTO} className="text-heading underline-offset-4 hover:underline">
          {CONTACT_EMAIL}
        </a>
        .
      </P>
      <p className="mt-14 text-sm leading-[1.7] text-muted">
        <Link href={REFUNDS_ROUTE} className="text-heading underline-offset-4 hover:underline">
          Refund Policy
        </Link>
      </p>
    </>
  );
}

const BODIES: Record<SupportSlug, () => ReactNode> = {
  index: IndexBody,
  contact: ContactBody,
  billing: BillingBody,
};

export function SupportDocument({ slug }: { slug: SupportSlug }) {
  const Body = BODIES[slug];
  return (
    <>
      <Nav />
      <main id="main">
        <article className="bg-cosmos">
          <div className="mx-auto max-w-[42rem] px-6 pb-24 pt-16 sm:pt-20">
            {slug === "billing" ? (
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-label">
                <Link href={SUPPORT_ROUTE} className="underline-offset-4 hover:text-heading hover:underline">
                  Support
                </Link>
              </p>
            ) : null}
            <h1
              className={
                slug === "billing"
                  ? "mt-4 font-heading text-[clamp(2.2rem,5vw,3.4rem)] text-heading"
                  : "font-heading text-[clamp(2.2rem,5vw,3.4rem)] text-heading"
              }
            >
              {TITLES[slug]}
            </h1>
            <Body />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
