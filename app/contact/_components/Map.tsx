// app/contact/_components/Map.tsx
'use client'
import dynamic from 'next/dynamic'

const MapSection = dynamic(
  () => import('./MapSection').then((mod) => mod.MapSection),
  { 
    ssr: false,
    loading: () => <div style={{ height: '500px' }}>Loading map...</div>
  }
)

export default MapSection