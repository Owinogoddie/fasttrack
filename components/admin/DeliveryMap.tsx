'use client'
import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

interface Delivery {
  id: string
  lat: number
  lng: number
  status: 'pending' | 'in-transit' | 'delivered'
  address: string
}

const mockDeliveries: Delivery[] = [
  {
    id: '1',
    lat: 51.505,
    lng: -0.09,
    status: 'in-transit',
    address: '123 Main St, London'
  },
  {
    id: '2',
    lat: 51.51,
    lng: -0.1,
    status: 'pending',
    address: '456 Park Ave, London'
  },
  // Add more mock deliveries as needed
]

export default function DeliveryMap() {
  const mapRef = useRef<L.Map | null>(null)
  const mapContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mapContainerRef.current) return

    // Initialize map
    mapRef.current = L.map(mapContainerRef.current).setView([51.505, -0.09], 13)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(mapRef.current)

    // Add markers for each delivery
    mockDeliveries.forEach((delivery) => {
      L.marker([delivery.lat, delivery.lng])
        .bindPopup(`
          <strong>Delivery ID: ${delivery.id}</strong><br>
          Status: ${delivery.status}<br>
          Address: ${delivery.address}
        `)
        .addTo(mapRef.current!)
    })

    return () => {
      mapRef.current?.remove()
    }
  }, [])

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Live Delivery Map</h2>
        <div className="flex gap-2">
          <button className="btn btn-secondary">
            Center Map
          </button>
          <button className="btn btn-primary">
            Refresh
          </button>
        </div>
      </div>
      <div 
        ref={mapContainerRef}
        className="h-[400px] w-full rounded-lg"
      />
      <div className="mt-4 flex gap-4">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-green-500"></span>
          <span>In Transit</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
          <span>Pending</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-blue-500"></span>
          <span>Delivered</span>
        </div>
      </div>
    </div>
  )
}