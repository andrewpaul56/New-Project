import React from 'react';
import { Upload, Download, Shield, Trash2, HardDrive, RotateCcw, TestTube } from 'lucide-react';

export const DataAdministration: React.FC = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Data Administration</h2>
        <p className="text-gray-600">Manage your CRM data securely</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Import Data */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Upload className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Import</h3>
          </div>
          <p className="text-gray-600 mb-4">Bring data into your CRM from other tools</p>
          <div className="space-y-3">
            <div className="p-3 bg-white rounded-lg">
              <p className="font-medium text-gray-900 mb-2">Supported Formats</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">CSV</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Excel</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">JSON</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">XML</span>
              </div>
            </div>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600 mb-2">Drop your file here or click to browse</p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Choose File
              </button>
            </div>
          </div>
        </div>

        {/* Export Data */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Download className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Export</h3>
          </div>
          <p className="text-gray-600 mb-4">Download CRM data for analysis or backup</p>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Module</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>All Data</option>
                <option>Leads</option>
                <option>Contacts</option>
                <option>Deals</option>
                <option>Activities</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Export Format</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>CSV</option>
                <option>Excel (XLSX)</option>
                <option>JSON</option>
                <option>PDF Report</option>
              </select>
            </div>
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Export Data
            </button>
          </div>
        </div>

        {/* Data Backup */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Shield className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Data Backup</h3>
          </div>
          <p className="text-gray-600 mb-4">Schedule automatic backups</p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Backup Frequency</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
                <option>Manual Only</option>
              </select>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" defaultChecked />
              <label className="text-sm text-gray-700">Include file attachments</label>
            </div>
            <div className="p-3 bg-white rounded-lg">
              <p className="font-medium text-gray-900">Last Backup</p>
              <p className="text-sm text-gray-600">Yesterday at 2:00 AM</p>
              <p className="text-xs text-green-600">✓ Successful</p>
            </div>
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Backup Now
            </button>
          </div>
        </div>

        {/* Remove Sample Data */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Trash2 className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Remove Sample Data</h3>
          </div>
          <p className="text-gray-600 mb-4">Clean up sample data to start fresh</p>
          <div className="space-y-3">
            <div className="p-3 bg-white rounded-lg">
              <p className="font-medium text-gray-900">Sample Records Found</p>
              <ul className="text-sm text-gray-600 mt-2 space-y-1">
                <li>• 25 sample leads</li>
                <li>• 15 sample contacts</li>
                <li>• 10 sample deals</li>
                <li>• 30 sample activities</li>
              </ul>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <p className="text-sm text-yellow-800">
                ⚠️ This action cannot be undone. Make sure to backup your data first.
              </p>
            </div>
            <button className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
              Remove Sample Data
            </button>
          </div>
        </div>

        {/* Storage Management */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <HardDrive className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Storage</h3>
          </div>
          <p className="text-gray-600 mb-4">View storage usage and limits</p>
          <div className="space-y-4">
            <div className="p-3 bg-white rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <p className="font-medium text-gray-900">Storage Used</p>
                <p className="text-sm text-gray-600">2.4 GB / 10 GB</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '24%' }}></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-white rounded-lg">
                <p className="text-sm font-medium text-gray-900">Records</p>
                <p className="text-xs text-gray-600">1.2 GB</p>
              </div>
              <div className="p-3 bg-white rounded-lg">
                <p className="text-sm font-medium text-gray-900">Files</p>
                <p className="text-xs text-gray-600">1.2 GB</p>
              </div>
            </div>
            <button className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Upgrade Storage
            </button>
          </div>
        </div>

        {/* Recycle Bin */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <RotateCcw className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Recycle Bin</h3>
          </div>
          <p className="text-gray-600 mb-4">Recover recently deleted records</p>
          <div className="space-y-3">
            <div className="p-3 bg-white rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-900">Deleted Items</p>
                  <p className="text-sm text-gray-600">23 items in recycle bin</p>
                </div>
                <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">View</button>
              </div>
            </div>
            <div className="p-3 bg-white rounded-lg">
              <p className="text-sm text-gray-700 mb-2">Auto-delete after:</p>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>30 days</option>
                <option>60 days</option>
                <option>90 days</option>
                <option>Never</option>
              </select>
            </div>
            <button className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
              Empty Recycle Bin
            </button>
          </div>
        </div>

        {/* Sandbox */}
        <div className="bg-gray-50 rounded-lg p-6 lg:col-span-2">
          <div className="flex items-center mb-4">
            <TestTube className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Sandbox</h3>
          </div>
          <p className="text-gray-600 mb-4">Safely test changes before applying them to production</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <p className="font-medium text-gray-900">Development Sandbox</p>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Active
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-3">Test new workflows and customizations</p>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">Access</button>
                <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">Refresh</button>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <p className="font-medium text-gray-900">Testing Sandbox</p>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  Inactive
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-3">User acceptance testing environment</p>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">Create</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Save Data Settings
        </button>
      </div>
    </div>
  );
};