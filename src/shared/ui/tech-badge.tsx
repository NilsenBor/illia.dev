import { createElement } from "react";
import type { IconType } from "react-icons";

import { cn, getTechIcon } from "@/shared/lib";

import { Badge } from "./badge";

type TechBadgeProps = {
  id: string;
  name: string;
  icon?: IconType | null;
  className?: string;
};

export function TechBadge({ id, name, icon, className }: TechBadgeProps) {
  const resolvedIcon = icon ?? getTechIcon(id);
  const fallback = name.slice(0, 2).toUpperCase();

  return (
    <Badge variant="tech" className={cn("gap-2", className)}>
      <span className="flex h-4 w-4 items-center justify-center">
        {resolvedIcon ? (
          createElement(resolvedIcon, {
            "aria-hidden": true,
            className: "h-3.5 w-3.5",
          })
        ) : (
          <span className="text-[10px] font-semibold leading-none">
            {fallback}
          </span>
        )}
      </span>
      {name}
    </Badge>
  );
}
