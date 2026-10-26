import type { Metadata } from "next";
import { SupportDocument } from "@/components/SupportDocument";
import { MOCKUP_SRC } from "@/lib/site";

const description = "Contact support, billing and refunds, FAQ, and install.";

export const metadata: Metadata = {
  title: "Support — Mythos Writer",
  description,
  openGraph: {
    title: "Support — Mythos Writer",
    description,
    url: "https://shitechworks.com/support/",
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

export default function SupportPage() {
  return <SupportDocument slug="index" />;
}
