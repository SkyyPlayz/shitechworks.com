/**
 * Stripe Checkout Session + Customer Portal URL shapes — SERVER-SIDE ONLY.
 *
 * Import from Cloudflare Pages Functions (or other server runtimes), never from client
 * components. Price IDs must not appear in static HTML or client bundles.
 *
 * Prebuilt Checkout only — no Payment Links. Session create runs only when
 * `COMMERCE_ENABLED=true` on the Function.
 */

import {
  CREDITS_AMOUNT_MAX_CENTS,
  CREDITS_AMOUNT_MIN_CENTS,
  type CommerceSku,
  STRIPE_CATALOG,
} from "./commerce-catalog";

export const SITE_ORIGIN = "https://shitechworks.com";

/** Stripe Customer Portal + site legal URLs (FM-confirmed). */
export const PORTAL_URLS = {
  privacy: `${SITE_ORIGIN}/privacy`,
  terms: `${SITE_ORIGIN}/terms`,
  refunds: `${SITE_ORIGIN}/refunds`,
  /** Default return / manage billing — not /mythos/account. Portal login stays off until launch. */
  accountReturn: `${SITE_ORIGIN}/store/account/`,
} as const;

/** Prep portal config in Stripe Dashboard: bpc_1UK6VlIGfxFJM2xLsGoLeWif */
export const STRIPE_PORTAL_CONFIG_ID = "bpc_1UK6VlIGfxFJM2xLsGoLeWif";

/** Checkout return URLs passed to Stripe (FM-confirmed shapes). */
export const CHECKOUT_RETURN_URLS = {
  success: `${SITE_ORIGIN}/store/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
  cancel: `${SITE_ORIGIN}/store/checkout/cancel`,
} as const;

export type CheckoutMode = "payment" | "subscription";

/** Common Checkout Session create params (all SKUs). */
export const CHECKOUT_SESSION_COMMON = {
  automatic_tax: { enabled: true },
  billing_address_collection: "required" as const,
  tax_id_collection: { enabled: true },
  allow_promotion_codes: false,
  success_url: CHECKOUT_RETURN_URLS.success,
  cancel_url: CHECKOUT_RETURN_URLS.cancel,
};

export type CheckoutSessionCreateParams = {
  mode: CheckoutMode;
  line_items: Array<Record<string, unknown>>;
  automatic_tax: { enabled: boolean };
  billing_address_collection: "required";
  tax_id_collection: { enabled: boolean };
  allow_promotion_codes: boolean;
  success_url: string;
  cancel_url: string;
};

function appLineItem(priceId: string) {
  return [{ price: priceId, quantity: 1 }];
}

function subscriptionLineItem(priceId: string) {
  return [{ price: priceId, quantity: 1 }];
}

/** Buy Credits price has custom_unit_amount — Checkout amount picker enforces min/max. */
function creditsLineItem(priceId: string) {
  return [{ price: priceId, quantity: 1 }];
}

/**
 * Build the Stripe Checkout Session create payload for a catalog SKU.
 * Caller POSTs to Stripe with STRIPE_SECRET_KEY when commerce is enabled.
 *
 * Credits: do not pass unit_amount on a Price-based line_item (invalid). The $10–$200 range
 * is enforced by Checkout UI + Price custom_unit_amount config. Validate amountCents server-side
 * only if we later switch to price_data instead of this Price id.
 */
export function buildCheckoutSessionCreateParams(sku: CommerceSku): CheckoutSessionCreateParams {
  const entry = STRIPE_CATALOG[sku];

  if (entry.customAmount) {
    return {
      ...CHECKOUT_SESSION_COMMON,
      mode: "payment",
      line_items: creditsLineItem(entry.priceId),
    };
  }

  if (sku === "app") {
    return {
      ...CHECKOUT_SESSION_COMMON,
      mode: "payment",
      line_items: appLineItem(entry.priceId),
    };
  }

  return {
    ...CHECKOUT_SESSION_COMMON,
    mode: "subscription",
    line_items: subscriptionLineItem(entry.priceId),
  };
}

/** Human-readable summary for stub responses and docs (no secrets). */
export function describeCheckoutSessionShape(sku: CommerceSku): {
  mode: CheckoutMode;
  priceId: string;
  notes: string[];
} {
  const entry = STRIPE_CATALOG[sku];
  const notes = [
    "automatic_tax.enabled=true",
    "prices tax_behavior=exclusive (on Price objects)",
    "billing_address_collection=required",
    "tax_id_collection.enabled=true",
    "allow_promotion_codes=false",
    `success_url=${CHECKOUT_RETURN_URLS.success}`,
    `cancel_url=${CHECKOUT_RETURN_URLS.cancel}`,
  ];

  if (entry.customAmount) {
    return {
      mode: "payment",
      priceId: entry.priceId,
      notes: [
        ...notes,
        "line_items: { price, quantity: 1 } only — custom_unit_amount on Price; no unit_amount on line_item",
        `Checkout amount picker enforces $${CREDITS_AMOUNT_MIN_CENTS / 100}–$${CREDITS_AMOUNT_MAX_CENTS / 100} (Price + UI config)`,
        "wallet 60% is app entitlement copy — not Checkout math",
      ],
    };
  }

  if (sku === "app") {
    return { mode: "payment", priceId: entry.priceId, notes };
  }

  return {
    mode: "subscription",
    priceId: entry.priceId,
    notes: [...notes, "one recurring cadence price per session"],
  };
}
