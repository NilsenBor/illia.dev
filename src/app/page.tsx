import { About, Header, Hero, QuickStats } from "@/widgets";
import { SectionDivider } from "@/shared/ui";

export default function Page() {
  return (
    <>
      <Header activePath="/" />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <QuickStats />
    </>
  );
}
