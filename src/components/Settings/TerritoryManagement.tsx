import React, { useState } from 'react';
import { MapPin, Plus, Edit3, Trash2, Users, Search } from 'lucide-react';

interface Territory {
  id: string;
  name: string;
  description: string;
  manager: string;
  users: string[];
  regions: string[];
  color: string;
}

export const TerritoryManagement: React.FC = () => {
  const [territories, setTerritories] = useState<Territory[]>([
    {
      id: '1',
      name: 'North America',
      description: 'United States and Canada regions',
      manager: 'John Smith',
      users: ['Andrew Paul', 'Sarah Johnson', 'Mike Wilson', 'Emily Davis', 'David Brown'],
      regions: ['USA - East Coast', 'USA - West Coast', 'Canada'],
      color: 'bg-blue-500'
    },
    {
      id: '2',
      name: 'Europe',
      description: 'European markets and regions',
      manager: 'Emma Thompson',
      users: ['James Wilson', 'Sophie Martin', 'Lucas Garcia'],
      regions: ['UK & Ireland', 'Germany', 'France', 'Scandinavia'],
      color: 'bg-green-500'
    },
    {
      id: '3',
      name: 'Asia Pacific',
      description: 'Asian and Pacific regions',
      manager: 'Hiroshi Tanaka',
      users: ['Lisa Chen', 'Raj Patel'],
      regions: ['Japan', 'Australia', 'Singapore', 'India'],
      color: 'bg-purple-500'
    },
    {
      id: '4',
      name: 'Latin America',
      description: 'Central and South American markets',
      manager: 'Carlos Rodriguez',
      users: ['Maria Santos'],
      regions: ['Mexico', 'Brazil', 'Argentina', 'Chile'],
      color: 'bg-orange-500'
    }
  ]);

  const [showCreateTerritory, setShowCreateTerritory] = useState(false);
  const [selectedTerritory, setSelectedTerritory] = useState<Territory | null>(null);

  const totalUsers = territories.reduce((sum, territory) => sum + territory.users.length, 0);

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Territory Management</h2>
            <p className="text-gray-600">Organize users by geographic or business territories</p>
          </div>
          <button
            onClick={() => setShowCreateTerritory(true)}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Territory
          </button>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Territories</p>
                <p className="text-2xl font-bold text-gray-900">{territories.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Users</p>
                <p className="text-2xl font-bold text-gray-900">{totalUsers}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Avg Users/Territory</p>
                <p className="text-2xl font-bold text-gray-900">{Math.round(totalUsers / territories.length)}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-orange-100 rounded-lg">
                <MapPin className="h-6 w-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Regions</p>
                <p className="text-2xl font-bold text-gray-900">
                  {territories.reduce((sum, territory) => sum + territory.regions.length, 0)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Territories List */}
          <div className="lg:col-span-2 space-y-4">
            {territories.map((territory) => (
              <div
                key={territory.id}
                className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedTerritory(territory)}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <div className={`w-4 h-4 rounded-full ${territory.color} mr-3`}></div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{territory.name}</h3>
                      <p className="text-gray-600">{territory.description}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-900">
                      <Edit3 className="h-4 w-4" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Manager</h4>
                    <div className="flex items-center">
                      <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center mr-2">
                        <span className="text-white text-sm font-medium">
                          {territory.manager.charAt(0)}
                        </span>
                      </div>
                      <span className="text-sm text-gray-900">{territory.manager}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Team Size</h4>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-900">{territory.users.length} users</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="font-medium text-gray-900 mb-2">Regions</h4>
                  <div className="flex flex-wrap gap-2">
                    {territory.regions.map((region, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {region}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Territory Details Sidebar */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Territory Details</h3>
            
            {selectedTerritory ? (
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className={`w-6 h-6 rounded-full ${selectedTerritory.color} mr-3`}></div>
                  <div>
                    <h4 className="font-medium text-gray-900">{selectedTerritory.name}</h4>
                    <p className="text-sm text-gray-600">{selectedTerritory.description}</p>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Territory Manager</label>
                  <div className="flex items-center mt-1">
                    <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white text-sm font-medium">
                        {selectedTerritory.manager.charAt(0)}
                      </span>
                    </div>
                    <span className="text-sm text-gray-900">{selectedTerritory.manager}</span>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Team Members ({selectedTerritory.users.length})</label>
                  <div className="mt-2 space-y-2 max-h-40 overflow-y-auto custom-scrollbar">
                    {selectedTerritory.users.map((user, index) => (
                      <div key={index} className="flex items-center p-2 bg-gray-50 rounded-lg">
                        <div className="h-6 w-6 bg-gray-400 rounded-full flex items-center justify-center mr-2">
                          <span className="text-white text-xs">{user.charAt(0)}</span>
                        </div>
                        <span className="text-sm text-gray-900">{user}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Regions ({selectedTerritory.regions.length})</label>
                  <div className="mt-2 space-y-1">
                    {selectedTerritory.regions.map((region, index) => (
                      <div key={index} className="flex items-center p-2 bg-gray-50 rounded-lg">
                        <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-900">{region}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mb-2">
                    Edit Territory
                  </button>
                  <button className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    Manage Users
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-gray-500 text-center">Select a territory to view details</p>
            )}
          </div>
        </div>

        {/* Create Territory Modal */}
        {showCreateTerritory && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Create New Territory</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Territory Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Middle East"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={3}
                    placeholder="Describe the territory coverage"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Territory Manager</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Select a manager</option>
                    <option>John Smith</option>
                    <option>Emma Thompson</option>
                    <option>Hiroshi Tanaka</option>
                    <option>Carlos Rodriguez</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
                  <div className="flex space-x-2">
                    {['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500', 'bg-red-500', 'bg-yellow-500'].map((color) => (
                      <button
                        key={color}
                        className={`w-8 h-8 rounded-full ${color} border-2 border-gray-300 hover:border-gray-400`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex space-x-3 mt-6">
                <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Create Territory
                </button>
                <button
                  onClick={() => setShowCreateTerritory(false)}
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