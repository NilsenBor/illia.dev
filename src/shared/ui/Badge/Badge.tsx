import { cn } from "@/shared/lib";

type BadgeProps = {
  children: string;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-300",
        className,
      )}
    >
      {children}
    </span>
  );
}
