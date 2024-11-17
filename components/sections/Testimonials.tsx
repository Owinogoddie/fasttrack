import Image from 'next/image'
import { Card } from '../ui/Card'

export function Testimonials() {
  const testimonials = [
    {
      content: "The fastest delivery service I've ever used. Their tracking system is incredible!",
      author: "Sarah Johnson",
      position: "E-commerce Owner",
      image: "https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      content: "Outstanding customer service and reliable international shipping.",
      author: "Michael Chen",
      position: "Business Manager",
      image: "https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      content: "They handle our business shipments with utmost care and professionalism.",
      author: "Emma Davis",
      position: "Logistics Director",
      image: "https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ]

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-secondary-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="body-large text-secondary-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-medium transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-secondary-900">
                    {testimonial.author}
                  </h4>
                  <p className="text-secondary-600">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-secondary-700 italic">&quot;{testimonial.content}&quot;</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}