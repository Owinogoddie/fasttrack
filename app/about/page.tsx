// app/about/page.tsx
import { AboutHero } from "./_components/AboutHero";
import { Timeline } from "./_components/Timeline";
import { Team } from "./_components/Team";
import { Values } from "./_components/Values";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <Values />
      <Timeline />
      <Team />
      <Footer />
    </>
  );
}
