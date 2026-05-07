import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "hud-cut-sm inline-flex items-center border border-white/10 bg-white/[0.055] px-2.5 py-1 text-xs font-medium text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}
