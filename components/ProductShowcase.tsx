import Link from "next/link";
import { Reveal } from "./Reveal";
import { ProductFrame } from "./ProductFrame";
import { MockupShot } from "./MockupShot";
import { PREVIEW_ROUTE } from "@/lib/site";

const CALLOUTS = [
  {
    slot: "n1" as const,
    title: "Mythos Vault",
    body: "One world: Story Vaults and Notes Vaults as plain Markdown on disk.",
  },
  {
    slot: "n2" as const,
    title: "Wiki links",
    body: "[[wiki-links]] across notes and scenes, plus Notes Properties.",
  },
  {
    slot: "n3" as const,
    title: "Structure · Editor · Book",
    body: "Three views of one manuscript — plus Boards and Scene Crafter.",
  },
  {
    slot: "n5" as const,
    title: "Four named agents",
    body: "Coach, Brainstorm, Archive, and Beta — your keys, local, or off.",
  },
];

export function ProductShowcase() {
  return (
    <section id="showcase" className="mx-auto max-w-[88rem] px-6 py-20 sm:py-24" aria-labelledby="showcase-heading">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-label">
            See the desk
          </span>
          <h2 id="showcase-heading" className="mt-4 font-heading text-[clamp(1.8rem,3.5vw,2.6rem)]">
            The app, as designed
          </h2>
          <p className="mt-4 text-[1.02rem] leading-[1.7] text-body">
            A full-window desktop studio &mdash; not a browser tab. This capture is a
            Liquid Neon design mockup. The interactive preview explores upcoming chrome
            and is labeled as such.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mx-auto mt-12 max-w-[80rem]">
        <ProductFrame>
          <MockupShot
            crop="full"
            alt="Mythos Writer ultrawide mockup showing the story navigator, manuscript, and agent sidebar"
          />
        </ProductFrame>
      </Reveal>

      <ul className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CALLOUTS.map((item) => (
          <li
            key={item.title}
            className="rounded-2xl border border-hairline bg-glass px-5 py-5 backdrop-blur-panel"
          >
            <p
              className="text-[0.68rem] font-semibold uppercase tracking-[0.12em]"
              style={{ color: `var(--${item.slot})` }}
            >
              {item.title}
            </p>
            <p className="mt-2 text-sm leading-[1.65] text-body">{item.body}</p>
          </li>
        ))}
      </ul>

      <div className="mt-10 text-center">
        <Link
          href={PREVIEW_ROUTE}
          className="inline-flex rounded-pill border border-hairline bg-glass px-6 py-2.5 text-sm font-medium text-heading backdrop-blur-panel transition-colors duration-200 ease-enter hover:border-n1/50"
        >
          Open the interactive preview
        </Link>
      </div>
    </section>
  );
}
