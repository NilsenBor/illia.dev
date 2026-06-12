import Link from "next/link";

import { navigation, siteConfig } from "@/shared/config";
import { cn } from "@/shared/lib";

type HeaderProps = {
  activePath?: string;
};

export function Header({ activePath = "/" }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-medium text-zinc-100">
          {siteConfig.name}
        </Link>
        <nav className="flex items-center gap-1">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3 py-1.5 text-sm transition-colors",
                activePath === item.href
                  ? "bg-zinc-100 text-zinc-950"
                  : "text-zinc-400 hover:text-zinc-100",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
