'use client'
import { 
  ArrowUpIcon, 
  ArrowDownIcon, 
  MoreVerticalIcon 
} from 'lucide-react'

interface Segment {
  name: string
  customers: number
  growth: number
  averageOrderValue: number
  color: string
}

const segments: Segment[] = [
  {
    name: 'VIP',
    customers: 247,
    growth: 15,
    averageOrderValue: 325.50,
    color: 'bg-purple-100 text-purple-800'
  },
  {
    name: 'Regular',
    customers: 1543,
    growth: 8,
    averageOrderValue: 145.75,
    color: 'bg-blue-100 text-blue-800'
  },
  {
    name: 'New',
    customers: 757,
    growth: 22,
    averageOrderValue: 85.25,
    color: 'bg-green-100 text-green-800'
  }
]

export default function CustomerSegments() {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value)
  }

  const totalCustomers = segments.reduce((sum, segment) => sum + segment.customers, 0)
  
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold">Customer Segments</h3>
          <p className="text-secondary-500 text-sm mt-1">
            {totalCustomers.toLocaleString()} total customers
          </p>
        </div>
        <select className="input">
          <option value="30">Last 30 days</option>
          <option value="90">Last 90 days</option>
          <option value="365">Last year</option>
        </select>
      </div>
      
      <div className="space-y-4">
        {segments.map((segment) => (
          <div 
            key={segment.name} 
            className="p-4 rounded-lg border border-secondary-200 hover:border-secondary-300 transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${segment.color}`}>
                  {segment.name}
                </span>
                <span className={`
                  flex items-center gap-1 text-sm font-medium
                  ${segment.growth > 0 ? 'text-green-600' : 'text-red-600'}
                `}>
                  {segment.growth > 0 ? (
                    <ArrowUpIcon className="w-4 h-4" />
                  ) : (
                    <ArrowDownIcon className="w-4 h-4" />
                  )}
                  {Math.abs(segment.growth)}%
                </span>
              </div>
              <button className="text-secondary-500 hover:text-secondary-700">
                <MoreVerticalIcon className="w-5 h-5" />
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-secondary-500 mb-1">Customers</p>
                <p className="text-lg font-medium">
                  {segment.customers.toLocaleString()}
                </p>
                <p className="text-xs text-secondary-400 mt-1">
                  {Math.round((segment.customers / totalCustomers) * 100)}% of total
                </p>
              </div>
              <div>
                <p className="text-sm text-secondary-500 mb-1">Avg. Order Value</p>
                <p className="text-lg font-medium">
                  {formatCurrency(segment.averageOrderValue)}
                </p>
                <p className="text-xs text-secondary-400 mt-1">
                  Per customer
                </p>
              </div>
            </div>

            <div className="mt-4 h-2 bg-secondary-100 rounded-full overflow-hidden">
              <div 
                className={`h-full ${segment.color.replace('100', '500')}`}
                style={{ 
                  width: `${(segment.customers / totalCustomers) * 100}%`,
                  transition: 'width 0.5s ease-in-out'
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <button className="btn btn-secondary">
          View Detailed Analysis
        </button>
      </div>
    </div>
  )
}