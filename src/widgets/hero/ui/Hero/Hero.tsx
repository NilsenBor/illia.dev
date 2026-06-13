import Link from "next/link";

import { profile } from "@/entities/profile";
import { Button } from "@/shared/ui";

export function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-24 md:py-32">
      <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
        Portfolio
      </p>
      <h1
        className="max-w-3xl font-semibold leading-[1.05] tracking-tight text-foreground"
        style={{ fontSize: "clamp(3rem, 8vw, 5rem)" }}
      >
        {profile.name}
      </h1>
      <p className="max-w-xl text-xl text-muted-foreground md:text-2xl">
        {profile.role}
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button asChild variant="default">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </Button>
        <Button asChild variant="outline">
          <Link href={profile.cvUrl}>Download CV</Link>
        </Button>
      </div>
    </section>
  );
}
