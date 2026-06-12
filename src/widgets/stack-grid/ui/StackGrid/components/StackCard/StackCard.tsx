"use client";

import type { StackItem } from "@/entities/stack";
import { useIntersectionObserver } from "@/shared/hooks";
import { ProgressBar } from "@/shared/ui";
import { cn } from "@/shared/lib";

type StackCardProps = {
  item: StackItem;
  index: number;
};

const levelLabels = {
  primary: "Primary",
  familiar: "Familiar",
} as const;

export function StackCard({ item, index }: StackCardProps) {
  const { ref, isInView } = useIntersectionObserver<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5",
        isInView && "animate-fade-up",
      )}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900 text-xs font-semibold text-zinc-200">
          {item.abbr}
        </div>
        <div>
          <p className="font-medium text-zinc-50">{item.name}</p>
          <p className="text-xs text-zinc-500">{levelLabels[item.level]}</p>
        </div>
      </div>
      <ProgressBar value={item.progress} delayMs={index * 80 + 150} />
    </div>
  );
}
