import { ExternalLink, Github } from "lucide-react";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { focusCopy, projectCategories, projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import type { FocusMode, ProjectCategory } from "@/types";

type ProjectsProps = {
  mode: FocusMode;
};

export function Projects({ mode }: ProjectsProps) {
  const [category, setCategory] = useState<ProjectCategory | "All">("All");
  const visibleProjects = useMemo(() => {
    return projects
      .filter((project) => category === "All" || project.category === category)
      .sort((a, b) => Number(b.focus === mode || b.focus === "both") - Number(a.focus === mode || a.focus === "both"));
  }, [category, mode]);

  return (
    <section id="projects" className="section-pad bg-white/[0.025]">
      <div className="container">
        <SectionHeading
          eyebrow="Case Studies"
          title="Featured engineering work"
          description="Projects are framed by problem, approach, and measurable impact so the engineering value is clear."
        />
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {(["All", ...projectCategories] as const).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={cn(
                "focus-ring rounded-md border px-3 py-2 text-sm font-semibold transition-colors",
                category === item
                  ? `border-transparent bg-gradient-to-r text-background ${focusCopy[mode].gradient}`
                  : "border-white/10 bg-white/[0.035] text-muted-foreground hover:text-foreground",
              )}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {visibleProjects.map((project, index) => {
            const highlighted = project.focus === mode || project.focus === "both";
            return (
            <Reveal key={project.title} delay={index * 0.06}>
              <Card
                className={cn(
                  "relative h-full overflow-hidden transition-all duration-300 hover:-translate-y-1",
                  highlighted
                    ? "border-primary/45 bg-primary/[0.07] shadow-[0_0_46px_hsl(var(--primary)/0.17)]"
                    : "bg-white/[0.035] hover:border-white/20 hover:bg-white/[0.055]",
                )}
              >
                {highlighted ? (
                  <>
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-primary/40" />
                    <div className="absolute right-4 top-4 h-12 w-12 border-r border-t border-primary/45" />
                    <div className="absolute bottom-4 left-4 h-12 w-12 border-b border-l border-primary/35" />
                  </>
                ) : null}
                <CardContent className="pt-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge className={cn(highlighted && "border-primary/35 bg-primary/10 text-primary")}>
                      {project.category}
                    </Badge>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{project.summary}</p>
                  <div className="mt-5 grid gap-4">
                    <CaseField label="Problem" value={project.problem} />
                    <CaseField label="Approach" value={project.approach} />
                    <CaseField label="Impact" value={project.impact} />
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button asChild variant="outline" size="sm">
                      <a href={project.repositoryUrl} target="_blank" rel="noreferrer">
                        <Github className="h-4 w-4" />
                        Repository
                      </a>
                    </Button>
                    {project.demoUrl ? (
                      <Button asChild variant="ghost" size="sm">
                        <a href={project.demoUrl} target="_blank" rel="noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    ) : null}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CaseField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-xs font-semibold uppercase text-primary">{label}</p>
      <p className="mt-1 text-sm leading-6 text-foreground/85">{value}</p>
    </div>
  );
}
