import React, { useState } from 'react';
import { Clock, Plus, Edit3, Trash2, Users } from 'lucide-react';

interface ShiftHour {
  id: string;
  name: string;
  days: string[];
  timing: string;
  timeZone: string;
  users: number;
}

export const BusinessHours: React.FC = () => {
  const [businessSettings, setBusinessSettings] = useState({
    weekStartsOn: 'Wednesday',
    businessDays: 'Wednesday - Tuesday',
    businessHours: '24 Hours'
  });

  const [shiftHours, setShiftHours] = useState<ShiftHour[]>([
    {
      id: '1',
      name: 'Microsoft',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      timing: '8:00 AM-5:00 PM',
      timeZone: '(GMT 5: 30) India Standard Time(Asia / Kolkata)',
      users: 0
    },
    {
      id: '2',
      name: 'Google India',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      timing: '9:00 AM-5:00 PM',
      timeZone: '(GMT 5:30) India Standard Time(Asia/ Kolkata)',
      users: 2
    },
    {
      id: '3',
      name: 'us',
      days: ['Friday', 'Saturday', 'Sunday'],
      timing: '9:00 AM-5:00 PM',
      timeZone: '(GMT 5: 30) India Standard Time(Asia / Kolkata)',
      users: 0
    },
    {
      id: '4',
      name: 'us3',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      timing: '9:00 AM-5:00 PM',
      timeZone: '(GMT 5: 30) India Standard Time(Asia / Kolkata)',
      users: 1
    },
    {
      id: '5',
      name: 's',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      timing: '9:00 AM-5:00 PM',
      timeZone: '(GMT 5: 30) India Standard Time(Asia / Kolkata)',
      users: 2
    }
  ]);

  const [showAddShift, setShowAddShift] = useState(false);

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Business Hours</h2>
          <p className="text-gray-600">
            Business hours define the operational hours of your organization. Set business hours to help your employees ensure that the activities are carried out at the operational hours of your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Business Hours Settings */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">General Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Week starts on</label>
                <select
                  value={businessSettings.weekStartsOn}
                  onChange={(e) => setBusinessSettings({...businessSettings, weekStartsOn: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option>Monday</option>
                  <option>Tuesday</option>
                  <option>Wednesday</option>
                  <option>Thursday</option>
                  <option>Friday</option>
                  <option>Saturday</option>
                  <option>Sunday</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business days</label>
                <input
                  type="text"
                  value={businessSettings.businessDays}
                  onChange={(e) => setBusinessSettings({...businessSettings, businessDays: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business hours</label>
                <select
                  value={businessSettings.businessHours}
                  onChange={(e) => setBusinessSettings({...businessSettings, businessHours: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option>24 Hours</option>
                  <option>Custom Hours</option>
                </select>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Overview</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Total Shifts</p>
                  <p className="text-sm text-gray-600">{shiftHours.length} configured</p>
                </div>
                <div className="text-2xl font-bold text-blue-600">{shiftHours.length}</div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Total Users</p>
                  <p className="text-sm text-gray-600">Assigned to shifts</p>
                </div>
                <div className="text-2xl font-bold text-green-600">
                  {shiftHours.reduce((sum, shift) => sum + shift.users, 0)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shift Hours */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Shift hours</h3>
                <p className="text-gray-600">
                  Create shift hours and assign shifts based on employee's work hours or time zone. Shift hours enables you to assign activities based on user's availability.
                </p>
              </div>
              <button
                onClick={() => setShowAddShift(true)}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Shift
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shift name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shift days</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shift timing</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time Zone</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No. of users</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {shiftHours.map((shift) => (
                  <tr key={shift.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{shift.name}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {shift.days.map((day, index) => (
                          <div key={index}>{day}</div>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {shift.days.map((day, index) => (
                          <div key={index}>{shift.timing}</div>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{shift.timeZone}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 text-gray-400 mr-1" />
                        <span className="text-sm text-gray-900">{shift.users}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-900">
                          <Edit3 className="h-4 w-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add Shift Modal */}
        {showAddShift && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Shift</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Shift Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter shift name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Working Days</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                      <label key={day} className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">{day}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Start Time</label>
                    <input
                      type="time"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">End Time</label>
                    <input
                      type="time"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Time Zone</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>(GMT 5:30) India Standard Time (Asia/Kolkata)</option>
                    <option>(GMT-8:00) Pacific Standard Time</option>
                    <option>(GMT-5:00) Eastern Standard Time</option>
                  </select>
                </div>
              </div>

              <div className="flex space-x-3 mt-6">
                <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Create Shift
                </button>
                <button
                  onClick={() => setShowAddShift(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};