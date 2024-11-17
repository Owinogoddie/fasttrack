// components/admin/StatsCard.tsx
interface StatsCardProps {
    title: string
    value: string
    change: string
    trend: 'up' | 'down'
  }
  
  export default function StatsCard({ title, value, change, trend }: StatsCardProps) {
    return (
      <div className="card">
        <h3 className="text-secondary-600">{title}</h3>
        <div className="mt-2 flex items-baseline">
          <p className="text-3xl font-semibold">{value}</p>
          <span
            className={`ml-2 text-sm ${
              trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {change}
          </span>
        </div>
      </div>
    )
  }