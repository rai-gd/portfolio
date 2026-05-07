import { ArrowDown, Download, Github } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { FocusToggle } from "@/components/FocusToggle";
import { Button } from "@/components/ui/button";
import { focusCopy, owner, stats } from "@/data/portfolio";
import type { FocusMode } from "@/types";

type HeroProps = {
  mode: FocusMode;
  onModeChange: (mode: FocusMode) => void;
};

export function Hero({ mode, onModeChange }: HeroProps) {
  return (
    <section id="hero" className="hud-scan relative min-h-screen overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:44px_44px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgb(var(--focus-rgb-a)/0.16),transparent_36%),radial-gradient(circle_at_80%_10%,rgb(var(--focus-rgb-b)/0.13),transparent_30%)]" />
      </div>
      <div className="hud-reticle right-8 top-28 hidden h-44 w-44 opacity-60 lg:block" />
      <div className="hud-reticle bottom-16 left-10 hidden h-28 w-28 opacity-35 lg:block" />

      <div className="container grid min-h-[calc(100vh-7rem)] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="pb-16">
          <FocusToggle mode={mode} onChange={onModeChange} />
          <motion.p
            key={focusCopy[mode].eyebrow}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="hud-label mt-8"
          >
            {focusCopy[mode].eyebrow}
          </motion.p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-normal text-foreground sm:text-6xl lg:text-7xl">
            {owner.name}
          </h1>
          <p className="mt-5 max-w-2xl text-xl font-medium text-foreground/90">{owner.title}</p>
          <motion.p
            key={mode}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg"
          >
            {owner.heroSubtitles[mode]}
          </motion.p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <a href="#projects">
                View Case Studies
                <ArrowDown className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={owner.githubUrl} target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button asChild variant="ghost">
              <a href={owner.resumeUrl} target="_blank" rel="noreferrer">
                <Download className="h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>
        </div>

        <div className="glass-panel mb-16 p-5">
          <div className="hud-cut-sm border border-primary/20 bg-black/30 p-4 font-mono text-sm text-muted-foreground">
            <div className="flex gap-2">
              <span className="h-2.5 w-2.5 bg-primary/80" />
              <span className="h-2.5 w-2.5 bg-accent/80" />
              <span className="h-2.5 w-2.5 bg-white/50" />
            </div>
            <pre className="mt-5 overflow-x-auto leading-7">
{`quality.system = {
  identity: "QA Engineer",
  strengths: ["automation", "api", "ci/cd"],
  mode: "${mode === "qa" ? "release confidence" : "developer efficiency"}",
  output: "faster feedback, fewer regressions"
}`}
            </pre>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="hud-cut-sm border border-primary/15 bg-black/25 p-4">
                <p className="text-2xl font-bold text-foreground">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
