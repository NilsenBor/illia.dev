import { quickStats } from "@/entities/profile";

export function QuickStats() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-20">
      <h2 className="mb-8 text-sm uppercase tracking-[0.2em] text-zinc-500">
        Quick stats
      </h2>
      <div className="grid gap-6 sm:grid-cols-3">
        {quickStats.map((stat, index) => (
          <div
            key={stat.label}
            className="animate-fade-up rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <p className="text-3xl font-semibold text-zinc-50">{stat.value}</p>
            <p className="mt-2 text-sm text-zinc-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
