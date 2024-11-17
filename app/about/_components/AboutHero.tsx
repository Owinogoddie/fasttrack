// app/about/_components/AboutHero.tsx
'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function AboutHero() {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-primary-50 to-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="heading-1 mb-6">Delivering Excellence Since 1995</h1>
            <p className="text-lg text-secondary-600 mb-8">
              From our humble beginnings to becoming a global logistics leader, 
              we&apos;ve maintained our commitment to reliable, efficient, and 
              innovative shipping solutions.
            </p>
            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">25+</div>
                <div className="text-secondary-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">200+</div>
                <div className="text-secondary-600">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">1M+</div>
                <div className="text-secondary-600">Packages Delivered</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[500px] rounded-lg overflow-hidden"
          >
            <Image
              src="/images/bg.jpeg"
              alt="About FastTrack"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}