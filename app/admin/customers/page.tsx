// app/(admin)/admin/customers/page.tsx

import CustomerList from "@/components/admin/CustomerList";
import CustomerSegments from "@/components/admin/CustomerSegments";
import CustomerStats from "@/components/admin/CustomerStats";

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="heading-2">Customer Management</h1>
        <div className="flex gap-2">
          <button className="btn btn-secondary">
            Import Customers
          </button>
          <button className="btn btn-primary">
            Add Customer
          </button>
        </div>
      </div>

      <CustomerStats />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <CustomerList />
        </div>
        <div>
          <CustomerSegments />
        </div>
      </div>
    </div>
  )
}