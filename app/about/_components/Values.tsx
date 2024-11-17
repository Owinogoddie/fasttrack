// app/about/_components/Values.tsx
'use client'
import { motion } from 'framer-motion'
import { Shield, Heart, Target, Users } from 'lucide-react'

const values = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Trust',
    description: 'Building lasting relationships through reliable service'
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: 'Passion',
    description: 'Dedicated to exceeding customer expectations'
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: 'Excellence',
    description: 'Committed to the highest quality standards'
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Community',
    description: 'Making a positive impact in communities we serve'
  }
]

export function Values() {
  return (
    <section className="section bg-primary-50">
      <div className="container-custom">
        <h2 className="heading-2 text-center mb-16">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="card text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex-center mb-4 text-primary-600">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-secondary-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}