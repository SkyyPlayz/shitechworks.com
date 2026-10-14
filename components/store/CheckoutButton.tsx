"use client";

import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import {
  acquireCheckoutLock,
  getCheckoutOwner,
  releaseCheckoutLock,
  requestCheckoutSession,
  subscribeCheckoutLock,
} from "@/lib/checkout-client";
import { CHECKOUT_STATUS } from "@/lib/checkout-status";

type CheckoutIntent = "buy" | "subscribe";

type Phase =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "redirecting" }
  | { kind: "error"; message: string };

const IDLE_LABEL: Record<CheckoutIntent, string> = {
  buy: "Buy",
  subscribe: "Subscribe",
};

function busyLabel(phase: Phase): string | null {
  switch (phase.kind) {
    case "idle":
    case "error":
      return null;
    case "loading":
      return CHECKOUT_STATUS.loading;
    case "redirecting":
      return CHECKOUT_STATUS.redirecting;
    default: {
      const unreachable: never = phase;
      return unreachable;
    }
  }
}

function liveStatus(phase: Phase): string {
  switch (phase.kind) {
    case "idle":
      return "";
    case "loading":
      return CHECKOUT_STATUS.loading;
    case "redirecting":
      return CHECKOUT_STATUS.redirecting;
    case "error":
      return phase.message;
    default: {
      const unreachable: never = phase;
      return unreachable;
    }
  }
}

function CheckoutSpinner() {
  return (
    <span
      aria-hidden="true"
      className="inline-block size-4 shrink-0 animate-spin rounded-full border-2 border-current border-t-transparent motion-reduce:animate-none"
    />
  );
}

export function CheckoutButton({
  sku,
  intent,
  accessibleName,
  align = "center",
}: {
  sku: string;
  intent: CheckoutIntent;
  accessibleName: string;
  align?: "center" | "start";
}) {
  const statusId = useId();
  const retryRef = useRef<HTMLButtonElement>(null);
  const mounted = useRef(true);
  const inFlight = useRef(false);
  const [phase, setPhase] = useState<Phase>({ kind: "idle" });
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);
  const owner = useSyncExternalStore(subscribeCheckoutLock, getCheckoutOwner, () => null);
  const mine = owner === sku;

  useEffect(() => {
    mounted.current = true;
    const onPageShow = (event: PageTransitionEvent) => {
      if (!event.persisted) return;
      inFlight.current = false;
      setRedirectUrl(null);
      releaseCheckoutLock();
      setPhase({ kind: "idle" });
    };
    window.addEventListener("pageshow", onPageShow);
    return () => {
      mounted.current = false;
      window.removeEventListener("pageshow", onPageShow);
    };
  }, []);

  useEffect(() => {
    if (!redirectUrl) return;
    const frame = window.requestAnimationFrame(() => {
      window.location.assign(redirectUrl);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [redirectUrl]);

  useEffect(() => {
    if (phase.kind === "error") retryRef.current?.focus();
  }, [phase]);

  async function startCheckout() {
    if (inFlight.current) return;
    if (!acquireCheckoutLock(sku)) return;
    inFlight.current = true;
    setRedirectUrl(null);
    setPhase({ kind: "loading" });

    const result = await requestCheckoutSession(sku);
    if (!mounted.current) {
      inFlight.current = false;
      releaseCheckoutLock();
      return;
    }
    if (!result.ok) {
      inFlight.current = false;
      releaseCheckoutLock();
      setPhase({ kind: "error", message: result.message });
      return;
    }

    setPhase({ kind: "redirecting" });
    setRedirectUrl(result.url);
  }

  const shown: Phase =
    phase.kind === "redirecting"
      ? phase
      : phase.kind === "error"
        ? phase
        : mine
          ? { kind: "loading" }
          : phase;
  const label = busyLabel(shown);
  const status = liveStatus(shown);
  const busy = shown.kind === "loading" || shown.kind === "redirecting";
  const blocked = owner !== null && !mine;
  const primaryDisabled = busy || phase.kind === "error" || blocked;
  const alignment =
    align === "center"
      ? "items-center text-center"
      : "items-start text-left";

  return (
    <div className={["flex flex-col gap-3", alignment].join(" ")}>
      <button
        type="button"
        className="inline-flex max-w-full items-center justify-center gap-2 rounded-pill bg-brand px-7 py-3 text-center text-sm font-semibold text-inverse shadow-glow-1 transition-transform duration-200 ease-enter hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
        disabled={primaryDisabled}
        aria-busy={busy}
        aria-label={label ?? accessibleName}
        onClick={() => {
          void startCheckout();
        }}
      >
        {label ? (
          <>
            <CheckoutSpinner />
            <span className="text-balance">{label}</span>
          </>
        ) : (
          IDLE_LABEL[intent]
        )}
      </button>
      <p
        id={statusId}
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className={
          phase.kind === "error"
            ? "max-w-xs text-pretty text-sm leading-[1.75] text-error"
            : "sr-only"
        }
      >
        {status}
      </p>
      {phase.kind === "error" && (
        <button
          ref={retryRef}
          type="button"
          className="rounded-pill border border-hairline bg-glass px-5 py-2 text-sm font-medium text-heading backdrop-blur-panel transition-colors duration-200 ease-enter hover:border-n1/50 disabled:cursor-not-allowed disabled:opacity-70"
          disabled={owner !== null}
          aria-busy={owner !== null}
          aria-describedby={statusId}
          onClick={() => {
            void startCheckout();
          }}
        >
          {owner !== null ? (
            <span className="inline-flex items-center gap-2">
              <CheckoutSpinner />
              {CHECKOUT_STATUS.loading}
            </span>
          ) : (
            "Retry"
          )}
        </button>
      )}
    </div>
  );
}
