// components/admin/DriversList.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Driver {
  id: string
  name: string
  photo: string
  phone: string
  email: string
  status: 'available' | 'on-delivery' | 'offline'
  rating: number
  deliveries: number
  joinedDate: Date
}

const mockDrivers: Driver[] = [
  {
    id: 'D001',
    name: 'John Smith',
    photo: '/mock-driver-photo.jpg', // You'll need to add actual photos
    phone: '+44 123 456 7890',
    email: 'john.smith@example.com',
    status: 'on-delivery',
    rating: 4.8,
    deliveries: 1250,
    joinedDate: new Date('2023-01-15')
  },
  // Add more mock drivers
]

const getStatusColor = (status: Driver['status']) => {
  switch (status) {
    case 'available':
      return 'bg-green-100 text-green-800'
    case 'on-delivery':
      return 'bg-blue-100 text-blue-800'
    case 'offline':
      return 'bg-gray-100 text-gray-800'
  }
}

export default function DriversList() {
  const [selectedDriver, setSelectedDriver] = useState<Driver | null>(null)
  const [filterStatus, setFilterStatus] = useState<Driver['status'] | 'all'>('all')

  const filteredDrivers = mockDrivers.filter(driver => 
    filterStatus === 'all' ? true : driver.status === filterStatus
  )

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Drivers</h2>
        <select 
          className="input"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value as Driver['status'] | 'all')}
        >
          <option value="all">All Status</option>
          <option value="available">Available</option>
          <option value="on-delivery">On Delivery</option>
          <option value="offline">Offline</option>
        </select>
      </div>

      <div className="space-y-4">
        {filteredDrivers.map((driver) => (
          <div 
            key={driver.id}
            className="flex items-center gap-4 p-4 rounded-lg border border-secondary-200 hover:border-primary-300 cursor-pointer transition-colors"
            onClick={() => setSelectedDriver(driver)}
          >
            <div className="relative h-12 w-12 rounded-full overflow-hidden">
              <Image
                src={driver.photo}
                alt={driver.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-medium">{driver.name}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(driver.status)}`}>
                  {driver.status}
                </span>
              </div>
              <div className="text-sm text-secondary-500">
                <p>Rating: {driver.rating} ⭐</p>
                <p>{driver.deliveries} deliveries</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Driver Details Modal */}
      {selectedDriver && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex items-center gap-4 mb-4">
              <div className="relative h-16 w-16 rounded-full overflow-hidden">
                <Image
                  src={selectedDriver.photo}
                  alt={selectedDriver.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{selectedDriver.name}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedDriver.status)}`}>
                  {selectedDriver.status}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-secondary-500">Contact Information</p>
                <p>{selectedDriver.phone}</p>
                <p>{selectedDriver.email}</p>
              </div>

              <div>
                <p className="text-sm text-secondary-500">Performance</p>
                <p>Rating: {selectedDriver.rating} ⭐</p>
                <p>Total Deliveries: {selectedDriver.deliveries}</p>
              </div>

              <div>
                <p className="text-sm text-secondary-500">Account</p>
                <p>ID: {selectedDriver.id}</p>
                <p>Joined: {selectedDriver.joinedDate.toLocaleDateString()}</p>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button 
                className="btn btn-secondary"
                onClick={() => setSelectedDriver(null)}
              >
                Close
              </button>
              <button className="btn btn-primary">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}