import { Award } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { certifications } from "@/data/portfolio";

export function Certifications() {
  return (
    <section id="certifications" className="section-pad">
      <div className="container">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials and continued learning"
          description="Keep this section focused on credentials that reinforce QA, automation, cloud, and delivery expertise."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {certifications.map((certification, index) => (
            <Reveal key={certification.name} delay={index * 0.06}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="hud-cut-sm inline-flex border border-primary/25 bg-primary/10 p-2">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 font-semibold">{certification.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{certification.issuer}</p>
                  <p className="mt-4 font-mono text-xs text-primary">{certification.year}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
