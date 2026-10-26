import type { Metadata } from "next";
import { SupportDocument } from "@/components/SupportDocument";
import { MOCKUP_SRC } from "@/lib/site";

const description = "Email Support@shitechworks.com.";

export const metadata: Metadata = {
  title: "Contact support — Mythos Writer",
  description,
  openGraph: {
    title: "Contact support — Mythos Writer",
    description,
    url: "https://shitechworks.com/support/contact/",
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

export default function SupportContactPage() {
  return <SupportDocument slug="contact" />;
}
