import Image from "next/image";
import Link from "next/link";
import { WaitlistConsent } from "./WaitlistConsent";
import {
  CONTACT_EMAIL,
  CONTACT_MAILTO,
  COOKIES_ROUTE,
  LEGAL_ADDRESS_PLACEHOLDER,
  LEGAL_BUSINESS_NAME,
} from "@/lib/legal";
import { FOOTER_COLUMNS, PREVIEW_ROUTE, STORE_ROUTE, WAITLIST_CTA_LABEL, WAITLIST_MAILTO } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Image src="/brand/logo.png" alt="" width={28} height={28} className="rounded-md" />
              <span className="font-heading text-[0.95rem] text-heading">Sky High Infinite Techwork</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted">
              We Build Nothing Less Than the Best. Mythos Writer is our flagship — a local-first
              fiction studio in Liquid Neon glass. Coming soon.
            </p>
            <p className="mt-4 max-w-xs text-xs leading-[1.65] text-muted">
              Legal entity: <span className="text-heading">{LEGAL_BUSINESS_NAME}</span>
              <br />
              Address:{" "}
              <code className="font-mono text-heading">{LEGAL_ADDRESS_PLACEHOLDER}</code>
              <br />
              Contact:{" "}
              <a href={CONTACT_MAILTO} className="text-heading underline-offset-4 hover:underline">
                {CONTACT_EMAIL}
              </a>
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href={STORE_ROUTE}
                className="text-sm text-heading underline-offset-4 hover:underline"
              >
                Store
              </Link>
              <Link
                href={PREVIEW_ROUTE}
                className="text-sm text-heading underline-offset-4 hover:underline"
              >
                Interactive preview
              </Link>
              <a
                href={WAITLIST_MAILTO}
                aria-describedby="waitlist-consent-footer"
                className="text-sm text-heading underline-offset-4 hover:underline"
              >
                {WAITLIST_CTA_LABEL}
              </a>
            </div>
            <WaitlistConsent
              id="waitlist-consent-footer"
              className="mt-3 max-w-xs text-left text-xs leading-[1.65] text-muted"
            />
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-label">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors duration-150 hover:text-heading"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-hairline pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {LEGAL_BUSINESS_NAME}. shitechworks.com</span>
          <span>
            No analytics cookies. Theme preference stays in your browser.{" "}
            <Link href={COOKIES_ROUTE} className="text-heading underline-offset-4 hover:underline">
              Cookies Policy
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
