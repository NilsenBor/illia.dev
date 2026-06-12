"use client";

import * as SeparatorPrimitive from "@radix-ui/react-separator";
import type { ComponentProps } from "react";

import { cn } from "@/shared/lib";

type SeparatorProps = ComponentProps<typeof SeparatorPrimitive.Root> & {
  gradient?: boolean;
};

export function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  gradient = false,
  ...props
}: SeparatorProps) {
  return (
    <SeparatorPrimitive.Root
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        gradient &&
          orientation === "horizontal" &&
          "bg-gradient-to-r from-transparent via-border to-transparent",
        className,
      )}
      {...props}
    />
  );
}
