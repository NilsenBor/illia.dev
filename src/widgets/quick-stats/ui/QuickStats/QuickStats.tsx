import { quickStats } from "@/entities/profile";
import { Card, CardContent, SectionHeader } from "@/shared/ui";

export function QuickStats() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-20">
      <SectionHeader eyebrow="Quick stats" title="At a glance" titleAs="h2" />
      <div className="grid gap-6 sm:grid-cols-3">
        {quickStats.map((stat, index) => (
          <Card
            key={stat.label}
            className="animate-fade-up border-border/80 bg-card/60"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardContent className="p-6">
              <p className="text-3xl font-semibold text-foreground">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
