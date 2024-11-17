// app/(admin)/admin/inventory/page.tsx
import InventoryStats from "@/components/admin/InventoryStats";
import InventoryCharts from "@/components/admin/InventoryCharts";
import LowStockAlerts from "@/components/admin/LowStockAlerts";
import RecentActivities from "@/components/admin/RecentActivities";
import InventoryFilters from "@/components/admin/InventoryFilters";
import InventoryTable from "@/components/admin/InventoryTable";

export default function InventoryPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="heading-2">Inventory Management</h1>
          <p className="text-secondary-600 mt-1">
            Track, manage, and optimize your inventory
          </p>
        </div>
        <div className="flex gap-3">
          <button className="btn btn-outline">
            Export Data
          </button>
          <button className="btn btn-primary">
            Add New Item
          </button>
        </div>
      </div>

      <InventoryStats />
      <InventoryCharts />
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <InventoryFilters />
          <div className="mt-6">
            <InventoryTable />
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <LowStockAlerts />
          <div className="mt-6">
            <RecentActivities />
          </div>
        </div>
      </div>
    </div>
  )
}