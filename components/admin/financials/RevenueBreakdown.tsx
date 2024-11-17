// components/admin/financials/RevenueBreakdown.tsx
'use client'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'

const data = [
  { name: 'Product Sales', value: 150000 },
  { name: 'Services', value: 80000 },
  { name: 'Subscriptions', value: 45000 },
  { name: 'Other', value: 25000 },
]

const COLORS = ['#0ea5e9', '#22c55e', '#eab308', '#64748b']

export default function RevenueBreakdown() {
  return (
    <div className="card">
      <h3 className="font-semibold mb-4">Revenue Breakdown</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}