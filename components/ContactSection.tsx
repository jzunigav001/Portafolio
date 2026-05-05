"use client";

import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Reveal } from "@/components/motion-primitives";
import type { SiteInfo } from "@/lib/types";

type ContactSectionProps = {
  siteInfo: SiteInfo;
};

export function ContactSection({ siteInfo }: ContactSectionProps) {
  return (
    <section
      id="contacto"
      className="section-rail relative z-10 mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8"
    >
      <Reveal className="contact-card grid min-h-[420px] overflow-hidden rounded-[8px] bg-ink p-5 text-paper sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <div className="relative z-10 flex min-w-0 flex-col justify-between gap-8">
          <div>
            <p className="text-sm font-bold uppercase text-paper/55">
              Disponible para colaborar
            </p>
            <h2 className="display-title mt-5 max-w-full text-[clamp(2.35rem,12vw,3rem)] font-semibold uppercase leading-[0.9] text-paper sm:mt-6 sm:text-[6.4rem]">
              Hablemos
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-paper/70 sm:text-lg">
            Busco seguir creciendo en proyectos de desarrollo web, redes y seguridad
            informatica, aportando orden, aprendizaje rapido y atencion al detalle.
          </p>
        </div>

        <div className="relative z-10 mt-8 grid min-w-0 content-end gap-3 lg:mt-0">
          <a href={siteInfo.emailHref} className="contact-link">
            <span className="flex items-center gap-3">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email
            </span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a href={siteInfo.cvPath} className="contact-link">
            <span className="flex items-center gap-3">
              <Download className="h-4 w-4" aria-hidden="true" />
              Descargar CV
            </span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={siteInfo.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <span className="flex items-center gap-3">
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={siteInfo.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <span className="flex items-center gap-3">
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
