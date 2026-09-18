# Compliance notes — shitechworks.com

Coming-soon marketing site for Mythos Writer. This is not lawyer-certified text.
It records what the site actually does today and what the owner still must fill in.

## Cookie / tracker audit (2026-09-18)

- No Google Analytics, gtag, pixels, or other third-party trackers.
- Fonts are self-hosted via `next/font` (Lora + Inter).
- `/preview/` loads a first-party HTML mockup in an iframe on this domain.
- Theme choice is stored in first-party `localStorage` under `mythos-site-theme`.
- No signup form, checkout, or account.

**Consent banner:** skipped. There are no non-essential cookies to accept or reject.
The [Cookies Policy](/cookies/) says so. If analytics or third-party embeds are added
later, add a consent choice *before* those scripts run, and update that page.

## What this pass added

- Legal routes: `/privacy/`, `/terms/`, `/cookies/`, `/refunds/` (nav, footer, sitemap).
- Honest coming-soon copy: not sold yet; preview is a concept, not the shipping app.
- Placeholders for owner facts: `[BUSINESS LEGAL NAME]`, `[ADDRESS]`.
- Interim contact: `hello@shitechworks.com` (same as the waitlist mailto).
- Refunds: nothing to refund today; future website / Microsoft Store / Steam purchases
  follow those stores plus this policy once it is rewritten for a live shop.
- Waitlist mailto buttons: consent line + Privacy link. No real form exists, so no
  checkbox opt-in was added.
- Privacy: data minimization — we only receive what someone emails us; no account.
- Accessibility: meaningful image alt text; decorative logo `alt=""`; `text-dim` hero
  suffix moved to `text-muted`; theme radios 44×44px; FAQ controls have names and
  `aria-expanded`; global `:focus-visible` neon ring kept.
- Claims: no testimonials. Feature copy stays Ivy-approved and labeled coming soon.
  Softened the features heading so it does not read as a proven market claim.

## Owner TODOs (do not invent these)

Replace the amber / mono placeholders on Privacy, Terms, Refunds, and the footer:

1. `[BUSINESS LEGAL NAME]` — the legal person, not just the brand “Sky High Infinite Techwork”.
2. `[ADDRESS]` — a real postal address if the law you choose requires one.
3. Confirm `[CONTACT EMAIL]` stays `hello@shitechworks.com`, or change `CONTACT_EMAIL`
   in `lib/legal.ts` and the waitlist mailto in `lib/site.ts` together.
4. Governing law / venue — name them only after counsel reviews. Do not pick a state
   or country in the copy until the entity exists.
5. Before the first paid listing: rewrite Refunds (windows, exceptions, store vs
   website), and add checkout / tax language to Terms.
6. If you add analytics, ads, or third-party embeds: consent banner + Cookies update.
7. If you add a real form: unchecked opt-in, not a pre-ticked box.

## Do not

- Invent EIN, registered agent, or jurisdiction-specific certified clauses.
- Add fake reviews or “customers say” quotes.
- Link the Mythos Writer repo, releases, or downloads.
- Treat this file as legal advice.
