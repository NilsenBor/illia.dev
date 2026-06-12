import { profile } from "@/entities/profile";
import { Button } from "@/shared/ui";

export function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-24 md:py-32">
      <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
        Portfolio
      </p>
      <h1
        className="max-w-3xl font-semibold leading-[1.05] tracking-tight text-zinc-50"
        style={{ fontSize: "clamp(3rem, 8vw, 5rem)" }}
      >
        {profile.name}
      </h1>
      <p className="max-w-xl text-xl text-zinc-400 md:text-2xl">
        {profile.role}
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button href={profile.github} external variant="primary">
          GitHub
        </Button>
        <Button href={profile.cvUrl} variant="outline">
          Download CV
        </Button>
      </div>
    </section>
  );
}
