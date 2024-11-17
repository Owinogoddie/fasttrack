// components/admin/RecentOrders.tsx
'use client'

import { useState } from 'react'
import { format } from 'date-fns'

interface Order {
  id: string
  customer: string
  status: 'pending' | 'in-transit' | 'delivered' | 'cancelled'
  date: Date
  amount: number
  address: string
}

const mockOrders: Order[] = [
  {
    id: 'ORD-001',
    customer: 'John Doe',
    status: 'in-transit',
    date: new Date(),
    amount: 150.00,
    address: '123 Main St, London'
  },
  {
    id: 'ORD-002',
    customer: 'Jane Smith',
    status: 'pending',
    date: new Date(),
    amount: 89.99,
    address: '456 Park Ave, London'
  },
  {
    id: 'ORD-003',
    customer: 'Mike Johnson',
    status: 'delivered',
    date: new Date(),
    amount: 245.50,
    address: '789 Oak Rd, London'
  },
  {
    id: 'ORD-004',
    customer: 'Sarah Williams',
    status: 'cancelled',
    date: new Date(),
    amount: 120.75,
    address: '321 Pine St, London'
  },
  {
    id: 'ORD-005',
    customer: 'Alex Brown',
    status: 'in-transit',
    date: new Date(),
    amount: 175.25,
    address: '654 Elm St, London'
  }
]

const getStatusColor = (status: Order['status']) => {
  switch (status) {
    case 'pending':
      return 'bg-yellow-100 text-yellow-800'
    case 'in-transit':
      return 'bg-blue-100 text-blue-800'
    case 'delivered':
      return 'bg-green-100 text-green-800'
    case 'cancelled':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

export default function RecentOrders() {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Recent Orders</h2>
        <button className="btn btn-secondary">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {mockOrders.map((order) => (
          <div
            key={order.id}
            className="flex items-center justify-between p-4 rounded-lg border border-secondary-200 hover:border-primary-300 cursor-pointer transition-colors"
            onClick={() => setSelectedOrder(order)}
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="font-medium">{order.id}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                  {order.status}
                </span>
              </div>
              <p className="text-sm text-secondary-600 mt-1">{order.customer}</p>
              <p className="text-sm text-secondary-500">{format(order.date, 'MMM dd, yyyy HH:mm')}</p>
            </div>
            <div className="text-right">
              <p className="font-medium">${order.amount.toFixed(2)}</p>
              <p className="text-sm text-secondary-500 mt-1 truncate max-w-[200px]">
                {order.address}
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4">Order Details</h3>
            <div className="space-y-3">
              <p><strong>Order ID:</strong> {selectedOrder.id}</p>
              <p><strong>Customer:</strong> {selectedOrder.customer}</p>
              <p><strong>Status:</strong> 
                <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedOrder.status)}`}>
                  {selectedOrder.status}
                </span>
              </p>
              <p><strong>Date:</strong> {format(selectedOrder.date, 'PPpp')}</p>
              <p><strong>Amount:</strong> ${selectedOrder.amount.toFixed(2)}</p>
              <p><strong>Address:</strong> {selectedOrder.address}</p>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button 
                className="btn btn-secondary"
                onClick={() => setSelectedOrder(null)}
              >
                Close
              </button>
              <button className="btn btn-primary">
                Edit Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}