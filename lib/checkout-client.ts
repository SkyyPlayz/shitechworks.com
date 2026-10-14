/**
 * Browser checkout start. Sends a SKU only — never price IDs.
 */

import { CHECKOUT_SESSION_API } from "./site-config";
import { CHECKOUT_STATUS, messageForCheckoutFailure } from "./checkout-status";

export type CheckoutRequestResult =
  | { ok: true; url: string }
  | { ok: false; message: string };

let checkoutOwner: string | null = null;
const lockListeners = new Set<() => void>();

function emitLock(): void {
  for (const listener of lockListeners) listener();
}

/** One in-flight session create for the whole page. `owner` is the SKU that started it. */
export function acquireCheckoutLock(owner: string): boolean {
  if (checkoutOwner) return false;
  checkoutOwner = owner;
  emitLock();
  return true;
}

export function releaseCheckoutLock(): void {
  if (!checkoutOwner) return;
  checkoutOwner = null;
  emitLock();
}

export function subscribeCheckoutLock(listener: () => void): () => void {
  lockListeners.add(listener);
  return () => {
    lockListeners.delete(listener);
  };
}

export function getCheckoutOwner(): string | null {
  return checkoutOwner;
}

function readCheckoutUrl(payload: unknown): string | null {
  if (payload === null || typeof payload !== "object") return null;
  const url = (payload as { url?: unknown }).url;
  if (typeof url !== "string") return null;
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "https:") return null;
    return url;
  } catch {
    return null;
  }
}

async function readErrorCode(response: Response): Promise<string | undefined> {
  try {
    const payload: unknown = await response.json();
    if (payload === null || typeof payload !== "object") return undefined;
    const error = (payload as { error?: unknown }).error;
    return typeof error === "string" ? error : undefined;
  } catch {
    return undefined;
  }
}

export async function requestCheckoutSession(sku: string): Promise<CheckoutRequestResult> {
  let response: Response;
  try {
    response = await fetch(CHECKOUT_SESSION_API, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sku }),
    });
  } catch {
    return { ok: false, message: CHECKOUT_STATUS.network };
  }

  if (!response.ok) {
    const errorCode = await readErrorCode(response);
    return { ok: false, message: messageForCheckoutFailure(response.status, errorCode) };
  }

  let payload: unknown;
  try {
    payload = await response.json();
  } catch {
    return { ok: false, message: CHECKOUT_STATUS.generic };
  }

  const url = readCheckoutUrl(payload);
  if (!url) return { ok: false, message: CHECKOUT_STATUS.generic };
  return { ok: true, url };
}
