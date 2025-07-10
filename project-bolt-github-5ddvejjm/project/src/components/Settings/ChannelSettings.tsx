import React from 'react';
import { Mail, MessageCircle, Smartphone } from 'lucide-react';

export const ChannelSettings: React.FC = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Channels</h2>
        <p className="text-gray-600">Connect with customers across multiple channels</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Email Settings */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Mail className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Email</h3>
          </div>
          <p className="text-gray-600 mb-4">Configure outgoing and incoming email settings</p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">SMTP Server</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="smtp.gmail.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Port</label>
              <input
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="587"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">From Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="noreply@yourcompany.com"
              />
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <label className="text-sm text-gray-700">Enable SSL/TLS</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" defaultChecked />
              <label className="text-sm text-gray-700">Track email opens</label>
            </div>
          </div>
        </div>

        {/* Business Messaging */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <MessageCircle className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Business Messaging</h3>
          </div>
          <p className="text-gray-600 mb-4">Integrate messaging apps to chat with leads</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <MessageCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">WhatsApp Business</p>
                  <p className="text-sm text-gray-600">Not connected</p>
                </div>
              </div>
              <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                Connect
              </button>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <MessageCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Facebook Messenger</p>
                  <p className="text-sm text-gray-600">Connected</p>
                </div>
              </div>
              <button className="px-3 py-1 text-sm bg-gray-300 text-gray-700 rounded hover:bg-gray-400">
                Disconnect
              </button>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                  <MessageCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Slack</p>
                  <p className="text-sm text-gray-600">Not connected</p>
                </div>
              </div>
              <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                Connect
              </button>
            </div>
          </div>
        </div>

        {/* SMS Notifications */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Smartphone className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Notification SMS</h3>
          </div>
          <p className="text-gray-600 mb-4">Send SMS notifications for important updates</p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">SMS Provider</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Twilio</option>
                <option>AWS SNS</option>
                <option>Nexmo</option>
                <option>MessageBird</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">API Key</label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your API key"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">From Number</label>
              <input
                type="tel"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="+1234567890"
              />
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-700">Send SMS notifications for:</p>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                <label className="text-sm text-gray-700">New lead assignments</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm text-gray-700">Deal stage changes</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                <label className="text-sm text-gray-700">Overdue tasks</label>
              </div>
            </div>
          </div>
        </div>

        {/* Channel Analytics */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Mail className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Channel Performance</h3>
          </div>
          <p className="text-gray-600 mb-4">Monitor communication channel effectiveness</p>
          <div className="space-y-3">
            <div className="p-3 bg-white rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p className="text-sm text-gray-600">Open rate: 24.5%</p>
                </div>
                <span className="text-sm text-green-600">↑ 2.3%</span>
              </div>
            </div>
            <div className="p-3 bg-white rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-900">SMS</p>
                  <p className="text-sm text-gray-600">Delivery rate: 98.2%</p>
                </div>
                <span className="text-sm text-green-600">↑ 0.5%</span>
              </div>
            </div>
            <div className="p-3 bg-white rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-900">Messaging</p>
                  <p className="text-sm text-gray-600">Response rate: 67.8%</p>
                </div>
                <span className="text-sm text-red-600">↓ 1.2%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Save Channel Settings
        </button>
      </div>
    </div>
  );
};