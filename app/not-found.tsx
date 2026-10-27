import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main id="main" className="bg-cosmos">
        <div className="mx-auto max-w-[42rem] px-6 py-24">
          <h1 className="font-heading text-[clamp(2.2rem,5vw,3.4rem)] text-heading">404</h1>
          <p className="mt-4 text-[1.05rem] leading-[1.75] text-body">This page could not be found.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
