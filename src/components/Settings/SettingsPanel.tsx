import React, { useState } from 'react';
import { GeneralSettings } from './GeneralSettings';
import { SecuritySettings } from './SecuritySettings';
import { ChannelSettings } from './ChannelSettings';
import { CustomizationSettings } from './CustomizationSettings';
import { AutomationSettings } from './AutomationSettings';
import { DataAdministration } from './DataAdministration';
import { DeveloperHub } from './DeveloperHub';
import { CPQSettings } from './CPQSettings';
import { PersonalSettings } from './PersonalSettings';
import { UsersManagement } from './UsersManagement';
import { CompanyDetails } from './CompanyDetails';
import { FiscalYear } from './FiscalYear';
import { BusinessHours } from './BusinessHours';
import { CurrencyManagement } from './CurrencyManagement';
import { ProfilesSettings } from './ProfilesSettings';
import { RolesSharing } from './RolesSharing';
import { LoginHistory } from './LoginHistory';
import { AuditLog } from './AuditLog';
import { TerritoryManagement } from './TerritoryManagement';
import { ModuleFieldsBuilder } from './ModuleFieldsBuilder';
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
  Bell,
  Calendar,
  Globe,
  Clock
} from 'lucide-react';

export const SettingsPanel: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [activeSubSection, setActiveSubSection] = useState('overview');

  const settingsCards = [
    {
      id: 'general',
      title: 'General Settings',
      description: 'Configure basic settings for your organization',
      icon: Settings,
      color: 'bg-blue-500',
      items: [
        { icon: User, label: 'Personal Settings', description: 'Update your profile details, language, and time zone', id: 'personal-settings' },
        { icon: Users, label: 'Users', description: 'Add new users, assign roles, and manage team permissions', id: 'users' },
        { icon: Building, label: 'Company Settings', description: 'Define company information, logos, and organization-wide preferences', id: 'company-details' },
        { icon: Calendar, label: 'Fiscal Year', description: 'Manage fiscal year settings', id: 'fiscal-year' },
        { icon: Clock, label: 'Business Hours', description: 'Set operational hours', id: 'business-hours' },
        { icon: DollarSign, label: 'Currencies', description: 'Manage currency settings', id: 'currencies' }
      ]
    },
    {
      id: 'security',
      title: 'Security',
      description: 'Manage access control and security settings',
      icon: Shield,
      color: 'bg-red-500',
      items: [
        { icon: Shield, label: 'Profiles', description: 'Configure user access levels for modules and fields', id: 'profiles' },
        { icon: Users, label: 'Roles and Sharing', description: 'Set up hierarchy-based data sharing and user roles', id: 'roles-sharing' },
        { icon: History, label: 'Login History', description: 'Track and review recent login activities', id: 'login-history' },
        { icon: FileText, label: 'Audit Log', description: 'View detailed logs of key changes and activities', id: 'audit-log' },
        { icon: MapPin, label: 'Territory Management', description: 'Organize users by geographic or business territories', id: 'territory-management' }
      ]
    },
    {
      id: 'channels',
      title: 'Communication Channels',
      description: 'Set up and manage communication channels',
      icon: MessageSquare,
      color: 'bg-green-500',
      items: [
        { icon: Mail, label: 'Email', description: 'Configure outgoing and incoming email settings', id: 'email' },
        { icon: MessageSquare, label: 'Business Messaging', description: 'Integrate messaging apps to chat with leads', id: 'business-messaging' },
        { icon: Phone, label: 'Notification SMS', description: 'Send SMS notifications for important updates', id: 'notification-sms' },
        { icon: BarChart3, label: 'Channel Performance', description: 'Monitor communication channel effectiveness', id: 'channel-performance' }
      ]
    },
    {
      id: 'customization',
      title: 'Customization',
      description: 'Customize modules, fields, and layouts',
      icon: Palette,
      color: 'bg-purple-500',
      items: [
        { icon: Package, label: 'Modules and Fields', description: 'Create and manage custom modules for your business', id: 'module-fields-builder' },
        { icon: Layout, label: 'Canvas', description: 'Design custom views for your records', id: 'canvas' },
        { icon: Settings, label: 'Customize Home Page', description: 'Choose and arrange dashboard components', id: 'customize-home' },
        { icon: BarChart3, label: 'Analytics', description: 'Set up reports and visual dashboards', id: 'analytics' },
        { icon: FileText, label: 'Print Template', description: 'Create templates for printed documents', id: 'print-template' }
      ]
    },
    {
      id: 'automation',
      title: 'Automation',
      description: 'Set up workflows and automated processes',
      icon: Zap,
      color: 'bg-yellow-500',
      items: [
        { icon: Zap, label: 'Workflow Rules', description: 'Define triggers and automated actions', id: 'workflow-rules' },
        { icon: Settings, label: 'Actions', description: 'Create email alerts, tasks, and field updates', id: 'actions' },
        { icon: History, label: 'Schedules', description: 'Automate actions on a time-based schedule', id: 'schedules' },
        { icon: Code, label: 'AI', description: 'Leverage AI tools for lead scoring and insights', id: 'ai' }
      ]
    },
    {
      id: 'data',
      title: 'Data Administration',
      description: 'Manage data import, export, and storage',
      icon: Database,
      color: 'bg-indigo-500',
      items: [
        { icon: Upload, label: 'Import', description: 'Bring data into your CRM from other tools', id: 'import' },
        { icon: Download, label: 'Export', description: 'Download CRM data for analysis or backup', id: 'export' },
        { icon: Shield, label: 'Data Backup', description: 'Schedule automatic backups', id: 'data-backup' },
        { icon: Trash2, label: 'Remove Sample Data', description: 'Clean up sample data to start fresh', id: 'remove-sample-data' },
        { icon: HardDrive, label: 'Storage', description: 'View storage usage and limits', id: 'storage' },
        { icon: RotateCcw, label: 'Recycle Bin', description: 'Recover recently deleted records', id: 'recycle-bin' },
        { icon: TestTube, label: 'Sandbox', description: 'Safely test changes before applying them to production', id: 'sandbox' }
      ]
    }
  ];

  const renderOverview = () => {
    return (
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {settingsCards.map((card, index) => {
            const CardIcon = card.icon;
            return (
              <div
                key={index}
                onClick={() => {
                  setActiveSection(card.id);
                  setActiveSubSection('overview');
                }}
                className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-200 cursor-pointer group"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-2 rounded-lg ${card.color} bg-opacity-10 mr-4`}>
                    <CardIcon className={`h-6 w-6 ${card.color.replace('bg-', 'text-')}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
                    <p className="text-sm text-gray-500">{card.description}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {card.items.slice(0, 3).map((item, index) => {
                    const ItemIcon = item.icon;
                    return (
                      <div key={index} className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-blue-600" onClick={(e) => { e.stopPropagation(); setActiveSection(card.id); setActiveSubSection(item.id); }}>
                        <ItemIcon className="h-4 w-4 mr-2 text-gray-400" />
                        <span>{item.label}</span>
                      </div>
                    );
                  })}
                  {card.items.length > 3 && (
                    <div className="text-sm text-blue-600 font-medium">
                      +{card.items.length - 3} more
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button 
              onClick={() => { setActiveSection('customization'); setActiveSubSection('module-fields-builder'); }}
              className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <Package className="h-5 w-5 text-blue-600 mr-3" />
              <div className="text-left">
                <div className="font-medium">Create Custom Module</div>
                <div className="text-sm text-gray-500">Build a new module from scratch</div>
              </div>
            </button>
            <button 
              onClick={() => { setActiveSection('data'); setActiveSubSection('import'); }}
              className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <Upload className="h-5 w-5 text-green-600 mr-3" />
              <div className="text-left">
                <div className="font-medium">Import Data</div>
                <div className="text-sm text-gray-500">Import data from CSV or Excel</div>
              </div>
            </button>
            <button 
              onClick={() => { setActiveSection('security'); setActiveSubSection('profiles'); }}
              className="flex items-center p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
            >
              <Shield className="h-5 w-5 text-red-600 mr-3" />
              <div className="text-left">
                <div className="font-medium">Security Review</div>
                <div className="text-sm text-gray-500">Review security settings</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderDetailedView = () => {
    const ActiveComponent = (() => {
      switch (activeSection) {
        case 'general': 
          // Handle sub-sections for general settings
          switch (activeSubSection) {
            case 'personal-settings': return PersonalSettings;
            case 'users': return UsersManagement;
            case 'company-details': return CompanyDetails;
            case 'fiscal-year': return FiscalYear;
            case 'business-hours': return BusinessHours;
            case 'currencies': return CurrencyManagement;
            default: return () => <GeneralSettings activeSubSection={activeSubSection} onSubSectionChange={setActiveSubSection} />;
          }
        case 'security': return SecuritySettings;
        case 'profiles': return ProfilesSettings;
        case 'roles-sharing': return RolesSharing;
        case 'login-history': return LoginHistory;
        case 'audit-log': return AuditLog;
        case 'territory-management': return TerritoryManagement;
        case 'channels': return ChannelSettings;
        case 'customization': 
          if (activeSubSection === 'module-fields-builder') return ModuleFieldsBuilder;
          return CustomizationSettings;
        case 'automation': return AutomationSettings;
        case 'data': return DataAdministration;
        case 'developer': return DeveloperHub;
        case 'cpq': return CPQSettings;
        default: return GeneralSettings;
      }
    })();

    return (
      <div>
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <button 
              onClick={() => { setActiveSection('overview'); setActiveSubSection('overview'); }}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Settings
            </button>
            <span className="text-gray-500">/</span>
            <span className="text-gray-900">{settingsCards.find(card => card.id === activeSection)?.title}</span>
          </div>
        </div>
        <ActiveComponent activeSubSection={activeSubSection} onSubSectionChange={setActiveSubSection} />
      </div>
    );
  };

  return (activeSection === 'overview' && activeSubSection === 'overview') ? renderOverview() : renderDetailedView();
};