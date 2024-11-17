'use client'

import { useState } from 'react'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { Card } from '../ui/Card'

export function TrackingSection() {
  const [trackingNumber, setTrackingNumber] = useState('')
  const [trackingResult, setTrackingResult] = useState<null | {
    status: string
    location: string
    lastUpdate: string
    estimatedDelivery: string
  }>(null)

  const handleTracking = (e: React.FormEvent) => {
    e.preventDefault()
    // Add tracking logic here
    setTrackingResult({
      status: 'In Transit',
      location: 'New York City, NY',
      lastUpdate: new Date().toLocaleString(),
      estimatedDelivery: 'April 25, 2024',
    })
  }

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-secondary-900 mb-4">
              Track Your Package
            </h2>
            <p className="body-large text-secondary-600">
              Enter your tracking number to get real-time updates on your shipment
            </p>
          </div>

          <Card className="mb-8">
            <form onSubmit={handleTracking} className="space-y-4">
              <Input
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Enter tracking number"
                className="w-full"
              />
              <Button type="submit" variant="primary" className="w-full">
                Track Package
              </Button>
            </form>
          </Card>

          {trackingResult && (
            <Card className="animate-fade-in">
              <h3 className="text-xl font-bold mb-4">Tracking Results</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-secondary-600">Status</p>
                    <p className="font-medium">{trackingResult.status}</p>
                  </div>
                  <div>
                    <p className="text-sm text-secondary-600">Location</p>
                    <p className="font-medium">{trackingResult.location}</p>
                  </div>
                  <div>
                    <p className="text-sm text-secondary-600">Last Update</p>
                    <p className="font-medium">{trackingResult.lastUpdate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-secondary-600">Estimated Delivery</p>
                    <p className="font-medium">{trackingResult.estimatedDelivery}</p>
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}