# Site merge gate

Plain-language loop for Skyy. This is the marketing site only — not a Mythos-Writer product gate. No Critic / Shield / Probe.

## What happens

1. Open a PR against `main`. Keep it **draft** until you want it reviewed.
2. GitHub Actions runs the **`ci`** check (`lint`, `typecheck`, static `build`). Pages is **not** deployed from this workflow.
3. Copilot / Bugbot can review. Their comments are useful. They are **not** allowed to approve a merge.
4. When the tip is green, **SkyyPlayz** or **SkyHigh-Mythos-Bot (Rivet)** leaves an **APPROVE** on that exact commit.
5. Add the **`site-merge-ok`** label when you want the gate to squash-merge.
6. The site gate squash-merges if — and only if — every fail-closed check passes. It comments with `<!-- site-gate-auto-merge -->`.

The gate re-checks after **CI succeeds**, after **`site-merge-ok` / ready / new commits**, or after a **human PR comment** (not the gate’s own marker). It does **not** run from the PR branch, so a PR cannot rewrite the workflow and still receive `SITE_BOT_TOKEN`.

`deploy.yml` still ships GitHub Pages **only** on push to `main`.

## Fail-closed rules

The gate will **not** merge if any of these are true:

- The PR is a draft
- The author is Dependabot
- The base branch is not `main`
- Label `site-merge-ok` is missing
- Check name **`ci`** is missing or not green on the tip SHA
- There is no **APPROVE** on that tip from `SkyyPlayz` or `SkyHigh-Mythos-Bot` (a later comment review does not hide an approve; changes-requested does)
- The tip moved since the gate started (squash uses the head SHA)
- The PR is already merged or closed (the success comment is left alone)

`cursor[bot]` and Copilot are never trusted merge authority.

## Secrets and branch protection

Auto-merge needs a token that can merge into `main`.

- Preferred: repo secret **`SITE_BOT_TOKEN`** (a PAT or bot token that is not blocked by branch protection).
- Fallback: `GITHUB_TOKEN` (often cannot merge if admins are enforced).

On `main`, branch protection should:

- Require the status check named **`ci`**
- **Enforce admins**
- Dismiss stale reviews on new pushes (so APPROVE must be on the tip)

Until `SITE_BOT_TOKEN` is set, the gate may skip with a merge-permission error. That is expected.

## Files

- `.github/workflows/ci.yml` — the `ci` check
- `.github/workflows/shitechworks-gate-auto-merge.yml` — this gate
- `.github/workflows/deploy.yml` — Pages on `main` only
