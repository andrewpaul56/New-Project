import React, { useState } from 'react';
import { Shield, Plus, Edit3, Trash2, ToggleLeft, ToggleRight, Eye, Users } from 'lucide-react';

interface Profile {
  id: string;
  name: string;
  description: string;
  permissions: {
    [module: string]: {
      view: boolean;
      create: boolean;
      edit: boolean;
      delete: boolean;
    };
  };
  userCount: number;
}

interface Module {
  id: string;
  name: string;
  enabled: boolean;
}

export const ProfilesSettings: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>([
    {
      id: '1',
      name: 'Administrator',
      description: 'Full system access',
      permissions: {
        leads: { view: true, create: true, edit: true, delete: true },
        contacts: { view: true, create: true, edit: true, delete: true },
        deals: { view: true, create: true, edit: true, delete: true },
        activities: { view: true, create: true, edit: true, delete: true }
      },
      userCount: 2
    },
    {
      id: '2',
      name: 'Sales Manager',
      description: 'Sales module access',
      permissions: {
        leads: { view: true, create: true, edit: true, delete: false },
        contacts: { view: true, create: true, edit: true, delete: false },
        deals: { view: true, create: true, edit: true, delete: false },
        activities: { view: true, create: true, edit: true, delete: false }
      },
      userCount: 5
    },
    {
      id: '3',
      name: 'Sales Rep',
      description: 'Limited access',
      permissions: {
        leads: { view: true, create: true, edit: false, delete: false },
        contacts: { view: true, create: false, edit: false, delete: false },
        deals: { view: true, create: false, edit: false, delete: false },
        activities: { view: true, create: true, edit: true, delete: false }
      },
      userCount: 8
    }
  ]);

  const [modules, setModules] = useState<Module[]>([
    { id: 'leads', name: 'Leads', enabled: true },
    { id: 'contacts', name: 'Contacts', enabled: true },
    { id: 'deals', name: 'Deals', enabled: true },
    { id: 'activities', name: 'Activities', enabled: true },
    { id: 'campaigns', name: 'Campaigns', enabled: false },
    { id: 'reports', name: 'Reports', enabled: true }
  ]);

  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [showCreateProfile, setShowCreateProfile] = useState(false);

  const toggleModuleStatus = (moduleId: string) => {
    setModules(modules.map(module => 
      module.id === moduleId 
        ? { ...module, enabled: !module.enabled }
        : module
    ));
  };

  const updatePermission = (profileId: string, moduleId: string, permission: string, value: boolean) => {
    setProfiles(profiles.map(profile => 
      profile.id === profileId 
        ? {
            ...profile,
            permissions: {
              ...profile.permissions,
              [moduleId]: {
                ...profile.permissions[moduleId],
                [permission]: value
              }
            }
          }
        : profile
    ));
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Profiles</h2>
            <p className="text-gray-600">Configure user access levels for modules and fields</p>
          </div>
          <button
            onClick={() => setShowCreateProfile(true)}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Create Profile
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profiles List */}
          <div className="lg:col-span-2 space-y-4">
            {profiles.map((profile) => (
              <div key={profile.id} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{profile.name}</h3>
                    <p className="text-gray-600">{profile.description}</p>
                    <div className="flex items-center mt-2">
                      <Users className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-600">{profile.userCount} users</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setSelectedProfile(profile)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="text-blue-600 hover:text-blue-900">
                      <Edit3 className="h-4 w-4" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Module Permissions</h4>
                  {Object.entries(profile.permissions).map(([moduleId, permissions]) => (
                    <div key={moduleId} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-900 capitalize">{moduleId}</span>
                      <div className="flex space-x-4 text-sm">
                        <span className={`px-2 py-1 rounded ${permissions.view ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          View: {permissions.view ? 'Yes' : 'No'}
                        </span>
                        <span className={`px-2 py-1 rounded ${permissions.create ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          Create: {permissions.create ? 'Yes' : 'No'}
                        </span>
                        <span className={`px-2 py-1 rounded ${permissions.edit ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          Edit: {permissions.edit ? 'Yes' : 'No'}
                        </span>
                        <span className={`px-2 py-1 rounded ${permissions.delete ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          Delete: {permissions.delete ? 'Yes' : 'No'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Module Management Sidebar */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Module Management</h3>
            <p className="text-gray-600 mb-4">Enable or disable modules for all profiles</p>
            
            <div className="space-y-3">
              {modules.map((module) => (
                <div key={module.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">{module.name}</span>
                  <button
                    onClick={() => toggleModuleStatus(module.id)}
                    className="flex items-center"
                  >
                    {module.enabled ? (
                      <ToggleRight className="h-6 w-6 text-green-500" />
                    ) : (
                      <ToggleLeft className="h-6 w-6 text-gray-400" />
                    )}
                  </button>
                </div>
              ))}
            </div>

            {selectedProfile && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-medium text-gray-900 mb-3">Edit Permissions: {selectedProfile.name}</h4>
                <div className="space-y-3">
                  {Object.entries(selectedProfile.permissions).map(([moduleId, permissions]) => (
                    <div key={moduleId} className="p-3 bg-blue-50 rounded-lg">
                      <h5 className="font-medium text-gray-900 capitalize mb-2">{moduleId}</h5>
                      <div className="grid grid-cols-2 gap-2">
                        {Object.entries(permissions).map(([permission, value]) => (
                          <label key={permission} className="flex items-center">
                            <input
                              type="checkbox"
                              checked={value}
                              onChange={(e) => updatePermission(selectedProfile.id, moduleId, permission, e.target.checked)}
                              className="mr-2"
                            />
                            <span className="text-sm capitalize">{permission}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Create Profile Modal */}
        {showCreateProfile && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Create New Profile</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Profile Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Marketing Manager"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={3}
                    placeholder="Describe the profile's purpose and access level"
                  />
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Module Permissions</h4>
                  <div className="space-y-3">
                    {modules.filter(m => m.enabled).map((module) => (
                      <div key={module.id} className="p-3 bg-gray-50 rounded-lg">
                        <h5 className="font-medium text-gray-900 mb-2">{module.name}</h5>
                        <div className="grid grid-cols-4 gap-2">
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">View</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">Create</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">Edit</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">Delete</span>
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex space-x-3 mt-6">
                <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Create Profile
                </button>
                <button
                  onClick={() => setShowCreateProfile(false)}
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