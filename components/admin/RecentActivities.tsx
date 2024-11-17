// components/admin/RecentActivities.tsx
'use client'

export default function RecentActivities() {
    const activities = [
        {
          id: 1,
          type: 'stock-update',
          item: 'Wireless Headphones',
          user: 'John Doe',
          timestamp: new Date('2024-01-20T10:30:00'),
          details: 'Added 50 units to stock',
        },
        {
          id: 2,
          type: 'price-change',
          item: 'Bluetooth Speaker',
          user: 'Jane Smith',
          timestamp: new Date('2024-01-19T15:45:00'),
          details: 'Updated price to $49.99',
        },
        {
          id: 3,
          type: 'item-added',
          item: 'Gaming Mouse',
          user: 'Mark Lee',
          timestamp: new Date('2024-01-18T09:00:00'),
          details: 'Added new item to inventory',
        },
        {
          id: 4,
          type: 'stock-update',
          item: 'Smartphone Charger',
          user: 'John Doe',
          timestamp: new Date('2024-01-17T14:15:00'),
          details: 'Reduced stock by 10 units',
        },
        {
          id: 5,
          type: 'price-change',
          item: 'External Hard Drive',
          user: 'Emily Johnson',
          timestamp: new Date('2024-01-16T12:00:00'),
          details: 'Discounted price to $79.99',
        },
        {
          id: 6,
          type: 'stock-update',
          item: 'LED Desk Lamp',
          user: 'Jane Smith',
          timestamp: new Date('2024-01-15T11:30:00'),
          details: 'Added 30 units to stock',
        },
        {
          id: 7,
          type: 'item-added',
          item: 'Portable Projector',
          user: 'Mark Lee',
          timestamp: new Date('2024-01-14T10:00:00'),
          details: 'Added new item to inventory',
        },
        {
          id: 8,
          type: 'stock-update',
          item: 'Office Chair',
          user: 'John Doe',
          timestamp: new Date('2024-01-13T09:15:00'),
          details: 'Increased stock by 15 units',
        },
        {
          id: 9,
          type: 'price-change',
          item: 'Webcam',
          user: 'Emily Johnson',
          timestamp: new Date('2024-01-12T16:00:00'),
          details: 'Updated price to $69.99',
        },
        {
          id: 10,
          type: 'stock-update',
          item: 'Ergonomic Mousepad',
          user: 'Jane Smith',
          timestamp: new Date('2024-01-11T14:45:00'),
          details: 'Added 100 units to stock',
        },
      ];
      
      function formatDate(date: Date): string {
        return new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
        }).format(date);
      }
      
  return (
    <div className="card">
      <h3 className="font-semibold mb-4">Recent Activities</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div 
            key={activity.id}
            className="flex gap-3 p-3 border-b last:border-b-0"
          >
            <div className="flex-shrink-0">
              {activity.type === 'stock-update' && '📦'}
              {activity.type === 'price-change' && '💰'}
              {activity.type === 'item-added' && '➕'}
            </div>
            <div>
              <p className="text-sm font-medium">{activity.details}</p>
              <p className="text-xs text-secondary-600">
                {activity.user} • {formatDate(activity.timestamp)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}