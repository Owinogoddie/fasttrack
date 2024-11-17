// components/admin/LowStockAlerts.tsx
'use client'

export default function LowStockAlerts() {
    const alerts = [
        {
          id: 1,
          name: 'Wireless Headphones',
          sku: 'WH-001',
          currentStock: 5,
          reorderPoint: 20,
          priority: 'high',
        },
        {
          id: 2,
          name: 'Bluetooth Speaker',
          sku: 'BS-002',
          currentStock: 3,
          reorderPoint: 10,
          priority: 'high',
        },
        {
          id: 3,
          name: 'Smartphone Charger',
          sku: 'SC-005',
          currentStock: 5,
          reorderPoint: 10,
          priority: 'medium',
        },
        {
          id: 4,
          name: 'External Hard Drive',
          sku: 'HD-007',
          currentStock: 2,
          reorderPoint: 8,
          priority: 'high',
        },
        {
          id: 5,
          name: 'Portable Projector',
          sku: 'PP-012',
          currentStock: 4,
          reorderPoint: 5,
          priority: 'low',
        },
        {
          id: 6,
          name: 'LED Desk Lamp',
          sku: 'DL-010',
          currentStock: 0,
          reorderPoint: 5,
          priority: 'high',
        },
        {
          id: 7,
          name: 'Webcam',
          sku: 'WC-011',
          currentStock: 6,
          reorderPoint: 15,
          priority: 'medium',
        },
        {
          id: 8,
          name: 'USB-C Hub',
          sku: 'UC-013',
          currentStock: 10,
          reorderPoint: 20,
          priority: 'low',
        },
      ];
      

  return (
    <div className="card">
      <h3 className="font-semibold mb-4">Low Stock Alerts</h3>
      <div className="space-y-4">
        {alerts.map((alert) => (
          <div 
            key={alert.id} 
            className="flex items-center justify-between p-3 bg-red-50 border border-red-100 rounded-lg"
          >
            <div>
              <h4 className="font-medium">{alert.name}</h4>
              <p className="text-sm text-secondary-600">SKU: {alert.sku}</p>
              <p className="text-sm text-red-600">
                Stock: {alert.currentStock} / {alert.reorderPoint}
              </p>
            </div>
            <button className="btn btn-primary">
              Reorder
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}