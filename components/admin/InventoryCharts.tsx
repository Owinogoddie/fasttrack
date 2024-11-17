// components/admin/InventoryCharts.tsx
'use client'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const mockData = [
    { month: 'Jan', stockValue: 120000, itemsCount: 2100 },
    { month: 'Feb', stockValue: 135000, itemsCount: 2300 },
    { month: 'Mar', stockValue: 145000, itemsCount: 2400 },
    { month: 'Apr', stockValue: 155000, itemsCount: 2600 },
    { month: 'May', stockValue: 160000, itemsCount: 2700 },
    { month: 'Jun', stockValue: 150000, itemsCount: 2500 },
    { month: 'Jul', stockValue: 165000, itemsCount: 2800 },
    { month: 'Aug', stockValue: 170000, itemsCount: 2900 },
    { month: 'Sep', stockValue: 160000, itemsCount: 2750 },
    { month: 'Oct', stockValue: 175000, itemsCount: 3000 },
    { month: 'Nov', stockValue: 180000, itemsCount: 3100 },
    { month: 'Dec', stockValue: 190000, itemsCount: 3200 },
  ];

export default function InventoryCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="card">
        <h3 className="font-semibold mb-4">Stock Value Trend</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="stockValue" stroke="#0ea5e9" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card">
        <h3 className="font-semibold mb-4">Items Count by Category</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="itemsCount" fill="#0ea5e9" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}