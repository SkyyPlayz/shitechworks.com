import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { ChangelogPage } from "@/components/ChangelogPage";
import { Footer } from "@/components/Footer";
import { MOCKUP_SRC } from "@/lib/site";

const description = "Release notes for Mythos Writer.";

export const metadata: Metadata = {
  title: "What's new — Mythos Writer",
  description,
  openGraph: {
    title: "What's new — Mythos Writer",
    description,
    url: "https://shitechworks.com/changelog/",
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

export default function Changelog() {
  return (
    <>
      <Nav />
      <main id="main">
        <ChangelogPage />
      </main>
      <Footer />
    </>
  );
}
