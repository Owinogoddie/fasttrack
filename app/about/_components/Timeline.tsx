// app/about/_components/Timeline.tsx
'use client'
import { motion } from 'framer-motion'

const timelineEvents = [
  {
    year: '1995',
    title: 'Company Founded',
    description: 'Started as a local courier service with just three vehicles.'
  },
  {
    year: '2000',
    title: 'National Expansion',
    description: 'Expanded operations to cover all major cities in the country.'
  },
  {
    year: '2005',
    title: 'International Launch',
    description: 'Began international shipping operations in Asia and Europe.'
  },
  {
    year: '2010',
    title: 'Digital Revolution',
    description: 'Launched our first mobile app and real-time tracking system.'
  },
  {
    year: '2015',
    title: 'Sustainability Initiative',
    description: 'Introduced eco-friendly packaging and electric delivery vehicles.'
  },
  {
    year: '2020',
    title: 'Global Recognition',
    description: 'Named "Best Global Logistics Provider" at Industry Awards.'
  }
]

export function Timeline() {
  return (
    <section className="section bg-secondary-50">
      <div className="container-custom">
        <h2 className="heading-2 text-center mb-16">Our Journey</h2>
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200" />
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-1 text-right">
                  <div className={`lg:text-${index % 2 === 0 ? 'right' : 'left'}`}>
                    <div className="text-4xl font-bold text-primary-600 mb-2">
                      {event.year}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-secondary-600">{event.description}</p>
                  </div>
                </div>
                <div className="relative flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-primary-600 relative z-10" />
                </div>
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}