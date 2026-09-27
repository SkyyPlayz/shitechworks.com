/**
 * Mythos Writer desktop-app releases only.
 * List newest first. The feed renders this order, top to bottom.
 * Do not add site deploys, pull requests, or tip SHAs.
 * Leave this empty until the first public beta — the page keeps the feed row
 * and shows the stub in place of a release.
 */
export type ChangelogGroup = {
  heading: string;
  items: readonly string[];
};

export type ChangelogEntry = {
  /** Display version, e.g. "v0.5.3". */
  version: string;
  /** Display date, e.g. "Sep 26, 2026". */
  date: string;
  /** ISO date for <time dateTime>, e.g. "2026-09-26". */
  dateTime: string;
  title: string;
  lede: string;
  groups: readonly ChangelogGroup[];
};

export const APP_RELEASES: readonly ChangelogEntry[] = [];
