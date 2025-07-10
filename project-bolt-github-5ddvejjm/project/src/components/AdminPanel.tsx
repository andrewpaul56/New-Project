import React from 'react';
import { ProtectedRoute } from './ProtectedRoute';
import { Shield, Users, Settings, BarChart3, Database, Lock } from 'lucide-react';

export const AdminPanel: React.FC = () => {
  const adminFeatures = [
    {
      icon: Users,
      title: 'User Management',
      description: 'Manage user accounts, roles, and permissions',
      stats: '1,234 users',
    },
    {
      icon: Shield,
      title: 'Security Settings',
      description: 'Configure security policies and access controls',
      stats: '5 policies active',
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Monitor and manage database operations',
      stats: '99.9% uptime',
    },
    {
      icon: BarChart3,
      title: 'System Analytics',
      description: 'View detailed system performance metrics',
      stats: '15% growth',
    },
    {
      icon: Settings,
      title: 'System Configuration',
      description: 'Configure system-wide settings and preferences',
      stats: '12 modules',
    },
    {
      icon: Lock,
      title: 'Audit Logs',
      description: 'Review system access and security logs',
      stats: '2,456 entries',
    },
  ];

  return (
    <ProtectedRoute requiredRole="admin">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Admin Panel
          </h1>
          <p className="text-gray-600">
            Complete system administration and management tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {adminFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer border border-gray-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Icon className="h-6 w-6 text-red-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-500">
                    {feature.stats}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Shield className="h-6 w-6 text-red-600 mr-2" />
            <h2 className="text-xl font-semibold text-red-900">
              Administrator Access
            </h2>
          </div>
          <p className="text-red-800 mb-4">
            You have full administrative access to all system functions. Use these tools responsibly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">System Status</h3>
              <div className="flex items-center">
                <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
                <span className="text-green-700 text-sm">All systems operational</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Last Backup</h3>
              <p className="text-gray-600 text-sm">2 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};