export const CONSENT_STORAGE_KEY = "site-consent";
export type ConsentChoice = "accepted" | "rejected";

/** window CustomEvent that reopens the consent banner ("Cookie settings"). */
export const CONSENT_OPEN_EVENT = "site-consent:open";

// TODO: set NEXT_PUBLIC_CF_BEACON_TOKEN at build time (Cloudflare Web Analytics site token). Empty = no analytics.
export const CF_BEACON_TOKEN = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN ?? "";
export const CF_BEACON_SRC = "https://static.cloudflareinsights.com/beacon.min.js";

const BEACON_ID = "cf-web-analytics-beacon";

/** Global Privacy Control counts as an automatic Reject. */
export function hasGlobalPrivacyControl(): boolean {
  return (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true;
}

export function readConsent(): ConsentChoice | null {
  try {
    const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return value === "accepted" || value === "rejected" ? value : null;
  } catch {
    return null;
  }
}

/** Returns false when storage is unavailable; the choice still applies to this page view. */
export function writeConsent(choice: ConsentChoice): boolean {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
    return true;
  } catch {
    return false;
  }
}

export function isBeaconLoaded(): boolean {
  return document.getElementById(BEACON_ID) !== null;
}

/** Injects the Cloudflare Web Analytics beacon once. No token or GPC on = nothing loads. */
export function loadBeacon(): void {
  if (!CF_BEACON_TOKEN || hasGlobalPrivacyControl() || isBeaconLoaded()) return;
  const script = document.createElement("script");
  script.id = BEACON_ID;
  script.defer = true;
  script.src = CF_BEACON_SRC;
  script.setAttribute("data-cf-beacon", JSON.stringify({ token: CF_BEACON_TOKEN }));
  document.head.appendChild(script);
}

export function removeBeacon(): void {
  document.getElementById(BEACON_ID)?.remove();
}
