import type { ExperienceItem } from "./types";

export const experienceItems: ExperienceItem[] = [
  {
    id: "1",
    company: "Product Company",
    period: "2022 — Present",
    tasks: [
      "Led migration to Next.js App Router and improved Core Web Vitals.",
      "Built shared UI kit on top of shadcn/ui and Tailwind CSS.",
      "Introduced feature-sliced architecture across the frontend codebase.",
      "Mentored junior developers and owned code review standards.",
    ],
    technologies: ["Next.js", "TypeScript", "React Query", "Tailwind"],
  },
  {
    id: "2",
    company: "Agency Studio",
    period: "2020 — 2022",
    tasks: [
      "Delivered marketing sites and dashboards for B2B clients.",
      "Integrated REST APIs and set up CI/CD pipelines.",
      "Optimized bundle size and implemented lazy loading patterns.",
    ],
    technologies: ["React", "Node.js", "GraphQL", "Figma"],
  },
  {
    id: "3",
    company: "Freelance",
    period: "2018 — 2020",
    tasks: [
      "Shipped landing pages and MVPs for early-stage startups.",
      "Collaborated directly with founders on product scope and UX.",
    ],
    technologies: ["JavaScript", "SCSS", "WordPress"],
  },
];
