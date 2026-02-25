import Hero from "@/components/ui/Hero";
import TechStack from "@/components/ui/TechStack";
import Projects from "@/components/ui/Projects";
import DesignGallery from "@/components/ui/DesignGallery";
import AboutMe from "@/components/ui/AboutMe";
import Contact from "@/components/ui/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TechStack />
      <Projects />
      <DesignGallery />
      <AboutMe />
      <Contact />
    </main>
  );
}
