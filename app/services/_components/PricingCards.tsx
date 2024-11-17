// app/services/_components/PricingCards.tsx
'use client'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const pricingPlans = [
  {
    title: 'Express Delivery',
    price: '49',
    features: [
      'Same-day delivery',
      'Real-time tracking',
      'Insurance included',
      'Priority handling',
      'Door-to-door service'
    ],
    isPopular: true,
  },
  {
    title: 'Standard Shipping',
    price: '29',
    features: [
      '2-3 day delivery',
      'Track & trace',
      'Basic insurance',
      'Regular handling',
      'Pickup points available'
    ],
    isPopular: false,
  },
  {
    title: 'Economy',
    price: '19',
    features: [
      '3-5 day delivery',
      'Basic tracking',
      'Optional insurance',
      'Standard handling',
      'Flexible pickup options'
    ],
    isPopular: false,
  }
]

export function PricingCards() {
  return (
    <section className="section">
      <div className="container-custom">
        <h2 className="heading-2 text-center mb-12">Choose Your Service Level</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              className={`card relative ${
                plan.isPopular ? 'border-2 border-primary-500' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.isPopular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-500 text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold mb-4">{plan.title}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-secondary-500">/shipment</span>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`btn ${plan.isPopular ? 'btn-primary' : 'btn-secondary'} w-full`}>
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}