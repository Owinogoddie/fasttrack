// components/admin/InventoryFilters.tsx
'use client'

export default function InventoryFilters() {
  return (
    <div className="card">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div>
          <label className="form-label">Search Items</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Item name, SKU, category..."
          />
        </div>

        <div>
          <label className="form-label">Category</label>
          <select className="input w-full">
            <option value="">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="furniture">Furniture</option>
            <option value="accessories">Accessories</option>
          </select>
        </div>

        <div>
          <label className="form-label">Stock Status</label>
          <select className="input w-full">
            <option value="">All Status</option>
            <option value="in-stock">In Stock</option>
            <option value="low-stock">Low Stock</option>
            <option value="out-of-stock">Out of Stock</option>
          </select>
        </div>

        <div>
          <label className="form-label">Sort By</label>
          <select className="input w-full">
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
            <option value="stock-asc">Stock (Low to High)</option>
            <option value="stock-desc">Stock (High to Low)</option>
            <option value="price-asc">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
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