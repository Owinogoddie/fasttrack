// components/admin/settings/ProfileSettings.tsx
"use client";

import Image from "next/image";

export default function ProfileSettings() {
  return (
    <div className="space-y-6">
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Personal Information</h3>

        <div className="space-y-4">
          <div className="flex items-center gap-6">
            <div className="relative">
              <Image
                src="/placeholder-avatar.jpg"
                alt="Company Logo"
                width={96} // 24 x 4
                height={96} // 24 x 4
                className="rounded-lg object-cover"
              />
              <button className="absolute bottom-0 right-0 bg-primary-600 text-white p-2 rounded-full">
                📷
              </button>
            </div>
            <div>
              <h4 className="font-medium">Profile Photo</h4>
              <p className="text-sm text-secondary-600 mt-1">
                PNG, JPG or GIF, maximum 2MB
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="form-label">First Name</label>
              <input type="text" className="input w-full" />
            </div>
            <div>
              <label className="form-label">Last Name</label>
              <input type="text" className="input w-full" />
            </div>
          </div>

          <div>
            <label className="form-label">Email</label>
            <input type="email" className="input w-full" />
          </div>

          <div>
            <label className="form-label">Phone</label>
            <input type="tel" className="input w-full" />
          </div>

          <div>
            <label className="form-label">Bio</label>
            <textarea className="input w-full h-24" />
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button className="btn btn-secondary">Cancel</button>
          <button className="btn btn-primary">Save Changes</button>
        </div>
      </div>

      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Preferences</h3>

        <div className="space-y-4">
          <div>
            <label className="form-label">Language</label>
            <select className="input w-full">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>

          <div>
            <label className="form-label">Time Zone</label>
            <select className="input w-full">
              <option>UTC-8 (Pacific Time)</option>
              <option>UTC-5 (Eastern Time)</option>
              <option>UTC+0 (London)</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="emailUpdates" className="rounded" />
            <label htmlFor="emailUpdates">
              Receive email updates about your account
            </label>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button className="btn btn-secondary">Cancel</button>
          <button className="btn btn-primary">Save Preferences</button>
        </div>
      </div>
    </div>
  );
}
