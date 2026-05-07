import { owner } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {owner.name}. QA engineering portfolio.</p>
        <a className="focus-ring rounded-md hover:text-foreground" href="#hero">
          Back to top
        </a>
      </div>
    </footer>
  );
}
