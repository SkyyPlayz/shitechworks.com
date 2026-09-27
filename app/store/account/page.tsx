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
        "This page will be the return URL for the Stripe Customer Portal.",
        "Portal login is disabled until launch. There is no sign-in here yet.",
      ]}
      detail="Manage subscriptions, payment methods, and invoices from here once commerce is live."
    />
  );
}
