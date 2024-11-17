'use client'

import { useState } from 'react'
import { Search, ScanLine } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function TrackingSearchBar({ onSearch }: { onSearch: (number: string) => void }) {
  const [trackingNumber, setTrackingNumber] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(trackingNumber)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-secondary-400" />
        </div>
        <input
          type="text"
          className="input w-full pl-11 pr-32 py-4 text-lg"
          placeholder="Enter tracking number(s)"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-1.5">
          <Button
            type="button"
            variant="secondary"
            className="mr-2"
            onClick={() => {/* Implement scanner functionality */}}
          >
            <ScanLine className="h-5 w-5" />
          </Button>
          <Button type="submit" variant="primary">
            Track Package
          </Button>
        </div>
      </div>
    </form>
  )
}