"use client";

import { CONSENT_OPEN_EVENT } from "@/lib/consent";

export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={(event) =>
        window.dispatchEvent(
          new CustomEvent(CONSENT_OPEN_EVENT, { detail: { opener: event.currentTarget } }),
        )
      }
    >
      Cookie settings
    </button>
  );
}
