// components/admin/OrdersTable.tsx
'use client'

import { useState } from 'react'
import { format } from 'date-fns'

interface Order {
  id: string
  customer: {
    name: string
    email: string
    phone: string
  }
  pickup: {
    address: string
    date: Date
  }
  delivery: {
    address: string
    date: Date
  }
  status: 'pending' | 'in-transit' | 'delivered' | 'cancelled'
  amount: number
  paymentStatus: 'paid' | 'pending' | 'failed'
}

const mockOrders: Order[] = [
  {
    id: 'ORD-001',
    customer: {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+44 123 456 7890'
    },
    pickup: {
      address: '123 Main St, London',
      date: new Date('2024-01-01T10:00:00')
    },
    delivery: {
      address: '456 Park Ave, London',
      date: new Date('2024-01-01T14:00:00')
    },
    status: 'in-transit',
    amount: 150.00,
    paymentStatus: 'paid'
  },
  // Add more mock orders here
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
  }
}

const getPaymentStatusColor = (status: Order['paymentStatus']) => {
  switch (status) {
    case 'paid':
      return 'bg-green-100 text-green-800'
    case 'pending':
      return 'bg-yellow-100 text-yellow-800'
    case 'failed':
      return 'bg-red-100 text-red-800'
  }
}

export default function OrdersTable() {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)

  return (
    <div className="card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-secondary-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                Pickup
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                Delivery
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                Payment
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-secondary-200">
            {mockOrders.map((order) => (
              <tr key={order.id} className="hover:bg-secondary-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="font-medium">{order.id}</span>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <div className="font-medium">{order.customer.name}</div>
                    <div className="text-sm text-secondary-500">{order.customer.email}</div>
                    <div className="text-sm text-secondary-500">{order.customer.phone}</div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <div className="text-sm">{order.pickup.address}</div>
                    <div className="text-sm text-secondary-500">
                      {format(order.pickup.date, 'PPp')}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <div className="text-sm">{order.delivery.address}</div>
                    <div className="text-sm text-secondary-500">
                      {format(order.delivery.date, 'PPp')}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  ${order.amount.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPaymentStatusColor(order.paymentStatus)}`}>
                    {order.paymentStatus}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedOrder(order)}
                      className="btn btn-secondary"
                    >
                      View
                    </button>
                    <button className="btn btn-outline">
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
            <h3 className="text-xl font-semibold mb-4">Order Details - {selectedOrder.id}</h3>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Customer Information</h4>
                <p>Name: {selectedOrder.customer.name}</p>
                <p>Email: {selectedOrder.customer.email}</p>
                <p>Phone: {selectedOrder.customer.phone}</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Order Status</h4>
                <p>Status: <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedOrder.status)}`}>
                  {selectedOrder.status}
                </span></p>
                <p>Amount: ${selectedOrder.amount.toFixed(2)}</p>
                <p>Payment: <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPaymentStatusColor(selectedOrder.paymentStatus)}`}>
                  {selectedOrder.paymentStatus}
                </span></p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Pickup Details</h4>
                <p>Address: {selectedOrder.pickup.address}</p>
                <p>Date: {format(selectedOrder.pickup.date, 'PPp')}</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Delivery Details</h4>
                <p>Address: {selectedOrder.delivery.address}</p>
                <p>Date: {format(selectedOrder.delivery.date, 'PPp')}</p>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button 
                className="btn btn-secondary"
                onClick={() => setSelectedOrder(null)}
              >
                Close
              </button>
              <button className="btn btn-primary">
                Update Status
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}