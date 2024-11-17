// components/admin/InventoryTable.tsx
'use client'

import { useState } from 'react'

interface InventoryItem {
  id: string
  name: string
  sku: string
  category: string
  price: number
  stockQuantity: number
  reorderPoint: number
  lastRestocked: Date
  status: 'in-stock' | 'low-stock' | 'out-of-stock'
  location: string
}

const mockInventory: InventoryItem[] = [
    {
      id: 'INV-001',
      name: 'Wireless Headphones',
      sku: 'WH-001',
      category: 'Electronics',
      price: 99.99,
      stockQuantity: 45,
      reorderPoint: 20,
      lastRestocked: new Date('2024-01-15'),
      status: 'in-stock',
      location: 'Warehouse A'
    },
    {
      id: 'INV-002',
      name: 'Bluetooth Speaker',
      sku: 'BS-002',
      category: 'Electronics',
      price: 49.99,
      stockQuantity: 15,
      reorderPoint: 10,
      lastRestocked: new Date('2024-01-20'),
      status: 'low-stock',
      location: 'Warehouse B'
    },
    {
      id: 'INV-003',
      name: 'Gaming Mouse',
      sku: 'GM-003',
      category: 'Electronics',
      price: 29.99,
      stockQuantity: 0,
      reorderPoint: 5,
      lastRestocked: new Date('2023-12-10'),
      status: 'out-of-stock',
      location: 'Warehouse A'
    },
    {
      id: 'INV-004',
      name: 'Laptop Stand',
      sku: 'LS-004',
      category: 'Accessories',
      price: 24.99,
      stockQuantity: 75,
      reorderPoint: 30,
      lastRestocked: new Date('2024-01-05'),
      status: 'in-stock',
      location: 'Warehouse C'
    },
    {
      id: 'INV-005',
      name: 'Smartphone Charger',
      sku: 'SC-005',
      category: 'Accessories',
      price: 19.99,
      stockQuantity: 5,
      reorderPoint: 10,
      lastRestocked: new Date('2024-01-18'),
      status: 'low-stock',
      location: 'Warehouse B'
    },
    {
      id: 'INV-006',
      name: '4K Monitor',
      sku: 'FM-006',
      category: 'Electronics',
      price: 299.99,
      stockQuantity: 60,
      reorderPoint: 15,
      lastRestocked: new Date('2024-01-12'),
      status: 'in-stock',
      location: 'Warehouse D'
    },
    {
      id: 'INV-007',
      name: 'External Hard Drive',
      sku: 'HD-007',
      category: 'Storage',
      price: 89.99,
      stockQuantity: 10,
      reorderPoint: 8,
      lastRestocked: new Date('2024-01-22'),
      status: 'low-stock',
      location: 'Warehouse C'
    },
    {
      id: 'INV-008',
      name: 'Wireless Keyboard',
      sku: 'WK-008',
      category: 'Accessories',
      price: 39.99,
      stockQuantity: 100,
      reorderPoint: 25,
      lastRestocked: new Date('2024-01-10'),
      status: 'in-stock',
      location: 'Warehouse A'
    },
    {
      id: 'INV-009',
      name: 'Office Chair',
      sku: 'OC-009',
      category: 'Furniture',
      price: 199.99,
      stockQuantity: 20,
      reorderPoint: 10,
      lastRestocked: new Date('2024-01-08'),
      status: 'in-stock',
      location: 'Warehouse E'
    },
    {
      id: 'INV-010',
      name: 'LED Desk Lamp',
      sku: 'DL-010',
      category: 'Furniture',
      price: 49.99,
      stockQuantity: 0,
      reorderPoint: 5,
      lastRestocked: new Date('2023-12-15'),
      status: 'out-of-stock',
      location: 'Warehouse B'
    },
    {
      id: 'INV-011',
      name: 'Webcam',
      sku: 'WC-011',
      category: 'Electronics',
      price: 69.99,
      stockQuantity: 35,
      reorderPoint: 15,
      lastRestocked: new Date('2024-01-17'),
      status: 'in-stock',
      location: 'Warehouse D'
    },
    {
      id: 'INV-012',
      name: 'Portable Projector',
      sku: 'PP-012',
      category: 'Electronics',
      price: 249.99,
      stockQuantity: 8,
      reorderPoint: 5,
      lastRestocked: new Date('2024-01-11'),
      status: 'low-stock',
      location: 'Warehouse E'
    },
    {
      id: 'INV-013',
      name: 'USB-C Hub',
      sku: 'UC-013',
      category: 'Accessories',
      price: 29.99,
      stockQuantity: 50,
      reorderPoint: 20,
      lastRestocked: new Date('2024-01-13'),
      status: 'in-stock',
      location: 'Warehouse C'
    },
    {
      id: 'INV-014',
      name: 'Ergonomic Mousepad',
      sku: 'MP-014',
      category: 'Accessories',
      price: 14.99,
      stockQuantity: 120,
      reorderPoint: 30,
      lastRestocked: new Date('2024-01-09'),
      status: 'in-stock',
      location: 'Warehouse B'
    },
  ];
  

const getStatusColor = (status: InventoryItem['status']) => {
  switch (status) {
    case 'in-stock':
      return 'bg-green-100 text-green-800'
    case 'low-stock':
      return 'bg-yellow-100 text-yellow-800'
    case 'out-of-stock':
      return 'bg-red-100 text-red-800'
  }
}

export default function InventoryTable() {
  const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null)

  return (
    <div className="card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-secondary-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                Item Details
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                Stock
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-secondary-200">
            {mockInventory.map((item) => (
              <tr key={item.id} className="hover:bg-secondary-50">
                <td className="px-6 py-4">
                  <div>
                    <div className="font-medium">{item.name}</div>
                    <div className="text-sm text-secondary-500">SKU: {item.sku}</div>
                  </div>
                </td>
                <td className="px-6 py-4">{item.category}</td>
                <td className="px-6 py-4">
                  <div>
                    <div>{item.stockQuantity} units</div>
                    <div className="text-sm text-secondary-500">
                      Reorder at: {item.reorderPoint}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">${item.price.toFixed(2)}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4">{item.location}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedItem(item)}
                      className="btn btn-secondary"
                    >
                      View
                    </button>
                    <button className="btn btn-outline">
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Item Details Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
            <h3 className="text-xl font-semibold mb-4">Item Details - {selectedItem.sku}</h3>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Basic Information</h4>
                <p>Name: {selectedItem.name}</p>
                <p>SKU: {selectedItem.sku}</p>
                <p>Category: {selectedItem.category}</p>
                <p>Price: ${selectedItem.price.toFixed(2)}</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Stock Information</h4>
                <p>Quantity: {selectedItem.stockQuantity}</p>
                <p>Reorder Point: {selectedItem.reorderPoint}</p>
                <p>Status: <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedItem.status)}`}>
                  {selectedItem.status}
                </span></p>
                <p>Location: {selectedItem.location}</p>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button 
                className="btn btn-secondary"
                onClick={() => setSelectedItem(null)}
              >
                Close
              </button>
              <button className="btn btn-primary">
                Update Stock
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}