import { ArrowUpRight, Mail } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { owner, socialLinks } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="section-pad">
      <div className="container">
        <Reveal>
          <Card className="mx-auto max-w-4xl overflow-hidden">
            <CardContent className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="hud-label">Contact</p>
                <h2 className="mt-3 text-3xl font-bold">Build better release confidence.</h2>
                <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
                  PLACEHOLDER CONTACT COPY: Add a concise note about the roles, collaborations, or project work you are open to discussing.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <Button key={link.label} asChild variant="outline">
                      <a href={link.href} target={link.href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer">
                        <link.icon className="h-4 w-4" />
                        {link.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
              <Button asChild className="w-full lg:w-auto">
                <a href={`mailto:${owner.email}`}>
                  <Mail className="h-4 w-4" />
                  Send Email
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
