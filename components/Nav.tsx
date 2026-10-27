"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HOME_NAV_LINKS } from "@/lib/site";

function routeMatches(pathname: string, href: string) {
  const normalizedPath = pathname.endsWith("/") ? pathname : `${pathname}/`;
  const normalizedHref = href.endsWith("/") ? href : `${href}/`;
  if (normalizedHref === "/support/") return normalizedPath.startsWith("/support/");
  return normalizedPath === normalizedHref;
}

function NavItem({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isRoute = href.startsWith("/") && !href.includes("#");
  const isCurrent = isRoute && routeMatches(pathname, href);
  if (isRoute) {
    return (
      <Link href={href} aria-current={isCurrent ? "page" : undefined}>
        {label}
      </Link>
    );
  }
  return <a href={href}>{label}</a>;
}

export function Nav() {
  return (
    <header className="atlas-header">
      <Link href="/" className="atlas-brand">
        <Image src="/brand/logo.png" alt="" width={32} height={32} className="atlas-logo" priority />
        <span>Sky High Infinite Techwork</span>
      </Link>
      <nav className="atlas-nav" aria-label="Main">
        <ul>
          {HOME_NAV_LINKS.map((link) => (
            <li key={link.href}>
              <NavItem href={link.href} label={link.label} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
