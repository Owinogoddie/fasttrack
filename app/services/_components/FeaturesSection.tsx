// app/services/_components/FeaturesSection.tsx
'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle, Package2, Timer, ShieldCheck, Globe2 } from 'lucide-react'

const features = {
  main: {
    title: "Premium Shipping Features",
    description: "Experience the best in logistics with our comprehensive shipping solutions.",
    image: "/images/bg.jpeg",
  },
  list: [
    {
      icon: <Package2 className="h-6 w-6" />,
      title: "Package Protection",
      description: "Advanced packaging solutions with extra protection for fragile items"
    },
    {
      icon: <Timer className="h-6 w-6" />,
      title: "Time-Critical Shipping",
      description: "Express delivery options for urgent shipments"
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Secure Handling",
      description: "End-to-end security monitoring for your valuable items"
    },
    {
      icon: <Globe2 className="h-6 w-6" />,
      title: "International Coverage",
      description: "Reliable shipping to over 200 countries worldwide"
    }
  ]
}

const additionalFeatures = [
  {
    image: "/images/img-3.jpeg",
    title: "Specialized Solutions",
    description: "From oversized items to temperature-sensitive goods, we handle it all",
    features: [
      "Climate-controlled shipping",
      "Heavy cargo handling",
      "Special packaging options",
      "Custom delivery schedules"
    ]
  },
  {
    image: "/images/img-1.jpeg",
    title: "Digital Integration",
    description: "Seamlessly integrate with our digital shipping platform",
    features: [
      "Real-time tracking API",
      "Automated notifications",
      "Digital documentation",
      "Integration support"
    ]
  }
]

export function FeaturesSection() {
  return (
    <>
      {/* Main Features */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-2 mb-6">{features.main.title}</h2>
              <p className="text-secondary-600 mb-8">{features.main.description}</p>
              
              <div className="grid gap-6">
                {features.list.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="flex gap-4 items-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 p-2 bg-primary-50 rounded-lg text-primary-600">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{feature.title}</h3>
                      <p className="text-secondary-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative h-[600px] rounded-lg overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={features.main.image}
                alt="Shipping Features"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="section bg-secondary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="card overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-64 mb-6">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-secondary-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.features.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}