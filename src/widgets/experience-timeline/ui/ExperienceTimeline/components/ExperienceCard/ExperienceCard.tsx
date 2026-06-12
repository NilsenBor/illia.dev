"use client";

import type { ExperienceItem } from "@/entities/experience";
import { useIntersectionObserver } from "@/shared/hooks";
import { cn } from "@/shared/lib";
import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui";

type ExperienceCardProps = {
  item: ExperienceItem;
  index: number;
};

export function ExperienceCard({ item, index }: ExperienceCardProps) {
  const { ref, isInView } = useIntersectionObserver<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(isInView && "animate-slide-in-left")}
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <Card className="border-border/80 bg-card/70">
        <CardHeader className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <CardTitle>{item.company}</CardTitle>
          <CardDescription>{item.period}</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="mb-5 space-y-2 text-sm leading-relaxed text-foreground/90">
            {item.tasks.map((task) => (
              <li key={task} className="flex gap-2">
                <span className="text-muted-foreground">—</span>
                <span>{task}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech) => (
              <Badge key={tech} variant="tech">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
