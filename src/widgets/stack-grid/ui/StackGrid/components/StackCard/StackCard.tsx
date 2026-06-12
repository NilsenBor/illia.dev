"use client";

import type { StackItem } from "@/entities/stack";
import { useIntersectionObserver } from "@/shared/hooks";
import { cn } from "@/shared/lib";
import {
  Card,
  CardContent,
  ProgressBar,
  TechBadge,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/shared/ui";

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
      className={cn(isInView && "animate-fade-up")}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <Card className="border-border/80 bg-card/70">
        <CardContent className="p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <TechBadge id={item.id} name={item.name} />
                </button>
              </TooltipTrigger>
              <TooltipContent>{item.name}</TooltipContent>
            </Tooltip>
            <span className="text-xs text-muted-foreground">
              {levelLabels[item.level]}
            </span>
          </div>
          <ProgressBar value={item.progress} delayMs={index * 80 + 150} />
        </CardContent>
      </Card>
    </div>
  );
}
