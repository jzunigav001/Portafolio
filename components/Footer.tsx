import type { SiteInfo } from "@/lib/types";

type FooterProps = {
  siteInfo: SiteInfo;
};

export function Footer({ siteInfo }: FooterProps) {
  return (
    <footer className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-3 border-t border-ink/10 px-4 py-8 text-sm text-muted sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
      <span>Jonatan Zuniga Villegas</span>
      <span>{siteInfo.headline}</span>
    </footer>
  );
}
