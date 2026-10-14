import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { StorePage } from "@/components/StorePage";
import { Footer } from "@/components/Footer";
import { MOCKUP_SRC } from "@/lib/site";
import { COMMERCE_ENABLED } from "@/lib/site-config";

const description = COMMERCE_ENABLED
  ? "Mythos Writer store. App license, AI plans, and credits."
  : "Mythos Writer store prep — coming soon. App, AI plans, and credits shells only. No checkout yet. Email us for updates.";

const socialDescription = COMMERCE_ENABLED
  ? "Mythos Writer store. App license, AI plans, and credits."
  : "Coming soon. Store shells for the app, AI plans, and credits — no live checkout or listings yet.";

export const metadata: Metadata = {
  title: "Store — Mythos Writer",
  description,
  openGraph: {
    title: "Store — Mythos Writer",
    description: socialDescription,
    url: "https://shitechworks.com/store/",
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

export default function Store() {
  return (
    <>
      <Nav />
      <main id="main">
        <StorePage />
      </main>
      <Footer />
    </>
  );
}
