import React, { useState } from 'react';
import { FileText, Search, Filter, User, Edit3, Trash2, Plus, Eye } from 'lucide-react';

interface AuditRecord {
  id: string;
  action: string;
  module: string;
  recordName: string;
  user: string;
  userEmail: string;
  timestamp: string;
  details: string;
  ipAddress: string;
  changes?: {
    field: string;
    oldValue: string;
    newValue: string;
  }[];
}

export const AuditLog: React.FC = () => {
  const [auditLogs] = useState<AuditRecord[]>([
    {
      id: '1',
      action: 'Created',
      module: 'Leads',
      recordName: 'John Smith - Tech Corp',
      user: 'Andrew Paul',
      userEmail: 'andrew.paul@digylax.com',
      timestamp: '1 hour ago',
      details: 'New lead created from website form',
      ipAddress: '192.168.1.100',
      changes: [
        { field: 'Name', oldValue: '', newValue: 'John Smith' },
        { field: 'Company', oldValue: '', newValue: 'Tech Corp' },
        { field: 'Status', oldValue: '', newValue: 'New' }
      ]
    },
    {
      id: '2',
      action: 'Updated',
      module: 'Contacts',
      recordName: 'Sarah Johnson',
      user: 'John Smith',
      userEmail: 'john.smith@digylax.com',
      timestamp: '3 hours ago',
      details: 'Contact information modified',
      ipAddress: '192.168.1.101',
      changes: [
        { field: 'Phone', oldValue: '+1234567890', newValue: '+1234567891' },
        { field: 'Email', oldValue: 'old@email.com', newValue: 'new@email.com' }
      ]
    },
    {
      id: '3',
      action: 'Deleted',
      module: 'Deals',
      recordName: 'Q4 Software License',
      user: 'Admin User',
      userEmail: 'admin@digylax.com',
      timestamp: '6 hours ago',
      details: 'Deal marked as lost and deleted',
      ipAddress: '192.168.1.102'
    },
    {
      id: '4',
      action: 'Role Updated',
      module: 'Users',
      recordName: 'Mike Wilson',
      user: 'Admin User',
      userEmail: 'admin@digylax.com',
      timestamp: '1 day ago',
      details: 'User role changed from User to Manager',
      ipAddress: '192.168.1.102',
      changes: [
        { field: 'Role', oldValue: 'User', newValue: 'Manager' },
        { field: 'Profile', oldValue: 'Sales Rep', newValue: 'Sales Manager' }
      ]
    },
    {
      id: '5',
      action: 'Login',
      module: 'Authentication',
      recordName: 'System Login',
      user: 'Sarah Johnson',
      userEmail: 'sarah.johnson@digylax.com',
      timestamp: '2 days ago',
      details: 'User logged into the system',
      ipAddress: '192.168.1.103'
    }
  ]);

  const [filterAction, setFilterAction] = useState('All');
  const [filterModule, setFilterModule] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRecord, setSelectedRecord] = useState<AuditRecord | null>(null);

  const getActionColor = (action: string) => {
    switch (action.toLowerCase()) {
      case 'created': return 'bg-green-100 text-green-800';
      case 'updated': return 'bg-blue-100 text-blue-800';
      case 'deleted': return 'bg-red-100 text-red-800';
      case 'login': return 'bg-purple-100 text-purple-800';
      case 'role updated': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getActionIcon = (action: string) => {
    switch (action.toLowerCase()) {
      case 'created': return <Plus className="h-4 w-4" />;
      case 'updated': return <Edit3 className="h-4 w-4" />;
      case 'deleted': return <Trash2 className="h-4 w-4" />;
      case 'login': return <User className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const filteredLogs = auditLogs.filter(log => {
    const matchesSearch = log.recordName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.details.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAction = filterAction === 'All' || log.action === filterAction;
    const matchesModule = filterModule === 'All' || log.module === filterModule;
    return matchesSearch && matchesAction && matchesModule;
  });

  const uniqueActions = [...new Set(auditLogs.map(log => log.action))];
  const uniqueModules = [...new Set(auditLogs.map(log => log.module))];

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Audit Log</h2>
          <p className="text-gray-600">View detailed logs of key changes and activities in your CRM system</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search records..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <select
              value={filterAction}
              onChange={(e) => setFilterAction(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option>All Actions</option>
              {uniqueActions.map(action => (
                <option key={action} value={action}>{action}</option>
              ))}
            </select>

            <select
              value={filterModule}
              onChange={(e) => setFilterModule(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option>All Modules</option>
              {uniqueModules.map(module => (
                <option key={module} value={module}>{module}</option>
              ))}
            </select>

            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Export Log
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Audit Log List */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Activity Timeline</h3>
            </div>

            <div className="divide-y divide-gray-200 max-h-[600px] overflow-y-auto custom-scrollbar">
              {filteredLogs.map((log) => (
                <div
                  key={log.id}
                  className="p-6 hover:bg-gray-50 cursor-pointer"
                  onClick={() => setSelectedRecord(log)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-2 rounded-lg ${getActionColor(log.action).replace('text-', 'text-').replace('bg-', 'bg-opacity-20 bg-')}`}>
                      {getActionIcon(log.action)}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getActionColor(log.action)}`}>
                            {log.action}
                          </span>
                          <span className="text-sm text-gray-500">{log.module}</span>
                        </div>
                        <span className="text-sm text-gray-500">{log.timestamp}</span>
                      </div>
                      
                      <h4 className="text-sm font-medium text-gray-900 mt-1">{log.recordName}</h4>
                      <p className="text-sm text-gray-600 mt-1">{log.details}</p>
                      
                      <div className="flex items-center mt-2 text-xs text-gray-500">
                        <User className="h-3 w-3 mr-1" />
                        <span>{log.user}</span>
                        <span className="mx-2">•</span>
                        <span>{log.ipAddress}</span>
                      </div>
                    </div>
                    
                    <button className="text-gray-400 hover:text-gray-600">
                      <Eye className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredLogs.length === 0 && (
              <div className="text-center py-12">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No audit records found</h3>
                <p className="text-gray-600">Try adjusting your search criteria or filters</p>
              </div>
            )}
          </div>

          {/* Record Details */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Record Details</h3>
            
            {selectedRecord ? (
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Action</label>
                  <div className="flex items-center mt-1">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getActionColor(selectedRecord.action)}`}>
                      {selectedRecord.action}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Module</label>
                  <p className="text-sm text-gray-900 mt-1">{selectedRecord.module}</p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Record</label>
                  <p className="text-sm text-gray-900 mt-1">{selectedRecord.recordName}</p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">User</label>
                  <div className="flex items-center mt-1">
                    <div className="h-6 w-6 bg-blue-500 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white text-xs">{selectedRecord.user.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-900">{selectedRecord.user}</p>
                      <p className="text-xs text-gray-500">{selectedRecord.userEmail}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Time</label>
                  <p className="text-sm text-gray-900 mt-1">{selectedRecord.timestamp}</p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">IP Address</label>
                  <p className="text-sm text-gray-900 mt-1">{selectedRecord.ipAddress}</p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Details</label>
                  <p className="text-sm text-gray-900 mt-1">{selectedRecord.details}</p>
                </div>

                {selectedRecord.changes && selectedRecord.changes.length > 0 && (
                  <div>
                    <label className="text-sm font-medium text-gray-700">Changes</label>
                    <div className="mt-2 space-y-2">
                      {selectedRecord.changes.map((change, index) => (
                        <div key={index} className="p-3 bg-gray-50 rounded-lg">
                          <p className="text-sm font-medium text-gray-900">{change.field}</p>
                          <div className="text-xs text-gray-600 mt-1">
                            <span className="line-through text-red-600">{change.oldValue || 'Empty'}</span>
                            <span className="mx-2">→</span>
                            <span className="text-green-600">{change.newValue}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-gray-500 text-center">Select a record to view details</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};