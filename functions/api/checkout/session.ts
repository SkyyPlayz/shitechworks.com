/**
 * Cloudflare Pages Function — Stripe Prebuilt Checkout Session creator (stub).
 *
 * Deploy with Cloudflare Pages (not GitHub Pages static export). Wire env in the dashboard:
 *   COMMERCE_ENABLED=false   — kill switch; returns 503 while prep (default)
 *   STRIPE_SECRET_KEY        — live secret; never commit
 *
 * POST /api/checkout/session
 * Body: { "sku": "<commerce-sku>" }
 *
 * When commerce is enabled, POST the shape from buildCheckoutSessionCreateParams() to
 * Stripe Checkout Sessions API. No Payment Links.
 */

import {
  buildCheckoutSessionCreateParams,
  describeCheckoutSessionShape,
} from "../../../lib/commerce-checkout";
import { isCommerceSku, STRIPE_CATALOG } from "../../../lib/commerce-catalog";

type CheckoutEnv = {
  COMMERCE_ENABLED?: string;
  /** Set in Cloudflare only — e.g. sk_live_... */
  STRIPE_SECRET_KEY?: string;
};

type PagesContext = {
  request: Request;
  env: CheckoutEnv;
};

function json(status: number, body: Record<string, unknown>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function commerceEnabled(env: CheckoutEnv): boolean {
  return env.COMMERCE_ENABLED === "true";
}

export async function onRequestPost(context: PagesContext): Promise<Response> {
  if (!commerceEnabled(context.env)) {
    return json(503, {
      error: "commerce_disabled",
      message: "Checkout is not open yet. The store is in prep mode.",
    });
  }

  if (!context.env.STRIPE_SECRET_KEY) {
    return json(503, {
      error: "checkout_unconfigured",
      message: "Checkout is not configured. Add STRIPE_SECRET_KEY in Cloudflare.",
    });
  }

  let parsed: unknown;
  try {
    parsed = await context.request.json();
  } catch {
    return json(400, { error: "invalid_json", message: "Request body must be JSON." });
  }

  if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed)) {
    return json(400, { error: "invalid_json", message: "Request body must be a JSON object." });
  }

  const sku = (parsed as { sku?: unknown }).sku;
  if (typeof sku !== "string" || !isCommerceSku(sku)) {
    return json(400, { error: "invalid_sku", message: "Unknown or missing sku." });
  }

  const entry = STRIPE_CATALOG[sku];
  const sessionParams = buildCheckoutSessionCreateParams(sku);

  const shape = describeCheckoutSessionShape(sku);

  // TODO(launch): stripe.checkout.sessions.create(sessionParams) — never log STRIPE_SECRET_KEY or PII.
  // Portal (login off until launch): privacy/terms → PORTAL_URLS; return → /store/account/
  // Refunds policy for buyers: PORTAL_URLS.refunds (site route; not passed to Checkout create).

  return json(501, {
    error: "checkout_not_implemented",
    message: "Checkout session creation is stubbed. Wire Stripe SDK at launch.",
    sku: entry.sku,
    mode: shape.mode,
    priceId: shape.priceId,
    sessionCreate: sessionParams,
    shapeNotes: shape.notes,
  });
}
