export type SkillLevel = "primary" | "familiar";

export type StackItem = {
  id: string;
  name: string;
  abbr: string;
  level: SkillLevel;
  progress: number;
};

export type StackCategory = {
  id: string;
  title: string;
  items: StackItem[];
};
