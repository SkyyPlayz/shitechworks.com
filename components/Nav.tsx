"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CloseIcon, MenuIcon } from "./Icons";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { NAV_LINKS, PREVIEW_ROUTE } from "@/lib/site";

function routeMatches(pathname: string, href: string) {
  const normalizedPath = pathname.endsWith("/") ? pathname : `${pathname}/`;
  const normalizedHref = href.endsWith("/") ? href : `${href}/`;
  return normalizedPath === normalizedHref;
}

function NavItem({
  href,
  label,
  onNavigate,
  className,
}: {
  href: string;
  label: string;
  onNavigate?: () => void;
  className: string;
}) {
  const pathname = usePathname();
  const isRoute = href.startsWith("/") && !href.includes("#");
  const isCurrent = isRoute && routeMatches(pathname, href);
  if (isRoute) {
    return (
      <Link
        href={href}
        onClick={onNavigate}
        className={className}
        aria-current={isCurrent ? "page" : undefined}
      >
        {label}
      </Link>
    );
  }
  return (
    <a href={href} onClick={onNavigate} className={className}>
      {label}
    </a>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node;
      if (menuRef.current?.contains(target) || toggleRef.current?.contains(target)) return;
      setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 768px)");
    const onDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    desktop.addEventListener("change", onDesktop);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      desktop.removeEventListener("change", onDesktop);
    };
  }, [open]);

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b transition-colors duration-300 ease-enter",
        scrolled || open
          ? "border-hairline bg-glass backdrop-blur-panel"
          : "border-transparent bg-transparent",
      ].join(" ")}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6" aria-label="Main">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Sky High Infinite Techwork — home">
          <Image src="/brand/logo.png" alt="" width={32} height={32} className="rounded-lg" priority />
          <span className="hidden whitespace-nowrap font-heading text-[0.95rem] text-heading sm:inline">
            Sky High <span className="hidden text-muted lg:inline">Infinite Techwork</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-5 md:flex lg:gap-7">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <NavItem
                href={link.href}
                label={link.label}
                className="text-sm text-muted transition-colors duration-150 hover:text-heading"
              />
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 md:gap-4">
          <ThemeSwitcher compact />
          <Link
            href={PREVIEW_ROUTE}
            className="hidden rounded-pill bg-brand px-4 py-2 text-sm font-medium text-inverse shadow-glow-1 transition-transform duration-200 ease-enter hover:scale-[1.03] md:inline-block"
          >
            Try preview
          </Link>
          <button
            ref={toggleRef}
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-lg border border-hairline bg-glass text-muted transition-colors duration-200 ease-enter hover:bg-raised hover:text-heading md:hidden"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <>
          <div
            className="fixed inset-x-0 top-16 bottom-0 z-40 bg-desk md:hidden"
            aria-hidden
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-x-0 top-full z-50 px-6 md:hidden">
            <div
              id="mobile-menu"
              ref={menuRef}
              className="mx-auto mt-2 max-w-6xl rounded-2xl border border-hairline bg-glass-strong px-5 py-4 shadow-popover backdrop-blur-panel"
            >
              <nav aria-label="Mobile">
                <ul className="flex flex-col gap-1">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <NavItem
                        href={link.href}
                        label={link.label}
                        onNavigate={() => setOpen(false)}
                        className="block rounded-lg px-3 py-2.5 font-medium text-body transition-colors duration-200 ease-enter hover:bg-raised hover:text-heading"
                      />
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-3 border-t border-hairline pt-3">
                <Link
                  href={PREVIEW_ROUTE}
                  onClick={() => setOpen(false)}
                  className="block rounded-pill bg-brand px-4 py-2.5 text-center text-sm font-medium text-inverse shadow-glow-1 transition-transform duration-200 ease-enter hover:scale-[1.02]"
                >
                  Try interactive preview
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
