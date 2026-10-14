import type { Metadata } from "next";
import { StoreSubpage } from "@/components/store/StoreSubpage";
import { COMMERCE_ENABLED } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Checkout — Cancelled",
  description: COMMERCE_ENABLED
    ? "Mythos Writer checkout was cancelled. Nothing was charged."
    : "Mythos Writer checkout cancel return. The store is not open yet — no purchases are processed.",
  robots: { index: false, follow: false },
};

export default function CheckoutCancelPage() {
  if (!COMMERCE_ENABLED) {
    return (
      <StoreSubpage
        title="Checkout cancelled"
        lead={[
          "This page is the Stripe Checkout cancel return at /store/checkout/cancel.",
          "Nothing was charged. Mythos Writer is not for sale yet.",
        ]}
        immediate
      />
    );
  }

  return (
    <StoreSubpage
      title="Checkout cancelled"
      lead={["You cancelled checkout.", "Nothing was charged."]}
      immediate
    />
  );
}
