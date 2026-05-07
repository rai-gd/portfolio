import { Code2, GitBranch, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { owner } from "@/data/portfolio";

const principles = [
  {
    icon: ShieldCheck,
    title: "Quality as engineering signal",
    text: "Test coverage is designed around product risk, service boundaries, and the evidence teams need for release decisions.",
  },
  {
    icon: Code2,
    title: "Automation with maintainability",
    text: "Automation is treated like software: typed helpers, clear ownership, stable data, readable failures, and low maintenance cost.",
  },
  {
    icon: GitBranch,
    title: "Developer collaboration",
    text: "Defects become better checks, flaky tests become system improvements, and feedback loops stay close to the code.",
  },
];

export function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container">
        <SectionHeading
          eyebrow="About"
          title="QA engineering with development depth"
          description="A portfolio positioned around release confidence, automation design, and technical collaboration."
        />
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <Card className="h-full">
              <CardContent className="pt-6">
                <p className="text-lg leading-8 text-foreground/90">{owner.bio}</p>
                <dl className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div>
                    <dt className="font-mono text-xs uppercase text-muted-foreground">Location</dt>
                    <dd className="mt-1 font-semibold">{owner.location}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-xs uppercase text-muted-foreground">Primary Identity</dt>
                    <dd className="mt-1 font-semibold">QA Engineer</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>
          </Reveal>
          <div className="grid gap-4">
            {principles.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <Card>
                  <CardContent className="flex gap-4 pt-6">
                    <item.icon className="mt-1 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-2 leading-7 text-muted-foreground">{item.text}</p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
