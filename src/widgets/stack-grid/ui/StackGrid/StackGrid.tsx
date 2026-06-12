import { stackCategories } from "@/entities/stack";

import { StackCard } from "./components/StackCard";

function getCategoryOffset(categoryIndex: number): number {
  return stackCategories
    .slice(0, categoryIndex)
    .reduce((total, category) => total + category.items.length, 0);
}

export function StackGrid() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-20">
      <h1 className="mb-4 text-4xl font-semibold tracking-tight text-zinc-50 md:text-5xl">
        Stack
      </h1>
      <p className="mb-12 max-w-2xl text-zinc-400">
        Technologies grouped by area, with comfort level at a glance.
      </p>

      <div className="space-y-14">
        {stackCategories.map((category, categoryIndex) => (
          <div key={category.id}>
            <h2 className="mb-6 text-sm uppercase tracking-[0.2em] text-zinc-500">
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
