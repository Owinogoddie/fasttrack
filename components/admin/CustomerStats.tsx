// components/admin/CustomerStats.tsx
'use client'

interface StatCard {
  title: string
  value: string | number
  change: string
  trend: 'up' | 'down'
  description: string
}

const stats: StatCard[] = [
  {
    title: 'Total Customers',
    value: '2,547',
    change: '+12%',
    trend: 'up',
    description: 'vs. last month'
  },
  {
    title: 'Active This Month',
    value: '1,123',
    change: '+5%',
    trend: 'up',
    description: 'vs. last month'
  },
  {
    title: 'Average Order Value',
    value: '$142.35',
    change: '-2%',
    trend: 'down',
    description: 'vs. last month'
  },
  {
    title: 'Customer Satisfaction',
    value: '4.8',
    change: '+0.2',
    trend: 'up',
    description: 'vs. last month'
  }
]

export default function CustomerStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="card">
          <div className="flex flex-col">
            <p className="text-secondary-600">{stat.title}</p>
            <div className="mt-2 flex items-baseline">
              <p className="text-3xl font-semibold">{stat.value}</p>
              <span className={`ml-2 text-sm ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
            </div>
            <p className="mt-1 text-sm text-secondary-500">{stat.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}