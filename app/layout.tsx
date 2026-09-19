import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SkipLink } from "@/components/SkipLink";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-ui-next", display: "swap" });
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-heading-next",
  display: "swap",
  weight: ["500", "600", "700"],
});

const description =
  "Mythos Writer is a local-first Electron studio for fiction — Word-like writing, Obsidian-compatible vaults, Liquid Neon glass, and four named AI collaborators that use your keys, run locally, or stay off. Coming soon.";

export const metadata: Metadata = {
  metadataBase: new URL("https://shitechworks.com"),
  title: {
    default: "Mythos Writer — Sky High Infinite Techwork",
    template: "%s — Sky High Infinite Techwork",
  },
  description,
  openGraph: {
    type: "website",
    title: "Mythos Writer — Sky High Infinite Techwork",
    description,
    url: "https://shitechworks.com",
    images: [
      {
        url: "/screenshots/mockup/mythos-writer-liquid-neon-2752x1152.png",
        width: 2752,
        height: 1152,
        alt: "Mythos Writer Liquid Neon design mockup",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mythos Writer — Sky High Infinite Techwork",
    description,
    images: ["/screenshots/mockup/mythos-writer-liquid-neon-2752x1152.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`theme-neon-classic ${inter.variable} ${lora.variable}`}>
      <body className="antialiased">
        <ThemeProvider>
          <SkipLink />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
