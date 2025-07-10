import React, { useState } from 'react';
import { Users, Plus, Mail, Edit3, Trash2, Search, Filter, User } from 'lucide-react';

interface UserData {
  id: string;
  name: string;
  email: string;
  role: string;
  profile: string;
  status: 'Active' | 'Inactive' | 'Pending';
  lastLogin: string;
  avatar?: string;
}

export const UsersManagement: React.FC = () => {
  const [users, setUsers] = useState<UserData[]>([
    {
      id: '1',
      name: 'Andrew Paul',
      email: 'andrew.paul@digylax.com',
      role: 'Software Testing',
      profile: 'Administrator',
      status: 'Active',
      lastLogin: '2 hours ago'
    },
    {
      id: '2',
      name: 'John Smith',
      email: 'john.smith@digylax.com',
      role: 'Sales Manager',
      profile: 'User',
      status: 'Active',
      lastLogin: '1 day ago'
    },
    {
      id: '3',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@digylax.com',
      role: 'Marketing',
      profile: 'User',
      status: 'Pending',
      lastLogin: 'Never'
    }
  ]);

  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRole, setInviteRole] = useState('User');
  const [inviteProfile, setInviteProfile] = useState('User');

  const handleInviteUser = () => {
    const newUser: UserData = {
      id: Date.now().toString(),
      name: inviteEmail.split('@')[0],
      email: inviteEmail,
      role: inviteRole,
      profile: inviteProfile,
      status: 'Pending',
      lastLogin: 'Never'
    };
    
    setUsers([...users, newUser]);
    setShowInviteModal(false);
    setInviteEmail('');
    setInviteRole('User');
    setInviteProfile('User');
    
    // Simulate sending invitation email
    alert(`Invitation sent to ${inviteEmail}`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Inactive': return 'bg-red-100 text-red-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Users Management</h2>
            <p className="text-gray-600">Manage team members and their access permissions</p>
          </div>
          <button
            onClick={() => setShowInviteModal(true)}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Invite User
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Users List */}
          <div className="lg:col-span-3 bg-white rounded-lg shadow-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex space-x-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search users..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Profile</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Login</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr 
                      key={user.id} 
                      className="hover:bg-gray-50 cursor-pointer"
                      onClick={() => setSelectedUser(user)}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center">
                            <User className="h-5 w-5 text-white" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{user.name}</div>
                            <div className="text-sm text-gray-500">{user.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.role}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.profile}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(user.status)}`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.lastLogin}</td>
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

          {/* User Details Sidebar */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">User Details</h3>
            {selectedUser ? (
              <div className="space-y-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-medium text-gray-900">{selectedUser.name}</h4>
                  <p className="text-sm text-gray-500">{selectedUser.email}</p>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Role</label>
                    <p className="text-sm text-gray-900">{selectedUser.role}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Profile</label>
                    <p className="text-sm text-gray-900">{selectedUser.profile}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Status</label>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(selectedUser.status)}`}>
                      {selectedUser.status}
                    </span>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Last Login</label>
                    <p className="text-sm text-gray-900">{selectedUser.lastLogin}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mb-2">
                    Edit User
                  </button>
                  <button className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    View Profile
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-gray-500 text-center">Select a user to view details</p>
            )}
          </div>
        </div>

        {/* Invite User Modal */}
        {showInviteModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Invite New User</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={inviteEmail}
                    onChange={(e) => setInviteEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="user@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                  <input
                    type="text"
                    value={inviteRole}
                    onChange={(e) => setInviteRole(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Sales Manager"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Profile</label>
                  <select
                    value={inviteProfile}
                    onChange={(e) => setInviteProfile(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="Administrator">Administrator</option>
                    <option value="User">User</option>
                  </select>
                </div>
              </div>

              <div className="flex space-x-3 mt-6">
                <button
                  onClick={handleInviteUser}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Send Invitation
                </button>
                <button
                  onClick={() => setShowInviteModal(false)}
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