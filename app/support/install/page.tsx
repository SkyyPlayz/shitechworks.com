import type { Metadata } from "next";
import { SupportDocument } from "@/components/SupportDocument";
import { MOCKUP_SRC } from "@/lib/site";

const description = "Mythos Writer help: Install.";

export const metadata: Metadata = {
  title: "Mythos Writer help: Install",
  description,
  openGraph: {
    title: "Mythos Writer help: Install",
    description,
    url: "https://shitechworks.com/support/install/",
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

export default function SupportInstallPage() {
  return <SupportDocument slug="install" />;
}
