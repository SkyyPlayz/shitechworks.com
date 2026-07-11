import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { FeatureCards } from "@/components/FeatureCards";
import { ThemeShowcase } from "@/components/ThemeShowcase";
import { SocialProof } from "@/components/SocialProof";
import { Pricing } from "@/components/Pricing";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FeatureCards />
        <ThemeShowcase />
        <SocialProof />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
