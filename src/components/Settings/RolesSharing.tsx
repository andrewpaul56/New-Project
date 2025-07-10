import React, { useState } from 'react';
import { Users, Plus, Edit3, Trash2, ChevronRight, ChevronDown } from 'lucide-react';

interface Role {
  id: string;
  name: string;
  parent?: string;
  children: string[];
  level: number;
}

export const RolesSharing: React.FC = () => {
  const [roles, setRoles] = useState<Role[]>([
    { id: '1', name: 'CEO', children: ['2'], level: 0 },
    { id: '2', name: 'Manager', parent: '1', children: ['3', '4', '5', '6', '7', '8'], level: 1 },
    { id: '3', name: 'Software Testing', parent: '2', children: [], level: 2 },
    { id: '4', name: 'Business Development', parent: '2', children: [], level: 2 },
    { id: '5', name: 'Backend Development', parent: '2', children: [], level: 2 },
    { id: '6', name: 'Frontend Development', parent: '2', children: [], level: 2 },
    { id: '7', name: 'Designing', parent: '2', children: ['9'], level: 2 },
    { id: '8', name: 'Others', parent: '2', children: [], level: 2 },
    { id: '9', name: 'Designing', parent: '7', children: [], level: 3 }
  ]);

  const [expandedRoles, setExpandedRoles] = useState<Set<string>>(new Set(['1', '2', '7']));
  const [showAddRole, setShowAddRole] = useState(false);
  const [selectedParent, setSelectedParent] = useState('');
  const [newRoleName, setNewRoleName] = useState('');

  const [sharingSettings, setSharingSettings] = useState({
    defaultSharing: 'Private',
    enableRoleHierarchy: false,
    grantAccessUsingHierarchies: false
  });

  const toggleExpanded = (roleId: string) => {
    const newExpanded = new Set(expandedRoles);
    if (newExpanded.has(roleId)) {
      newExpanded.delete(roleId);
    } else {
      newExpanded.add(roleId);
    }
    setExpandedRoles(newExpanded);
  };

  const addNewRole = () => {
    if (!newRoleName.trim()) return;

    const newRole: Role = {
      id: Date.now().toString(),
      name: newRoleName,
      parent: selectedParent || undefined,
      children: [],
      level: selectedParent ? (roles.find(r => r.id === selectedParent)?.level || 0) + 1 : 0
    };

    // Update parent's children array
    const updatedRoles = roles.map(role => 
      role.id === selectedParent 
        ? { ...role, children: [...role.children, newRole.id] }
        : role
    );

    setRoles([...updatedRoles, newRole]);
    setNewRoleName('');
    setSelectedParent('');
    setShowAddRole(false);
  };

  const renderRoleTree = (roleId: string) => {
    const role = roles.find(r => r.id === roleId);
    if (!role) return null;

    const hasChildren = role.children.length > 0;
    const isExpanded = expandedRoles.has(roleId);

    return (
      <div key={roleId} className="ml-4">
        <div className="flex items-center py-2 px-3 hover:bg-gray-50 rounded-lg group">
          <div className="flex items-center flex-1">
            {hasChildren && (
              <button
                onClick={() => toggleExpanded(roleId)}
                className="mr-2 p-1 hover:bg-gray-200 rounded"
              >
                {isExpanded ? (
                  <ChevronDown className="h-4 w-4 text-gray-600" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-gray-600" />
                )}
              </button>
            )}
            {!hasChildren && <div className="w-6 mr-2" />}
            
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <Users className="h-4 w-4 text-white" />
              </div>
              <span className="font-medium text-gray-900">{role.name}</span>
            </div>
          </div>
          
          <div className="opacity-0 group-hover:opacity-100 flex space-x-2">
            <button className="text-blue-600 hover:text-blue-900">
              <Edit3 className="h-4 w-4" />
            </button>
            <button className="text-red-600 hover:text-red-900">
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>
        
        {hasChildren && isExpanded && (
          <div className="ml-4 border-l-2 border-gray-200 pl-4">
            {role.children.map(childId => renderRoleTree(childId))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Roles and Sharing</h2>
          <p className="text-gray-600">
            This page will allow you to define how you share the data among users based on your organization's role hierarchy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Data Sharing Settings */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Sharing Settings</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Default Sharing</label>
                <select
                  value={sharingSettings.defaultSharing}
                  onChange={(e) => setSharingSettings({...sharingSettings, defaultSharing: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option>Private</option>
                  <option>Public Read Only</option>
                  <option>Public Read/Write</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={sharingSettings.enableRoleHierarchy}
                    onChange={(e) => setSharingSettings({...sharingSettings, enableRoleHierarchy: e.target.checked})}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-700">Enable role hierarchy</span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={sharingSettings.grantAccessUsingHierarchies}
                    onChange={(e) => setSharingSettings({...sharingSettings, grantAccessUsingHierarchies: e.target.checked})}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-700">Grant access using hierarchies</span>
                </label>
              </div>

              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Save Settings
              </button>
            </div>
          </div>

          {/* Role Hierarchy */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Roles</h3>
                <button
                  onClick={() => setShowAddRole(true)}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  New Role
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2">Digylax Private Limited</h4>
              </div>
              
              <div className="space-y-1">
                {roles.filter(role => !role.parent).map(role => renderRoleTree(role.id))}
              </div>
            </div>
          </div>
        </div>

        {/* Add Role Modal */}
        {showAddRole && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Role</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Role Name</label>
                  <input
                    type="text"
                    value={newRoleName}
                    onChange={(e) => setNewRoleName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter role name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Parent Role</label>
                  <select
                    value={selectedParent}
                    onChange={(e) => setSelectedParent(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">No Parent (Top Level)</option>
                    {roles.map(role => (
                      <option key={role.id} value={role.id}>
                        {'  '.repeat(role.level)}{role.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex space-x-3 mt-6">
                <button
                  onClick={addNewRole}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Add Role
                </button>
                <button
                  onClick={() => setShowAddRole(false)}
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