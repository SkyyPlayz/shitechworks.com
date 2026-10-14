"use client";

import { useEffect } from "react";

export function LegacyRedirect({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to + window.location.search + window.location.hash);
  }, [to]);
  return (
    <main className="mx-auto max-w-xl px-6 py-24 text-center text-white/80">
      <p>
        Redirecting… <a className="underline" href={to}>Continue</a>
      </p>
    </main>
  );
}
