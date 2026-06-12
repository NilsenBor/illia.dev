import { experienceItems } from "@/entities/experience";

import { ExperienceCard } from "./components/ExperienceCard";

export function ExperienceTimeline() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-20">
      <h1 className="mb-4 text-4xl font-semibold tracking-tight text-zinc-50 md:text-5xl">
        Experience
      </h1>
      <p className="mb-12 max-w-2xl text-zinc-400">
        Selected roles and the kind of work I focus on.
      </p>

      <div className="relative space-y-8 pl-8 md:pl-10">
        <div
          aria-hidden
          className="absolute bottom-0 left-3 top-0 w-px bg-gradient-to-b from-zinc-700 via-zinc-600 to-transparent md:left-4"
        />
        {experienceItems.map((item, index) => (
          <div key={item.id} className="relative">
            <span
              aria-hidden
              className="absolute -left-[1.35rem] top-6 h-3 w-3 rounded-full border border-zinc-500 bg-zinc-950 md:-left-6"
            />
            <ExperienceCard item={item} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}
