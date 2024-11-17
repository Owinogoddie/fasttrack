// app/(admin)/admin/personnel/page.tsx

import DriverMap from "@/components/admin/DriverMap";
import DriverStats from "@/components/admin/DriverStats";
import DriversList from "@/components/admin/DriversList";

export default function PersonnelPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="heading-2">Delivery Personnel Management</h1>
        <button className="btn btn-primary">
          Add New Driver
        </button>
      </div>

      <DriverStats />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <DriverMap />
        </div>
        <div>
          <DriversList />
        </div>
      </div>
    </div>
  )
}