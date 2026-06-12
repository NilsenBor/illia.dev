"use client";

import { useIntersectionObserver } from "@/shared/hooks";
import { cn } from "@/shared/lib";

type ProgressBarProps = {
  value: number;
  delayMs?: number;
  className?: string;
};

export function ProgressBar({
  value,
  delayMs = 0,
  className,
}: ProgressBarProps) {
  const { ref, isInView } = useIntersectionObserver<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        "h-1.5 w-full overflow-hidden rounded-full bg-muted",
        className,
      )}
    >
      <div
        className="h-full rounded-full bg-primary transition-[width] duration-700 ease-out"
        style={{
          width: isInView ? `${value}%` : "0%",
          transitionDelay: `${delayMs}ms`,
        }}
      />
    </div>
  );
}
