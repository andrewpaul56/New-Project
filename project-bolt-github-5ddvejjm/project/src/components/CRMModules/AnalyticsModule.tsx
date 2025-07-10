import React from 'react';
import { TrendingUp, BarChart3, PieChart, Activity, Users, Target, DollarSign, Calendar } from 'lucide-react';

export const AnalyticsModule: React.FC = () => {
  const metrics = [
    { title: 'Total Revenue', value: '$125,430', change: '+12.5%', trend: 'up' },
    { title: 'New Leads', value: '1,234', change: '+8.2%', trend: 'up' },
    { title: 'Conversion Rate', value: '24.8%', change: '-2.1%', trend: 'down' },
    { title: 'Active Deals', value: '89', change: '+15.3%', trend: 'up' },
  ];

  const moduleData = [
    { name: 'Leads', count: 1234, icon: Target, color: 'bg-blue-500' },
    { name: 'Contacts', count: 2456, icon: Users, color: 'bg-green-500' },
    { name: 'Deals', count: 89, icon: DollarSign, color: 'bg-purple-500' },
    { name: 'Activities', count: 567, icon: Calendar, color: 'bg-orange-500' },
  ];

  const salesData = [
    { month: 'Jan', value: 45000 },
    { month: 'Feb', value: 52000 },
    { month: 'Mar', value: 48000 },
    { month: 'Apr', value: 61000 },
    { month: 'May', value: 55000 },
    { month: 'Jun', value: 67000 },
  ];

  const leadSources = [
    { source: 'Website', percentage: 35, color: 'bg-blue-500' },
    { source: 'Referrals', percentage: 28, color: 'bg-green-500' },
    { source: 'Social Media', percentage: 20, color: 'bg-purple-500' },
    { source: 'Email Campaign', percentage: 17, color: 'bg-orange-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <TrendingUp className="h-8 w-8 mr-3 text-blue-600" />
            Analytics
          </h1>
          <p className="text-gray-600 mt-1">Track your business performance and insights</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                </div>
                <div className={`flex items-center text-sm ${
                  metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  <TrendingUp className={`h-4 w-4 mr-1 ${metric.trend === 'down' ? 'rotate-180' : ''}`} />
                  {metric.change}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Module Records Overview */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Module Records Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {moduleData.map((module, index) => {
              const Icon = module.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${module.color.replace('bg-', 'bg-opacity-20 bg-')}`}>
                      <Icon className={`h-6 w-6 ${module.color.replace('bg-', 'text-')}`} />
                    </div>
                    <span className="text-2xl font-bold text-gray-900">{module.count.toLocaleString()}</span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">{module.name}</h3>
                  <p className="text-sm text-gray-600">Total records</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Sales Performance Chart */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <BarChart3 className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-lg font-semibold text-gray-900">Sales Performance</h2>
            </div>
            <div className="space-y-4">
              {salesData.map((data, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">{data.month}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${(data.value / 70000) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">${data.value.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lead Sources */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <PieChart className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-lg font-semibold text-gray-900">Lead Sources</h2>
            </div>
            <div className="space-y-4">
              {leadSources.map((source, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${source.color}`}></div>
                    <span className="text-sm font-medium text-gray-900">{source.source}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-600">{source.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Activity Timeline */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <div className="flex items-center mb-4">
            <Activity className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-3 bg-blue-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">New lead created: John Smith from Tech Corp</p>
                <p className="text-xs text-gray-600">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-3 bg-green-50 rounded-lg">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Deal closed: $15,000 contract with Design Studio</p>
                <p className="text-xs text-gray-600">4 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-3 bg-purple-50 rounded-lg">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Contact updated: Sarah Johnson information modified</p>
                <p className="text-xs text-gray-600">6 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};