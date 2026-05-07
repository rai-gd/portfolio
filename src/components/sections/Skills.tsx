import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { capabilityGroups } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import type { FocusMode } from "@/types";

type SkillsProps = {
  mode: FocusMode;
};

export function Skills({ mode }: SkillsProps) {
  const sortedGroups = [...capabilityGroups].sort(
    (a, b) =>
      Number(b.focus === mode || b.focus === "both") -
      Number(a.focus === mode || a.focus === "both"),
  );

  return (
    <section id="skills" className="section-pad bg-white/[0.025]">
      <div className="container">
        <SectionHeading
          eyebrow="Capabilities"
          title="Engineering stack and technical groupings"
          description="A concise map of the practices and tools behind the QA engineering, automation, and development work."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sortedGroups.map((group, index) => {
            const highlighted = group.focus === mode || group.focus === "both";
            return (
              <Reveal key={group.title} delay={index * 0.04}>
                <Card
                  className={cn(
                    "relative h-full overflow-hidden transition-all duration-300",
                    highlighted
                      ? "border-primary/45 bg-primary/[0.075] shadow-[0_0_42px_hsl(var(--primary)/0.18)]"
                      : "bg-white/[0.035] hover:border-white/20 hover:bg-white/[0.055]",
                  )}
                >
                  {highlighted ? (
                    <>
                      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-primary/40" />
                      <div className="absolute right-4 top-4 h-10 w-10 border-r border-t border-primary/45" />
                      <div className="absolute bottom-4 left-4 h-10 w-10 border-b border-l border-primary/35" />
                    </>
                  ) : null}
                  <CardContent className="pt-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge
                        className={cn(
                          highlighted && "border-primary/35 bg-primary/10 text-primary",
                        )}
                      >
                        {group.focus === "both" ? "QA + Dev" : group.focus === "qa" ? "QA Focus" : "Developer Focus"}
                      </Badge>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">{group.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{group.description}</p>

                    <div className="mt-5">
                      <p className="font-mono text-xs font-semibold uppercase text-primary">Practices</p>
                      <ul className="mt-3 space-y-2">
                        {group.practices.map((practice) => (
                          <li key={practice} className="flex gap-2 text-sm leading-6 text-foreground/85">
                            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                            {practice}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-5">
                      <p className="font-mono text-xs font-semibold uppercase text-primary">Stack</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {group.tools.map((tool) => (
                          <Badge key={tool}>{tool}</Badge>
                        ))}
                      </div>
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
