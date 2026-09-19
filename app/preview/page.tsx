import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { PreviewStudio } from "@/components/PreviewStudio";

export const metadata: Metadata = {
  title: "Interactive Preview — Mythos Writer",
  description:
    "An interactive Liquid Neon design preview of Mythos Writer. Concept chrome — not the shipping Electron build. Coming soon.",
};

export default function PreviewPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <PreviewStudio />
      </main>
    </>
  );
}
