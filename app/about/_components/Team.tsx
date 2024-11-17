// app/about/_components/Team.tsx
'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Linkedin, Twitter } from 'lucide-react'

const team = [
  {
    name: 'John Smith',
    position: 'CEO & Founder',
    image: '/images/person-1.jpeg',
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Sarah Johnson',
    position: 'Operations Director',
    image: '/images/person-2.jpeg',
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Mike Chen',
    position: 'Technology Head',
    image: '/images/person-1.jpeg',
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Emily Brown',
    position: 'Customer Relations',
    image: '/images/person-4.jpeg',
    linkedin: '#',
    twitter: '#'
  }
]

export function Team() {
  return (
    <section className="section">
      <div className="container-custom">
        <h2 className="heading-2 text-center mb-16">Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-80 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-secondary-600 mb-3">{member.position}</p>
              <div className="flex gap-3">
                <a href={member.linkedin} className="text-secondary-400 hover:text-primary-600">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href={member.twitter} className="text-secondary-400 hover:text-primary-600">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}