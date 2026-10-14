import type { Metadata } from "next";
import { Suspense } from "react";
import { CheckoutSuccessBody } from "@/components/store/CheckoutSuccessBody";
import { StoreSubpage } from "@/components/store/StoreSubpage";
import { CHECKOUT_STATUS } from "@/lib/checkout-status";
import { COMMERCE_ENABLED } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Checkout — Thank you",
  description: COMMERCE_ENABLED
    ? "Mythos Writer checkout success return."
    : "Mythos Writer checkout return page. The store is not open yet — no purchases are processed.",
  robots: { index: false, follow: false },
};

export default function CheckoutSuccessPage() {
  if (!COMMERCE_ENABLED) {
    return (
      <StoreSubpage
        title="Thank you — checkout is not live yet"
        lead={[
          "This page is the Stripe Checkout success return at /store/checkout/success.",
          "Mythos Writer is not for sale yet. No charge was made.",
        ]}
        detail="When checkout is live, Stripe appends ?session_id={CHECKOUT_SESSION_ID} here for receipt and claim steps."
        immediate
      />
    );
  }

  return (
    <Suspense
      fallback={
        <StoreSubpage title={CHECKOUT_STATUS.loading} lead={[]} immediate busy />
      }
    >
      <CheckoutSuccessBody />
    </Suspense>
  );
}
