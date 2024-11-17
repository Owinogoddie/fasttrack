import { Button } from '../ui/Button'
import { Input } from '../ui/Input'

export function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/80" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <h1 className="heading-1 text-white mb-6 animate-fade-in">
            Fast, Reliable
            <span className="text-primary-300 block">Courier Services</span>
          </h1>
          <p className="body-large text-white/80 mb-8 animate-slide-up">
            Delivering your packages safely and on time, anywhere in the world.
            Experience the future of logistics.
          </p>

          {/* Tracking Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 animate-slide-up">
            <form className="flex flex-col md:flex-row gap-4">
              <Input
                type="text"
                placeholder="Enter tracking number"
                className="flex-1"
              />
              <Button variant="primary" size="lg">
                Track Package
              </Button>
            </form>
            <p className="text-white/60 text-sm mt-2">
              Enter your tracking number to get real-time updates
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}