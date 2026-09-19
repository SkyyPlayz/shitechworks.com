import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { LEGAL_META } from "@/lib/legal";

export const metadata: Metadata = LEGAL_META.refunds;

export default function RefundsPage() {
  return <LegalDocument slug="refunds" />;
}
