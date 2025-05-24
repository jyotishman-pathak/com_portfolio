import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { TeamSection } from "@/components/sections/team-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <TechStackSection />
      <TeamSection />
      <ContactSection />
    </>
  );
}