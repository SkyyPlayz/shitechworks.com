export const CONTACT_EMAIL = "hello@shitechworks.com";
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;

/** Owner must replace these. Do not treat them as real entity data. */
export const LEGAL_BUSINESS_NAME_PLACEHOLDER = "[BUSINESS LEGAL NAME]";
export const LEGAL_ADDRESS_PLACEHOLDER = "[ADDRESS]";

export const LEGAL_UPDATED = "18 September 2026";

export const PRIVACY_ROUTE = "/privacy/";
export const TERMS_ROUTE = "/terms/";
export const COOKIES_ROUTE = "/cookies/";
export const REFUNDS_ROUTE = "/refunds/";

export const LEGAL_LINKS = [
  { href: PRIVACY_ROUTE, label: "Privacy Policy" },
  { href: TERMS_ROUTE, label: "Terms and Conditions" },
  { href: COOKIES_ROUTE, label: "Cookies Policy" },
  { href: REFUNDS_ROUTE, label: "Refund Policy" },
] as const;

export type LegalSlug = "privacy" | "terms" | "cookies" | "refunds";

export const LEGAL_META: Record<LegalSlug, { title: string; description: string }> = {
  privacy: {
    title: "Privacy Policy",
    description:
      "How this coming-soon site handles mail you send. No accounts, no analytics. Legal entity fields are placeholders.",
  },
  terms: {
    title: "Terms and Conditions",
    description:
      "Terms for browsing shitechworks.com and the Mythos Writer preview. The app is not released and is not for sale yet.",
  },
  cookies: {
    title: "Cookies Policy",
    description:
      "This site does not use analytics or ad cookies. Theme preference is stored in your browser as localStorage.",
  },
  refunds: {
    title: "Refund Policy",
    description:
      "Mythos Writer is not for sale yet. Future website, Microsoft Store, and Steam purchases will follow store rules plus this policy once published.",
  },
};
