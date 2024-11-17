// app/services/_components/ProcessSection.tsx
'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const steps = [
  {
    title: 'Book',
    description: 'Schedule your pickup online or through our mobile app',
    icon: '📦',
    image: '/images/img-4.jpeg'
  },
  {
    title: 'Pack',
    description: 'We collect your package and ensure secure packaging',
    icon: '🚚',
    image: '/images/img-2.jpeg'
  },
  {
    title: 'Track',
    description: 'Monitor your shipment with real-time tracking',
    icon: '📍',
    image: '/images/img-3.jpeg'
  },
  {
    title: 'Deliver',
    description: 'We ensure safe and timely delivery to the destination',
    icon: '✅',
    image: '/images/img-1.jpeg'
  }
]

export function ProcessSection() {
  return (
    <section className="section bg-secondary-50">
      <div className="container-custom">
        <h2 className="heading-2 text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="card overflow-hidden">
                <div className="relative w-full h-48 mb-4">
                  <Image 
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover rounded-lg transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-secondary-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}