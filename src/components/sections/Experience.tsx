import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { experiences } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="Engineering timeline"
          description="Replace these placeholders with concise, outcome-oriented experience entries."
        />
        <div className="mx-auto max-w-4xl">
          {experiences.map((item, index) => (
            <Reveal key={`${item.company}-${item.period}`} delay={index * 0.08}>
              <article className="relative border-l border-primary/20 pb-10 pl-7 last:pb-0">
                <span className="absolute -left-[7px] top-1 h-3.5 w-3.5 rotate-45 border-2 border-background bg-primary" />
                <div className="glass-panel p-6">
                  <p className="font-mono text-xs font-semibold uppercase text-primary">{item.period}</p>
                  <h3 className="mt-2 text-xl font-semibold">{item.role}</h3>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">{item.company}</p>
                  <p className="mt-4 leading-7 text-muted-foreground">{item.summary}</p>
                  <ul className="mt-5 space-y-3">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm leading-6 text-foreground/85">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
