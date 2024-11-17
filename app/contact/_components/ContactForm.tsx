'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Send } from 'lucide-react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section className="section bg-secondary-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            <p className="text-secondary-600 mb-8">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-soft">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                      placeholder="John Doe"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                      placeholder="john@example.com"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Subject</label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    placeholder="How can we help?"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm min-h-[150px]"
                    placeholder="Your message..."
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="w-full bg-primary-500 text-white font-bold py-3 px-4 rounded-md hover:bg-primary-600 flex items-center justify-center">
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:pt-24"
          >
            <div className="bg-primary-600 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Why Choose FastTrack?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-white rounded-full mt-2 mr-3"></div>
                  <p className="text-white">24/7 customer support to assist you with any queries</p>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-white rounded-full mt-2 mr-3"></div>
                  <p className="text-white">Real-time tracking and delivery updates</p>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-white rounded-full mt-2 mr-3"></div>
                  <p className="text-white">Competitive rates and flexible shipping options</p>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-white rounded-full mt-2 mr-3"></div>
                  <p className="text-white">Secure and reliable delivery services</p>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}