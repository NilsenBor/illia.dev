import type { StackCategory } from "./types";

export const stackCategories: StackCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    items: [
      {
        id: "react",
        name: "React",
        abbr: "Rx",
        level: "primary",
        progress: 92,
      },
      {
        id: "typescript",
        name: "TypeScript",
        abbr: "TS",
        level: "primary",
        progress: 90,
      },
      {
        id: "nextjs",
        name: "Next.js",
        abbr: "Nx",
        level: "primary",
        progress: 88,
      },
      {
        id: "tailwind",
        name: "Tailwind CSS",
        abbr: "Tw",
        level: "primary",
        progress: 85,
      },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    items: [
      {
        id: "nodejs",
        name: "Node.js",
        abbr: "Nd",
        level: "familiar",
        progress: 70,
      },
      {
        id: "postgres",
        name: "PostgreSQL",
        abbr: "Pg",
        level: "familiar",
        progress: 65,
      },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    items: [
      { id: "git", name: "Git", abbr: "Gt", level: "primary", progress: 88 },
      {
        id: "docker",
        name: "Docker",
        abbr: "Dk",
        level: "familiar",
        progress: 60,
      },
      {
        id: "figma",
        name: "Figma",
        abbr: "Fg",
        level: "familiar",
        progress: 72,
      },
    ],
  },
];
