import { Card } from '../ui/Card'
import { SERVICES } from '@/lib/constants'

export function Services() {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-2 text-secondary-900 mb-4">
            Our Services
          </h2>
          <p className="body-large text-secondary-600 max-w-2xl mx-auto">
            Choose from our range of specialized delivery solutions tailored to meet
            your specific needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <Card 
              key={index}
              className="hover:shadow-medium transition-shadow duration-300"
            >
              <div className="h-12 w-12 mb-6 text-primary-600">
                {/* Add icon component here */}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-secondary-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-secondary-700">
                    <svg
                      className="h-5 w-5 text-primary-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}