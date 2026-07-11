"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: MouseEvent) => {
      if (
        menuRef.current && !menuRef.current.contains(e.target as Node) &&
        hamburgerRef.current && !hamburgerRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  // Close menu on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [menuOpen]);

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b transition-colors duration-300 ease-enter",
        scrolled ? "border-hairline bg-glass backdrop-blur-panel" : "border-transparent bg-transparent",
      ].join(" ")}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Sky High Infinite Techwork home">
          <Image src="/brand/logo.png" alt="" width={28} height={28} className="rounded-md" />
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
          {/* Hamburger — mobile only */}
          <button
            ref={hamburgerRef}
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-muted transition-colors hover:bg-glass hover:text-heading md:hidden"
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          id="mobile-nav-menu"
          ref={menuRef}
          role="navigation"
          aria-label="Mobile navigation"
          className="border-t border-hairline bg-glass backdrop-blur-panel md:hidden"
        >
          <ul className="mx-auto max-w-7xl px-6 py-3">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-sm text-muted transition-colors hover:text-heading"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
