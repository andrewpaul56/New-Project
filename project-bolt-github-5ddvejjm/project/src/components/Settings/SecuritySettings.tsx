import React from 'react';
import { Shield, Users, History, FileText, MapPin, Lock } from 'lucide-react';

export const SecuritySettings: React.FC = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Security Control</h2>
        <p className="text-gray-600">Secure your CRM with roles, profiles, and audit tools</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profiles */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Shield className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Profiles</h3>
          </div>
          <p className="text-gray-600 mb-4">Configure user access levels for modules and fields</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Administrator</p>
                <p className="text-sm text-gray-600">Full system access</p>
              </div>
              <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">Edit</button>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Sales Manager</p>
                <p className="text-sm text-gray-600">Sales module access</p>
              </div>
              <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">Edit</button>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Sales Rep</p>
                <p className="text-sm text-gray-600">Limited access</p>
              </div>
              <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">Edit</button>
            </div>
          </div>
        </div>

        {/* Roles and Sharing */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Users className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Roles and Sharing</h3>
          </div>
          <p className="text-gray-600 mb-4">Set up hierarchy-based data sharing and user roles</p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Default Sharing</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Private</option>
                <option>Public Read Only</option>
                <option>Public Read/Write</option>
              </select>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <label className="text-sm text-gray-700">Enable role hierarchy</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <label className="text-sm text-gray-700">Grant access using hierarchies</label>
            </div>
          </div>
        </div>

        {/* Login History */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <History className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Login History</h3>
          </div>
          <p className="text-gray-600 mb-4">Track and review recent login activities</p>
          <div className="space-y-3">
            <div className="p-3 bg-white rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-gray-900">admin@example.com</p>
                  <p className="text-sm text-gray-600">Chrome on Windows</p>
                </div>
                <span className="text-xs text-gray-500">2 hours ago</span>
              </div>
            </div>
            <div className="p-3 bg-white rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-gray-900">user@example.com</p>
                  <p className="text-sm text-gray-600">Safari on macOS</p>
                </div>
                <span className="text-xs text-gray-500">5 hours ago</span>
              </div>
            </div>
          </div>
          <button className="mt-3 text-sm text-blue-600 hover:text-blue-700">View all login history</button>
        </div>

        {/* Audit Log */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <FileText className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Audit Log</h3>
          </div>
          <p className="text-gray-600 mb-4">View detailed logs of key changes and activities</p>
          <div className="space-y-3">
            <div className="p-3 bg-white rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-gray-900">Lead created</p>
                  <p className="text-sm text-gray-600">by John Doe</p>
                </div>
                <span className="text-xs text-gray-500">1 hour ago</span>
              </div>
            </div>
            <div className="p-3 bg-white rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-gray-900">User role updated</p>
                  <p className="text-sm text-gray-600">by Admin User</p>
                </div>
                <span className="text-xs text-gray-500">3 hours ago</span>
              </div>
            </div>
          </div>
          <button className="mt-3 text-sm text-blue-600 hover:text-blue-700">View full audit log</button>
        </div>

        {/* Territory Management */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <MapPin className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Territory Management</h3>
          </div>
          <p className="text-gray-600 mb-4">Organize users by geographic or business territories</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div>
                <p className="font-medium text-gray-900">North America</p>
                <p className="text-sm text-gray-600">5 users assigned</p>
              </div>
              <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">Manage</button>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Europe</p>
                <p className="text-sm text-gray-600">3 users assigned</p>
              </div>
              <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">Manage</button>
            </div>
          </div>
          <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Add Territory
          </button>
        </div>

        {/* Password Policy */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Lock className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Password Policy</h3>
          </div>
          <p className="text-gray-600 mb-4">Configure password requirements and security policies</p>
          <div className="space-y-4">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" defaultChecked />
              <label className="text-sm text-gray-700">Minimum 8 characters</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" defaultChecked />
              <label className="text-sm text-gray-700">Require uppercase letters</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" defaultChecked />
              <label className="text-sm text-gray-700">Require numbers</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <label className="text-sm text-gray-700">Require special characters</label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password expiry (days)</label>
              <input
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="90"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Save Security Settings
        </button>
      </div>
    </div>
  );
};