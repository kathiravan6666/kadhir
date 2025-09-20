import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ResumeSection } from "@/components/resume-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { ScrollProgress } from "@/components/scroll-progress"
import { CursorFollower } from "@/components/cursor-follower"
import { ThemeToggle } from "@/components/theme-toggle"
import { LoadingScreen } from "@/components/loading-screen"

export default function Home() {
  return (
    <main className="min-h-screen">
      <LoadingScreen />
      <ScrollProgress />
      <CursorFollower />
      <ThemeToggle />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ResumeSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
