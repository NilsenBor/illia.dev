import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/shared/lib";

type TimelineItemProps = ComponentProps<"div"> & {
  children: ReactNode;
};

export function TimelineItem({
  children,
  className,
  ...props
}: TimelineItemProps) {
  return (
    <div className={cn("relative", className)} {...props}>
      <span
        aria-hidden
        className="absolute -left-[1.35rem] top-6 h-3 w-3 rounded-full border border-muted-foreground bg-background md:-left-6"
      />
      {children}
    </div>
  );
}
