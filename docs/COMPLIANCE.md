# Compliance notes — shitechworks.com

Coming-soon marketing site for Mythos Writer. This is not lawyer-certified text.
It records what the site actually does today and what the owner still must fill in.

## Cookie / tracker audit (2026-09-18)

- No Google Analytics, gtag, pixels, or other third-party trackers on the live site.
- Fonts are self-hosted via `next/font` (Lora + Inter).
- `/preview/` loads a first-party HTML mockup in an iframe on this domain.
- Theme choice is stored in first-party `localStorage` under `mythos-site-theme`.
- No signup form, checkout, or account.

**Consent banner:** skipped. There are no non-essential cookies to accept or reject.
The [Cookies Policy](/cookies/) says so. If analytics or third-party embeds are added
later, add a consent choice *before* those scripts run, and update that page.

## Owner facts on the site

- Legal entity: **SKY HIGH INFINITE TECHWORK LLC** (brand: Sky High Infinite Techwork).
- Public email: **Support@shitechworks.com** — used for contact and the waitlist mailto.
- Postal address: **`[ADDRESS — private]`**. Do not commit a street address until the
  owner shares one for publication.
- Market: **United States first**; other countries later. Governing law is United States
  law as it applies to the LLC. No specific state court is named.
- Refunds (intent, not a live shop): about **30-day no-questions-asked** on an app
  purchase; subscriptions (when offered) **1-week refund if canceled in the first week,
  first time only**. Website / Microsoft Store / Steam rules may also apply.
- Reviews: **do not add testimonials** until real sales reviews exist.

## What this pass added

- Legal routes: `/privacy/`, `/terms/`, `/cookies/`, `/refunds/` (nav, footer, sitemap).
- Honest coming-soon copy: not sold yet; preview is a concept, not the shipping app.
- Waitlist mailto buttons: consent line + Privacy link. No real form exists, so no
  checkbox opt-in was added.
- Privacy: data minimization — we only receive what someone emails us; no account.
- Accessibility: meaningful image alt text; decorative logo `alt=""`; `text-dim` hero
  suffix moved to `text-muted`; theme radios 44×44px; FAQ controls have names and
  `aria-expanded`; global `:focus-visible` neon ring kept.
- Claims: no testimonials. Feature copy stays Ivy-approved and labeled coming soon.

## Claude Design / AI-generated assets

`public/preview/` includes Claude Design HTML (and related chrome). Anthropic’s consumer
and commercial terms generally allow commercial use of model outputs. AI-generated
assets may still have **limited copyright protection**. Treat human-authored brand
work (tokens, logo, official mockups the studio signed off) as the source of truth.
This paragraph is a reminder, not legal advice.

## Owner TODOs

1. Publish a postal address only when you want it on the public site — keep
   `[ADDRESS — private]` until then. Do not invent one.
2. Name a specific state or venue only if counsel asks for it. The site currently says
   United States / LLC, without a state court.
3. Before the first paid listing: confirm refund how-to steps, tax/checkout language
   on Terms, and whether storefront rules need a more specific order of precedence.
4. If you add analytics, ads, or third-party embeds: consent banner + Cookies update.
5. If you add a real form: unchecked opt-in, not a pre-ticked box.
6. Add reviews only from real customers after sales exist.

## Do not

- Invent EIN, registered agent, or a street address.
- Invent a state court or certified “venue” clause.
- Add fake reviews or “customers say” quotes.
- Link the Mythos Writer repo, releases, or downloads.
- Treat this file as legal advice.
