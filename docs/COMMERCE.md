# Commerce prep (kill switch off)

**Status:** PREP ONLY — storefront shells on `/store/`. No live checkout. Stripe products are
`active=false` in the Dashboard.

## Kill switch

| Surface | Variable | Default | Effect when false |
|---------|----------|---------|-------------------|
| Static site (Next.js build) | `NEXT_PUBLIC_COMMERCE_ENABLED` | unset / `false` | Coming-soon shells; no buy buttons |
| Cloudflare Pages Function | `COMMERCE_ENABLED` | unset / `false` | `POST /api/checkout/session` → **503** |

Source of truth for the marketing site: `lib/site-config.ts` (`COMMERCE_ENABLED`).

## Launch checklist (Skyy / FM)

1. Set Stripe products **active** and confirm Tax + Managed Payments in Dashboard.
2. Enable Customer Portal login when ready (`bpc_…` config).
3. Set `COMMERCE_ENABLED=true` and `STRIPE_SECRET_KEY` in **Cloudflare** (never commit).
4. Set `NEXT_PUBLIC_COMMERCE_ENABLED=true` on the **site build** (GitHub Actions or Cloudflare).
5. Implement Checkout Session creation in `functions/api/checkout/session.ts` (stub returns 501 today).
6. Deploy static export **and** the Pages Function on a host that runs both (Cloudflare Pages recommended).
7. Smoke-test success (`/store/checkout/success/`) and cancel (`/store/checkout/cancel/`) return URLs.

## Stripe catalog (server-side only)

Price and product IDs live in `lib/commerce-catalog.ts`. Import only from server/Functions code —
not from client components. Do not embed IDs as clickable links in static HTML.

## Store sections (prep shells)

| Section | Route anchor | Notes |
|---------|--------------|-------|
| App license | `/store/#app` | $33.33 one-time, tax exclusive |
| AI plans | `/store/#plans` | Spark / Writer / Studio · monthly, quarterly (−6%), yearly (−16%) |
| Buy credits | `/store/#credits` | Custom $10–$200; wallet ratio 0.60 documented for launch |
| Portal return | `/store/account/` | Placeholder until portal login enabled |

Legal links: `/privacy/`, `/terms/`, `/refunds/`.

## GitHub Pages vs Cloudflare

Today CI deploys a **static export** to GitHub Pages. The checkout API stub under `functions/` does
not run there. At launch, point `shitechworks.com` (or a subdomain) at Cloudflare Pages with
Functions enabled, or proxy `/api/checkout/*` to a Worker.

## Env template

See `.env.example` for variable names only — no secrets in git.
