"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { RevealGroup, RevealItem } from "./Reveal";
import { PRIVACY_ROUTE } from "@/lib/legal";

const QA: { id: string; q: string; a: ReactNode }[] = [
  {
    id: "cloud",
    q: "Is my writing stored in the cloud?",
    a: "No. Vaults stay on your disk as folders you own. Core writing does not require an account.",
  },
  {
    id: "models",
    q: "Which AI models can I use?",
    a: "Bring an Anthropic or OpenAI-compatible key, or run Ollama or LM Studio locally. Agents share your chosen provider. Keys stay on the machine. With no model connected, every tool stays usable by hand.",
  },
  {
    id: "agents",
    q: "What do the agents do?",
    a: "Four named collaborators: Coach, Brainstorm, Archive, and Beta. They help with craft, ideas, continuity, and a reader-eye pass — they do not replace the author. A single writing partner is design direction, shown only in the interactive preview.",
  },
  {
    id: "export",
    q: "What can I export?",
    a: "Manuscripts export to EPUB and DOCX. The vault itself is plain Markdown.",
  },
  {
    id: "download",
    q: "Is Mythos Writer available to download?",
    a: "Not yet. The app is unreleased — no public 1.0.0 yet. Email us for updates, or try the interactive design preview on this site. It is a concept mock, not the shipping Electron build.",
  },
  {
    id: "preview",
    q: "Is the preview the shipping app?",
    a: "No. /preview is a design mock. The Demo coach-marks are a site walkthrough only and do not ship in the Electron app. The single writing partner, Suggestions, and provider buckets shown there are design exploration; the shipping app today still uses Coach, Brainstorm, Archive, and Beta. Sample worlds in the preview are not installed by the desktop app.",
  },
  {
    id: "store",
    q: "Where can I buy it?",
    a: "Nowhere yet. When Mythos Writer ships, we plan to sell it on this website, on the Microsoft Store, and on Steam. Those listings are not live. The store page on this site is marked Coming soon.",
  },
  {
    id: "platforms",
    q: "What platforms will it run on?",
    a: "Mythos Writer is a desktop Electron app with its own window chrome. We'll announce platform availability here when there is something to announce.",
  },
  {
    id: "privacy",
    q: "What personal data does this site collect?",
    a: (
      <>
        Only what you send. There is no account and no signup form. If you email the waitlist, we
        receive that message so we can reply. Theme choice stays in your browser. Read the{" "}
        <Link href={PRIVACY_ROUTE} className="text-heading underline-offset-4 hover:underline">
          Privacy Policy
        </Link>
        .
      </>
    ),
  },
];

function FaqItem({ id, q, a }: { id: string; q: string; a: ReactNode }) {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  return (
    <RevealItem>
      <div className="px-6 py-5">
        <button
          type="button"
          id={`${id}-question`}
          aria-expanded={open}
          aria-controls={`${id}-answer`}
          onClick={() => setOpen((o) => !o)}
          className="flex min-h-11 w-full items-center justify-between gap-4 text-left text-[1.02rem] font-medium text-heading"
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
              <p id={`${id}-answer`} className="mt-3 text-[0.98rem] leading-[1.7] text-body">
                {a}
              </p>
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
          <FaqItem key={item.id} id={item.id} q={item.q} a={item.a} />
        ))}
      </RevealGroup>
    </section>
  );
}
