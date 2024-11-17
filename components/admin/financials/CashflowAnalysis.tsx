// components/admin/financials/CashflowAnalysis.tsx
'use client'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { month: 'Jan', inflow: 220000, outflow: -180000 },
  { month: 'Feb', inflow: 240000, outflow: -190000 },
  { month: 'Mar', inflow: 280000, outflow: -200000 },
  // Add more months...
]

export default function CashflowAnalysis() {
  return (
    <div className="card">
      <h3 className="font-semibold mb-4">Cash Flow Analysis</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="inflow" fill="#22c55e" name="Cash In" />
            <Bar dataKey="outflow" fill="#ef4444" name="Cash Out" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}