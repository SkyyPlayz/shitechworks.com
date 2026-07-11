"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";

const LINKS = [
  { href: "#customizability", label: "Customizability" },
  { href: "#agents", label: "AI Agents" },
  { href: "#timeline", label: "Timeline" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b transition-colors duration-300 ease-enter",
        scrolled ? "border-hairline bg-glass backdrop-blur-panel" : "border-transparent bg-transparent",
      ].join(" ")}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Sky High Infinite Techwork home">
          <Image src="/brand/logo.png" alt="" width={28} height={28} className="rounded-md" priority />
          <span className="font-heading text-[0.95rem] text-heading">
            Sky High <span className="text-muted">Infinite Techwork</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted transition-colors duration-150 hover:text-heading"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <ThemeSwitcher compact />
          <a
            href="#pricing"
            className="rounded-pill bg-brand px-4 py-2 text-sm font-medium text-inverse shadow-glow-1 transition-transform duration-200 ease-enter hover:scale-[1.03]"
          >
            Get Mythos Writer
          </a>
        </div>
      </nav>
    </header>
  );
}
