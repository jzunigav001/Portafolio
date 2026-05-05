"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { fadeUp, Reveal, SectionLabel, stagger } from "@/components/motion-primitives";
import type { Project } from "@/lib/types";

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section
      id="proyectos"
      className="relative z-10 mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8"
    >
      <Reveal className="mb-10 flex flex-col justify-between gap-6 border-y border-ink/10 py-10 lg:flex-row lg:items-end">
        <div>
          <SectionLabel>Proyectos principales</SectionLabel>
          <h2 className="display-title text-5xl font-semibold uppercase leading-[0.95] text-ink sm:text-7xl">
            Trabajo aplicado.
          </h2>
        </div>
      </Reveal>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-90px" }}
        className="grid gap-5 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.article variants={fadeUp} key={project.title} className="group">
            <a
              href={project.url || "#proyectos"}
              target={project.url ? "_blank" : undefined}
              rel={project.url ? "noreferrer" : undefined}
              className="block overflow-hidden rounded-[8px] border border-ink/10 bg-white/55 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(20,20,20,0.13)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 900px) 92vw, 33vw"
                  className="object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-paper/85 text-ink">
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs font-bold uppercase text-muted">{project.type}</p>
                <h3 className="mt-3 text-3xl font-bold uppercase text-ink">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-muted">{project.description}</p>
              </div>
            </a>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
