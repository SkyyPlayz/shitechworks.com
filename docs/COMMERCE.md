# Commerce prep (kill switch off)

**Status:** PREP ONLY — storefront shells on `/store/`. No live checkout. No Payment Links.
Stripe products are `active=false` in the Dashboard. Portal login page stays **off** until launch.

## Kill switch

| Surface | Variable | Default | Effect when false |
|---------|----------|---------|-------------------|
| Static site (Next.js build) | `NEXT_PUBLIC_COMMERCE_ENABLED` | unset / `false` | Coming-soon shells; no buy buttons |
| Cloudflare Pages Function | `COMMERCE_ENABLED` | unset / `false` | `POST /api/checkout/session` → **503** |

Source of truth for the marketing site: `lib/site-config.ts` (`COMMERCE_ENABLED`).

The Function **must refuse** session create when the kill switch is off (503 `commerce_disabled`).

## Portal URLs (FM-confirmed — align Stripe Dashboard + site stubs)

| Purpose | URL |
|---------|-----|
| Privacy | `https://shitechworks.com/privacy` |
| Terms | `https://shitechworks.com/terms` |
| Refunds (site policy) | `https://shitechworks.com/refunds` |
| Default return / manage billing | `https://shitechworks.com/store/account/` |

- Use **`/store/account/`** — not `/mythos/account`.
- Portal config prep id: `bpc_1UK6VlIGfxFJM2xLsGoLeWif` (login page disabled until launch).
- `/store/account/` is a **stub only** while portal login is off.

Constants: `lib/commerce-checkout.ts` → `PORTAL_URLS`, `STRIPE_PORTAL_CONFIG_ID`.

## Checkout Session shape (Prebuilt; Function only when `COMMERCE_ENABLED`)

Implemented in `lib/commerce-checkout.ts` → `buildCheckoutSessionCreateParams()`.
Wired in `functions/api/checkout/session.ts` (returns **503** when off; **501** stub when on).

### Common (all SKUs)

| Field | Value |
|-------|-------|
| `automatic_tax.enabled` | `true` |
| Price `tax_behavior` | `exclusive` (on Stripe Price objects) |
| `billing_address_collection` | `required` |
| `tax_id_collection.enabled` | `true` |
| `allow_promotion_codes` | `false` (v1) |
| `success_url` | `https://shitechworks.com/store/checkout/success?session_id={CHECKOUT_SESSION_ID}` |
| `cancel_url` | `https://shitechworks.com/store/checkout/cancel` |

No Payment Links. No live keys in git.

### Per SKU

| SKU family | `mode` | Price | Notes |
|------------|--------|-------|-------|
| **App** (`app`) | `payment` | `price_1UK6UqIGfxFJM2xLlqZgfqTd` | One-time $33.33 |
| **Plans** (`spark_*`, `writer_*`, `studio_*`) | `subscription` | One recurring cadence price per session | Monthly / quarterly / yearly price ids in `commerce-catalog.ts` |
| **Credits** (`credits`) | `payment` | `price_1UK6V0IGfxFJM2xLlUuMtbVH` | `line_items: { price, quantity: 1 }` only — Price has `custom_unit_amount`; Checkout amount picker enforces **$10–$200** (do not set `unit_amount` on the line_item) |

**Credits amount:** $10–$200 is enforced by Stripe Checkout UI + Price `custom_unit_amount` config — not by `amountCents` on the API stub. Validate `amountCents` server-side only if we later switch to `price_data`.

**Credits wallet rule:** 60% of customer pay → AI wallet is **app entitlement copy only**, not Checkout math.

### Stub pages (static)

| Route | Role |
|-------|------|
| `/store/checkout/success/` | Checkout success return (`session_id` query when live) |
| `/store/checkout/cancel/` | Checkout cancel return |
| `/store/account/` | Customer Portal default return (stub until portal login on) |

## Launch checklist (Skyy / FM)

1. Set Stripe products **active**; confirm Tax + Managed Payments in Dashboard.
2. Enable Customer Portal **login page** when ready.
3. Set portal privacy / terms / return URLs to `PORTAL_URLS` values above.
4. Set `COMMERCE_ENABLED=true` and `STRIPE_SECRET_KEY` in **Cloudflare** (never commit).
5. Set `NEXT_PUBLIC_COMMERCE_ENABLED=true` on the **site build**.
6. Replace 501 stub in `functions/api/checkout/session.ts` with `stripe.checkout.sessions.create(...)`.
7. Deploy static export **and** Pages Function on Cloudflare (GitHub Pages alone cannot run the API).
8. Smoke-test success / cancel / account return URLs.

## Stripe catalog (server-side only)

Price and product IDs live in `lib/commerce-catalog.ts`. Import only from server/Functions code —
not from client components. Do not embed IDs as clickable links in static HTML.

## Store sections (prep shells)

| Section | Route anchor | Notes |
|---------|--------------|-------|
| App license | `/store/#app` | $33.33 one-time, tax exclusive |
| AI plans | `/store/#plans` | Spark / Writer / Studio · monthly, quarterly (−6%), yearly (−16%) |
| Buy credits | `/store/#credits` | Custom $10–$200 |
| Portal return | `/store/account/` | Stub until portal login enabled |

## GitHub Pages vs Cloudflare

Today CI deploys a **static export** to GitHub Pages. The checkout API stub under `functions/` does
not run there. At launch, point `shitechworks.com` at Cloudflare Pages with Functions enabled.

## Env template

See `.env.example` for variable names only — no secrets in git.
