export function Stats() {
    const stats = [
      { number: "1M+", label: "Packages Delivered" },
      { number: "200+", label: "Countries Served" },
      { number: "24/7", label: "Customer Support" },
      { number: "99.9%", label: "Delivery Success" }
    ]
  
    return (
      <section className="bg-primary-600 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }