// components/admin/InventoryStats.tsx
'use client'

interface StatCard {
  title: string
  value: string
  change: number
  icon: React.ReactNode
}

export default function InventoryStats() {
  const stats: StatCard[] = [
    {
      title: 'Total Items',
      value: '2,547',
      change: 12.5,
      icon: '📦'
    },
    {
      title: 'Low Stock Items',
      value: '45',
      change: -5.2,
      icon: '⚠️'
    },
    {
      title: 'Total Value',
      value: '$154,247',
      change: 8.7,
      icon: '💰'
    },
    {
      title: 'Out of Stock',
      value: '23',
      change: -15.3,
      icon: '❌'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="card">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-secondary-600">{stat.title}</p>
              <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
            </div>
            <span className="text-2xl">{stat.icon}</span>
          </div>
          <div className={`mt-2 text-sm ${stat.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {stat.change >= 0 ? '↑' : '↓'} {Math.abs(stat.change)}% from last month
          </div>
        </div>
      ))}
    </div>
  )
}