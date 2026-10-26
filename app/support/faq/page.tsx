import type { Metadata } from "next";
import { SupportDocument } from "@/components/SupportDocument";
import { MOCKUP_SRC } from "@/lib/site";

const description = "Mythos Writer help: FAQ.";

export const metadata: Metadata = {
  title: "Mythos Writer help: FAQ",
  description,
  openGraph: {
    title: "Mythos Writer help: FAQ",
    description,
    url: "https://shitechworks.com/support/faq/",
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

export default function SupportFaqPage() {
  return <SupportDocument slug="faq" />;
}
