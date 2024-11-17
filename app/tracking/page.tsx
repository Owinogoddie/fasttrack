// app/tracking/page.tsx
'use client'

import { useState } from 'react'
import { TrackingSearchBar } from './_components/TrackingSearchBar'
import { ShipmentStatusCard } from './_components/ShipmentStatusCard'
import { TrackingTimeline } from './_components/TrackingTimeline'
import { ShipmentDetails } from './_components/ShipmentDetails'
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from '@/components/ui/Button'
import { Share2, Download, Printer } from 'lucide-react'

export default function TrackingPage() {
  const [trackingResult, setTrackingResult] = useState<any>(null)

  const handleSearch = (trackingNumber: string) => {
    // Simulate API call
    setTrackingResult({
      trackingNumber: trackingNumber,
      status: 'In Transit',
      packageType: 'Standard Package',
      currentLocation: 'Distribution Center, New York',
      estimatedDelivery: 'Nov 20, 2024',
      carrier: 'FastTrack Express',
      sender: {
        name: 'John Doe',
        address: '123 Sender St, Brooklyn, NY 11201',
        contact: '+1 (555) 123-4567'
      },
      recipient: {
        name: 'Jane Smith',
        address: '456 Recipient Ave, Manhattan, NY 10001',
        contact: '+1 (555) 987-6543'
      },
      package: {
        weight: '5.2 kg',
        dimensions: '30 x 20 x 15 cm',
        service: 'Express Delivery'
      },
      updates: [
        {
          status: 'Package in transit',
          location: 'Distribution Center, New York',
          date: 'Nov 17, 2024',
          time: '14:30',
          details: 'Package is being processed for delivery'
        },
        {
          status: 'Package arrived at facility',
          location: 'Sorting Facility, New Jersey',
          date: 'Nov 16, 2024',
          time: '18:45',
          details: 'Package has been sorted and is ready for dispatch'
        },
        {
          status: 'Package picked up',
          location: 'Shipping Facility, Boston',
          date: 'Nov 16, 2024',
          time: '09:15',
          details: 'Package has been picked up by carrier'
        }
      ]
    })
  }

  return (
   <>
   <Navbar/>
    <main className="pt-24 pb-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="heading-2 mb-4">Track Your Shipment</h1>
          <p className="text-secondary-600 max-w-2xl mx-auto">
            Enter your tracking number to get real-time updates on your package&apos;s
            location and estimated delivery time.
          </p>
        </div>

        <TrackingSearchBar onSearch={handleSearch} />

        {trackingResult && (
          <div className="mt-12 space-y-8 animate-fade-in">
            <div className="flex justify-end gap-4">
              <Button variant="secondary" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="secondary" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
              <Button variant="secondary" size="sm">
                <Printer className="h-4 w-4 mr-2" />
                Print
              </Button>
            </div>

            <ShipmentStatusCard shipment={trackingResult} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="card">
                  <h2 className="heading-3 mb-6">Tracking History</h2>
                  <TrackingTimeline updates={trackingResult.updates} />
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="card">
                  <h2 className="heading-3 mb-6">Delivery Progress</h2>
                  <div className="relative pt-2">
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary-100">
                      <div
                        style={{ width: "75%" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-500"
                      />
                    </div>
                    <div className="flex justify-between text-sm text-secondary-600">
                      <span>Shipped</span>
                      <span>In Transit</span>
                      <span>Delivered</span>
                    </div>
                  </div>
                </div>

                <div className="sticky top-24">
                  <ShipmentDetails shipment={trackingResult} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
    <Footer/>
   </>
  )
}