export function Features() {
    const features = [
      {
        title: "Real-Time Tracking",
        description: "Monitor your shipments 24/7 with precise GPS tracking",
        icon: "📍"
      },
      {
        title: "Global Coverage",
        description: "Delivering to over 200 countries worldwide",
        icon: "🌍"
      },
      {
        title: "Express Delivery",
        description: "Same-day delivery options for urgent packages",
        icon: "⚡"
      },
      {
        title: "Secure Handling",
        description: "Advanced security measures for package safety",
        icon: "🔒"
      }
    ]
  
    return (
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-secondary-900 mb-4">
              Why Choose FastTrack?
            </h2>
            <p className="body-large text-secondary-600 max-w-2xl mx-auto">
              Experience the difference with our innovative delivery solutions
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-medium transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-secondary-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }