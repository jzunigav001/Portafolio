"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, softScale, stagger } from "@/components/motion-primitives";
import type { SiteInfo } from "@/lib/types";

type HeroSectionProps = {
  siteInfo: SiteInfo;
  stack: string[];
};

export function HeroSection({ siteInfo, stack }: HeroSectionProps) {
  const workflow = [
    "Diseno claro",
    "Codigo ordenado",
    "Publicacion web",
    "Interfaces responsivas",
    "Mejora continua"
  ];

  return (
    <section
      id="inicio"
      className="relative z-10 mx-auto w-full max-w-[1500px] scroll-mt-24 px-4 pb-20 pt-4 sm:px-6 lg:px-8"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="editorial-stage relative min-h-[700px] overflow-hidden rounded-[4px] border border-ink/10 bg-soft shadow-[0_28px_90px_rgba(20,20,20,0.14)] lg:min-h-[760px]"
      >
        <motion.div
          variants={fadeUp}
          className="relative z-20 flex items-start justify-between gap-4 px-5 py-5 text-[0.7rem] font-bold uppercase text-ink sm:px-8 lg:px-12"
        >
          <span>{siteInfo.name}</span>
          <span className="hidden text-muted md:block">{siteInfo.role}</span>
          <span className="hidden text-right text-muted sm:block">{siteInfo.yearLabel}</span>
        </motion.div>
        <motion.div
          variants={fadeUp}
          className="relative z-20 px-5 text-[0.68rem] font-bold uppercase tracking-[0.08em] text-muted sm:px-8 md:hidden"
        >
          {siteInfo.role} / {siteInfo.yearLabel}
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="absolute left-5 top-[18%] z-20 max-w-[240px] sm:left-10 md:top-[20%] lg:left-20"
        >
          <p className="text-xs font-bold uppercase tracking-[0.04em] text-muted">
            {siteInfo.degree}
          </p>
          <p className="mt-7 text-xl font-black uppercase leading-[0.95] text-ink sm:text-2xl">
            {siteInfo.headline}
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="absolute right-5 top-[25%] z-20 hidden max-w-[210px] text-right lg:block"
        >
          <p className="text-sm font-bold uppercase leading-5 text-ink">
            {siteInfo.supportingLine}
          </p>
          <p className="mt-8 text-xs font-bold uppercase leading-5 text-muted">
            {siteInfo.stackLine}
          </p>
        </motion.div>

        <div className="portrait-float absolute left-1/2 top-[16%] z-10 w-[66vw] max-w-[500px] -translate-x-1/2">
          <motion.div variants={softScale}>
            <div className="portrait-crop relative aspect-[4/5] overflow-hidden bg-transparent">
              <Image
                src="/assets/profile-cutout.png"
                alt="Retrato de Jonatan Zuniga"
                fill
                priority
                sizes="(max-width: 1024px) 72vw, 500px"
                className="scale-110 object-cover object-center grayscale contrast-125 brightness-105 mix-blend-multiply"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_68%,#fbfaf6_98%)]" />
            </div>
          </motion.div>
        </div>

        <motion.a
          variants={fadeUp}
          href="#perfil"
          className="absolute left-5 top-[44%] z-20 hidden items-center gap-3 text-xs font-black uppercase leading-4 text-ink transition hover:translate-x-1 sm:left-10 md:inline-flex lg:left-20"
        >
          <span>
            Scroll para ver
            <br />
            el perfil
          </span>
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </motion.a>

        <motion.div
          variants={fadeUp}
          className="absolute right-5 top-1/2 z-20 hidden -translate-y-1/2 rotate-90 text-xs font-black uppercase tracking-[0.35em] text-muted md:block"
        >
          01 / 05
        </motion.div>

        <div className="hero-signal" aria-hidden="true">
          {Array.from({ length: 12 }, (_, index) => (
            <span key={index} />
          ))}
        </div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="marquee mt-8 overflow-hidden border-y border-ink/10 py-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <div className="marquee-track flex w-max gap-8 text-sm font-bold uppercase text-muted">
          {[...stack, ...stack].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="marquee mt-3 overflow-hidden border-b border-ink/10 py-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55, duration: 0.8 }}
      >
        <div className="reverse-marquee-track flex w-max gap-8 text-xs font-black uppercase text-ink/70">
          {[...workflow, ...workflow, ...workflow].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
