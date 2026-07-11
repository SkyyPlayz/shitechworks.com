import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-ui-next", display: "swap" });
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-heading-next",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shitechworks.com"),
  title: "Mythos Writer — Sky High Infinite Techwork",
  description:
    "Mythos Writer is a local-first novel-writing companion with ten fully-editable neon themes, four AI collaborators, a self-maintaining timeline, and a living wiki of your world.",
  openGraph: {
    type: "website",
    title: "Mythos Writer — Sky High Infinite Techwork",
    description:
      "Ten fully-editable neon themes, four AI collaborators, a self-maintaining timeline, and a living wiki of your world.",
    url: "https://shitechworks.com",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`theme-neon-classic ${inter.variable} ${lora.variable}`}>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
