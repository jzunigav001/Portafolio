"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, MotionConfig, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail
} from "lucide-react";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Perfil", href: "#perfil" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" }
];

const stats = [
  { value: "2021", label: "Ingenieria en Computacion" },
  { value: "C1", label: "Ingles avanzado" },
  { value: "4", label: "Certificaciones tecnicas" },
  { value: "3+", label: "Proyectos publicados" }
];

const profileNotes = [
  {
    title: "Orden",
    copy: "Me gusta estructurar los proyectos para que el contenido, los estilos y la navegacion sean claros."
  },
  {
    title: "Aprendizaje",
    copy: "Tengo facilidad para aprender nuevas herramientas y convertirlas en soluciones funcionales."
  },
  {
    title: "Colaboracion",
    copy: "Trabajo bien en equipo, documento procesos y cuido la comunicacion para avanzar con claridad."
  }
];

const stack = [
  "Python",
  "JavaScript",
  "C",
  "PHP",
  "Java",
  "HTML5",
  "CSS3",
  "Angular",
  "Node.js",
  "MySQL",
  "MariaDB",
  "Git",
  "Docker"
];

const experience = [
  {
    role: "Integrativa Profesional",
    place: "Redalyc / UAEMex",
    date: "Mar 2025 - Abr 2025",
    detail:
      "Desarrollo de interfaces web con HTML5, CSS3, JavaScript y Angular; implementacion de disenos adaptativos, JSON y XHTML."
  },
  {
    role: "Servicio Social",
    place: "Laboratorio Digital de Idiomas / UAEMex",
    date: "Feb 2023 - Feb 2024",
    detail:
      "Apoyo en talleres de ingles, evaluacion de practicas y mantenimiento de recursos digitales para aprendizaje de idiomas."
  },
  {
    role: "Comunicacion Digital",
    place: "Climas Toluca",
    date: "Abr 2024 - Sep 2024",
    detail:
      "Gestion de pagina web, contenido para redes sociales, diseno de banners, reportes administrativos y cotizaciones."
  },
  {
    role: "Seguridad Informatica",
    place: "Ferreteria Lagartos",
    date: "Ene 2022 - Feb 2023",
    detail:
      "Proteccion de sistemas de punto de venta, monitoreo de red interna, respaldos y soporte tecnico al personal."
  }
];

type Project = {
  title: string;
  type: string;
  description: string;
  image: string;
  url: string;
};

const fallbackProjects: Project[] = [
  {
    title: "Torteria",
    type: "Landing page",
    description: "Pagina web visual para una torteria, enfocada en estructura HTML y CSS.",
    image: "/assets/project-01.png",
    url: "https://torteria.rf.gd"
  },
  {
    title: "Portafolio docente",
    type: "Portfolio academico",
    description: "Sitio para presentar perfil profesional, trabajos, trayectoria y medios de contacto.",
    image: "/assets/project-02.png",
    url: "https://octavio484.github.io/portafolio/"
  },
  {
    title: "Index Redalyc",
    type: "Maquetacion web",
    description: "Indice web con practica de estructura, estilos y publicacion en GitHub Pages.",
    image: "/assets/project-03.png",
    url: "https://jzunigav001.github.io/Ejercicios/"
  }
];

const certifications = [
  "Tecnico en Integridad Web - Fundacion Carlos Slim (2024)",
  "Tecnico en Redes - Fundacion Carlos Slim (2023)",
  "Introduction to Packet Tracer - Cisco Networking Academy (2024)",
  "Networking Basics - Cisco Networking Academy (2024)"
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] }
  }
};

const softScale: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
  }
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

function Reveal({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-90px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center rounded-full border border-ink/15 bg-white/60 px-4 py-2 text-xs font-bold uppercase text-muted shadow-sm">
      {children}
    </div>
  );
}

