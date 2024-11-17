// components/admin/financials/FinancialCharts.tsx
'use client'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const mockData = [
    { month: 'Jan', revenue: 180000, expenses: 120000, profit: 60000 },
    { month: 'Feb', revenue: 220000, expenses: 130000, profit: 90000 },
    { month: 'Mar', revenue: 250000, expenses: 140000, profit: 110000 },
    { month: 'Apr', revenue: 240000, expenses: 150000, profit: 90000 },
    { month: 'May', revenue: 260000, expenses: 160000, profit: 100000 },
    { month: 'Jun', revenue: 270000, expenses: 170000, profit: 100000 },
    { month: 'Jul', revenue: 290000, expenses: 180000, profit: 110000 },
    { month: 'Aug', revenue: 300000, expenses: 190000, profit: 110000 },
    { month: 'Sep', revenue: 310000, expenses: 200000, profit: 110000 },
    { month: 'Oct', revenue: 330000, expenses: 210000, profit: 120000 },
    { month: 'Nov', revenue: 340000, expenses: 220000, profit: 120000 },
    { month: 'Dec', revenue: 350000, expenses: 230000, profit: 120000 },
  ];
  

export default function FinancialCharts() {
  return (
    <div className="space-y-6">
      <div className="card">
        <h3 className="font-semibold mb-4">Financial Performance Trend</h3>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#0ea5e9" name="Revenue" />
              <Line type="monotone" dataKey="expenses" stroke="#ef4444" name="Expenses" />
              <Line type="monotone" dataKey="profit" stroke="#22c55e" name="Profit" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}