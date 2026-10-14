/**
 * Customer-facing checkout status copy. No price IDs, no secrets.
 * Shared by the store UI and the Pages Function so both say the same thing.
 */

export const CHECKOUT_STATUS = {
  loading: "Loading…",
  redirecting: "Redirecting to secure checkout…",
  cardFailed: "Card failed to go through, please try again.",
  notLive: "Checkout isn't live yet. No charge was made.",
  notAvailable: "Checkout isn't available yet. Please try again.",
  generic: "Something went wrong. Please try again.",
  network: "Couldn't reach checkout. Please try again.",
} as const;

const CARD_ERROR_CODES = new Set(["card_error", "card_declined", "payment_failed"]);

/** Friendly copy for a non-OK checkout response. Never surfaces raw server text. */
export function messageForCheckoutFailure(status: number, errorCode?: string): string {
  if (errorCode && CARD_ERROR_CODES.has(errorCode)) {
    return CHECKOUT_STATUS.cardFailed;
  }
  if (status === 503) return CHECKOUT_STATUS.notLive;
  if (status === 501) return CHECKOUT_STATUS.notAvailable;
  return CHECKOUT_STATUS.generic;
}
