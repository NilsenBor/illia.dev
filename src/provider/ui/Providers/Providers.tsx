"use client";

import type { ReactNode } from "react";

import { TooltipProvider } from "@/shared/ui";

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return <TooltipProvider>{children}</TooltipProvider>;
}
