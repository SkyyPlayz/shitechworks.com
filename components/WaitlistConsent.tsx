import Link from "next/link";
import { PRIVACY_ROUTE } from "@/lib/legal";

export function WaitlistConsent({
  id = "waitlist-consent",
  className,
}: {
  id?: string;
  className?: string;
}) {
  return (
    <p id={id} className={className ?? "mx-auto mt-4 max-w-md text-sm leading-[1.7] text-muted"}>
      By emailing us you agree we may reply about Mythos Writer updates. We only see what
      you send in that message. Read the{" "}
      <Link href={PRIVACY_ROUTE} className="text-heading underline-offset-4 hover:underline">
        Privacy Policy
      </Link>
      .
    </p>
  );
}
