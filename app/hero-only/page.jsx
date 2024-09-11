import ExperienceSection from "@/components/ExperienceSection";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ScrollerSection from "@/components/ScrollerSection";
import SecondaryHeader from "@/components/SecondaryHeader";

export default function HeroOnly({ props }) {
  return (
    <main>
      <Header />
      <SecondaryHeader />
      <Hero />
    </main>
  );
}
