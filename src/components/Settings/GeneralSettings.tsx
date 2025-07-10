import React from 'react';
import { User, Building, Users, Globe, Settings, Shield, MessageSquare, Palette, Zap, Database, Code, DollarSign } from 'lucide-react';
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

interface GeneralSettingsProps {
  activeSubSection?: string;
  onSubSectionChange?: (section: string) => void;
}

export const GeneralSettings: React.FC<GeneralSettingsProps> = ({ 
  activeSubSection = 'overview', 
  onSubSectionChange 
}) => {
  const renderSubSection = () => {
    switch (activeSubSection) {
      case 'personal-settings':
        return <PersonalSettings />;
      case 'users':
        return <UsersManagement />;
      case 'company-details':
        return <CompanyDetails />;
      case 'fiscal-year':
        return <FiscalYear />;
      case 'business-hours':
        return <BusinessHours />;
      case 'currencies':
        return <CurrencyManagement />;
      case 'profiles':
        return <ProfilesSettings />;
      case 'roles-sharing':
        return <RolesSharing />;
      case 'login-history':
        return <LoginHistory />;
      case 'audit-log':
        return <AuditLog />;
      case 'territory-management':
        return <TerritoryManagement />;
      case 'module-fields-builder':
        return <ModuleFieldsBuilder />;
      default:
        return renderOverview();
    }
  };

  const renderOverview = () => (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">General Settings</h2>
          <p className="text-gray-600">Manage your personal preferences and basic company settings</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Personal Settings Card */}
          <div 
            onClick={() => onSubSectionChange?.('personal-settings')}
            className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-200 cursor-pointer group"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-lg bg-blue-500 bg-opacity-10">
                <User className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                Personal Settings
              </h3>
            </div>
            <p className="text-gray-600 mb-4">Update your profile details, language, and time zone</p>
            <div className="text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:underline">
              Configure →
            </div>
          </div>

          {/* Users Card */}
          <div 
            onClick={() => onSubSectionChange?.('users')}
            className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-200 cursor-pointer group"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-lg bg-green-500 bg-opacity-10">
                <Users className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                Users
              </h3>
            </div>
            <p className="text-gray-600 mb-4">Add new users, assign roles, and manage team permissions</p>
            <div className="text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:underline">
              Configure →
            </div>
          </div>

          {/* Company Settings Card */}
          <div 
            onClick={() => onSubSectionChange?.('company-details')}
            className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-200 cursor-pointer group"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-lg bg-purple-500 bg-opacity-10">
                <Building className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                Company Settings
              </h3>
            </div>
            <p className="text-gray-600 mb-4">Define company information, logos, and organization-wide preferences</p>
            <div className="text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:underline">
              Configure →
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {renderSubSection()}
    </div>
  );
};