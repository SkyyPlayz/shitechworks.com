import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { LEGAL_META } from "@/lib/legal";

export const metadata: Metadata = LEGAL_META.terms;

export default function TermsPage() {
  return <LegalDocument slug="terms" />;
}
