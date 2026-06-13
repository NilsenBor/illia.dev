import { profile } from "@/entities/profile";
import { SectionHeader } from "@/shared/ui";

export function About() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-20">
      <SectionHeader eyebrow="About" title="About me" titleAs="h2" />
      <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-foreground/90">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
