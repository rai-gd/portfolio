import { motion } from "framer-motion";
import { useId } from "react";
import type { FocusMode } from "@/types";
import { focusCopy } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type FocusToggleProps = {
  mode: FocusMode;
  onChange: (mode: FocusMode) => void;
};

export function FocusToggle({ mode, onChange }: FocusToggleProps) {
  const instanceId = useId();

  return (
    <div
      className="inline-flex rounded-lg border border-white/10 bg-white/[0.045] p-1 backdrop-blur-xl"
      role="tablist"
      aria-label="Portfolio focus mode"
    >
      {(["qa", "dev"] as const).map((item) => (
        <button
          key={item}
          type="button"
          role="tab"
          aria-selected={mode === item}
          onClick={() => onChange(item)}
          className={cn(
            "focus-ring relative rounded-md px-3 py-2 text-sm font-semibold transition-colors",
            mode === item ? "text-background" : "text-muted-foreground hover:text-foreground",
          )}
        >
          {mode === item ? (
            <motion.span
              layoutId={`focus-pill-${instanceId}`}
              className={cn("absolute inset-0 rounded-md bg-gradient-to-r", focusCopy[item].gradient)}
              transition={{ type: "spring", stiffness: 400, damping: 32 }}
            />
          ) : null}
          <span className="relative z-10">{focusCopy[item].label}</span>
        </button>
      ))}
    </div>
  );
}
