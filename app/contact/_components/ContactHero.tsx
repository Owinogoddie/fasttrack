// app/contact/_components/ContactHero.tsx
'use client'
import { motion } from 'framer-motion'
import { Mail, Phone, Clock, MapPin } from 'lucide-react'

const contactInfo = [
  {
    icon: <Phone className="h-6 w-6" />,
    title: 'Phone',
    details: ['+254 700 123 456', '+254 733 123 456'],
    link: 'tel:+254700123456'
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: 'Email',
    details: ['info@fasttrack.co.ke', 'support@fasttrack.co.ke'],
    link: 'mailto:info@fasttrack.co.ke'
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: 'Address',
    details: ['Kimathi Street', 'Nairobi, Kenya'],
    link: '#map'
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: 'Working Hours',
    details: ['Monday - Friday: 8am - 6pm', 'Saturday: 9am - 4pm'],
    link: null
  }
]

export function ContactHero() {
  return (
    <section className="pt-32 pb-16">
      <div className="container-custom">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="heading-1 mb-6">Get in Touch</h1>
          <p className="text-lg text-secondary-600">
            Have questions about our services? Our team is here to help you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              className="card text-center hover:shadow-medium transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex-center mb-4 text-primary-600">
                <div className="p-3 bg-primary-50 rounded-full">
                  {info.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{info.title}</h3>
              <div className="space-y-1">
                {info.details.map((detail, i) => (
                  <p key={i} className="text-secondary-600">{detail}</p>
                ))}
              </div>
              {info.link && (
                <a
                  href={info.link}
                  className="inline-block mt-4 text-primary-600 hover:text-primary-700"
                >
                  {info.title === 'Address' ? 'View Map' : 'Contact Us'}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}