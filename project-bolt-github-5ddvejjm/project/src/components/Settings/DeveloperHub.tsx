import React from 'react';
import { Code, Link, Settings, Zap, Puzzle, Bell } from 'lucide-react';

export const DeveloperHub: React.FC = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Developer Hub</h2>
        <p className="text-gray-600">Extend and integrate your CRM</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* APIs and SDKs */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Code className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">APIs and SDKs</h3>
          </div>
          <p className="text-gray-600 mb-4">Access API documentation and developer tools</p>
          <div className="space-y-3">
            <div className="p-3 bg-white rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-900">REST API</p>
                  <p className="text-sm text-gray-600">v2.1 - Full CRUD operations</p>
                </div>
                <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">Docs</button>
              </div>
            </div>
            <div className="p-3 bg-white rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-900">GraphQL API</p>
                  <p className="text-sm text-gray-600">v1.0 - Flexible queries</p>
                </div>
                <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">Explore</button>
              </div>
            </div>
            <div className="p-3 bg-white rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-900">JavaScript SDK</p>
                  <p className="text-sm text-gray-600">Easy integration for web apps</p>
                </div>
                <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">Download</button>
              </div>
            </div>
          </div>
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>API Key:</strong> sk_live_1234...5678
            </p>
            <button className="mt-2 text-sm text-blue-600 hover:text-blue-700">Generate New Key</button>
          </div>
        </div>

        {/* Connections */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Link className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Connections</h3>
          </div>
          <p className="text-gray-600 mb-4">Set up connections to other apps and services</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <Code className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Zapier</p>
                  <p className="text-sm text-gray-600">Connected</p>
                </div>
              </div>
              <button className="px-3 py-1 text-sm bg-gray-300 text-gray-700 rounded hover:bg-gray-400">
                Manage
              </button>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <Link className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Webhooks</p>
                  <p className="text-sm text-gray-600">3 active endpoints</p>
                </div>
              </div>
              <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">
                Configure
              </button>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                  <Settings className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Custom Integration</p>
                  <p className="text-sm text-gray-600">Not configured</p>
                </div>
              </div>
              <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                Setup
              </button>
            </div>
          </div>
        </div>

        {/* Variables */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Settings className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Variables</h3>
          </div>
          <p className="text-gray-600 mb-4">Manage global variables for use in functions and workflows</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div>
                <p className="font-medium text-gray-900">API_BASE_URL</p>
                <p className="text-sm text-gray-600">https://api.yourcrm.com</p>
              </div>
              <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">Edit</button>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div>
                <p className="font-medium text-gray-900">DEFAULT_TIMEZONE</p>
                <p className="text-sm text-gray-600">America/New_York</p>
              </div>
              <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">Edit</button>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div>
                <p className="font-medium text-gray-900">MAX_FILE_SIZE</p>
                <p className="text-sm text-gray-600">10MB</p>
              </div>
              <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">Edit</button>
            </div>
          </div>
          <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Add Variable
          </button>
        </div>

        {/* Functions */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Zap className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Functions</h3>
          </div>
          <p className="text-gray-600 mb-4">Write serverless functions to automate logic</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div>
                <p className="font-medium text-gray-900">leadScoring</p>
                <p className="text-sm text-gray-600">Calculate lead scores automatically</p>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-1">
                  Active
                </span>
              </div>
              <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">Edit</button>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div>
                <p className="font-medium text-gray-900">emailValidator</p>
                <p className="text-sm text-gray-600">Validate email addresses</p>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-1">
                  Active
                </span>
              </div>
              <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">Edit</button>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div>
                <p className="font-medium text-gray-900">dataSync</p>
                <p className="text-sm text-gray-600">Sync with external systems</p>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mt-1">
                  Draft
                </span>
              </div>
              <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">Edit</button>
            </div>
          </div>
          <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Create Function
          </button>
        </div>

        {/* Widgets */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Puzzle className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Widgets</h3>
          </div>
          <p className="text-gray-600 mb-4">Build custom UI components inside the CRM</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Sales Dashboard</p>
                <p className="text-sm text-gray-600">Custom sales metrics widget</p>
              </div>
              <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">Edit</button>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Lead Map</p>
                <p className="text-sm text-gray-600">Geographic lead distribution</p>
              </div>
              <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">Edit</button>
            </div>
          </div>
          <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Create Widget
          </button>
        </div>

        {/* Notifications */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Bell className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
          </div>
          <p className="text-gray-600 mb-4">Set up app-level notifications</p>
          <div className="space-y-4">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" defaultChecked />
              <label className="text-sm text-gray-700">API rate limit warnings</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" defaultChecked />
              <label className="text-sm text-gray-700">Function execution errors</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <label className="text-sm text-gray-700">Webhook delivery failures</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" defaultChecked />
              <label className="text-sm text-gray-700">Integration status changes</label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Notification Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="developer@yourcompany.com"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Save Developer Settings
        </button>
      </div>
    </div>
  );
};