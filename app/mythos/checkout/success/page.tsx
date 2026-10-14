import type { Metadata } from "next";
import { LegacyRedirect } from "@/components/store/LegacyRedirect";

export const metadata: Metadata = {
  title: "Redirecting",
  robots: { index: false, follow: false },
};

export default function LegacyCheckoutSuccess() {
  return <LegacyRedirect to="/store/checkout/success/" />;
}
