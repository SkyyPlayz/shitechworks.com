import { CONTACT_EMAIL, LEGAL_LINKS, PRIVACY_ROUTE } from "./legal";

export const WAITLIST_MAILTO = `mailto:${CONTACT_EMAIL}?subject=Mythos%20Writer%20waitlist`;
export const WAITLIST_CTA_LABEL = "Email me with updates";

export const MOCKUP_SRC = "/screenshots/mockup/mythos-writer-liquid-neon-2752x1152.png";
export const MOCKUP_SRC_2X = "/screenshots/mockup/mythos-writer-liquid-neon-5504x2304.png";
export const PREVIEW_ROUTE = "/preview/";
export const PREVIEW_MOCKUP_HREF = "/preview/mockup.html";
export const STORE_ROUTE = "/store/";
export const CHANGELOG_ROUTE = "/changelog/";
export const SUPPORT_ROUTE = "/support/";
export const SUPPORT_CONTACT_ROUTE = "/support/contact/";
export const SUPPORT_BILLING_ROUTE = "/support/billing/";
export const SUPPORT_FAQ_ROUTE = "/support/faq/";
export const SUPPORT_INSTALL_ROUTE = "/support/install/";

/** Support index lists only routes that exist. */
export const SUPPORT_LINKS = [
  { href: SUPPORT_CONTACT_ROUTE, label: "Contact support" },
  { href: SUPPORT_BILLING_ROUTE, label: "Billing and refunds" },
  { href: SUPPORT_FAQ_ROUTE, label: "FAQ" },
  { href: SUPPORT_INSTALL_ROUTE, label: "Install" },
] as const;

export type SupportSlug = "index" | "contact" | "billing" | "faq" | "install";

export type NavLink = {
  href: string;
  label: string;
};

export const NAV_LINKS: NavLink[] = [
  { href: "/#features", label: "Features" },
  { href: "/#themes", label: "Themes" },
  { href: PREVIEW_ROUTE, label: "Preview" },
  { href: STORE_ROUTE, label: "Store" },
  { href: CHANGELOG_ROUTE, label: "Changelog" },
  { href: SUPPORT_ROUTE, label: "Support" },
  { href: "/#creed", label: "Creed" },
  { href: PRIVACY_ROUTE, label: "Legal" },
];

/** Planned sales channels only — no live listing URLs exist yet. */
export const PLANNED_STOREFRONTS = [
  {
    name: "This website",
    detail: "When Mythos Writer ships, you will be able to get it here.",
    plannedListPrice: "$44.44",
  },
  {
    name: "Microsoft Store",
    detail: "A planned listing. Nothing is live yet.",
    plannedListPrice: "$53.99",
  },
  {
    name: "Steam",
    detail: "A planned listing. Nothing is live yet.",
    plannedListPrice: "$65.99",
  },
  {
    name: "Apple App Store",
    detail: "Planned when the Mac build ships. Nothing is live yet.",
    plannedListPrice: "$53.99",
  },
] as const;

export const FOOTER_COLUMNS = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Writing", href: "/#writing" },
      { label: "World", href: "/#world" },
      { label: "One writing partner", href: "/#partner" },
      { label: "Talk it through", href: "/#call" },
      { label: "Your keys. Or none.", href: "/#keys" },
      { label: "Themes", href: "/#themes" },
      { label: "Store", href: STORE_ROUTE },
      { label: "Changelog", href: CHANGELOG_ROUTE },
      { label: "Interactive preview", href: PREVIEW_ROUTE },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Sky High Infinite Techwork", href: "/" },
      { label: "Creed", href: "/#creed" },
      { label: "Support", href: SUPPORT_ROUTE },
      { label: "Waitlist", href: "/#waitlist" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    heading: "Legal",
    links: LEGAL_LINKS,
  },
] as const;
