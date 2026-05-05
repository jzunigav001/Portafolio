"use client";

import { motion } from "framer-motion";
import { fadeUp, Reveal, SectionLabel, stagger } from "@/components/motion-primitives";
import type { ProfileNote, Stat } from "@/lib/types";

type ProfileSectionProps = {
  notes: ProfileNote[];
  stats: Stat[];
};

export function ProfileSection({ notes, stats }: ProfileSectionProps) {
  return (
    <section
      id="perfil"
      className="section-rail relative z-10 mx-auto grid w-full max-w-7xl scroll-mt-24 gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8"
    >
      <Reveal>
        <SectionLabel>Perfil</SectionLabel>
        <h2 className="display-title text-5xl font-semibold uppercase leading-[0.95] text-ink sm:text-7xl">
          Como trabajo.
        </h2>
      </Reveal>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-90px" }}
        className="grid gap-4"
      >
        <motion.p variants={fadeUp} className="max-w-2xl text-lg leading-8 text-muted">
          Busco que cada proyecto tenga una intencion clara: buen orden, consistencia
          visual, contenido concreto y una estructura facil de mantener.
        </motion.p>

        <motion.div variants={stagger} className="grid gap-3 sm:grid-cols-3">
          {notes.map((note, index) => (
            <motion.article variants={fadeUp} key={note.title} className="portfolio-panel p-5">
              <span className="text-xs font-bold uppercase text-muted">0{index + 1}</span>
              <h3 className="mt-8 text-xl font-bold text-ink">{note.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{note.copy}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div variants={stagger} className="grid gap-3 sm:grid-cols-4">
          {stats.map((item) => (
            <motion.div key={item.label} variants={fadeUp} className="glass-line rounded-[8px] p-4">
              <p className="text-3xl font-black uppercase text-ink">{item.value}</p>
              <p className="mt-2 text-xs font-bold uppercase leading-5 text-muted">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
