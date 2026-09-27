/**
 * Commerce kill switch — single source of truth for the static marketing site.
 *
 * Launch checklist:
 * 1. Set `NEXT_PUBLIC_COMMERCE_ENABLED=true` at build time (GitHub Actions env / Pages build).
 * 2. Set `COMMERCE_ENABLED=true` on the Cloudflare Pages Function that creates Checkout Sessions.
 * 3. Add `STRIPE_SECRET_KEY` to Cloudflare (never commit). Price IDs live in `commerce-catalog.ts`.
 * 4. Confirm Stripe products are active and portal login is enabled in the Stripe Dashboard.
 * 5. Rebuild and deploy. Buy buttons call `/api/checkout/session` — not live on GitHub Pages alone.
 *
 * While false: store shells stay "coming soon"; no checkout URLs in HTML; the API stub returns 503.
 */
export const COMMERCE_ENABLED =
  process.env.NEXT_PUBLIC_COMMERCE_ENABLED === "true" ||
  process.env.COMMERCE_ENABLED === "true";

/** Checkout API path (Cloudflare Pages Function when wired). */
export const CHECKOUT_SESSION_API = "/api/checkout/session";

/** Site routes (Next.js trailingSlash). Stripe uses canonical URLs in `commerce-checkout.ts`. */
export const CHECKOUT_SUCCESS_ROUTE = "/store/checkout/success/";
export const CHECKOUT_CANCEL_ROUTE = "/store/checkout/cancel/";
export const STORE_ACCOUNT_ROUTE = "/store/account/";
