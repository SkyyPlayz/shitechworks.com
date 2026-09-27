/**
 * Stripe catalog reference — SERVER-SIDE ONLY.
 *
 * Import from Cloudflare Pages Functions (or other server runtimes), never from client
 * components. Price IDs must not appear in static HTML or client bundles.
 *
 * Live products are currently active=false in Stripe. This file is prep for Checkout Session
 * creation when `COMMERCE_ENABLED` is true.
 *
 * Account: acct_1UJy7LIGfxFJM2xL (live). Sandbox drills: acct_1UJy7WIxwOjHrMkK.
 */

export type CommerceSku =
  | "app"
  | "spark_monthly"
  | "spark_quarterly"
  | "spark_yearly"
  | "writer_monthly"
  | "writer_quarterly"
  | "writer_yearly"
  | "studio_monthly"
  | "studio_quarterly"
  | "studio_yearly"
  | "credits";

export type CatalogEntry = {
  sku: CommerceSku;
  productId: string;
  priceId: string;
  /** Custom amount checkout (Buy Credits). */
  customAmount?: boolean;
};

export const STRIPE_CATALOG: Record<CommerceSku, CatalogEntry> = {
  app: {
    sku: "app",
    productId: "prod_VKm2yS91N6iToE",
    priceId: "price_1UK6UqIGfxFJM2xLlqZgfqTd",
  },
  spark_monthly: {
    sku: "spark_monthly",
    productId: "prod_VKm3y5JFZa9wm1",
    priceId: "price_1UK6UwIGfxFJM2xLNNfwkV4R",
  },
  spark_quarterly: {
    sku: "spark_quarterly",
    productId: "prod_VKm3y5JFZa9wm1",
    priceId: "price_1UK6V5IGfxFJM2xLFafFo8jS",
  },
  spark_yearly: {
    sku: "spark_yearly",
    productId: "prod_VKm3y5JFZa9wm1",
    priceId: "price_1UK6V6IGfxFJM2xLCcQd8Y4i",
  },
  writer_monthly: {
    sku: "writer_monthly",
    productId: "prod_VKm3XGnWxKhDV5",
    priceId: "price_1UK6UyIGfxFJM2xLBBzLBgL3",
  },
  writer_quarterly: {
    sku: "writer_quarterly",
    productId: "prod_VKm3XGnWxKhDV5",
    priceId: "price_1UK6V6IGfxFJM2xLjKjTj0rW",
  },
  writer_yearly: {
    sku: "writer_yearly",
    productId: "prod_VKm3XGnWxKhDV5",
    priceId: "price_1UK6V7IGfxFJM2xLkGIBeXJi",
  },
  studio_monthly: {
    sku: "studio_monthly",
    productId: "prod_VKm343Xgw6KsKP",
    priceId: "price_1UK6UzIGfxFJM2xLcdMZivpc",
  },
  studio_quarterly: {
    sku: "studio_quarterly",
    productId: "prod_VKm343Xgw6KsKP",
    priceId: "price_1UK6V8IGfxFJM2xLhmWGGCrT",
  },
  studio_yearly: {
    sku: "studio_yearly",
    productId: "prod_VKm343Xgw6KsKP",
    priceId: "price_1UK6V9IGfxFJM2xLxmEABKty",
  },
  credits: {
    sku: "credits",
    productId: "prod_VKm3hoaXajOkNH",
    priceId: "price_1UK6V0IGfxFJM2xLlUuMtbVH",
    customAmount: true,
  },
};

/** Buy Credits: custom $10–$200. Wallet pass-through is 60% of customer pay (launch copy). */
export const CREDITS_AMOUNT_MIN_CENTS = 1000;
export const CREDITS_AMOUNT_MAX_CENTS = 20000;
export const CREDITS_WALLET_RATIO = 0.6;

export function isCommerceSku(value: string): value is CommerceSku {
  return value in STRIPE_CATALOG;
}
