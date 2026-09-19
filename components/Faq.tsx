"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { RevealGroup, RevealItem } from "./Reveal";

const QA = [
  {
    q: "Is my writing stored in the cloud?",
    a: "No. Vaults stay on your disk as folders you own. Core writing does not require an account.",
  },
  {
    q: "Which AI models can I use?",
    a: "Bring an Anthropic or OpenAI-compatible key, or run Ollama or LM Studio locally. Agents share your chosen provider. Keys stay on the machine.",
  },
  {
    q: "What do the agents do?",
    a: "Three collaborators: Brainstorm, Writing Assistant, and Archive. They help with ideas, craft, and continuity — they do not replace the author.",
  },
  {
    q: "What can I export?",
    a: "Manuscripts export to EPUB and DOCX. The vault itself is plain Markdown.",
  },
  {
    q: "Is Mythos Writer available to download?",
    a: "Not yet. The app is unreleased. Email us for updates, or try the interactive design preview on this site — it is a concept, not the shipping build.",
  },
  {
    q: "Where can I buy it?",
    a: "Nowhere yet. When Mythos Writer ships, we plan to sell it on this website, on the Microsoft Store, and on Steam. Those listings are not live. The store page on this site is marked Coming soon.",
  },
  {
    q: "What platforms will it run on?",
    a: "Mythos Writer is a desktop Electron app with its own window chrome. We'll announce platform availability here when there is something to announce.",
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
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-24 px-6 py-24" aria-labelledby="faq-heading">
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
