import { Button } from '../ui/Button'

export function CallToAction() {
  return (
    <section className="bg-primary-600 py-20">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:mr-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Ship Your Package?
            </h2>
            <p className="text-xl text-primary-100">
              Get started with FastTrack today and experience hassle-free delivery
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="secondary"
              size="lg"
              className="whitespace-nowrap"
            >
              Get a Quote
            </Button>
            <Button
              variant="primary"
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100 whitespace-nowrap"
            >
              Schedule Pickup
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}