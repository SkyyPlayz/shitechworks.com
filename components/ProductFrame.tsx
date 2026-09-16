"use client";

import { motion, useReducedMotion } from "framer-motion";

export function ProductFrame({
  children,
  className,
  caption,
}: {
  children: React.ReactNode;
  className?: string;
  caption?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <figure className={className}>
      <div className="relative">
        <motion.div
          aria-hidden
          className="absolute -inset-3 rounded-[1.7rem] bg-brand opacity-70 blur-2xl"
          animate={reduce ? undefined : { opacity: [0.42, 0.82, 0.42] }}
          transition={reduce ? undefined : { duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative rounded-3xl border border-hairline bg-glass-strong p-[3px] shadow-modal backdrop-blur-panel">
          <div className="overflow-hidden rounded-[1.05rem] border border-hairline bg-desk">
            {children}
          </div>
        </div>
      </div>
      {caption ? (
        <figcaption className="mt-4 text-center text-sm text-muted">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
