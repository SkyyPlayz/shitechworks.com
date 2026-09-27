import type { Metadata } from "next";
import { StoreSubpage } from "@/components/store/StoreSubpage";

export const metadata: Metadata = {
  title: "Checkout — Cancelled",
  description:
    "Mythos Writer checkout cancel return. The store is not open yet — no purchases are processed.",
  robots: { index: false, follow: false },
};

export default function CheckoutCancelPage() {
  return (
    <StoreSubpage
      title="Checkout cancelled"
      lead={[
        "This page is the Stripe Checkout cancel return at /store/checkout/cancel.",
        "Nothing was charged. Mythos Writer is not for sale yet.",
      ]}
    />
  );
}
