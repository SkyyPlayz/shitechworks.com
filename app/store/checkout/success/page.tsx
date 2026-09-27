import type { Metadata } from "next";
import { StoreSubpage } from "@/components/store/StoreSubpage";

export const metadata: Metadata = {
  title: "Checkout — Thank you",
  description:
    "Mythos Writer checkout return page. The store is not open yet — no purchases are processed.",
  robots: { index: false, follow: false },
};

export default function CheckoutSuccessPage() {
  return (
    <StoreSubpage
      title="Thank you — checkout is not live yet"
      lead={[
        "This page is reserved for a future Stripe Checkout success return.",
        "Mythos Writer is not for sale yet. No charge was made.",
      ]}
      detail="When the store opens, your receipt and claim steps will appear here."
    />
  );
}
