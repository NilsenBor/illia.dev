"use client";

import type { ExperienceItem } from "@/entities/experience";
import { useIntersectionObserver } from "@/shared/hooks";
import { Badge } from "@/shared/ui";
import { cn } from "@/shared/lib";

type ExperienceCardProps = {
  item: ExperienceItem;
  index: number;
};

export function ExperienceCard({ item, index }: ExperienceCardProps) {
  const { ref, isInView } = useIntersectionObserver<HTMLElement>();

  return (
    <article
      ref={ref}
      className={cn(
        "relative rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6",
        isInView && "animate-slide-in-left",
      )}
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-lg font-medium text-zinc-50">{item.company}</h3>
        <p className="text-sm text-zinc-500">{item.period}</p>
      </div>
      <ul className="mb-5 space-y-2 text-sm leading-relaxed text-zinc-300">
        {item.tasks.map((task) => (
          <li key={task} className="flex gap-2">
            <span className="text-zinc-600">—</span>
            <span>{task}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {item.technologies.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
    </article>
  );
}
