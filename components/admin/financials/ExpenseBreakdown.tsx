// components/admin/financials/ExpenseBreakdown.tsx
'use client'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'

const data = [
  { name: 'Operations', value: 45000 },
  { name: 'Marketing', value: 25000 },
  { name: 'Salaries', value: 85000 },
  { name: 'Admin', value: 15000 },
]

const COLORS = ['#ef4444', '#f97316', '#ec4899', '#64748b']

export default function ExpenseBreakdown() {
  return (
    <div className="card">
      <h3 className="font-semibold mb-4">Expense Breakdown</h3>
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