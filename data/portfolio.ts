import type {
  ExperienceItem,
  NavItem,
  ProfileNote,
  Project,
  SiteInfo,
  Stat
} from "@/lib/types";

export const siteInfo: SiteInfo = {
  name: "Jonatan Zuniga",
  role: "Frontend / Redes / Seguridad",
  yearLabel: "Portfolio 2026",
  degree: "Ingenieria en Computacion",
  headline: "Desarrollo web, redes y seguridad informatica.",
  supportingLine: "Interfaces limpias, responsivas y documentadas.",
  stackLine: "Python / JavaScript / Angular / MySQL / Git",
  cvPath: "/cv/Jonatan_Zuniga_CV.pdf",
  emailHref: "mailto:jzunigav002@gmail.com",
  githubUrl: "https://github.com/jzunigav001",
  linkedinUrl: "https://www.linkedin.com/in/jzunigav001"
};

export const navItems: NavItem[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Perfil", href: "#perfil" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" }
];

export const stats: Stat[] = [
  { value: "2021", label: "Ingenieria en Computacion" },
  { value: "C1", label: "Ingles avanzado" },
  { value: "4", label: "Certificaciones tecnicas" },
  { value: "3+", label: "Proyectos publicados" }
];

export const profileNotes: ProfileNote[] = [
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

export const stack = [
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

export const experience: ExperienceItem[] = [
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

export const projects: Project[] = [
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
    description:
      "Sitio para presentar perfil profesional, trabajos, trayectoria y medios de contacto.",
    image: "/assets/project-03.png",
    url: "https://octavio484.github.io/portafolio/"
  },
  {
    title: "Index Redalyc",
    type: "Maquetacion web",
    description:
      "Indice web con practica de estructura, estilos y publicacion en GitHub Pages.",
    image: "/assets/project-02.png",
    url: "https://jzunigav001.github.io/Ejercicios/"
  }
];

export const certifications = [
  "Tecnico en Integridad Web - Fundacion Carlos Slim (2024)",
  "Tecnico en Redes - Fundacion Carlos Slim (2023)",
  "Introduction to Packet Tracer - Cisco Networking Academy (2024)",
  "Networking Basics - Cisco Networking Academy (2024)"
];
