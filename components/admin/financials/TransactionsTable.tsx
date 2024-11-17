// components/admin/financials/TransactionsTable.tsx
'use client'
import { useState } from 'react'
import { format } from 'date-fns'

interface Transaction {
  id: string
  date: Date
  description: string
  type: 'income' | 'expense'
  category: string
  amount: number
  status: 'completed' | 'pending' | 'failed'
}

const mockTransactions: Transaction[] = [
  {
    id: 'TRX-001',
    date: new Date(),
    description: 'Product Sale - Premium Package',
    type: 'income',
    category: 'Sales',
    amount: 1500.00,
    status: 'completed'
  },
  // Add more transactions...
]

const getStatusColor = (status: Transaction['status']) => {
  switch (status) {
    case 'completed':
      return 'bg-green-100 text-green-800'
    case 'pending':
      return 'bg-yellow-100 text-yellow-800'
    case 'failed':
      return 'bg-red-100 text-red-800'
  }
}

const getTypeColor = (type: Transaction['type']) => {
  return type === 'income' ? 'text-green-600' : 'text-red-600'
}

export default function TransactionsTable() {
  const [, setSelectedTransaction] = useState<Transaction | null>(null)

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Recent Transactions</h3>
        <div className="flex gap-2">
          <button className="btn btn-outline">Filter</button>
          <button className="btn btn-outline">Export</button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-secondary-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-secondary-200">
            {mockTransactions.map((transaction) => (
              <tr key={transaction.id} className="hover:bg-secondary-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  {format(transaction.date, 'PP')}
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm">{transaction.description}</div>
                  <div className="text-xs text-secondary-500">{transaction.id}</div>
                </td>
                <td className="px-6 py-4">{transaction.category}</td>
                <td className={`px-6 py-4 whitespace-nowrap font-medium ${getTypeColor(transaction.type)}`}>
                  {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(transaction.status)}`}>
                    {transaction.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => setSelectedTransaction(transaction)}
                    className="btn btn-secondary"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}