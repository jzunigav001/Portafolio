"use client";

import { Download } from "lucide-react";
import type { NavItem, SiteInfo } from "@/lib/types";

type HeaderProps = {
  navItems: NavItem[];
  siteInfo: SiteInfo;
};

export function Header({ navItems, siteInfo }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between gap-4 rounded-full border border-ink/10 bg-paper/85 px-4 py-3 shadow-[0_16px_40px_rgba(20,20,20,0.08)] backdrop-blur-xl">
        <a href="#inicio" className="text-sm font-bold uppercase text-ink">
          {siteInfo.name}
        </a>

        <nav className="hidden items-center gap-1 text-xs font-bold uppercase text-muted md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="rounded-full px-4 py-2 transition hover:bg-ink hover:text-paper"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="inline-flex h-10 items-center gap-2 rounded-full bg-ink px-4 text-xs font-bold uppercase text-paper transition hover:bg-charcoal"
          href={siteInfo.cvPath}
        >
          CV
          <Download className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
