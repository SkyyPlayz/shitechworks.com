/**
 * Public store display data — list prices and labels only. No Stripe IDs.
 * Tax is exclusive; amounts shown are pre-tax.
 */

export type BillingCadence = "monthly" | "quarterly" | "yearly";

export type PlanTier = {
  id: "spark" | "writer" | "studio";
  name: string;
  credits: number;
  prices: Record<BillingCadence, { label: string; note?: string }>;
};

export const APP_LICENSE = {
  name: "Mythos Writer",
  tagline: "One-time app license for the desktop studio.",
  listPrice: "$33.33",
  cadence: "one-time",
} as const;

export const AI_PLANS: PlanTier[] = [
  {
    id: "spark",
    name: "Mythos Spark",
    credits: 600,
    prices: {
      monthly: { label: "$10 / month" },
      quarterly: { label: "$28 / 3 months", note: "6% off monthly" },
      yearly: { label: "$100 / year", note: "16% off monthly" },
    },
  },
  {
    id: "writer",
    name: "Mythos Writer",
    credits: 1200,
    prices: {
      monthly: { label: "$20 / month" },
      quarterly: { label: "$56 / 3 months", note: "6% off monthly" },
      yearly: { label: "$200 / year", note: "16% off monthly" },
    },
  },
  {
    id: "studio",
    name: "Mythos Studio",
    credits: 3000,
    prices: {
      monthly: { label: "$50 / month" },
      quarterly: { label: "$140 / 3 months", note: "6% off monthly" },
      yearly: { label: "$500 / year", note: "16% off monthly" },
    },
  },
];

export const BUY_CREDITS = {
  name: "Buy Credits",
  tagline: "Top up your AI wallet on the website.",
  rangeLabel: "$10 – $200",
  minLabel: "$10 minimum",
  /** App entitlement copy when commerce is enabled — not Stripe Checkout math. */
  walletNote: "60% of what you pay becomes AI wallet balance (app-side rule, not checkout math).",
} as const;

export const CADENCE_LABELS: Record<BillingCadence, string> = {
  monthly: "Monthly",
  quarterly: "Quarterly",
  yearly: "Yearly",
};

export const TAX_EXCLUSIVE_NOTE =
  "List prices are before tax. Applicable sales tax is added at checkout when the store opens.";
