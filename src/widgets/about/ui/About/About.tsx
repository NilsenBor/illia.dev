import { profile } from "@/entities/profile";

export function About() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-20">
      <h2 className="mb-6 text-sm uppercase tracking-[0.2em] text-zinc-500">
        About
      </h2>
      <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-zinc-300">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
