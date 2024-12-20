'use client'
import { useState, useEffect } from 'react'
import Footer from '@/components/admin/Footer'
import Sidebar from '@/components/admin/Sidebar'
import TopNav from '@/components/admin/TopNav'

export default function AdminLayout({
  children
}: {
  children: React.ReactNode
}) {
  const [isMobile, setIsMobile] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 1024
      setIsMobile(mobile)
      setIsSidebarOpen(!mobile)
    }
    
    checkScreenSize()
    
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // Prevent hydration errors by not rendering until mounted
  if (!mounted) {
    return null // or a loading state
  }

  // Handle sidebar toggle
  const toggleSidebar = () => {
    if (isMobile) {
      setIsSidebarOpen(prev => !prev)
    } else {
      setIsCollapsed(prev => !prev)
    }
  }

  // Handle sidebar close (mobile only)
  const closeSidebar = () => {
    if (isMobile) {
      setIsSidebarOpen(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <TopNav onMenuClick={toggleSidebar} />
      
      <div className="flex flex-1 relative">
        <Sidebar
          isMobile={isMobile}
          isOpen={isSidebarOpen}
          isCollapsed={isCollapsed}
          onClose={closeSidebar}
          onToggleCollapse={() => setIsCollapsed(prev => !prev)}
        />
        
        <main 
          className={`
            flex-1 p-6 transition-all duration-300
            ${!isMobile && (isCollapsed ? 'lg:ml-20' : 'lg:ml-72')}
          `}
        >
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>

      <Footer 
        className={`
          transition-all duration-300
          ${!isMobile && (isCollapsed ? 'lg:ml-20' : 'lg:ml-72')}
        `}
      />
    </div>
  )
}