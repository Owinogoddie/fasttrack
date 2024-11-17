'use client'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

interface PerformanceData {
  deliveries: number
  revenue: number
  date: string
}

const mockData: PerformanceData[] = [
  { deliveries: 45, revenue: 2500, date: '2024-01-01' },
  { deliveries: 52, revenue: 3100, date: '2024-01-02' },
  { deliveries: 48, revenue: 2800, date: '2024-01-03' },
  { deliveries: 70, revenue: 4200, date: '2024-01-04' },
  { deliveries: 61, revenue: 3600, date: '2024-01-05' },
  { deliveries: 55, revenue: 3300, date: '2024-01-06' },
  { deliveries: 58, revenue: 3450, date: '2024-01-07' },
]

export default function PerformanceChart() {
  // Format date to be more readable
  const formattedData = mockData.map(item => ({
    ...item,
    date: new Date(item.date).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    })
  }))

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Performance Analytics</h2>
        <div className="flex gap-2">
          <select className="input">
            <option value="7">Last 7 days</option>
            <option value="30">Last 30 days</option>
            <option value="90">Last 90 days</option>
          </select>
          <button className="btn btn-secondary">
            Export
          </button>
        </div>
      </div>
      
      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={formattedData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="date" 
              label={{ 
                value: 'Date', 
                position: 'bottom' 
              }}
            />
            <YAxis 
              yAxisId="left"
              label={{ 
                value: 'Deliveries', 
                angle: -90, 
                position: 'insideLeft' 
              }}
            />
            <YAxis 
              yAxisId="right" 
              orientation="right"
              label={{ 
                value: 'Revenue ($)', 
                angle: 90, 
                position: 'insideRight' 
              }}
            />
            <Tooltip />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="deliveries"
              stroke="#0284c7"
              fill="#0284c7"
              name="Deliveries"
              strokeWidth={2}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="revenue"
              stroke="#10b981"
              fill="#10b981"
              name="Revenue ($)"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}