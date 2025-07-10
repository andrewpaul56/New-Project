import React, { useState } from 'react';
import { User, Edit3, Save, X, Calendar, Globe, Clock, DollarSign } from 'lucide-react';

export const PersonalSettings: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userDetails, setUserDetails] = useState({
    firstName: 'Andrew',
    lastName: 'Paul',
    email: 'andrew.paul@digylax.com',
    role: 'Software Testing',
    profile: 'Administrator',
    alias: 'Doe',
    phone: '8825873052',
    mobile: '6555',
    website: 'hgfrd564',
    fax: '55',
    dateOfBirth: '2025-06-29',
    microsoftAccount: 'Not Integrated',
    street: '654ghfcgvbnmjuy654redcvfgbhjukhgfdghjjjjjjjjkkkkkkkkkkkkkkkkkkkk',
    city: '456f#2',
    state: '#@tregh',
    zipCode: '542',
    country: 'gfgd#2',
    twitter: '',
    language: 'English (United States)',
    countryLocale: 'United States',
    dateFormat: 'DD-MM-YYYY',
    timeFormat: '24 Hours',
    shiftName: '',
    timeZone: '(GMT 5:30) India Standard Time (Asia/Kolkata)',
    shiftHour: '',
    shiftDays: '',
    preferredCurrency: '',
    numberFormat: '123456 789'
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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Personal Settings</h2>
            <p className="text-gray-600">Manage your profile and preferences</p>
          </div>
          <div className="flex space-x-2">
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <Edit3 className="h-4 w-4 mr-2" />
                Edit Profile
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

        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6 border border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center">
              <User className="h-10 w-10 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{userDetails.firstName} {userDetails.lastName}</h3>
              <p className="text-gray-600">{userDetails.email}</p>
              <p className="text-gray-500">{userDetails.mobile}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* User Information */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">User Information</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={userDetails.firstName}
                      onChange={(e) => setUserDetails({...userDetails, firstName: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900">{userDetails.firstName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={userDetails.lastName}
                      onChange={(e) => setUserDetails({...userDetails, lastName: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900">{userDetails.lastName}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                {isEditing ? (
                  <input
                    type="email"
                    value={userDetails.email}
                    onChange={(e) => setUserDetails({...userDetails, email: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-gray-900">{userDetails.email}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={userDetails.role}
                      onChange={(e) => setUserDetails({...userDetails, role: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900">{userDetails.role}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Profile</label>
                  {isEditing ? (
                    <select
                      value={userDetails.profile}
                      onChange={(e) => setUserDetails({...userDetails, profile: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option>Administrator</option>
                      <option>User</option>
                    </select>
                  ) : (
                    <p className="text-gray-900">{userDetails.profile}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Alias</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={userDetails.alias}
                      onChange={(e) => setUserDetails({...userDetails, alias: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900">{userDetails.alias}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={userDetails.phone}
                      onChange={(e) => setUserDetails({...userDetails, phone: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900">{userDetails.phone}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mobile</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={userDetails.mobile}
                      onChange={(e) => setUserDetails({...userDetails, mobile: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900">{userDetails.mobile}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                  {isEditing ? (
                    <input
                      type="url"
                      value={userDetails.website}
                      onChange={(e) => setUserDetails({...userDetails, website: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900">{userDetails.website}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Fax</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={userDetails.fax}
                      onChange={(e) => setUserDetails({...userDetails, fax: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900">{userDetails.fax}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                  {isEditing ? (
                    <input
                      type="date"
                      value={userDetails.dateOfBirth}
                      onChange={(e) => setUserDetails({...userDetails, dateOfBirth: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900">{userDetails.dateOfBirth}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Microsoft Account</label>
                <div className="flex items-center justify-between">
                  <p className="text-gray-900">{userDetails.microsoftAccount}</p>
                  <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                    Integrate
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1">Please fill out locale information before integrating with Microsoft Account</p>
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Address Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Street</label>
                {isEditing ? (
                  <textarea
                    value={userDetails.street}
                    onChange={(e) => setUserDetails({...userDetails, street: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={3}
                  />
                ) : (
                  <p className="text-gray-900 break-words">{userDetails.street}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={userDetails.city}
                      onChange={(e) => setUserDetails({...userDetails, city: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900">{userDetails.city}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={userDetails.state}
                      onChange={(e) => setUserDetails({...userDetails, state: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900">{userDetails.state}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={userDetails.zipCode}
                      onChange={(e) => setUserDetails({...userDetails, zipCode: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900">{userDetails.zipCode}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={userDetails.country}
                      onChange={(e) => setUserDetails({...userDetails, country: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900">{userDetails.country}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Social Profiles */}
            <div className="mt-6">
              <h4 className="text-md font-semibold text-gray-900 mb-3">Social Profiles</h4>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Twitter</label>
                <div className="flex items-center space-x-2">
                  {isEditing ? (
                    <input
                      type="text"
                      value={userDetails.twitter}
                      onChange={(e) => setUserDetails({...userDetails, twitter: e.target.value})}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Twitter handle"
                    />
                  ) : (
                    <p className="text-gray-900">{userDetails.twitter || '+ Add'}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Locale Information */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 lg:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Locale Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
                {isEditing ? (
                  <select
                    value={userDetails.language}
                    onChange={(e) => setUserDetails({...userDetails, language: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option>English (United States)</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                  </select>
                ) : (
                  <p className="text-gray-900">{userDetails.language}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Country Locale</label>
                {isEditing ? (
                  <select
                    value={userDetails.countryLocale}
                    onChange={(e) => setUserDetails({...userDetails, countryLocale: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Canada</option>
                    <option>Australia</option>
                  </select>
                ) : (
                  <p className="text-gray-900">{userDetails.countryLocale}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date Format</label>
                {isEditing ? (
                  <select
                    value={userDetails.dateFormat}
                    onChange={(e) => setUserDetails({...userDetails, dateFormat: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option>DD-MM-YYYY</option>
                    <option>MM-DD-YYYY</option>
                    <option>YYYY-MM-DD</option>
                  </select>
                ) : (
                  <p className="text-gray-900">{userDetails.dateFormat}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Time Format</label>
                {isEditing ? (
                  <select
                    value={userDetails.timeFormat}
                    onChange={(e) => setUserDetails({...userDetails, timeFormat: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option>24 Hours</option>
                    <option>12 Hours</option>
                  </select>
                ) : (
                  <p className="text-gray-900">{userDetails.timeFormat}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Time Zone</label>
                {isEditing ? (
                  <select
                    value={userDetails.timeZone}
                    onChange={(e) => setUserDetails({...userDetails, timeZone: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option>(GMT 5:30) India Standard Time (Asia/Kolkata)</option>
                    <option>(GMT-8:00) Pacific Standard Time</option>
                    <option>(GMT-5:00) Eastern Standard Time</option>
                    <option>(GMT+0:00) Greenwich Mean Time</option>
                  </select>
                ) : (
                  <p className="text-gray-900">{userDetails.timeZone}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Number Format</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={userDetails.numberFormat}
                    onChange={(e) => setUserDetails({...userDetails, numberFormat: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-gray-900">{userDetails.numberFormat}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};