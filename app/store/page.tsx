import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { StorePage } from "@/components/StorePage";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Store — Mythos Writer",
  description:
    "Mythos Writer is coming soon. It is not for sale yet. Email us for updates. Planned storefronts: this website, Microsoft Store, and Steam.",
  openGraph: {
    title: "Store — Mythos Writer",
    description:
      "Coming soon. Email us for updates. Planned on this website, Microsoft Store, and Steam — no live listings yet.",
    url: "https://shitechworks.com/store/",
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
