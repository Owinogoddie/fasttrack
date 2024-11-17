// components/admin/DriverMap.tsx
'use client'

import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

interface Driver {
  id: string
  name: string
  lat: number
  lng: number
  status: 'available' | 'on-delivery' | 'offline'
  currentDelivery?: {
    orderId: string
    destination: string
  }
}

const mockDrivers: Driver[] = [
  {
    id: 'D001',
    name: 'John Smith',
    lat: 51.505,
    lng: -0.09,
    status: 'on-delivery',
    currentDelivery: {
      orderId: 'ORD-001',
      destination: '123 Main St, London'
    }
  },
  {
    id: 'D002',
    name: 'Sarah Johnson',
    lat: 51.51,
    lng: -0.1,
    status: 'available'
  },
  // Add more mock drivers
]

export const getStatusColor = (status: Driver['status']) => {
  switch (status) {
    case 'available':
      return 'green'
    case 'on-delivery':
      return 'blue'
    case 'offline':
      return 'gray'
  }
}

export default function DriverMap() {
  const mapRef = useRef<L.Map | null>(null)
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const markersRef = useRef<{[key: string]: L.Marker}>({})

  useEffect(() => {
    if (!mapContainerRef.current) return

    mapRef.current = L.map(mapContainerRef.current).setView([51.505, -0.09], 13)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(mapRef.current)

    // Add markers for each driver
    mockDrivers.forEach((driver) => {
      const marker = L.marker([driver.lat, driver.lng])
        .bindPopup(`
          <strong>${driver.name}</strong><br>
          Status: ${driver.status}<br>
          ${driver.currentDelivery ? 
            `Current Delivery: ${driver.currentDelivery.orderId}<br>
             Destination: ${driver.currentDelivery.destination}` 
            : 'No active delivery'}
        `)
        .addTo(mapRef.current!)

      markersRef.current[driver.id] = marker
    })

    return () => {
      mapRef.current?.remove()
    }
  }, [])

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Live Driver Locations</h2>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-green-500"></span>
            <span>Available</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-blue-500"></span>
            <span>On Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-gray-500"></span>
            <span>Offline</span>
          </div>
        </div>
      </div>
      <div 
        ref={mapContainerRef} 
        className="h-[500px] w-full rounded-lg"
      />
    </div>
  )
}