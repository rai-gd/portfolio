import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { FocusToggle } from "@/components/FocusToggle";
import { Button } from "@/components/ui/button";
import { navItems } from "@/data/navigation";
import { owner } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import type { FocusMode } from "@/types";

type HeaderProps = {
  mode: FocusMode;
  onModeChange: (mode: FocusMode) => void;
};

export function Header({ mode, onModeChange }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 160);

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-4 z-40 px-3 transition-all duration-300",
        visible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none",
      )}
    >
      <div className="glass-panel mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-3 px-4 py-2">
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

        <div className="hidden lg:block">
          <FocusToggle mode={mode} onChange={onModeChange} />
        </div>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
            <a href={owner.resumeUrl} target="_blank" rel="noreferrer">
              <Download className="h-4 w-4" />
              Resume
            </a>
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
          "mx-auto grid max-w-6xl border-t border-white/10 bg-background/95 transition-[grid-template-rows] md:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <nav className="container overflow-hidden py-2" aria-label="Mobile navigation">
          <div className="mb-3">
            <FocusToggle mode={mode} onChange={onModeChange} />
          </div>
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
          <Button asChild variant="outline" className="mb-3 mt-1 w-full">
            <a href={owner.resumeUrl} target="_blank" rel="noreferrer">
              <Download className="h-4 w-4" />
              Resume
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
