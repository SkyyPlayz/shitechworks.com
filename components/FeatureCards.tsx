import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { ProductFrame } from "./ProductFrame";
import { MockupShot, type MockupCrop } from "./MockupShot";

type FeatureGroup = {
  id: string;
  slot: "n1" | "n2" | "n5" | "n6";
  kicker: string;
  title: string;
  lede: string;
  crop: MockupCrop;
  alt: string;
  points: { title?: string; body: string }[];
};

const GROUPS: FeatureGroup[] = [
  {
    id: "writing",
    slot: "n1",
    kicker: "Writing",
    title: "A scene editor that stays out of the way",
    lede: "Draft in a Word-like scene, then keep the book as Markdown you can move, diff, and keep. Structure, Editor, and Book are three views of the same manuscript.",
    crop: "writing",
    alt: "Mythos Writer manuscript — chapter heading and scene prose in the Liquid Neon editor",
    points: [
      {
        title: "Structure · Editor · Book",
        body: "Cards, the page, and a compiled read — one manuscript, three desks.",
      },
      {
        title: "Wiki links",
        body: "Type a name as a [[wiki-link]] and it stays live in the vault.",
      },
      {
        title: "Notes Properties",
        body: "Tags, fields, and backlinks sit on the note — not in a separate database.",
      },
      {
        title: "Boards",
        body: "Kanban-style cards when the outline needs to move.",
      },
      {
        title: "Scene Crafter",
        body: "Shape a scene — POV, goal, conflict, beats — then write the prose yourself.",
      },
      {
        title: "Export",
        body: "EPUB and DOCX when the draft is ready to leave the vault.",
      },
    ],
  },
  {
    id: "world",
    slot: "n6",
    kicker: "World",
    title: "A bible that lives beside the book",
    lede: "A Mythos Vault is one world. Story Vaults hold the manuscript; Notes Vaults hold lore. Open an Obsidian vault in place — it stays a folder you own.",
    crop: "world",
    alt: "Mythos Writer story navigator — chapters and scenes in the left vault",
    points: [
      {
        title: "Mythos Vault",
        body: "One world on disk: Story Vaults plus Notes Vaults, plain Markdown.",
      },
      {
        title: "Open Obsidian in place",
        body: "Keep an existing vault where it is. Mythos adds a Story Vault beside it.",
      },
      {
        title: "WikiLink graph",
        body: "See how names connect across notes and scenes.",
      },
      {
        title: "Timeline",
        body: "Multi-calendar, nested-world math is in the product. The desk UX is still being polished.",
      },
    ],
  },
  {
    id: "partner",
    slot: "n2",
    kicker: "Partner",
    title: "One writing partner",
    lede: "Chat or talk with one in-app partner about your book. Past chats and calls live in one place. You set the name and icon.",
    crop: "ai",
    alt: "Mythos Writer writing partner on the right of the writing desk",
    points: [
      {
        body: "Not four separate bots. One partner — text and voice in the same thread.",
      },
    ],
  },
  {
    id: "call",
    slot: "n2",
    kicker: "Call",
    title: "Talk it through",
    lede: "Start a voice call with your writing partner. Spoken and typed turns share one chat thread. End the call and keep the same conversation as text.",
    crop: "ai",
    alt: "Mythos Writer writing partner on the right of the writing desk",
    points: [
      {
        body: "Call chrome on the chat. One stream — no separate call transcript to lose.",
      },
    ],
  },
  {
    id: "keys",
    slot: "n2",
    kicker: "Keys",
    title: "Your keys. Or none.",
    lede: "Bring your own API key, run a local model, buy Mythos AI credits later, or turn All AI off and write by hand.",
    crop: "ai",
    alt: "Mythos Writer writing partner on the right of the writing desk",
    points: [
      {
        body: "Core writing never needs AI or an account.",
      },
    ],
  },
  {
    id: "local",
    slot: "n5",
    kicker: "Local-first",
    title: "Write without an account",
    lede: "Mythos Writer is a desktop app. Your vault stays on your computer as a folder you own. An account is only for purchase and license proof — not for writing.",
    crop: "chrome",
    alt: "Mythos Writer desktop window chrome and Liquid Neon title bar",
    points: [
      {
        title: "Yours on disk",
        body: "Core writing does not need an account. The vault is a folder. When you buy, sign in to prove ownership.",
      },
      {
        title: "Liquid Neon",
        body: "Frosted glass, theme slots, and a living frame around the desk.",
      },
    ],
  },
];

export function FeatureCards() {
  return (
    <section id="features" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24" aria-labelledby="features-heading">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-label">
          Writing · World · Partner · Call · Keys · Local-first
        </span>
        <h2 id="features-heading" className="mt-4 font-heading text-[clamp(1.8rem,3.5vw,2.6rem)]">
          Designed for the way novels get written
        </h2>
        <p className="mt-4 text-[1.02rem] leading-[1.7] text-body">
          An account is only for purchase and license proof — not for writing.
        </p>
      </div>

      <div className="mt-16 space-y-20">
        {GROUPS.map((group, index) => {
          const imageLeft = index % 2 === 1;
          return (
            <Reveal key={group.id}>
              <article
                id={group.id}
                className="scroll-mt-24 grid items-center gap-10 lg:grid-cols-2"
              >
                <div className={imageLeft ? "lg:order-1" : "lg:order-2"}>
                  <ProductFrame>
                    <MockupShot crop={group.crop} alt={group.alt} />
                  </ProductFrame>
                </div>
                <div className={imageLeft ? "lg:order-2" : "lg:order-1"}>
                  <span
                    className="text-[0.68rem] font-semibold uppercase tracking-[0.12em]"
                    style={{ color: `var(--${group.slot})` }}
                  >
                    {group.kicker}
                  </span>
                  <h3 className="mt-3 font-heading text-[clamp(1.5rem,2.4vw,2rem)] text-heading">
                    {group.title}
                  </h3>
                  <p className="mt-3 text-[1.02rem] leading-[1.7] text-body">{group.lede}</p>
                  <RevealGroup className="mt-6 grid gap-3 sm:grid-cols-2" stagger={0.06}>
                    {group.points.map((point) => (
                      <RevealItem key={point.title ?? point.body}>
                        <div className="h-full rounded-xl border border-hairline bg-glass/70 px-4 py-4 backdrop-blur-panel">
                          {point.title ? (
                            <h4 className="text-sm font-semibold text-heading">{point.title}</h4>
                          ) : null}
                          <p
                            className={`text-sm leading-[1.65] text-body ${point.title ? "mt-1.5" : ""}`}
                          >
                            {point.body}
                          </p>
                        </div>
                      </RevealItem>
                    ))}
                  </RevealGroup>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
