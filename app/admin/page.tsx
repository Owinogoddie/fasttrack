// app/(admin)/page.tsx
import StatsCard from "@/components/admin/StatsCard";
import RecentOrders from "@/components/admin/RecentOrders";
import DeliveryMap from "@/components/admin/DeliveryMap";
import PerformanceChart from "@/components/admin/PerformanceChart";

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="heading-2">Dashboard</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard title="Active Orders" value="156" change="+12%" trend="up" />
        <StatsCard
          title="Revenue Today"
          value="$8,459"
          change="+23%"
          trend="up"
        />
        <StatsCard title="Active Drivers" value="45" change="-2" trend="down" />
        <StatsCard
          title="Customer Satisfaction"
          value="4.8"
          change="+0.2"
          trend="up"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <DeliveryMap />
        </div>
        <div>
          <RecentOrders />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <PerformanceChart />
        <div className="card p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {/* Activity Items */}
            <div className="flex items-start space-x-4">
              <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
                <svg
                  className="h-4 w-4 text-primary-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-800">
                  New customer registration: John Smith
                </p>
                <p className="text-xs text-gray-500">2 minutes ago</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="h-8 w-8 rounded-full bg-accent-100 flex items-center justify-center">
                <svg
                  className="h-4 w-4 text-accent-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-800">Order #12345 completed</p>
                <p className="text-xs text-gray-500">15 minutes ago</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="h-8 w-8 rounded-full bg-secondary-100 flex items-center justify-center">
                <svg
                  className="h-4 w-4 text-secondary-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-800">
                  Driver Mike started his shift
                </p>
                <p className="text-xs text-gray-500">45 minutes ago</p>
              </div>
            </div>
          </div>

          <button className="mt-4 text-sm text-primary-600 hover:text-primary-700 font-medium">
            View all activity
          </button>
        </div>
      </div>
    </div>
  );
}
