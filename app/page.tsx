import Hero from "@/components/hero-section";
import Projects from "@/components/project-section";
import Skills from "@/components/skill-section";
import TerminalInfo from "@/components/terminal-info";

export default function Home() {
  return (
    <main className="px-5">
      <Hero />
      <TerminalInfo />
      <Skills />
      <Projects />
      {/* 
    
       */}
    </main>
  );
}
