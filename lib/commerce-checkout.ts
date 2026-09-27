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

function creditsLineItem(priceId: string, amountCents: number) {
  return [
    {
      price: priceId,
      quantity: 1,
      /** Custom unit amount on the Buy Credits price; tax_behavior is exclusive on the Price object. */
      unit_amount: amountCents,
    },
  ];
}

/**
 * Build the Stripe Checkout Session create payload for a catalog SKU.
 * Caller POSTs to Stripe with STRIPE_SECRET_KEY when commerce is enabled.
 */
export function buildCheckoutSessionCreateParams(
  sku: CommerceSku,
  options?: { amountCents?: number },
): CheckoutSessionCreateParams {
  const entry = STRIPE_CATALOG[sku];

  if (entry.customAmount) {
    const cents = options?.amountCents;
    if (
      typeof cents !== "number" ||
      !Number.isInteger(cents) ||
      cents < CREDITS_AMOUNT_MIN_CENTS ||
      cents > CREDITS_AMOUNT_MAX_CENTS
    ) {
      throw new RangeError(
        `Credits amount must be ${CREDITS_AMOUNT_MIN_CENTS}–${CREDITS_AMOUNT_MAX_CENTS} cents.`,
      );
    }

    return {
      ...CHECKOUT_SESSION_COMMON,
      mode: "payment",
      line_items: creditsLineItem(entry.priceId, cents),
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
        `custom unit amount $${CREDITS_AMOUNT_MIN_CENTS / 100}–$${CREDITS_AMOUNT_MAX_CENTS / 100} on Buy Credits price`,
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
