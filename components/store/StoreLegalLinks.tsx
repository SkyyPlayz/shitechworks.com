import Link from "next/link";
import { PRIVACY_ROUTE, REFUNDS_ROUTE, TERMS_ROUTE } from "@/lib/legal";

export function StoreLegalLinks() {
  return (
    <p className="text-center text-sm leading-[1.75] text-muted">
      <Link href={PRIVACY_ROUTE} className="text-heading underline-offset-4 hover:underline">
        Privacy
      </Link>
      {" · "}
      <Link href={TERMS_ROUTE} className="text-heading underline-offset-4 hover:underline">
        Terms
      </Link>
      {" · "}
      <Link href={REFUNDS_ROUTE} className="text-heading underline-offset-4 hover:underline">
        Refunds
      </Link>
    </p>
  );
}
