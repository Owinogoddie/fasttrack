import { Package, MapPin, Calendar, Truck } from 'lucide-react'

export function ShipmentStatusCard({ shipment }: { shipment: any }) {
  const statusColors = {
    'In Transit': 'text-blue-600 bg-blue-50',
    'Delivered': 'text-green-600 bg-green-50',
    'Pending': 'text-yellow-600 bg-yellow-50',
    'Delayed': 'text-red-600 bg-red-50',
  }

  return (
    <div className="card hover:shadow-medium transition-shadow">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-sm text-secondary-500">Tracking Number</p>
          <p className="font-medium">{shipment.trackingNumber}</p>
        </div>
        <div className={`px-4 py-2 rounded-full ${statusColors[shipment.status as keyof typeof statusColors]}`}>
          {shipment.status}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-full bg-primary-50">
            <Package className="h-5 w-5 text-primary-600" />
          </div>
          <div>
            <p className="text-sm text-secondary-500">Package Type</p>
            <p className="font-medium">{shipment.packageType}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-3 rounded-full bg-primary-50">
            <MapPin className="h-5 w-5 text-primary-600" />
          </div>
          <div>
            <p className="text-sm text-secondary-500">Current Location</p>
            <p className="font-medium">{shipment.currentLocation}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-3 rounded-full bg-primary-50">
            <Calendar className="h-5 w-5 text-primary-600" />
          </div>
          <div>
            <p className="text-sm text-secondary-500">Expected Delivery</p>
            <p className="font-medium">{shipment.estimatedDelivery}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-3 rounded-full bg-primary-50">
            <Truck className="h-5 w-5 text-primary-600" />
          </div>
          <div>
            <p className="text-sm text-secondary-500">Carrier</p>
            <p className="font-medium">{shipment.carrier}</p>
          </div>
        </div>
      </div>
    </div>
  )
}