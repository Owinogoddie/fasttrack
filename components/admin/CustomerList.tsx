// components/admin/CustomerList.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { format } from 'date-fns'

interface Customer {
  id: string
  name: string
  email: string
  phone: string
  avatar: string
  totalOrders: number
  totalSpent: number
  lastOrder: Date
  status: 'active' | 'inactive' | 'blocked'
  segment: 'vip' | 'regular' | 'new'
  joinedDate: Date
  address: {
    street: string
    city: string
    country: string
  }
}

const mockCustomers: Customer[] = [
  {
    id: 'C001',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    phone: '+44 123 456 7890',
    avatar: '/mock-avatar.jpg', // You'll need to add actual avatars
    totalOrders: 25,
    totalSpent: 3250.50,
    lastOrder: new Date('2024-01-15'),
    status: 'active',
    segment: 'vip',
    joinedDate: new Date('2023-06-15'),
    address: {
      street: '123 Oxford Street',
      city: 'London',
      country: 'UK'
    }
  },
  // Add more mock customers
]

const getStatusColor = (status: Customer['status']) => {
  switch (status) {
    case 'active':
      return 'bg-green-100 text-green-800'
    case 'inactive':
      return 'bg-yellow-100 text-yellow-800'
    case 'blocked':
      return 'bg-red-100 text-red-800'
  }
}

const getSegmentColor = (segment: Customer['segment']) => {
  switch (segment) {
    case 'vip':
      return 'bg-purple-100 text-purple-800'
    case 'regular':
      return 'bg-blue-100 text-blue-800'
    case 'new':
      return 'bg-green-100 text-green-800'
  }
}

export default function CustomerList() {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<Customer['status'] | 'all'>('all')
  const [segmentFilter, setSegmentFilter] = useState<Customer['segment'] | 'all'>('all')

  const filteredCustomers = mockCustomers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || customer.status === statusFilter
    const matchesSegment = segmentFilter === 'all' || customer.segment === segmentFilter
    return matchesSearch && matchesStatus && matchesSegment
  })

  return (
    <div className="card">
      <div className="mb-6">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="text"
            placeholder="Search customers..."
            className="input flex-1"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="flex gap-2">
            <select
              className="input"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as Customer['status'] | 'all')}
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="blocked">Blocked</option>
            </select>
            <select
              className="input"
              value={segmentFilter}
              onChange={(e) => setSegmentFilter(e.target.value as Customer['segment'] | 'all')}
            >
              <option value="all">All Segments</option>
              <option value="vip">VIP</option>
              <option value="regular">Regular</option>
              <option value="new">New</option>
            </select>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-secondary-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                Segment
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                Orders
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                Total Spent
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                Last Order
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-secondary-200">
            {filteredCustomers.map((customer) => (
              <tr key={customer.id} className="hover:bg-secondary-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="relative h-10 w-10 rounded-full overflow-hidden">
                      <Image
                        src={customer.avatar}
                        alt={customer.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="font-medium">{customer.name}</div>
                      <div className="text-sm text-secondary-500">{customer.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(customer.status)}`}>
                    {customer.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSegmentColor(customer.segment)}`}>
                    {customer.segment}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {customer.totalOrders}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  ${customer.totalSpent.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {format(customer.lastOrder, 'MMM d, yyyy')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => setSelectedCustomer(customer)}
                    className="btn btn-secondary"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Customer Details Modal */}
      {selectedCustomer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative h-16 w-16 rounded-full overflow-hidden">
                <Image
                  src={selectedCustomer.avatar}
                  alt={selectedCustomer.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{selectedCustomer.name}</h3>
                <div className="flex gap-2 mt-1">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedCustomer.status)}`}>
                    {selectedCustomer.status}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSegmentColor(selectedCustomer.segment)}`}>
                    {selectedCustomer.segment}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Contact Information</h4>
                <p>Email: {selectedCustomer.email}</p>
                <p>Phone: {selectedCustomer.phone}</p>
                <p>Address: {selectedCustomer.address.street}</p>
                <p>{selectedCustomer.address.city}, {selectedCustomer.address.country}</p>
              </div>

              <div>
                <h4 className="font-medium mb-2">Customer Activity</h4>
                <p>Total Orders: {selectedCustomer.totalOrders}</p>
                <p>Total Spent: ${selectedCustomer.totalSpent.toFixed(2)}</p>
                <p>Last Order: {format(selectedCustomer.lastOrder, 'PPP')}</p>
                <p>Member Since: {format(selectedCustomer.joinedDate, 'PPP')}</p>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button 
                className="btn btn-secondary"
                onClick={() => setSelectedCustomer(null)}
              >
                Close
              </button>
              <button className="btn btn-primary">
                Edit Customer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}