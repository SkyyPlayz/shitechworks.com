import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { LEGAL_META } from "@/lib/legal";

export const metadata: Metadata = LEGAL_META.cookies;

export default function CookiesPage() {
  return <LegalDocument slug="cookies" />;
}
