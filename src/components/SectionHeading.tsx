import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto mb-10 max-w-3xl text-center", className)}>
      <p className="hud-label mx-auto">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-normal text-foreground sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-muted-foreground">{description}</p> : null}
      <div className="hud-divider mx-auto mt-6 max-w-sm" />
    </div>
  );
}
