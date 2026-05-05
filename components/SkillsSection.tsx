"use client";

import { BookOpen } from "lucide-react";
import { Reveal, SectionLabel } from "@/components/motion-primitives";

type SkillsSectionProps = {
  stack: string[];
  certifications: string[];
};

export function SkillsSection({ stack, certifications }: SkillsSectionProps) {
  return (
    <section className="section-rail relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <Reveal className="grid gap-8 border-y border-ink/10 py-10 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <SectionLabel>Habilidades</SectionLabel>
          <h2 className="display-title text-5xl font-semibold uppercase leading-[0.95] text-ink sm:text-7xl">
            Stack y formacion.
          </h2>
        </div>
        <div className="space-y-8">
          <div className="flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="skill-pill rounded-full border border-ink/15 bg-white/50 px-4 py-2 text-sm font-bold text-ink"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="grid gap-3">
            {certifications.map((item) => (
              <div
                key={item}
                className="glass-line flex items-start gap-3 rounded-[8px] p-4 text-sm font-semibold leading-6 text-muted"
              >
                <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-ink" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
