import React, { useState } from 'react';
import { History, Search, Filter, Monitor, Smartphone, Globe, Shield } from 'lucide-react';

interface LoginRecord {
  id: string;
  user: string;
  email: string;
  device: string;
  browser: string;
  os: string;
  location: string;
  ipAddress: string;
  timestamp: string;
  status: 'Success' | 'Failed' | 'Blocked';
}

export const LoginHistory: React.FC = () => {
  const [loginHistory] = useState<LoginRecord[]>([
    {
      id: '1',
      user: 'Andrew Paul',
      email: 'andrew.paul@digylax.com',
      device: 'Desktop',
      browser: 'Chrome',
      os: 'Windows 11',
      location: 'New York, US',
      ipAddress: '192.168.1.100',
      timestamp: '2 hours ago',
      status: 'Success'
    },
    {
      id: '2',
      user: 'John Smith',
      email: 'john.smith@digylax.com',
      device: 'Mobile',
      browser: 'Safari',
      os: 'iOS 17',
      location: 'London, UK',
      ipAddress: '192.168.1.101',
      timestamp: '5 hours ago',
      status: 'Success'
    },
    {
      id: '3',
      user: 'Sarah Johnson',
      email: 'sarah.johnson@digylax.com',
      device: 'Desktop',
      browser: 'Firefox',
      os: 'macOS',
      location: 'Toronto, CA',
      ipAddress: '192.168.1.102',
      timestamp: '1 day ago',
      status: 'Failed'
    },
    {
      id: '4',
      user: 'Mike Wilson',
      email: 'mike.wilson@digylax.com',
      device: 'Tablet',
      browser: 'Chrome',
      os: 'Android',
      location: 'Sydney, AU',
      ipAddress: '192.168.1.103',
      timestamp: '2 days ago',
      status: 'Success'
    },
    {
      id: '5',
      user: 'Unknown User',
      email: 'suspicious@example.com',
      device: 'Desktop',
      browser: 'Chrome',
      os: 'Linux',
      location: 'Unknown',
      ipAddress: '192.168.1.999',
      timestamp: '3 days ago',
      status: 'Blocked'
    }
  ]);

  const [filterStatus, setFilterStatus] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Success': return 'bg-green-100 text-green-800';
      case 'Failed': return 'bg-red-100 text-red-800';
      case 'Blocked': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDeviceIcon = (device: string) => {
    switch (device.toLowerCase()) {
      case 'mobile': return <Smartphone className="h-4 w-4" />;
      case 'tablet': return <Smartphone className="h-4 w-4" />;
      default: return <Monitor className="h-4 w-4" />;
    }
  };

  const filteredHistory = loginHistory.filter(record => {
    const matchesSearch = record.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || record.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const stats = {
    totalLogins: loginHistory.length,
    successfulLogins: loginHistory.filter(r => r.status === 'Success').length,
    failedLogins: loginHistory.filter(r => r.status === 'Failed').length,
    blockedAttempts: loginHistory.filter(r => r.status === 'Blocked').length
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Login History</h2>
          <p className="text-gray-600">Track and review recent login activities across your organization</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <History className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Logins</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalLogins}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Successful</p>
                <p className="text-2xl font-bold text-gray-900">{stats.successfulLogins}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-red-100 rounded-lg">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Failed</p>
                <p className="text-2xl font-bold text-gray-900">{stats.failedLogins}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Shield className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Blocked</p>
                <p className="text-2xl font-bold text-gray-900">{stats.blockedAttempts}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Login History Table */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex space-x-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by user, email, or location..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option>All</option>
                <option>Success</option>
                <option>Failed</option>
                <option>Blocked</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Device & Browser</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">IP Address</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredHistory.map((record) => (
                  <tr key={record.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-medium">
                            {record.user.charAt(0)}
                          </span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{record.user}</div>
                          <div className="text-sm text-gray-500">{record.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="text-gray-600 mr-2">
                          {getDeviceIcon(record.device)}
                        </div>
                        <div>
                          <div className="text-sm text-gray-900">{record.browser} on {record.os}</div>
                          <div className="text-sm text-gray-500">{record.device}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Globe className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-900">{record.location}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {record.ipAddress}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {record.timestamp}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(record.status)}`}>
                        {record.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredHistory.length === 0 && (
            <div className="text-center py-12">
              <History className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No login records found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};