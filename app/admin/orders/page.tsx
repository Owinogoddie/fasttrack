// app/(admin)/admin/orders/page.tsx

import OrderFilters from "@/components/admin/OrderFilters";
import OrdersTable from "@/components/admin/OrdersTable";

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="heading-2">Orders Management</h1>
        <button className="btn btn-primary">
          Create New Order
        </button>
      </div>

      <OrderFilters />
      <OrdersTable />
    </div>
  )
}