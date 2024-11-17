// components/common/Tabs/index.tsx
'use client'

import { createContext, useContext, useState } from 'react'

const TabsContext = createContext<{
  activeTab: string
  setActiveTab: (value: string) => void
} | null>(null)

export function Tabs({ 
  children, 
  defaultValue 
}: { 
  children: React.ReactNode
  defaultValue: string 
}) {
  const [activeTab, setActiveTab] = useState(defaultValue)

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div>{children}</div>
    </TabsContext.Provider>
  )
}

export function TabList({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`flex space-x-4 ${className}`}>
      {children}
    </div>
  )
}

export function Tab({ children, value }: { children: React.ReactNode, value: string }) {
  const context = useContext(TabsContext)
  if (!context) throw new Error('Tab must be used within Tabs')
  
  const { activeTab, setActiveTab } = context
  
  return (
    <button
      className={`px-4 py-2 text-sm font-medium transition-colors
        ${activeTab === value 
          ? 'text-primary-600 border-b-2 border-primary-600' 
          : 'text-secondary-600 hover:text-primary-600'
        }`}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  )
}

export function TabPanels({ children }: { children: React.ReactNode }) {
  return <div className="mt-4">{children}</div>
}

export function TabPanel({ 
  children, 
  value 
}: { 
  children: React.ReactNode
  value: string 
}) {
  const context = useContext(TabsContext)
  if (!context) throw new Error('TabPanel must be used within Tabs')
  
  const { activeTab } = context
  
  if (activeTab !== value) return null
  
  return <div>{children}</div>
}