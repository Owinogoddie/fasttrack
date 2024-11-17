'use client';

export default function SecuritySettings() {
  return (
    <div className="space-y-6">
      {/* Change Password Section */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Change Password</h3>
        <form className="space-y-4">
          <div>
            <label htmlFor="current-password" className="form-label">
              Current Password
            </label>
            <input 
              id="current-password" 
              type="password" 
              className="input w-full" 
              placeholder="Enter your current password" 
            />
          </div>

          <div>
            <label htmlFor="new-password" className="form-label">
              New Password
            </label>
            <input 
              id="new-password" 
              type="password" 
              className="input w-full" 
              placeholder="Enter your new password" 
            />
          </div>

          <div>
            <label htmlFor="confirm-password" className="form-label">
              Confirm New Password
            </label>
            <input 
              id="confirm-password" 
              type="password" 
              className="input w-full" 
              placeholder="Confirm your new password" 
            />
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button type="button" className="btn btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Update Password
            </button>
          </div>
        </form>
      </div>

      {/* Two-Factor Authentication Section */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Two-Factor Authentication</h3>
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="font-medium">Enable Two-Factor Authentication</h4>
              <p className="text-sm text-secondary-600">
                Add an extra layer of security to your account.
              </p>
            </div>
            <input type="checkbox" className="toggle" aria-label="Enable Two-Factor Authentication" />
          </div>

          <div>
            <label htmlFor="auth-method" className="form-label">
              Authentication Method
            </label>
            <select id="auth-method" className="input w-full">
              <option value="authenticator-app">Authenticator App</option>
              <option value="sms">SMS</option>
              <option value="email">Email</option>
            </select>
          </div>

          <div className="mt-6 flex justify-end">
            <button className="btn btn-primary">Configure 2FA</button>
          </div>
        </div>
      </div>

      {/* Login History Section */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Login History</h3>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead className="bg-secondary-50">
              <tr>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Device</th>
                <th className="px-4 py-2 text-left">Location</th>
                <th className="px-4 py-2 text-left">IP Address</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-secondary-100">
                <td className="px-4 py-2">2024-01-20 10:30 AM</td>
                <td className="px-4 py-2">Chrome on Windows</td>
                <td className="px-4 py-2">New York, USA</td>
                <td className="px-4 py-2">192.168.1.1</td>
              </tr>
              <tr className="border-b border-secondary-100">
                <td className="px-4 py-2">2024-01-19 3:45 PM</td>
                <td className="px-4 py-2">Safari on iPhone</td>
                <td className="px-4 py-2">London, UK</td>
                <td className="px-4 py-2">192.168.1.2</td>
              </tr>
              <tr>
                <td className="px-4 py-2">2024-01-18 9:15 AM</td>
                <td className="px-4 py-2">Firefox on MacOS</td>
                <td className="px-4 py-2">Toronto, Canada</td>
                <td className="px-4 py-2">192.168.1.3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
