import { About, Header, Hero, QuickStats } from "@/widgets";
import { Separator } from "@/shared/ui";

export default function Page() {
  return (
    <>
      <Header activePath="/" />
      <Hero />
      <Separator gradient className="max-w-5xl mx-auto" />
      <About />
      <Separator gradient className="max-w-5xl mx-auto" />
      <QuickStats />
    </>
  );
}
