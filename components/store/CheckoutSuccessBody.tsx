"use client";

import { useSearchParams } from "next/navigation";
import { StoreSubpage } from "./StoreSubpage";

const UNRESOLVED_SESSION = "{CHECKOUT_SESSION_ID}";

export function CheckoutSuccessBody() {
  const params = useSearchParams();
  const sessionId = params.get("session_id")?.trim() ?? "";
  const confirmed = sessionId.length > 0 && sessionId !== UNRESOLVED_SESSION;

  if (!confirmed) {
    return (
      <StoreSubpage
        title="Checkout didn't finish"
        lead={["No checkout session was received. No charge was made."]}
        immediate
      />
    );
  }

  return (
    <StoreSubpage
      title="Thank you"
      lead={["Your checkout session was received."]}
      immediate
    />
  );
}
