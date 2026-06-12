import { experienceItems } from "@/entities/experience";
import { SectionHeader, Separator, TimelineItem } from "@/shared/ui";

import { ExperienceCard } from "./components/ExperienceCard";

export function ExperienceTimeline() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-20">
      <SectionHeader
        title="Experience"
        description="Selected roles and the kind of work I focus on."
        titleAs="h1"
      />

      <div className="relative space-y-8 pl-8 md:pl-10">
        <Separator
          orientation="vertical"
          className="absolute bottom-0 left-3 top-0 w-px bg-gradient-to-b from-border via-muted-foreground/40 to-transparent md:left-4"
        />
        {experienceItems.map((item, index) => (
          <TimelineItem key={item.id}>
            <ExperienceCard item={item} index={index} />
          </TimelineItem>
        ))}
      </div>
    </section>
  );
}
