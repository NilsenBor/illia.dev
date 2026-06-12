"use client";

import { cn } from "@/shared/lib";
import { useIntersectionObserver } from "@/shared/hooks";

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
        "h-1.5 w-full overflow-hidden rounded-full bg-zinc-800",
        className,
      )}
    >
      <div
        className="h-full rounded-full bg-zinc-100 transition-[width] duration-700 ease-out"
        style={{
          width: isInView ? `${value}%` : "0%",
          transitionDelay: `${delayMs}ms`,
        }}
      />
    </div>
  );
}
