// components/admin/OrderFilters.tsx
'use client'

export default function OrderFilters() {
  return (
    <div className="card">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div>
          <label className="form-label">Search Orders</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Order ID, Customer name..."
          />
        </div>

        <div>
          <label className="form-label">Status</label>
          <select className="input w-full">
            <option value="">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="in-transit">In Transit</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        <div>
          <label className="form-label">Date Range</label>
          <input
            type="date"
            className="input w-full"
          />
        </div>

        <div>
          <label className="form-label">Sort By</label>
          <select className="input w-full">
            <option value="date-desc">Date (Latest First)</option>
            <option value="date-asc">Date (Oldest First)</option>
            <option value="amount-desc">Amount (High to Low)</option>
            <option value="amount-asc">Amount (Low to High)</option>
          </select>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <button className="btn btn-primary">
          Apply Filters
        </button>
        <button className="btn btn-secondary">
          Reset
        </button>
      </div>
    </div>
  )
}