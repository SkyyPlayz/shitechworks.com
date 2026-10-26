import type { Metadata } from "next";
import { SupportDocument } from "@/components/SupportDocument";
import { MOCKUP_SRC } from "@/lib/site";

const description =
  "Purchases are not open yet. A one-time app license bought on this website: full refund within 14 days. Steam purchases follow Steam's refund policy.";

export const metadata: Metadata = {
  title: "Billing and refunds — Mythos Writer",
  description,
  openGraph: {
    title: "Billing and refunds — Mythos Writer",
    description,
    url: "https://shitechworks.com/support/billing/",
    images: [
      {
        url: MOCKUP_SRC,
        width: 2752,
        height: 1152,
        alt: "Mythos Writer Liquid Neon design mockup",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [MOCKUP_SRC],
  },
};

export default function SupportBillingPage() {
  return <SupportDocument slug="billing" />;
}
