"use client";

import { motion } from "framer-motion";
import { fadeUp, Reveal, SectionLabel, stagger } from "@/components/motion-primitives";
import type { ExperienceItem } from "@/lib/types";

type ExperienceSectionProps = {
  experience: ExperienceItem[];
};

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <section
      id="experiencia"
      className="section-rail relative z-10 mx-auto grid w-full max-w-7xl scroll-mt-24 gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8"
    >
      <Reveal>
        <SectionLabel>Experiencia</SectionLabel>
        <h2 className="display-title text-5xl font-semibold uppercase leading-[0.95] text-ink sm:text-7xl">
          Trayectoria academica y profesional.
        </h2>
      </Reveal>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-90px" }}
        className="border-t border-ink/10"
      >
        {experience.map((item) => (
          <motion.article
            variants={fadeUp}
            key={`${item.role}-${item.place}`}
            className="experience-row group grid gap-4 border-b border-ink/10 py-6 pl-4 transition hover:bg-white/45 sm:grid-cols-[0.62fr_1.38fr]"
          >
            <div>
              <p className="text-xs font-bold uppercase text-muted">{item.date}</p>
              <h3 className="mt-3 text-2xl font-bold text-ink">{item.role}</h3>
              <p className="mt-1 text-sm font-bold text-muted">{item.place}</p>
            </div>
            <p className="text-sm leading-7 text-muted">{item.detail}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
