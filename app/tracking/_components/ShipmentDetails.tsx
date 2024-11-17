export function ShipmentDetails({ shipment }: { shipment: any }) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="card">
          <h3 className="font-medium mb-4">Sender Details</h3>
          <div className="space-y-2">
            <p className="text-sm">{shipment.sender.name}</p>
            <p className="text-sm text-secondary-500">{shipment.sender.address}</p>
            <p className="text-sm text-secondary-500">{shipment.sender.contact}</p>
          </div>
        </div>
  
        <div className="card">
          <h3 className="font-medium mb-4">Recipient Details</h3>
          <div className="space-y-2">
            <p className="text-sm">{shipment.recipient.name}</p>
            <p className="text-sm text-secondary-500">{shipment.recipient.address}</p>
            <p className="text-sm text-secondary-500">{shipment.recipient.contact}</p>
          </div>
        </div>
  
        <div className="card">
          <h3 className="font-medium mb-4">Package Details</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <p className="text-sm text-secondary-500">Weight</p>
              <p className="text-sm">{shipment.package.weight}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm text-secondary-500">Dimensions</p>
              <p className="text-sm">{shipment.package.dimensions}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm text-secondary-500">Service Type</p>
              <p className="text-sm">{shipment.package.service}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }