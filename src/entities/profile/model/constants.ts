import { siteConfig } from "@/shared/config";

import type { Profile, QuickStat } from "./types";

export const profile: Profile = {
  name: siteConfig.name,
  role: siteConfig.role,
  about: [
    "I build fast, accessible web interfaces with React and TypeScript.",
    "Focused on clean architecture, design systems, and developer experience.",
    "Open to remote roles and interesting product teams.",
  ],
  github: siteConfig.github,
  cvUrl: siteConfig.cvUrl,
};

export const quickStats: QuickStat[] = [
  { label: "Experience", value: "5+ yrs" },
  { label: "Projects", value: "20+" },
  { label: "Stack", value: "TS / React" },
];
