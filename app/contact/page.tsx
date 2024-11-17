// app/contact/page.tsx
import { ContactHero } from "./_components/ContactHero";
import { ContactForm } from "./_components/ContactForm";
import Map from "./_components/Map";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactHero />
      <ContactForm />
      <Map />
      <Footer />
    </>
  );
}
