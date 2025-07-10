import React from 'react';
import { Zap, Mail, CheckSquare, Calendar, Brain } from 'lucide-react';

export const AutomationSettings: React.FC = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Automation</h2>
        <p className="text-gray-600">Automate repetitive tasks and stay efficient</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Workflow Rules */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Zap className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Workflow Rules</h3>
          </div>
          <p className="text-gray-600 mb-4">Define triggers and automated actions</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Lead Assignment</p>
                <p className="text-sm text-gray-600">Auto-assign leads by territory</p>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-1">
                  Active
                </span>
              </div>
              <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">Edit</button>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Follow-up Reminder</p>
                <p className="text-sm text-gray-600">Send reminders for overdue tasks</p>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-1">
                  Active
                </span>
              </div>
              <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">Edit</button>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Deal Stage Update</p>
                <p className="text-sm text-gray-600">Update deal stages automatically</p>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mt-1">
                  Inactive
                </span>
              </div>
              <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">Edit</button>
            </div>
          </div>
          <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Create Workflow
          </button>
        </div>

        {/* Actions */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <CheckSquare className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Actions</h3>
          </div>
          <p className="text-gray-600 mb-4">Create email alerts, tasks, and field updates</p>
          <div className="space-y-3">
            <div className="p-3 bg-white rounded-lg">
              <div className="flex items-center mb-2">
                <Mail className="h-4 w-4 text-blue-600 mr-2" />
                <p className="font-medium text-gray-900">Email Alerts</p>
              </div>
              <p className="text-sm text-gray-600">5 active email templates</p>
              <button className="mt-2 px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">Manage</button>
            </div>
            <div className="p-3 bg-white rounded-lg">
              <div className="flex items-center mb-2">
                <CheckSquare className="h-4 w-4 text-blue-600 mr-2" />
                <p className="font-medium text-gray-900">Task Creation</p>
              </div>
              <p className="text-sm text-gray-600">Auto-create follow-up tasks</p>
              <button className="mt-2 px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">Configure</button>
            </div>
            <div className="p-3 bg-white rounded-lg">
              <div className="flex items-center mb-2">
                <Zap className="h-4 w-4 text-blue-600 mr-2" />
                <p className="font-medium text-gray-900">Field Updates</p>
              </div>
              <p className="text-sm text-gray-600">Automatic field value changes</p>
              <button className="mt-2 px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">Setup</button>
            </div>
          </div>
        </div>

        {/* Schedules */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Calendar className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Schedules</h3>
          </div>
          <p className="text-gray-600 mb-4">Automate actions on a time-based schedule</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Daily Lead Report</p>
                <p className="text-sm text-gray-600">Every day at 9:00 AM</p>
              </div>
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Active
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Weekly Sales Summary</p>
                <p className="text-sm text-gray-600">Every Monday at 8:00 AM</p>
              </div>
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Active
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Monthly Cleanup</p>
                <p className="text-sm text-gray-600">First day of each month</p>
              </div>
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                Inactive
              </span>
            </div>
          </div>
          <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Create Schedule
          </button>
        </div>

        {/* AI Automation */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Brain className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">AI</h3>
          </div>
          <p className="text-gray-600 mb-4">Leverage AI tools for lead scoring and insights</p>
          <div className="space-y-3">
            <div className="p-3 bg-white rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-medium text-gray-900">Lead Scoring</p>
                  <p className="text-sm text-gray-600">AI-powered lead qualification</p>
                </div>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Enabled
                </span>
              </div>
              <div className="text-xs text-gray-500">
                Accuracy: 87% | Last trained: 2 days ago
              </div>
            </div>
            <div className="p-3 bg-white rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-medium text-gray-900">Sentiment Analysis</p>
                  <p className="text-sm text-gray-600">Analyze customer communication tone</p>
                </div>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  Disabled
                </span>
              </div>
              <button className="mt-2 px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                Enable
              </button>
            </div>
            <div className="p-3 bg-white rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-medium text-gray-900">Predictive Analytics</p>
                  <p className="text-sm text-gray-600">Forecast deal closure probability</p>
                </div>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Beta
                </span>
              </div>
              <button className="mt-2 px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                Try Beta
              </button>
            </div>
          </div>
        </div>

        {/* Automation Analytics */}
        <div className="bg-gray-50 rounded-lg p-6 lg:col-span-2">
          <div className="flex items-center mb-4">
            <Zap className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Automation Performance</h3>
          </div>
          <p className="text-gray-600 mb-4">Monitor the effectiveness of your automated workflows</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 bg-white rounded-lg">
              <p className="text-2xl font-bold text-gray-900">156</p>
              <p className="text-sm text-gray-600">Tasks Automated</p>
              <p className="text-xs text-green-600">↑ 23% this month</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <p className="text-2xl font-bold text-gray-900">89%</p>
              <p className="text-sm text-gray-600">Success Rate</p>
              <p className="text-xs text-green-600">↑ 5% this month</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <p className="text-2xl font-bold text-gray-900">24h</p>
              <p className="text-sm text-gray-600">Time Saved</p>
              <p className="text-xs text-green-600">↑ 12% this month</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <p className="text-2xl font-bold text-gray-900">12</p>
              <p className="text-sm text-gray-600">Active Workflows</p>
              <p className="text-xs text-gray-600">No change</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Save Automation Settings
        </button>
      </div>
    </div>
  );
};