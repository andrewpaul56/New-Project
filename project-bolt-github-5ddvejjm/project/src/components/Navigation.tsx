import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  Home, 
  Shield, 
  Users, 
  Settings, 
  BarChart3, 
  Target, 
  FileText, 
  Calendar,
  Mail,
  Phone,
  DollarSign,
  TrendingUp,
  Plus,
  Package
} from 'lucide-react';

interface NavigationProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentView, onViewChange }) => {
  const { user } = useAuth();

  const getNavigationItems = () => {
    const baseItems = [
      { id: 'dashboard', label: 'Dashboard', icon: Home },
      { id: 'module-builder', label: 'Module Builder', icon: Package },
      { id: 'leads', label: 'Leads', icon: Target },
      { id: 'contacts', label: 'Contacts', icon: Users },
      { id: 'deals', label: 'Deals', icon: DollarSign },
      { id: 'activities', label: 'Activities', icon: Calendar },
      { id: 'campaigns', label: 'Campaigns', icon: Mail },
      { id: 'reports', label: 'Reports', icon: BarChart3 },
      { id: 'analytics', label: 'Analytics', icon: TrendingUp },
      { id: 'settings', label: 'Settings', icon: Settings },
    ];

    if (user?.role === 'admin') {
      baseItems.push(
        { id: 'admin', label: 'Admin Panel', icon: Shield },
      );
    }

    return baseItems;
  };

  const navigationItems = getNavigationItems();

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-1">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={`flex items-center px-4 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  isActive
                    ? 'border-blue-500 text-blue-600 bg-blue-50'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <Icon className="h-4 w-4 mr-2" />
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};