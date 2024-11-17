// components/admin/financials/FinancialOverview.tsx
'use client'

interface FinancialMetric {
  title: string
  value: string
  change: number
  trend: 'up' | 'down'
  timeFrame: string
  icon: string
}

export default function FinancialOverview() {
  const metrics: FinancialMetric[] = [
    {
      title: 'Total Revenue',
      value: '$245,678.90',
      change: 12.5,
      trend: 'up',
      timeFrame: 'vs last month',
      icon: '💰'
    },
    {
      title: 'Total Expenses',
      value: '$98,432.10',
      change: 5.2,
      trend: 'up',
      timeFrame: 'vs last month',
      icon: '💳'
    },
    {
      title: 'Net Profit',
      value: '$147,246.80',
      change: 8.7,
      trend: 'up',
      timeFrame: 'vs last month',
      icon: '📈'
    },
    {
      title: 'Cash Balance',
      value: '$342,567.00',
      change: 15.3,
      trend: 'up',
      timeFrame: 'vs last month',
      icon: '🏦'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <div key={index} className="card">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-secondary-600">{metric.title}</p>
              <h3 className="text-2xl font-bold mt-1">{metric.value}</h3>
            </div>
            <span className="text-2xl">{metric.icon}</span>
          </div>
          <div className={`mt-2 text-sm ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
            {metric.trend === 'up' ? '↑' : '↓'} {metric.change}% {metric.timeFrame}
          </div>
        </div>
      ))}
    </div>
  )
}