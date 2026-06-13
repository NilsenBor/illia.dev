import type { ComponentProps } from "react";

import { cn } from "@/shared/lib";

type SectionHeaderProps = ComponentProps<"div"> & {
  eyebrow?: string;
  title: string;
  description?: string;
  titleAs?: "h1" | "h2";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  titleAs: TitleTag = "h2",
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12", className)} {...props}>
      {eyebrow ? (
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
          {eyebrow}
        </p>
      ) : null}
      <TitleTag className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
        {title}
      </TitleTag>
      {description ? (
        <p className="mt-4 max-w-2xl text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}
