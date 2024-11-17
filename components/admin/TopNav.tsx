'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { 
  Bell, 
  Search, 
  Menu,
  User,
  Settings,
  HelpCircle,
  LogOut,
  ChevronDown
} from 'lucide-react'

interface TopNavProps {
  onMenuClick: () => void
}

export default function TopNav({ onMenuClick }: TopNavProps) {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const profileRef = useRef<HTMLDivElement>(null)
  const notificationsRef = useRef<HTMLDivElement>(null)

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false)
      }
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setIsNotificationsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const mockNotifications = [
    { id: 1, title: 'New order received', time: '5 minutes ago', unread: true },
    { id: 2, title: 'Delivery completed', time: '1 hour ago', unread: true },
    { id: 3, title: 'System update', time: '2 hours ago', unread: false },
  ]

  return (
    <nav className="bg-white border-b border-secondary-200 sticky top-0 z-20">
      <div className="px-4 lg:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onMenuClick}
              className="p-2 hover:bg-secondary-50 rounded-lg text-secondary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              <Menu className="h-5 w-5" />
            </button>
            <Link href="/admin" className="flex items-center gap-2">
              <div className="bg-primary-600 text-white p-1.5 rounded">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xl font-semibold text-secondary-900">FastTrack</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:block max-w-lg w-full">
              <div className="relative">
                <input
                  type="text"
                  className="w-full h-10 pl-10 pr-4 rounded-lg border border-secondary-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-secondary-900 placeholder-secondary-400 text-sm transition-colors duration-200"
                  placeholder="Search orders, customers, or deliveries..."
                />
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-secondary-400" />
              </div>
            </div>

            {/* Notifications */}
            <div className="relative" ref={notificationsRef}>
              <button
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="relative p-2 hover:bg-secondary-50 rounded-lg text-secondary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500"></span>
              </button>

              {isNotificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 rounded-lg bg-white shadow-lg border border-secondary-200 py-2">
                  <div className="px-4 py-2 border-b border-secondary-200">
                    <h3 className="font-semibold text-secondary-900">Notifications</h3>
                  </div>
                  <div className="max-h-[300px] overflow-y-auto">
                    {mockNotifications.map((notification) => (
                      <div
                        key={notification.id}
                        className="px-4 py-3 hover:bg-secondary-50 cursor-pointer transition-colors duration-150"
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-2 h-2 rounded-full mt-2 ${notification.unread ? 'bg-primary-500' : 'bg-transparent'}`} />
                          <div>
                            <p className="text-sm text-secondary-900">{notification.title}</p>
                            <p className="text-xs text-secondary-500 mt-0.5">{notification.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="px-4 py-2 border-t border-secondary-200">
                    <Link 
                      href="/admin/notifications"
                      className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                    >
                      View all notifications
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Profile Dropdown */}
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 p-1.5 hover:bg-secondary-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                  <User className="h-5 w-5 text-primary-600" />
                </div>
                <div className="hidden md:block text-left">
                  <p className="text-sm font-medium text-secondary-900">Admin User</p>
                  <p className="text-xs text-secondary-500">admin@fasttrack.com</p>
                </div>
                <ChevronDown className="h-4 w-4 text-secondary-500 hidden md:block" />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-lg bg-white shadow-lg border border-secondary-200 py-1">
                  <div className="px-4 py-2 border-b border-secondary-200">
                    <p className="text-sm font-medium text-secondary-900">Admin User</p>
                    <p className="text-xs text-secondary-500">admin@fasttrack.com</p>
                  </div>
                  
                  <div className="py-1">
                    <Link 
                      href="/admin/profile" 
                      className="flex items-center gap-2 px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-50"
                    >
                      <User className="h-4 w-4" />
                      Profile
                    </Link>
                    <Link 
                      href="/admin/settings" 
                      className="flex items-center gap-2 px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-50"
                    >
                      <Settings className="h-4 w-4" />
                      Settings
                    </Link>
                    <Link 
                      href="/admin/help" 
                      className="flex items-center gap-2 px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-50"
                    >
                      <HelpCircle className="h-4 w-4" />
                      Help & Support
                    </Link>
                  </div>
                  
                  <div className="border-t border-secondary-200 py-1">
                    <button 
                      className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 w-full"
                    >
                      <LogOut className="h-4 w-4" />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}