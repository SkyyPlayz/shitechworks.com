import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FeatureCards } from "@/components/FeatureCards";
import { ThemeShowcase } from "@/components/ThemeShowcase";
import { Creed } from "@/components/Creed";
import { Waitlist } from "@/components/Waitlist";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <ProductShowcase />
        <FeatureCards />
        <ThemeShowcase />
        <Creed />
        <Waitlist />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
