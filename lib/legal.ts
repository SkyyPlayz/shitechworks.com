export const CONTACT_EMAIL = "Support@shitechworks.com";
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;

/** Owner-confirmed legal person. Brand name remains Sky High Infinite Techwork. */
export const LEGAL_BUSINESS_NAME = "SKY HIGH INFINITE TECHWORK LLC";

/** Postal address is private for now. Do not invent a street address. */
export const LEGAL_ADDRESS_PLACEHOLDER = "[ADDRESS — private]";

export const LEGAL_MARKET = "United States";

export const LEGAL_UPDATED = "18 September 2026";

/** Per-page dates. Terms and Refunds keep LEGAL_UPDATED. */
export const LEGAL_UPDATED_BY_SLUG: Record<LegalSlug, string> = {
  privacy: "29 October 2026",
  terms: LEGAL_UPDATED,
  cookies: "29 October 2026",
  refunds: LEGAL_UPDATED,
};

/** Pages that show the "Draft – pending legal review" label until counsel signs off. */
export const LEGAL_DRAFT_SLUGS: readonly LegalSlug[] = ["privacy", "cookies"];
export const LEGAL_DRAFT_LABEL = "Draft – pending legal review";

export const GITHUB_PRIVACY_URL =
  "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement";
export const CLOUDFLARE_PRIVACY_URL = "https://www.cloudflare.com/privacypolicy/";

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
      "How SKY HIGH INFINITE TECHWORK LLC handles mail you send from this coming-soon site. No accounts. Cookieless analytics only if you accept.",
  },
  terms: {
    title: "Terms and Conditions",
    description:
      "Terms for browsing shitechworks.com and the Mythos Writer preview. The app is not released and is not for sale yet.",
  },
  cookies: {
    title: "Cookies Policy",
    description:
      "Cloudflare security cookies, cookieless analytics that runs only if you accept, and the localStorage keys this site uses.",
  },
  refunds: {
    title: "Refund Policy",
    description:
      "Mythos Writer is not for sale yet. Planned: about 30-day refunds on app purchases; first-week subscription refunds once. Storefront rules may also apply.",
  },
};
