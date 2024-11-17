import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { Features } from '@/components/sections/Features'
import { Stats } from '@/components/sections/Stats'
import { Testimonials } from '@/components/sections/Testimonials'
import { TrackingSection } from '@/components/sections/TrackingSection'
import { CallToAction } from '@/components/sections/CallToAction'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Features />
        <Stats />
        <TrackingSection />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}