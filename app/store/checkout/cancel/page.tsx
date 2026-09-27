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
        "You left checkout before paying — or the store is still in prep mode.",
        "Nothing was charged. Mythos Writer is not for sale yet.",
      ]}
    />
  );
}
