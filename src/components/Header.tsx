import { Command, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

type HeaderProps = {
  onOpenCommand: () => void;
};

export function Header({ onOpenCommand }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-primary/20 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <a href="#hero" className="focus-ring rounded-md font-mono text-sm font-semibold text-foreground">
          QA<span className="text-primary">.</span>ENGINEERING
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring border-b border-transparent px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={onOpenCommand} className="hidden sm:inline-flex">
            <Command className="h-4 w-4" />
            Navigate
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setOpen((current) => !current)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "grid border-t border-white/10 bg-background/95 transition-[grid-template-rows] md:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <nav className="container overflow-hidden py-2" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="focus-ring block rounded-md px-2 py-3 text-sm font-medium text-muted-foreground"
            >
              {item.label}
            </a>
          ))}
          <Button variant="outline" className="mb-3 mt-1 w-full" onClick={onOpenCommand}>
            <Command className="h-4 w-4" />
            Command Navigation
          </Button>
        </nav>
      </div>
    </header>
  );
}
