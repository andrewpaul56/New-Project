import React, { useState } from 'react';
import { GeneralSettings } from './GeneralSettings';
import { SecuritySettings } from './SecuritySettings';
import { ChannelSettings } from './ChannelSettings';
import { CustomizationSettings } from './CustomizationSettings';
import { AutomationSettings } from './AutomationSettings';
import { DataAdministration } from './DataAdministration';
import { DeveloperHub } from './DeveloperHub';
import { CPQSettings } from './CPQSettings';
import { 
  Settings, 
  Shield, 
  MessageSquare, 
  Palette, 
  Zap, 
  Database, 
  Code, 
  DollarSign,
  User,
  Users,
  Building,
  Mail,
  Phone,
  BarChart3,
  Package,
  Layout,
  FileText,
  Upload,
  Download,
  HardDrive,
  Trash2,
  RotateCcw,
  TestTube,
  History,
  MapPin,
  Link,
  Bell
} from 'lucide-react';

export const SettingsPanel: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const settingCards = [
    {
      id: 'general',
      title: 'General',
      description: 'Manage your personal preferences and basic company settings',
      icon: Settings,
      color: 'bg-blue-500',
      items: [
        { icon: User, label: 'Personal Settings', description: 'Update your profile details, language, and time zone' },
        { icon: Users, label: 'Users', description: 'Add new users, assign roles, and manage team permissions' },
        { icon: Building, label: 'Company Settings', description: 'Define company information, logos, and organization-wide preferences' }
      ]
    },
    {
      id: 'security',
      title: 'Security Control',
      description: 'Secure your CRM with roles, profiles, and audit tools',
      icon: Shield,
      color: 'bg-red-500',
      items: [
        { icon: Shield, label: 'Profiles', description: 'Configure user access levels for modules and fields' },
        { icon: Users, label: 'Roles and Sharing', description: 'Set up hierarchy-based data sharing and user roles' },
        { icon: History, label: 'Login History', description: 'Track and review recent login activities' },
        { icon: FileText, label: 'Audit Log', description: 'View detailed logs of key changes and activities' },
        { icon: MapPin, label: 'Territory Management', description: 'Organize users by geographic or business territories' }
      ]
    },
    {
      id: 'channels',
      title: 'Channels',
      description: 'Connect with customers across multiple channels',
      icon: MessageSquare,
      color: 'bg-green-500',
      items: [
        { icon: Mail, label: 'Email', description: 'Configure outgoing and incoming email settings' },
        { icon: MessageSquare, label: 'Business Messaging', description: 'Integrate messaging apps to chat with leads' },
        { icon: Phone, label: 'Notification SMS', description: 'Send SMS notifications for important updates' },
        { icon: BarChart3, label: 'Channel Performance', description: 'Monitor communication channel effectiveness' }
      ]
    },
    {
      id: 'customization',
      title: 'Customization',
      description: 'Personalize the CRM to fit your business needs',
      icon: Palette,
      color: 'bg-purple-500',
      items: [
        { icon: Package, label: 'Modules and Fields', description: 'Create and manage custom modules for your business' },
        { icon: Layout, label: 'Canvas', description: 'Design custom views for your records' },
        { icon: Settings, label: 'Customize Home Page', description: 'Choose and arrange dashboard components' },
        { icon: BarChart3, label: 'Analytics', description: 'Set up reports and visual dashboards' },
        { icon: FileText, label: 'Print Template', description: 'Create templates for printed documents' }
      ]
    },
    {
      id: 'automation',
      title: 'Automation',
      description: 'Automate repetitive tasks and stay efficient',
      icon: Zap,
      color: 'bg-yellow-500',
      items: [
        { icon: Zap, label: 'Workflow Rules', description: 'Define triggers and automated actions' },
        { icon: Settings, label: 'Actions', description: 'Create email alerts, tasks, and field updates' },
        { icon: History, label: 'Schedules', description: 'Automate actions on a time-based schedule' },
        { icon: Code, label: 'AI', description: 'Leverage AI tools for lead scoring and insights' }
      ]
    },
    {
      id: 'data',
      title: 'Data Administration',
      description: 'Manage your CRM data securely',
      icon: Database,
      color: 'bg-indigo-500',
      items: [
        { icon: Upload, label: 'Import', description: 'Bring data into your CRM from other tools' },
        { icon: Download, label: 'Export', description: 'Download CRM data for analysis or backup' },
        { icon: Shield, label: 'Data Backup', description: 'Schedule automatic backups' },
        { icon: Trash2, label: 'Remove Sample Data', description: 'Clean up sample data to start fresh' },
        { icon: HardDrive, label: 'Storage', description: 'View storage usage and limits' },
        { icon: RotateCcw, label: 'Recycle Bin', description: 'Recover recently deleted records' },
        { icon: TestTube, label: 'Sandbox', description: 'Safely test changes before applying them to production' }
      ]
    }
  ];

  const renderOverview = () => (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-white min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600">Manage your CRM configuration and preferences</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {settingCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              onClick={() => setActiveSection(card.id)}
              className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-200 cursor-pointer group"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg ${card.color} bg-opacity-10`}>
                  <Icon className={`h-6 w-6 ${card.color.replace('bg-', 'text-')}`} />
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {card.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">{card.description}</p>
              
              <div className="space-y-2">
                {card.items.slice(0, 3).map((item, index) => {
                  const ItemIcon = item.icon;
                  return (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <ItemIcon className="h-4 w-4 mr-2 text-gray-400" />
                      <span>{item.label}</span>
                    </div>
                  );
                })}
                {card.items.length > 3 && (
                  <div className="text-sm text-blue-600 font-medium">
                    +{card.items.length - 3} more options
                  </div>
                )}
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:underline">
                  Configure →
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="mt-12 bg-white rounded-lg shadow-lg p-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button 
            onClick={() => setActiveSection('customization')}
            className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
          >
            <Package className="h-5 w-5 text-blue-600 mr-3" />
            <div className="text-left">
              <p className="font-medium text-gray-900">Create Module</p>
              <p className="text-sm text-gray-600">Build custom modules</p>
            </div>
          </button>
          <button 
            onClick={() => setActiveSection('data')}
            className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
          >
            <Upload className="h-5 w-5 text-green-600 mr-3" />
            <div className="text-left">
              <p className="font-medium text-gray-900">Import Data</p>
              <p className="text-sm text-gray-600">Bring in your data</p>
            </div>
          </button>
          <button 
            onClick={() => setActiveSection('security')}
            className="flex items-center p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
          >
            <Shield className="h-5 w-5 text-red-600 mr-3" />
            <div className="text-left">
              <p className="font-medium text-gray-900">Security Setup</p>
              <p className="text-sm text-gray-600">Configure access</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );

  const renderDetailedView = () => {
    const ActiveComponent = (() => {
      switch (activeSection) {
        case 'general': return GeneralSettings;
        case 'security': return SecuritySettings;
        case 'channels': return ChannelSettings;
        case 'customization': return CustomizationSettings;
        case 'automation': return AutomationSettings;
        case 'data': return DataAdministration;
        case 'developer': return DeveloperHub;
        case 'cpq': return CPQSettings;
        default: return GeneralSettings;
      }
    })();

    return (
      <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <button 
              onClick={() => setActiveSection('overview')}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Settings
            </button>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600 capitalize">{activeSection}</span>
          </div>
        </div>
        <ActiveComponent />
      </div>
    );
  };

  return activeSection === 'overview' ? renderOverview() : renderDetailedView();
};