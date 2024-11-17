// app/services/page.tsx
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from './_components/HeroSection'
import { PricingCards } from './_components/PricingCards'
import { ProcessSection } from './_components/ProcessSection'
import { FeaturesSection } from './_components/FeaturesSection'
import { ServiceBenefits } from './_components/ServiceBenefits'

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <PricingCards />
        <ProcessSection />
        <FeaturesSection />
        <ServiceBenefits />
      </main>
      <Footer />
    </>
  )
}