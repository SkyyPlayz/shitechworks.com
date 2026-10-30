# Compliance notes — shitechworks.com

Coming-soon marketing site for Mythos Writer. This is not lawyer-certified text.
It records what the site actually does today and what the owner still must fill in.

## Cookie / tracker audit (2026-10-29)

- No Google Analytics, gtag, pixels, or advertising cookies on the live site.
- **Analytics:** Cloudflare Web Analytics (cookieless, aggregate page views), loaded
  **only after Accept**. The site token comes from `NEXT_PUBLIC_CF_BEACON_TOKEN` at build
  time; empty = nothing loads. Beacon: `https://static.cloudflareinsights.com/beacon.min.js`.
- Fonts are self-hosted via `next/font` (Lora + Inter).
- `/preview/` loads a first-party HTML mockup in an iframe on this domain. The mockup
  now self-hosts Inter, Lora, React/ReactDOM and Babel under `public/preview/` — no
  Google Fonts or unpkg requests.
- No signup form, checkout, or account.

**Consent banner:** in place. Accept and Reject have equal weight. Nothing third-party
loads before Accept. Reject blocks the beacon. `navigator.globalPrivacyControl === true`
counts as an automatic Reject (the beacon never loads, no prompt). The choice is stored
in `localStorage` under `site-consent`. The footer **Cookie settings** link reopens the
banner. The [Cookies Policy](/cookies/) and [Privacy Policy](/privacy/) describe this.

**Observed live storage:**

| Kind | Key | Notes |
| --- | --- | --- |
| Cookie | `__cf_ob` | Cloudflare security cookie — strictly necessary, not blocked by the banner. |
| Cookie | `cf_clearance` | Cloudflare bot/challenge clearance — strictly necessary. |
| sessionStorage | `_cfPre_tabId` | Observed; appears Cloudflare-set, origin unconfirmed. Not named on the public pages yet. |
| localStorage | `mythos-site-theme` | Theme choice (first-party). |
| localStorage | `mythos-demo-v1` | `/preview/` mockup demo state (first-party). |
| localStorage | `site-consent` | Analytics choice: `accepted` / `rejected` (first-party). |

**Service providers** (named on `/privacy/` and `/cookies/` with policy links):
GitHub Pages (GitHub, Inc.) hosts the static export; Cloudflare, Inc. sits in front for
CDN/security and Web Analytics (if accepted). They process IP address, browser details,
and pages requested.

**Privacy / Cookies wording:** based on Jorgen's draft (2026-10-29), pending Skyy's yes
and lawyer review. Both pages show "Draft – pending legal review" and "Last updated
29 October 2026". Terms and Refunds keep 18 September 2026.

**Open lawyer questions:**

1. EU/UK: is cookieless Cloudflare Web Analytics behind Accept enough, or does it need
   different wording or treatment there?
2. Is the short state privacy rights section (no sell/share; know, access, correct,
   delete via Support@; no discrimination) sufficient for CCPA/CPRA and similar laws?
3. GPC line: the pages only say GPC is treated as a Reject. Confirm that is enough.
4. When review is done, remove the "Draft – pending legal review" label
   (`LEGAL_DRAFT_SLUGS` in `lib/legal.ts`) and update the dates.

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
4. Set the Cloudflare Web Analytics site token as `NEXT_PUBLIC_CF_BEACON_TOKEN` in the
   build environment (see the TODO in `lib/consent.ts`). Until then, nothing loads even
   after Accept. Any new analytics, ads, or third-party embeds must go behind the
   consent banner, with a Cookies/Privacy update.
5. If you add a real form: unchecked opt-in, not a pre-ticked box.
6. Add reviews only from real customers after sales exist.

## Do not

- Invent EIN, registered agent, or a street address.
- Invent a state court or certified “venue” clause.
- Add fake reviews or “customers say” quotes.
- Link the Mythos Writer repo, releases, or downloads.
- Treat this file as legal advice.
