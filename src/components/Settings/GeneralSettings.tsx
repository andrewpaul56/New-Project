@@ .. @@
 import React from 'react';
-import { User, Building, Users, Globe } from 'lucide-react';
+import { User, Building, Users, Globe, Settings, Shield, MessageSquare, Palette, Zap, Database, Code, DollarSign } from 'lucide-react';
+import { PersonalSettings } from './PersonalSettings';
+import { UsersManagement } from './UsersManagement';
+import { CompanyDetails } from './CompanyDetails';
+import { FiscalYear } from './FiscalYear';
+import { BusinessHours } from './BusinessHours';
+import { CurrencyManagement } from './CurrencyManagement';
+import { ProfilesSettings } from './ProfilesSettings';
+import { RolesSharing } from './RolesSharing';
+import { LoginHistory } from './LoginHistory';
+import { AuditLog } from './AuditLog';
+import { TerritoryManagement } from './TerritoryManagement';
+import { ModuleFieldsBuilder } from './ModuleFieldsBuilder';
 
-export const GeneralSettings: React.FC = () => {
+interface GeneralSettingsProps {
+  activeSubSection?: string;
+  onSubSectionChange?: (section: string) => void;
+}
+
+export const GeneralSettings: React.FC<GeneralSettingsProps> = ({ 
+  activeSubSection = 'overview', 
+  onSubSectionChange 
+}) => {
+  const renderSubSection = () => {
+    switch (activeSubSection) {
+      case 'personal-settings':
+        return <PersonalSettings />;
+      case 'users':
+        return <UsersManagement />;
+      case 'company-details':
+        return <CompanyDetails />;
+      case 'fiscal-year':
+        return <FiscalYear />;
+      case 'business-hours':
+        return <BusinessHours />;
+      case 'currencies':
+        return <CurrencyManagement />;
+      case 'profiles':
+        return <ProfilesSettings />;
+      case 'roles-sharing':
+        return <RolesSharing />;
+      case 'login-history':
+        return <LoginHistory />;
+      case 'audit-log':
+        return <AuditLog />;
+      case 'territory-management':
+        return <TerritoryManagement />;
+      case 'module-fields-builder':
+        return <ModuleFieldsBuilder />;
+      default:
+        return renderOverview();
+    }
+  };
+
+  const renderOverview = () => (
+    <div className="p-6 bg-gradient-to-br from-blue-50 to-white min-h-screen">
+      <div className="max-w-7xl mx-auto">
+        <div className="mb-8">
+          <h2 className="text-2xl font-bold text-gray-900 mb-2">General Settings</h2>
+          <p className="text-gray-600">Manage your personal preferences and basic company settings</p>
+        </div>
+
+        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
+          {/* Personal Settings Card */}
+          <div 
+            onClick={() => onSubSectionChange?.('personal-settings')}
+            className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-200 cursor-pointer group"
+          >
+            <div className="flex items-center mb-4">
+              <div className="p-3 rounded-lg bg-blue-500 bg-opacity-10">
+                <User className="h-6 w-6 text-blue-500" />
+              </div>
+              <h3 className="ml-3 text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
+                Personal Settings
+              </h3>
+            </div>
+            <p className="text-gray-600 mb-4">Update your profile details, language, and time zone</p>
+            <div className="text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:underline">
+              Configure →
+            </div>
+          </div>
+
+          {/* Users Card */}
+          <div 
+            onClick={() => onSubSectionChange?.('users')}
+            className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-200 cursor-pointer group"
+          >
+            <div className="flex items-center mb-4">
+              <div className="p-3 rounded-lg bg-green-500 bg-opacity-10">
+                <Users className="h-6 w-6 text-green-500" />
+              </div>
+              <h3 className="ml-3 text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
+                Users
+              </h3>
+            </div>
+            <p className="text-gray-600 mb-4">Add new users, assign roles, and manage team permissions</p>
+            <div className="text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:underline">
+              Configure →
+            </div>
+          </div>
+
+          {/* Company Settings Card */}
+          <div 
+            onClick={() => onSubSectionChange?.('company-details')}
+            className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-200 cursor-pointer group"
+          >
+            <div className="flex items-center mb-4">
+              <div className="p-3 rounded-lg bg-purple-500 bg-opacity-10">
+                <Building className="h-6 w-6 text-purple-500" />
+              </div>
+              <h3 className="ml-3 text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
+                Company Settings
+              </h3>
+            </div>
+            <p className="text-gray-600 mb-4">Define company information, logos, and organization-wide preferences</p>
+            <div className="text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:underline">
+              Configure →
+            </div>
+          </div>
+        </div>
+      </div>
+    </div>
+  );
+
   return (
-    <div className="p-6">
-      <div className="mb-6">
-        <h2 className="text-2xl font-bold text-gray-900 mb-2">General Settings</h2>
-        <p className="text-gray-600">Manage your personal preferences and basic company settings</p>
-      </div>
-
-      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
-        {/* Personal Settings */}
-        <div className="bg-gray-50 rounded-lg p-6">
-          <div className="flex items-center mb-4">
-            <User className="h-6 w-6 text-blue-600 mr-2" />
-            <h3 className="text-lg font-semibold text-gray-900">Personal Settings</h3>
-          </div>
-          <p className="text-gray-600 mb-4">Update your profile details, language, and time zone</p>
-          <div className="space-y-4">
-            <div>
-              <label className="block text-sm font-medium text-gray-700 mb-2">Display Name</label>
-              <input
-                type="text"
-                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
-                placeholder="Your display name"
-              />
-            </div>
-            <div>
-              <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
-              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
-                <option>English</option>
-                <option>Spanish</option>
-                <option>French</option>
-                <option>German</option>
-              </select>
-            </div>
-            <div>
-              <label className="block text-sm font-medium text-gray-700 mb-2">Time Zone</label>
-              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
-                <option>UTC-8 (Pacific Time)</option>
-                <option>UTC-5 (Eastern Time)</option>
-                <option>UTC+0 (GMT)</option>
-                <option>UTC+1 (Central European Time)</option>
-              </select>
-            </div>
-          </div>
-        </div>
-
-        {/* Users Management */}
-        <div className="bg-gray-50 rounded-lg p-6">
-          <div className="flex items-center mb-4">
-            <Users className="h-6 w-6 text-blue-600 mr-2" />
-            <h3 className="text-lg font-semibold text-gray-900">Users</h3>
-          </div>
-          <p className="text-gray-600 mb-4">Add new users, assign roles, and manage team permissions</p>
-          <div className="space-y-3">
-            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
-              <div>
-                <p className="font-medium text-gray-900">Active Users</p>
-                <p className="text-sm text-gray-600">12 users</p>
-              </div>
-              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
-                Manage
-              </button>
-            </div>
-            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
-              <div>
-                <p className="font-medium text-gray-900">Pending Invitations</p>
-                <p className="text-sm text-gray-600">3 pending</p>
-              </div>
-              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
-                View
-              </button>
-            </div>
-          </div>
-        </div>
-
-        {/* Company Settings */}
-        <div className="bg-gray-50 rounded-lg p-6">
-          <div className="flex items-center mb-4">
-            <Building className="h-6 w-6 text-blue-600 mr-2" />
-            <h3 className="text-lg font-semibold text-gray-900">Company Settings</h3>
-          </div>
-          <p className="text-gray-600 mb-4">Define company information, logos, and organization-wide preferences</p>
-          <div className="space-y-4">
-            <div>
-              <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
-              <input
-                type="text"
-                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
-                placeholder="Your company name"
-              />
-            </div>
-            <div>
-              <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
-              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
-                <option>Technology</option>
-                <option>Healthcare</option>
-                <option>Finance</option>
-                <option>Manufacturing</option>
-                <option>Other</option>
-              </select>
-            </div>
-          </div>
-        </div>
-
-        {/* Domain Settings */}
-        <div className="bg-gray-50 rounded-lg p-6">
-          <div className="flex items-center mb-4">
-            <Globe className="h-6 w-6 text-blue-600 mr-2" />
-            <h3 className="text-lg font-semibold text-gray-900">Domain Settings</h3>
-          </div>
-          <p className="text-gray-600 mb-4">Configure your custom domain and access settings</p>
-          <div className="space-y-4">
-            <div>
-              <label className="block text-sm font-medium text-gray-700 mb-2">Custom Domain</label>
-              <input
-                type="text"
-                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
-                placeholder="your-company.com"
-              />
-            </div>
-            <div className="flex items-center">
-              <input type="checkbox" className="mr-2" />
-              <label className="text-sm text-gray-700">Enable SSL certificate</label>
-            </div>
-          </div>
-        </div>
-      </div>
-
-      <div className="mt-8 flex justify-end">
-        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
-          Save Changes
-        </button>
-      </div>
-    </div>
+    <div>
+      {renderSubSection()}
+    </div>
   );
 };