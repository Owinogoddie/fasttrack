"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Truck,
  Users,
  DollarSign,
  Map,
  Box,
  BarChart2,
  Settings,
  X,
  ChevronLeft,
  ChevronRight,
  LogOut,
} from "lucide-react";

const navigation = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: Home,
    description: "Overview of your delivery operations",
  },
  {
    name: "Orders",
    href: "/admin/orders",
    icon: Truck,
    description: "Manage and track all orders",
  },
  {
    name: "Personnel",
    href: "/admin/personnel",
    icon: Users,
    description: "Delivery staff management",
  },
  {
    name: "Customers",
    href: "/admin/customers",
    icon: Users,
    description: "Customer database and insights",
  },
  {
    name: "Finances",
    href: "/admin/finance",
    icon: DollarSign,
    description: "Revenue and payment tracking",
  },
  {
    name: "Routes",
    href: "/admin/routes",
    icon: Map,
    description: "Delivery route optimization",
  },
  {
    name: "Inventory",
    href: "/admin/inventory",
    icon: Box,
    description: "Stock and warehouse management",
  },
  {
    name: "Analytics",
    href: "/admin/analytics",
    icon: BarChart2,
    description: "Performance metrics and reports",
  },
  {
    name: "Settings",
    href: "/admin/settings",
    icon: Settings,
    description: "System configuration",
  },
];

interface SidebarProps {
  isMobile: boolean;
  isOpen: boolean;
  isCollapsed: boolean;
  onClose: () => void;
  onToggleCollapse: () => void;
}

export default function Sidebar({
  isMobile,
  isOpen,
  isCollapsed,
  onClose,
  onToggleCollapse,
}: SidebarProps) {
  const pathname = usePathname();

  const showIconsOnly = isCollapsed || (isMobile && !isOpen);

  // Base classes for the sidebar
  const sidebarClasses = `
    fixed top-0 left-0 h-full bg-white border-r border-gray-200
    transition-all duration-300 z-30
    ${isMobile ? "w-72" : isCollapsed ? "w-20" : "w-72"}
    ${isMobile && !isOpen ? "-translate-x-full" : "translate-x-0"}
  `;

  const handleNavClick = () => {
    if (isMobile) {
      onClose();
    }
  };

  return (
    <>
      {/* Backdrop for mobile */}
      {isMobile && isOpen && (
        <div className="fixed inset-0 bg-black/50 z-20" onClick={onClose} />
      )}

      {/* Sidebar */}
      <aside className={sidebarClasses}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
            {!isCollapsed && (
              <span className="text-xl font-semibold">FastTrack</span>
            )}

            <div className="flex items-center">
              {!isMobile && (
                <button
                  onClick={onToggleCollapse}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  {isCollapsed ? (
                    <ChevronRight className="h-5 w-5" />
                  ) : (
                    <ChevronLeft className="h-5 w-5" />
                  )}
                </button>
              )}

              {isMobile && (
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto p-4 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`
                    flex items-center gap-3 rounded-lg p-3 transition-all duration-200
                    group relative
                    ${
                      isActive
                        ? "bg-primary-50 text-primary-600"
                        : "text-secondary-600 hover:bg-secondary-50"
                    }
                  `}
                >
                  <item.icon className="h-5 w-5 shrink-0" />
                  {!showIconsOnly && (
                    <span className="text-sm font-medium">{item.name}</span>
                  )}

                  {/* Tooltip for icons-only state */}
                  {showIconsOnly && (
                    <div
                      className="
                      absolute left-full top-1/2 ml-2 -translate-y-1/2
                      hidden group-hover:block z-50
                    "
                    >
                      <div className="bg-secondary-900 text-white text-sm rounded-md py-1 px-3 whitespace-nowrap">
                        {item.name}
                        {item.description && (
                          <p className="text-xs text-secondary-300 mt-1">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-secondary-200">
            <div
              className={`
              flex items-center gap-3 text-secondary-600
              ${showIconsOnly ? "justify-center" : ""}
            `}
            >
              {!showIconsOnly && (
                <>
                  <div className="w-8 h-8 rounded-full bg-secondary-100 flex items-center justify-center">
                    <Users className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Admin User</p>
                    <p className="text-xs text-secondary-400">
                      admin@fasttrack.com
                    </p>
                  </div>
                </>
              )}
              <button
                className="p-2 hover:bg-secondary-50 rounded-lg"
                title="Logout"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
