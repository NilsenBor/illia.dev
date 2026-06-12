import Link from "next/link";

import { cn } from "@/shared/lib";

type ButtonProps = {
  href: string;
  children: string;
  variant?: "primary" | "outline";
  external?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className,
}: ButtonProps) {
  const styles = cn(
    "inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-medium transition-colors",
    variant === "primary"
      ? "bg-zinc-100 text-zinc-950 hover:bg-white"
      : "border border-zinc-700 text-zinc-100 hover:border-zinc-500 hover:bg-zinc-900",
    className,
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  );
}
