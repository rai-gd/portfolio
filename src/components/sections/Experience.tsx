import { CheckCircle2 } from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { experiences } from "@/data/portfolio";

export function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 70%"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.2 });
  const lineOpacity = useTransform(scrollYProgress, [0, 0.08], [0.2, 1]);

  return (
    <section id="experience" className="section-pad">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="Engineering timeline"
          description="Replace these placeholders with concise, outcome-oriented experience entries."
        />
        <div ref={timelineRef} className="relative mx-auto max-w-4xl space-y-8">
          <div className="absolute bottom-0 left-0 top-0 w-px bg-primary/15" aria-hidden="true" />
          <motion.div
            className="absolute left-0 top-0 w-px origin-top bg-gradient-to-b from-primary via-accent to-primary shadow-[0_0_22px_hsl(var(--primary)/0.45)]"
            style={{ height: "100%", scaleY: lineScale, opacity: lineOpacity }}
            aria-hidden="true"
          />
          {experiences.map((item, index) => (
            <Reveal key={`${item.company}-${item.period}`} delay={index * 0.08}>
              <article className="relative pl-8">
                <span
                  className="absolute -left-[11px] top-1/2 flex h-5 w-5 -translate-y-1/2 rotate-45 items-center justify-center border border-primary bg-background shadow-[0_0_22px_hsl(var(--primary)/0.32)]"
                  aria-hidden="true"
                >
                  <span className="h-2 w-2 bg-primary" />
                </span>
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
