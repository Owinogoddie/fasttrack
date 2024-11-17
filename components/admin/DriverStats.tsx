// components/admin/DriverStats.tsx
'use client'

interface StatCard {
  title: string
  value: string | number
  change: string
  trend: 'up' | 'down'
  icon: React.ReactNode
}

export default function DriverStats() {
  const stats: StatCard[] = [
    {
      title: 'Active Drivers',
      value: 45,
      change: '+5',
      trend: 'up',
      icon: '🚗'
    },
    {
      title: 'On-Time Delivery Rate',
      value: '95%',
      change: '+2%',
      trend: 'up',
      icon: '⏱️'
    },
    {
      title: 'Average Rating',
      value: '4.8',
      change: '-0.1',
      trend: 'down',
      icon: '⭐'
    },
    {
      title: 'Total Deliveries Today',
      value: 156,
      change: '+23',
      trend: 'up',
      icon: '📦'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="card">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-secondary-600">{stat.title}</p>
              <div className="mt-2 flex items-baseline">
                <p className="text-3xl font-semibold">{stat.value}</p>
                <span className={`ml-2 text-sm ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
              </div>
            </div>
            <span className="text-2xl">{stat.icon}</span>
          </div>
        </div>
      ))}
    </div>
  )
}