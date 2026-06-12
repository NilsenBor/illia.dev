import { stackCategories } from "@/entities/stack";
import { SectionHeader } from "@/shared/ui";

import { StackCard } from "./components/StackCard";

function getCategoryOffset(categoryIndex: number): number {
  return stackCategories
    .slice(0, categoryIndex)
    .reduce((total, category) => total + category.items.length, 0);
}

export function StackGrid() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-20">
      <SectionHeader
        title="Stack"
        description="Technologies grouped by area, with comfort level at a glance."
        titleAs="h1"
      />

      <div className="space-y-14">
        {stackCategories.map((category, categoryIndex) => (
          <div key={category.id}>
            <h2 className="mb-6 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              {category.title}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item, itemIndex) => (
                <StackCard
                  key={item.id}
                  item={item}
                  index={getCategoryOffset(categoryIndex) + itemIndex}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
