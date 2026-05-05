export type NavItem = {
  label: string;
  href: string;
};

export type SiteInfo = {
  name: string;
  role: string;
  yearLabel: string;
  degree: string;
  headline: string;
  supportingLine: string;
  stackLine: string;
  cvPath: string;
  emailHref: string;
  githubUrl: string;
  linkedinUrl: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type ProfileNote = {
  title: string;
  copy: string;
};

export type ExperienceItem = {
  role: string;
  place: string;
  date: string;
  detail: string;
};

export type Project = {
  title: string;
  type: string;
  description: string;
  image: string;
  url: string;
};
