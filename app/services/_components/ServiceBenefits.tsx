// app/services/_components/ServiceBenefits.tsx
'use client'
import { motion } from 'framer-motion'
import { Shield, Clock, Globe2, Headphones } from 'lucide-react'

const benefits = [
  {
    icon: <Globe2 className="h-8 w-8" />,
    title: 'Global Coverage',
    description: 'Delivering to over 200 countries worldwide'
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Secure Shipping',
    description: 'Advanced packaging and handling protocols'
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: '24/7 Service',
    description: 'Always available when you need us'
  },
  {
    icon: <Headphones className="h-8 w-8" />,
    title: 'Expert Support',
    description: 'Professional assistance at every step'
  }
]

export function ServiceBenefits() {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="card text-center group hover:shadow-medium transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex-center mb-4 text-primary-500 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-secondary-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}