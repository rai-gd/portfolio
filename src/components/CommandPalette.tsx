import { Search, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { commandItems } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

type CommandPaletteProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const filteredItems = useMemo(() => {
    const normalized = query.toLowerCase().trim();
    if (!normalized) return commandItems;
    return commandItems.filter((item) =>
      `${item.label} ${item.description}`.toLowerCase().includes(normalized),
    );
  }, [query]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        onOpenChange(!open);
      }
      if (event.key === "Escape") onOpenChange(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onOpenChange, open]);

  if (!open) return null;

  const activate = (target: string) => {
    if (target.startsWith("http")) {
      window.open(target, "_blank", "noopener,noreferrer");
    } else {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    onOpenChange(false);
    setQuery("");
  };

  return (
    <div className="fixed inset-0 z-50 bg-background/70 p-4 backdrop-blur-md" role="dialog" aria-modal="true">
      <button className="absolute inset-0 cursor-default" aria-label="Close command palette" onClick={() => onOpenChange(false)} />
      <div className="glass-panel hud-scan relative mx-auto mt-20 max-w-xl overflow-hidden">
        <div className="flex items-center gap-3 border-b border-primary/20 bg-black/20 px-4 py-3">
          <Search className="h-5 w-5 text-muted-foreground" />
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search sections or links..."
            className="h-10 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
          <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)} aria-label="Close">
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="max-h-[420px] overflow-y-auto p-2">
          {filteredItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => activate(item.target)}
              className="focus-ring hud-cut-sm flex w-full items-center gap-3 px-3 py-3 text-left transition-colors hover:border-primary/25 hover:bg-primary/[0.07]"
            >
              <item.icon className="h-5 w-5 text-primary" />
              <span>
                <span className="block text-sm font-semibold text-foreground">{item.label}</span>
                <span className="block text-xs text-muted-foreground">{item.description}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
