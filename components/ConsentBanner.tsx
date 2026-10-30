"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  CONSENT_OPEN_EVENT,
  hasGlobalPrivacyControl,
  isBeaconLoaded,
  loadBeacon,
  readConsent,
  removeBeacon,
  writeConsent,
  type ConsentChoice,
} from "@/lib/consent";
import { COOKIES_ROUTE } from "@/lib/legal";

export function ConsentBanner() {
  const [open, setOpen] = useState(false);
  const [reopened, setReopened] = useState(false);
  const [gpc, setGpc] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (hasGlobalPrivacyControl()) {
      setGpc(true);
      return;
    }
    const stored = readConsent();
    if (stored === "accepted") loadBeacon();
    else if (stored === null) setOpen(true);
  }, []);

  useEffect(() => {
    function onOpen(event: Event) {
      const opener = (event as CustomEvent<{ opener?: unknown }>).detail?.opener;
      openerRef.current =
        opener instanceof HTMLElement
          ? opener
          : document.activeElement instanceof HTMLElement
            ? document.activeElement
            : null;
      setGpc(hasGlobalPrivacyControl());
      setReopened(true);
      setOpen(true);
    }
    window.addEventListener(CONSENT_OPEN_EVENT, onOpen);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (open && reopened) headingRef.current?.focus();
  }, [open, reopened]);

  // Reserve room under the page so the fixed banner never hides the footer or focused links.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!open || !dialog) return;
    const body = document.body;
    const sync = () => {
      body.style.paddingBottom = `${dialog.offsetHeight + 24}px`;
    };
    sync();
    const observer = new ResizeObserver(sync);
    observer.observe(dialog);
    return () => {
      observer.disconnect();
      body.style.paddingBottom = "";
    };
  }, [open]);

  const close = useCallback(() => {
    setOpen(false);
    if (reopened) {
      setReopened(false);
      openerRef.current?.focus();
      openerRef.current = null;
    }
  }, [reopened]);

  function choose(choice: ConsentChoice) {
    const saved = writeConsent(choice);
    if (choice === "accepted") {
      loadBeacon();
    } else if (isBeaconLoaded()) {
      // A running beacon can't be unloaded; reload so this page view is analytics-free.
      if (saved) {
        window.location.reload();
        return;
      }
      removeBeacon();
    }
    close();
  }

  if (!open) return null;

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="false"
      aria-labelledby="consent-title"
      aria-describedby="consent-desc"
      className="consent"
      onKeyDown={(event) => {
        if (event.key === "Escape" && (reopened || gpc)) {
          event.stopPropagation();
          close();
        }
      }}
    >
      <h2 id="consent-title" ref={headingRef} tabIndex={-1} className="consent-title">
        Analytics choice
      </h2>
      {gpc ? (
        <p id="consent-desc" className="consent-copy">
          Your browser&apos;s Global Privacy Control signal is on, so Cloudflare Web Analytics
          stays off. <Link href={COOKIES_ROUTE}>Cookies Policy</Link>
        </p>
      ) : (
        <p id="consent-desc" className="consent-copy">
          We&apos;d like to use Cloudflare Web Analytics — cookieless, aggregate page counts. It
          loads only if you accept; Reject keeps it off.{" "}
          <Link href={COOKIES_ROUTE}>Cookies Policy</Link>
        </p>
      )}
      <div className="consent-actions">
        {gpc ? (
          <button type="button" className="consent-btn" onClick={close}>
            Close
          </button>
        ) : (
          <>
            <button type="button" className="consent-btn" onClick={() => choose("rejected")}>
              Reject
            </button>
            <button type="button" className="consent-btn" onClick={() => choose("accepted")}>
              Accept
            </button>
          </>
        )}
      </div>
    </div>
  );
}
