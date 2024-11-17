// components/admin/settings/NotificationSettings.tsx
'use client'

export default function NotificationSettings() {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-4">Notification Preferences</h3>

      <div className="space-y-6">
        <div>
          <h4 className="font-medium mb-3">Email Notifications</h4>
          <div className="space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <div className="font-medium">Order Updates</div>
                <div className="text-sm text-secondary-600">
                  Get notified when order status changes
                </div>
              </div>
              <input type="checkbox" className="toggle" />
            </div>

            <div className="flex items-start justify-between">
              <div>
                <div className="font-medium">Low Stock Alerts</div>
                <div className="text-sm text-secondary-600">
                  Get notified when items are low in stock
                </div>
              </div>
              <input type="checkbox" className="toggle" />
            </div>

            <div className="flex items-start justify-between">
              <div>
                <div className="font-medium">Payment Updates</div>
                <div className="text-sm text-secondary-600">
                  Get notified about payment status changes
                </div>
              </div>
              <input type="checkbox" className="toggle" />
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3">Push Notifications</h4>
          <div className="space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <div className="font-medium">Desktop Notifications</div>
                <div className="text-sm text-secondary-600">
                  Show desktop notifications
                </div>
              </div>
              <input type="checkbox" className="toggle" />
            </div>

            <div className="flex items-start justify-between">
              <div>
                <div className="font-medium">Mobile Notifications</div>
                <div className="text-sm text-secondary-600">
                  Send notifications to mobile device
                </div>
              </div>
              <input type="checkbox" className="toggle" />
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3">Frequency</h4>
          <div className="space-y-3">
            <select className="input w-full">
              <option>Real-time</option>
              <option>Daily digest</option>
              <option>Weekly digest</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <button className="btn btn-secondary">Reset to Default</button>
          <button className="btn btn-primary">Save Preferences</button>
        </div>
      </div>
    </div>
  )
}