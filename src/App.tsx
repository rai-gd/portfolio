import { useState } from "react";
import { CommandPalette } from "@/components/CommandPalette";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { About } from "@/components/sections/About";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import type { FocusMode } from "@/types";

export default function App() {
  const [mode, setMode] = useState<FocusMode>("qa");
  const [commandOpen, setCommandOpen] = useState(false);

  return (
    <div data-focus={mode} className="focus-stage min-h-screen overflow-x-hidden bg-background text-foreground">
      <Header onOpenCommand={() => setCommandOpen(true)} />
      <main>
        <Hero mode={mode} onModeChange={setMode} />
        <About />
        <Skills mode={mode} />
        <Experience />
        <Projects mode={mode} />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <CommandPalette open={commandOpen} onOpenChange={setCommandOpen} />
    </div>
  );
}
