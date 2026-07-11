"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { RevealGroup, RevealItem } from "./Reveal";

const QA = [
  {
    q: "Is my writing stored in the cloud?",
    a: "No. Vaults are plain folders on your machine, movable to any local path. Mythos Writer works fully offline; sync and backup are opt-in, never required.",
  },
  {
    q: "Which AI models can I use?",
    a: "Bring the Claude API or run a fully local model — one provider setting for all four agents. Keys are stored on-device and never synced.",
  },
  {
    q: "Can I import from Obsidian, Notion, or Scrivener?",
    a: "Yes. Import notes from Obsidian, Notion, Scrivener, or Markdown, and manuscripts from DOCX, Google Docs, Markdown, Scrivener, or EPUB — headings map straight to structure.",
  },
  {
    q: "Do the AI agents write for me?",
    a: "No. The Writing Coach teaches craft rather than ghost-writing, and every agent's autonomy is opt-in per agent — you stay the author.",
  },
  {
    q: "What platforms does it run on?",
    a: "Mythos Writer is a desktop app with its own window chrome. We'll announce platform availability on this site.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  return (
    <RevealItem>
      <div className="px-6 py-5">
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="flex w-full items-center justify-between gap-4 text-left text-[1.02rem] font-medium text-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-n1"
        >
          {q}
          <span
            aria-hidden
            className={`shrink-0 text-lg text-muted transition-transform duration-200 ease-enter${open ? " rotate-45" : ""}`}
          >
            +
          </span>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="answer"
              initial={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
              animate={reduced ? { opacity: 1 } : { height: "auto", opacity: 1 }}
              exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <p className="mt-3 text-[0.98rem] leading-[1.7] text-body">{a}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </RevealItem>
  );
}

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-24" aria-labelledby="faq-heading">
      <div className="text-center">
        <span className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-label">
          Questions
        </span>
        <h2 id="faq-heading" className="mt-4 font-heading text-[clamp(1.8rem,3.5vw,2.6rem)]">
          Frequently asked
        </h2>
      </div>

      <RevealGroup className="mt-12 divide-y divide-hairline rounded-2xl border border-hairline bg-glass backdrop-blur-panel">
        {QA.map((item) => (
          <FaqItem key={item.q} q={item.q} a={item.a} />
        ))}
      </RevealGroup>
    </section>
  );
}
