// components/admin/settings/CompanySettings.tsx
"use client";

import Image from "next/image";

export default function CompanySettings() {
  return (
    <div className="space-y-6">
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Company Information</h3>

        <div className="space-y-4">
          <div className="flex items-center gap-6">
            <div className="relative">
              <Image
                src="/placeholder-logo.jpg"
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
              <h4 className="font-medium">Company Logo</h4>
              <p className="text-sm text-secondary-600 mt-1">
                PNG or JPG, maximum 2MB
              </p>
            </div>
          </div>

          <div>
            <label className="form-label">Company Name</label>
            <input type="text" className="input w-full" />
          </div>

          <div>
            <label className="form-label">Website</label>
            <input type="url" className="input w-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="form-label">Industry</label>
              <select className="input w-full">
                <option>Technology</option>
                <option>Retail</option>
                <option>Manufacturing</option>
              </select>
            </div>
            <div>
              <label className="form-label">Company Size</label>
              <select className="input w-full">
                <option>1-10</option>
                <option>11-50</option>
                <option>51-200</option>
                <option>201-500</option>
                <option>500+</option>
              </select>
            </div>
          </div>

          <div>
            <label className="form-label">Description</label>
            <textarea className="input w-full h-24" />
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button className="btn btn-secondary">Cancel</button>
          <button className="btn btn-primary">Save Changes</button>
        </div>
      </div>

      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Business Address</h3>

        <div className="space-y-4">
          <div>
            <label className="form-label">Street Address</label>
            <input type="text" className="input w-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="form-label">City</label>
              <input type="text" className="input w-full" />
            </div>
            <div>
              <label className="form-label">State/Province</label>
              <input type="text" className="input w-full" />
            </div>
            <div>
              <label className="form-label">ZIP/Postal Code</label>
              <input type="text" className="input w-full" />
            </div>
          </div>

          <div>
            <label className="form-label">Country</label>
            <select className="input w-full">
              <option>United States</option>
              <option>Canada</option>
              <option>United Kingdom</option>
            </select>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button className="btn btn-secondary">Cancel</button>
          <button className="btn btn-primary">Save Address</button>
        </div>
      </div>
    </div>
  );
}
