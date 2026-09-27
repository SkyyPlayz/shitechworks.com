import type { Metadata } from "next";
import { StoreSubpage } from "@/components/store/StoreSubpage";

export const metadata: Metadata = {
  title: "Account & billing",
  description:
    "Placeholder for the Mythos Writer Stripe Customer Portal return URL. Portal login is off until launch.",
  robots: { index: false, follow: false },
};

export default function StoreAccountPage() {
  return (
    <StoreSubpage
      title="Account & billing — not open yet"
      lead={[
        "This page is the default return URL for the Stripe Customer Portal.",
        "Use /store/account/ — not /mythos/account/. Portal login stays off until launch.",
      ]}
      detail="When portal login is enabled, manage subscriptions, payment methods, and invoices here after billing."
    />
  );
}
