import React, { useState } from 'react';
import { Building, Edit3, Save, X, Calendar, Clock, DollarSign, Globe } from 'lucide-react';

export const CompanyDetails: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [companyData, setCompanyData] = useState({
    name: 'Digylax Private Limited',
    phone: '9688118144',
    mobile: '55555555',
    fax: '5555',
    website: 'digylax.com',
    accessUrl: 'http://digy-crm-quality-fe.s3-website-us-east-1.amazonaws.com/digylax',
    timeZone: '(GMT 5:30) India Standard Time (Asia/Kolkata)'
  });

  const handleSave = () => {
    setIsEditing(false);
    // Save logic here
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset changes logic here
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Company Details</h2>
            <p className="text-gray-600">Manage your company information and settings</p>
          </div>
          <div className="flex space-x-2">
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <Edit3 className="h-4 w-4 mr-2" />
                Edit Details
              </button>
            ) : (
              <div className="flex space-x-2">
                <button
                  onClick={handleSave}
                  className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                >
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Company Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6 border border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center">
              <Building className="h-10 w-10 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{companyData.name}</h3>
              <p className="text-gray-600">{companyData.phone}</p>
              <p className="text-gray-500">{companyData.website}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Company Information */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Company Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={companyData.name}
                    onChange={(e) => setCompanyData({...companyData, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-gray-900">{companyData.name}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={companyData.phone}
                      onChange={(e) => setCompanyData({...companyData, phone: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900">{companyData.phone}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mobile</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={companyData.mobile}
                      onChange={(e) => setCompanyData({...companyData, mobile: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900">{companyData.mobile}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Fax</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={companyData.fax}
                      onChange={(e) => setCompanyData({...companyData, fax: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900">{companyData.fax}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                  {isEditing ? (
                    <input
                      type="url"
                      value={companyData.website}
                      onChange={(e) => setCompanyData({...companyData, website: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900">{companyData.website}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Access URL */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Access URL</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">URL</label>
                {isEditing ? (
                  <textarea
                    value={companyData.accessUrl}
                    onChange={(e) => setCompanyData({...companyData, accessUrl: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={3}
                  />
                ) : (
                  <p className="text-gray-900 break-all">{companyData.accessUrl}</p>
                )}
              </div>
            </div>
          </div>

          {/* Locale Information */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 lg:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Locale Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Time Zone</label>
                {isEditing ? (
                  <select
                    value={companyData.timeZone}
                    onChange={(e) => setCompanyData({...companyData, timeZone: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option>(GMT 5:30) India Standard Time (Asia/Kolkata)</option>
                    <option>(GMT-8:00) Pacific Standard Time</option>
                    <option>(GMT-5:00) Eastern Standard Time</option>
                    <option>(GMT+0:00) Greenwich Mean Time</option>
                  </select>
                ) : (
                  <p className="text-gray-900">{companyData.timeZone}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center justify-center p-4 bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <Calendar className="h-6 w-6 text-blue-600 mr-3" />
            <div className="text-left">
              <p className="font-medium text-gray-900">Fiscal Year</p>
              <p className="text-sm text-gray-600">Manage fiscal year settings</p>
            </div>
          </button>
          
          <button className="flex items-center justify-center p-4 bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <Clock className="h-6 w-6 text-green-600 mr-3" />
            <div className="text-left">
              <p className="font-medium text-gray-900">Business Hours</p>
              <p className="text-sm text-gray-600">Set operational hours</p>
            </div>
          </button>
          
          <button className="flex items-center justify-center p-4 bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <DollarSign className="h-6 w-6 text-purple-600 mr-3" />
            <div className="text-left">
              <p className="font-medium text-gray-900">Currencies</p>
              <p className="text-sm text-gray-600">Manage currency settings</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};