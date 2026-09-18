export const WAITLIST_MAILTO =
  "mailto:hello@shitechworks.com?subject=Mythos%20Writer%20waitlist";
export const WAITLIST_CTA_LABEL = "Email me with updates";

export const MOCKUP_SRC = "/screenshots/mockup/mythos-writer-liquid-neon-2752x1152.png";
export const MOCKUP_SRC_2X = "/screenshots/mockup/mythos-writer-liquid-neon-5504x2304.png";
export const PREVIEW_ROUTE = "/preview/";
export const PREVIEW_MOCKUP_HREF = "/preview/mockup.html";
export const STORE_ROUTE = "/store/";

export type NavLink = {
  href: string;
  label: string;
};

export const NAV_LINKS: NavLink[] = [
  { href: "/#features", label: "Features" },
  { href: "/#themes", label: "Themes" },
  { href: PREVIEW_ROUTE, label: "Preview" },
  { href: STORE_ROUTE, label: "Store" },
  { href: "/#creed", label: "Creed" },
];

/** Planned sales channels only — no live listing URLs exist yet. */
export const PLANNED_STOREFRONTS = [
  {
    name: "This website",
    detail: "When Mythos Writer ships, you will be able to get it here.",
  },
  {
    name: "Microsoft Store",
    detail: "A planned listing. Nothing is live yet.",
  },
  {
    name: "Steam",
    detail: "A planned listing. Nothing is live yet.",
  },
] as const;

export const FOOTER_COLUMNS = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Writing", href: "/#writing" },
      { label: "World", href: "/#world" },
      { label: "AI", href: "/#ai" },
      { label: "Themes", href: "/#themes" },
      { label: "Store", href: STORE_ROUTE },
      { label: "Interactive preview", href: PREVIEW_ROUTE },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Sky High Infinite Techwork", href: "/" },
      { label: "Creed", href: "/#creed" },
      { label: "Waitlist", href: "/#waitlist" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
] as const;
