import { AboutSection } from '@/components/sections/AboutSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline';
import { Footer } from '@/components/sections/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <ProjectsSection />
      <ExperienceTimeline />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}