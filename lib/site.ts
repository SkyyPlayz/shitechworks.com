import { CONTACT_EMAIL, LEGAL_LINKS, PRIVACY_ROUTE } from "./legal";

export const WAITLIST_MAILTO = `mailto:${CONTACT_EMAIL}?subject=Mythos%20Writer%20waitlist`;
export const WAITLIST_CTA_LABEL = "Email me with updates";

export const MOCKUP_SRC = "/screenshots/mockup/mythos-writer-liquid-neon-2752x1152.png";
export const MOCKUP_SRC_2X = "/screenshots/mockup/mythos-writer-liquid-neon-5504x2304.png";
export const PREVIEW_ROUTE = "/preview/";
export const PREVIEW_MOCKUP_HREF = "/preview/mockup.html";

export type NavLink = {
  href: string;
  label: string;
};

export const NAV_LINKS: NavLink[] = [
  { href: "/#features", label: "Features" },
  { href: "/#themes", label: "Themes" },
  { href: PREVIEW_ROUTE, label: "Preview" },
  { href: "/#creed", label: "Creed" },
  { href: PRIVACY_ROUTE, label: "Legal" },
];

export const FOOTER_COLUMNS = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Writing", href: "/#writing" },
      { label: "World", href: "/#world" },
      { label: "AI", href: "/#ai" },
      { label: "Themes", href: "/#themes" },
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
  {
    heading: "Legal",
    links: LEGAL_LINKS,
  },
] as const;
