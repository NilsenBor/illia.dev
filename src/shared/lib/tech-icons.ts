import type { IconType } from "react-icons";
import {
  SiDocker,
  SiFigma,
  SiGit,
  SiGraphql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const techIcons: Record<string, IconType> = {
  react: SiReact,
  typescript: SiTypescript,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  nodejs: SiNodedotjs,
  postgres: SiPostgresql,
  git: SiGit,
  docker: SiDocker,
  figma: SiFigma,
  graphql: SiGraphql,
};

export function getTechIcon(id: string): IconType | null {
  return techIcons[id] ?? null;
}
