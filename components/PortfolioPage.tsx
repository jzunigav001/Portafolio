"use client";

import { MotionConfig } from "framer-motion";
import { ContactSection } from "@/components/ContactSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProfileSection } from "@/components/ProfileSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import {
  certifications,
  experience,
  navItems,
  profileNotes,
  projects,
  siteInfo,
  stack,
  stats
} from "@/data/portfolio";

export function PortfolioPage() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="relative min-h-screen overflow-x-hidden bg-paper text-ink">
        <div className="noise-layer pointer-events-none fixed inset-0 z-0" />

        <Header navItems={navItems} siteInfo={siteInfo} />
        <HeroSection siteInfo={siteInfo} stack={stack} />
        <ProfileSection notes={profileNotes} stats={stats} />
        <SkillsSection stack={stack} certifications={certifications} />
        <ExperienceSection experience={experience} />
        <ProjectsSection projects={projects} />
        <ContactSection siteInfo={siteInfo} />
        <Footer siteInfo={siteInfo} />
      </main>
    </MotionConfig>
  );
}
