import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ColorThemeSelector } from "@/components/ColorThemeSelector";
import {
  Building2,
  LayoutDashboard,
  Users,
  Home,
  CreditCard,
  FileText,
  Settings,
  BarChart3,
  Calendar,
  Shield,
  LogOut,
  ChevronLeft,
  ChevronRight,
  MapPin,
  ClipboardList,
  Mail,
  Archive
} from "lucide-react";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const Sidebar = ({ collapsed, onToggle }: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      section: "Overview",
      items: [
        { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard", badge: null },
        { icon: BarChart3, label: "Analytics", path: "/analytics", badge: null },
      ]
    },
    {
      section: "Projects",
      items: [
        { icon: Building2, label: "Projects", path: "/projects", badge: null },
        { icon: MapPin, label: "Towers & Floors", path: "/towers", badge: null },
        { icon: Home, label: "Units", path: "/units", badge: "156" },
      ]
    },
    {
      section: "Operations",
      items: [
        { icon: Users, label: "Customers", path: "/customers", badge: null },
        { icon: ClipboardList, label: "Milestone Plans", path: "/plans", badge: null },
        { icon: Calendar, label: "Progress Logging", path: "/progress", badge: null },
        { icon: CreditCard, label: "Payments", path: "/payments", badge: "23" },
        { icon: FileText, label: "Scheduled Dues", path: "/dues", badge: "7" },
      ]
    },
    {
      section: "Communications",
      items: [
        { icon: Mail, label: "Email Templates", path: "/emails", badge: null },
        { icon: Archive, label: "Documents", path: "/documents", badge: null },
      ]
    },
    {
      section: "Administration",
      items: [
        { icon: Shield, label: "Users & Roles", path: "/users", badge: null },
        { icon: FileText, label: "Reports", path: "/reports", badge: null },
        { icon: Settings, label: "Settings", path: "/settings", badge: null },
      ]
    }
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className={`bg-sidebar/90 backdrop-blur-glass text-sidebar-foreground h-screen flex flex-col border-r border-glass transition-all duration-300 ${
      collapsed ? 'w-16' : 'w-64'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="bg-sidebar-primary p-2 rounded-lg">
              <Building2 className="h-6 w-6 text-sidebar-primary-foreground" />
            </div>
            <div>
              <h1 className="font-bold text-lg">Navantis</h1>
              <p className="text-xs text-sidebar-foreground/70">Real Estate Platform</p>
            </div>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className="text-sidebar-foreground hover:bg-sidebar-accent h-8 w-8"
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-6">
          {menuItems.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              {!collapsed && (
                <h3 className="px-4 text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wider mb-3">
                  {section.section}
                </h3>
              )}
              <div className="space-y-1 px-2">
                {section.items.map((item, itemIndex) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Button
                      key={itemIndex}
                      variant="ghost"
                      onClick={() => handleNavigation(item.path)}
                      className={`w-full justify-start h-10 transition-all duration-200 ${
                        isActive 
                          ? 'bg-primary/20 text-primary border border-primary/30 shadow-sm' 
                          : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:border hover:border-primary/20'
                      } ${collapsed ? 'px-2' : 'px-3'}`}
                    >
                      <item.icon className={`h-5 w-5 ${collapsed ? '' : 'mr-3'} ${isActive ? 'text-primary' : ''}`} />
                      {!collapsed && (
                        <>
                          <span className="flex-1 text-left">{item.label}</span>
                          {item.badge && (
                            <Badge 
                              variant="secondary" 
                              className="ml-auto bg-sidebar-primary/20 text-sidebar-primary text-xs"
                            >
                              {item.badge}
                            </Badge>
                          )}
                        </>
                      )}
                    </Button>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </div>

      {/* Footer */}
      <div className="border-t border-glass p-4">
        {!collapsed && (
          <div className="mb-4 p-3 bg-glass-accent/30 rounded-lg backdrop-blur-glass-sm border border-glass-highlight">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-gradient-primary p-1.5 rounded-full">
                <Shield className="h-3 w-3 text-primary-foreground" />
              </div>
              <div className="text-xs">
                <p className="font-medium">Admin User</p>
                <p className="text-sidebar-foreground/60">admin@vmrealcon.com</p>
              </div>
            </div>
          </div>
        )}
        
        {/* Theme Controls */}
        <div className="flex items-center gap-2 mb-4">
          <ThemeToggle />
          <ColorThemeSelector />
          {collapsed && <div className="flex-1" />}
          {!collapsed && (
            <div className="flex-1 text-xs text-sidebar-foreground/60">
              Themes
            </div>
          )}
        </div>

        <Button
          variant="ghost"
          onClick={handleLogout}
          className={`w-full justify-start text-sidebar-foreground hover:bg-destructive hover:text-destructive-foreground h-10 ${
            collapsed ? 'px-2' : 'px-3'
          }`}
        >
          <LogOut className={`h-5 w-5 ${collapsed ? '' : 'mr-3'}`} />
          {!collapsed && "Sign Out"}
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;