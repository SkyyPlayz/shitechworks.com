"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { CompressIcon, ExpandIcon } from "./Icons";
import { PREVIEW_MOCKUP_HREF } from "@/lib/site";
import {
  containBox,
  exitElementFullscreen,
  fullscreenElement,
  readScreenAspect,
  requestElementFullscreen,
} from "@/lib/preview-stage";

type BoxSize = { width: number; height: number };

function measureAspect(): number {
  return readScreenAspect(window.screen);
}

export function PreviewDesktopStage() {
  const stageRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [aspect, setAspect] = useState<number | null>(null);
  const [box, setBox] = useState<BoxSize>({ width: 0, height: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [canFullscreen, setCanFullscreen] = useState(false);

  const layout = useCallback((nextAspect: number) => {
    const stage = stageRef.current;
    if (!stage) return;
    const next = containBox(stage.clientWidth, stage.clientHeight, nextAspect);
    setBox(next);
  }, []);

  useLayoutEffect(() => {
    const doc = document as Document & { webkitFullscreenEnabled?: boolean };
    setCanFullscreen(Boolean(doc.fullscreenEnabled || doc.webkitFullscreenEnabled));

    const apply = () => {
      const nextAspect = measureAspect();
      setAspect(nextAspect);
      layout(nextAspect);
    };

    apply();

    const stage = stageRef.current;
    const observer = stage
      ? new ResizeObserver(() => {
          const current = measureAspect();
          setAspect(current);
          layout(current);
        })
      : null;
    if (stage && observer) observer.observe(stage);

    window.addEventListener("resize", apply);
    const orientation = window.screen.orientation;
    orientation?.addEventListener("change", apply);

    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", apply);
      orientation?.removeEventListener("change", apply);
    };
  }, [layout]);

  useEffect(() => {
    const sync = () => {
      const active = fullscreenElement() === stageRef.current;
      setIsFullscreen(active);
      if (!active) buttonRef.current?.focus();
    };
    document.addEventListener("fullscreenchange", sync);
    document.addEventListener("webkitfullscreenchange", sync as EventListener);
    return () => {
      document.removeEventListener("fullscreenchange", sync);
      document.removeEventListener("webkitfullscreenchange", sync as EventListener);
    };
  }, []);

  const toggleFullscreen = useCallback(async () => {
    const stage = stageRef.current;
    if (!stage) return;
    try {
      if (fullscreenElement() === stage) {
        await exitElementFullscreen();
      } else {
        await requestElementFullscreen(stage);
      }
    } catch {
      // Browser denied or Fullscreen API unavailable — leave the framed preview as-is.
    }
  }, []);

  return (
    <div
      ref={stageRef}
      className="preview-stage relative hidden min-h-0 flex-1 bg-desk md:flex md:items-center md:justify-center md:p-3"
    >
      <div
        className="relative overflow-hidden rounded-2xl border border-hairline bg-desk shadow-modal"
        style={{
          width: box.width,
          height: box.height,
          aspectRatio: aspect ?? undefined,
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      >
        <iframe
          title="Mythos Writer interactive design preview"
          src={PREVIEW_MOCKUP_HREF}
          className="absolute inset-0 h-full w-full border-0 bg-desk"
        />
      </div>

      {canFullscreen ? (
        <button
          ref={buttonRef}
          type="button"
          onClick={toggleFullscreen}
          aria-pressed={isFullscreen}
          className="absolute right-4 top-4 z-10 inline-flex items-center gap-2 rounded-pill border border-hairline bg-glass px-4 py-2 text-sm font-medium text-heading shadow-popover backdrop-blur-panel transition-colors duration-200 ease-enter hover:border-n1/50"
        >
          {isFullscreen ? (
            <CompressIcon className="h-4 w-4" />
          ) : (
            <ExpandIcon className="h-4 w-4" />
          )}
          {isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        </button>
      ) : null}
    </div>
  );
}