export default function Home() {
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);

  useEffect(() => {
    let isMounted = true;

    async function loadProjects() {
      try {
        const response = await fetch("/api/projects", { cache: "no-store" });
        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as { projects?: Project[] };
        if (isMounted && data.projects?.length) {
          setProjects(data.projects);
        }
      } catch {
        // Keep the local fallback projects when Django is not running.
      }
    }

    loadProjects();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <main className="relative min-h-screen overflow-x-hidden bg-paper text-ink">
        <div className="noise-layer pointer-events-none fixed inset-0 z-0" />

        <header className="sticky top-0 z-30 mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 rounded-full border border-ink/10 bg-paper/85 px-4 py-3 shadow-[0_16px_40px_rgba(20,20,20,0.08)] backdrop-blur-xl">
            <a href="#inicio" className="text-sm font-bold uppercase text-ink">
              Jonatan Zuniga
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
              href="/cv/Jonatan_Zuniga_CV.pdf"
            >
              CV
              <Download className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </header>

        <section id="inicio" className="relative z-10 mx-auto w-full max-w-[1500px] scroll-mt-24 px-4 pb-20 pt-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="editorial-stage relative min-h-[700px] overflow-hidden rounded-[4px] border border-ink/10 bg-soft shadow-[0_28px_90px_rgba(20,20,20,0.14)] lg:min-h-[760px]"
          >
            <motion.div variants={fadeUp} className="relative z-20 flex items-start justify-between gap-4 px-5 py-5 text-[0.7rem] font-bold uppercase text-ink sm:px-8 lg:px-12">
              <span>Jonatan Zuniga</span>
              <span className="hidden text-muted md:block">Frontend / Redes / Seguridad</span>
              <span className="hidden text-right text-muted sm:block">Portfolio 2026</span>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="relative z-20 px-5 text-[0.68rem] font-bold uppercase tracking-[0.08em] text-muted sm:px-8 md:hidden"
            >
              Frontend / Redes / Seguridad · Portfolio 2026
            </motion.div>

            <motion.div variants={fadeUp} className="absolute left-5 top-[18%] z-20 max-w-[240px] sm:left-10 md:top-[20%] lg:left-20">
              <p className="text-xs font-bold uppercase tracking-[0.04em] text-muted">
                Ingenieria en Computacion
              </p>
              <p className="mt-7 text-xl font-black uppercase leading-[0.95] text-ink sm:text-2xl">
                Desarrollo web, redes y seguridad informatica.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="absolute right-5 top-[25%] z-20 hidden max-w-[210px] text-right lg:block">
              <p className="text-sm font-bold uppercase leading-5 text-ink">
                Interfaces limpias, responsivas y documentadas.
              </p>
              <p className="mt-8 text-xs font-bold uppercase leading-5 text-muted">
                Python / JavaScript / Angular / MySQL / Git
              </p>
            </motion.div>

            <div className="portrait-float absolute left-1/2 top-[16%] z-10 w-[66vw] max-w-[500px] -translate-x-1/2">
              <motion.div variants={softScale}>
                <div className="portrait-crop relative aspect-[4/5] overflow-hidden bg-transparent">
                  <Image
                    src="/assets/profile.jpg"
                    alt="Retrato de Jonatan Zuniga"
                    fill
                    priority
                    sizes="(max-width: 1024px) 72vw, 500px"
                    className="scale-125 object-cover object-[50%_18%] grayscale contrast-150 brightness-110 mix-blend-multiply"
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
              <span>Scroll para ver<br />el perfil</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </motion.a>

            <motion.div
              variants={fadeUp}
              className="absolute right-5 top-1/2 z-20 hidden -translate-y-1/2 rotate-90 text-xs font-black uppercase tracking-[0.35em] text-muted md:block"
            >
              01 / 05
            </motion.div>
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
        </section>

        <section
          id="perfil"
          className="relative z-10 mx-auto grid w-full max-w-7xl scroll-mt-24 gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8"
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
              Busco que cada proyecto tenga una intencion clara: buen orden,
              consistencia visual, contenido concreto y una estructura facil de
              mantener.
            </motion.p>

            <motion.div variants={stagger} className="grid gap-3 sm:grid-cols-3">
              {profileNotes.map((note, index) => (
                <motion.article
                  variants={fadeUp}
                  key={note.title}
                  className="portfolio-panel p-5"
                >
                  <span className="text-xs font-bold uppercase text-muted">
                    0{index + 1}
                  </span>
                  <h3 className="mt-8 text-xl font-bold text-ink">{note.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{note.copy}</p>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </section>

        <section className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
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
                    className="rounded-full border border-ink/15 bg-white/50 px-4 py-2 text-sm font-bold text-ink"
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

        <section
          id="experiencia"
          className="relative z-10 mx-auto grid w-full max-w-7xl scroll-mt-24 gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8"
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
                className="group grid gap-4 border-b border-ink/10 py-6 transition hover:bg-white/45 sm:grid-cols-[0.62fr_1.38fr]"
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
            <p className="max-w-md text-base leading-7 text-muted">
              Seleccion breve: proyectos que muestran maquetacion, estructura,
              publicacion web y criterio visual.
            </p>
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

        <section
          id="contacto"
          className="relative z-10 mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8"
        >
          <Reveal className="grid min-h-[420px] overflow-hidden rounded-[8px] bg-ink p-5 text-paper sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
            <div className="flex min-w-0 flex-col justify-between gap-8">
              <div>
                <p className="text-sm font-bold uppercase text-paper/55">
                  Disponible para colaborar
                </p>
                <h2 className="display-title mt-5 max-w-full text-[clamp(2.35rem,12vw,3rem)] font-semibold uppercase leading-[0.9] text-paper sm:mt-6 sm:text-[6.4rem]">
                  Hablemos
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-paper/70 sm:text-lg">
                Busco seguir creciendo en proyectos de desarrollo web, redes y
                seguridad informatica, aportando orden, aprendizaje rapido y
                atencion al detalle.
              </p>
            </div>

            <div className="mt-8 grid min-w-0 content-end gap-3 lg:mt-0">
              <a
                href="mailto:jzunigav002@gmail.com"
                className="contact-link"
              >
                <span className="flex items-center gap-3">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Email
                </span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="/cv/Jonatan_Zuniga_CV.pdf" className="contact-link">
                <span className="flex items-center gap-3">
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Descargar CV
                </span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/jzunigav001"
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
                href="https://www.linkedin.com/in/jzunigav001"
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

        <footer className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-3 border-t border-ink/10 px-4 py-8 text-sm text-muted sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <span>Jonatan Zuniga Villegas</span>
          <span>Desarrollo web / Redes / Seguridad informatica</span>
        </footer>
      </main>
    </MotionConfig>
  );
}
