import React, { useState } from 'react';
import { Calendar, Eye, Save } from 'lucide-react';

export const FiscalYear: React.FC = () => {
  const [fiscalSettings, setFiscalSettings] = useState({
    transactionMonth: 'March',
    fiscalYearType: 'Standard Fiscal Year',
    format: '4 Quarters per year, 13 weeks per Quarter',
    startDate: '9',
    startMonth: 'June',
    displayOption: 'Q-YYYY',
    yearDisplay: 'Starting Year',
    periodDisplay: 'Number by Quarter'
  });

  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Manage Fiscal Year</h2>
          <p className="text-gray-600">Configure your organization's fiscal year settings</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
          <div className="space-y-6">
            {/* Transaction Year */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Transaction Year</label>
              <select
                value={fiscalSettings.transactionMonth}
                onChange={(e) => setFiscalSettings({...fiscalSettings, transactionMonth: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
            </div>

            {/* Fiscal Year Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Fiscal Year Type</label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="fiscalYearType"
                    value="Standard Fiscal Year"
                    checked={fiscalSettings.fiscalYearType === 'Standard Fiscal Year'}
                    onChange={(e) => setFiscalSettings({...fiscalSettings, fiscalYearType: e.target.value})}
                    className="mr-2"
                  />
                  Standard Fiscal Year
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="fiscalYearType"
                    value="Custom Fiscal Year"
                    checked={fiscalSettings.fiscalYearType === 'Custom Fiscal Year'}
                    onChange={(e) => setFiscalSettings({...fiscalSettings, fiscalYearType: e.target.value})}
                    className="mr-2"
                  />
                  Custom Fiscal Year
                </label>
              </div>
            </div>

            {/* Format */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Format</label>
              <p className="text-gray-900 mb-2">{fiscalSettings.format}</p>
              <p className="text-sm text-gray-600">In each quarter, Period 1 has 4 weeks, Period 2 has 4 weeks, Period 3 has 5 weeks</p>
            </div>

            {/* Start Date */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                <input
                  type="number"
                  value={fiscalSettings.startDate}
                  onChange={(e) => setFiscalSettings({...fiscalSettings, startDate: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="1"
                  max="31"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Month</label>
                <select
                  value={fiscalSettings.startMonth}
                  onChange={(e) => setFiscalSettings({...fiscalSettings, startMonth: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </select>
              </div>
            </div>

            {/* Display Options */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Display Options</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Display Fiscal Year Based on</label>
                  <select
                    value={fiscalSettings.displayOption}
                    onChange={(e) => setFiscalSettings({...fiscalSettings, displayOption: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option>Q-YYYY</option>
                    <option>YYYY-Q</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Year Display</label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="yearDisplay"
                        value="Starting Year"
                        checked={fiscalSettings.yearDisplay === 'Starting Year'}
                        onChange={(e) => setFiscalSettings({...fiscalSettings, yearDisplay: e.target.value})}
                        className="mr-2"
                      />
                      Starting Year
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="yearDisplay"
                        value="Ending Year"
                        checked={fiscalSettings.yearDisplay === 'Ending Year'}
                        onChange={(e) => setFiscalSettings({...fiscalSettings, yearDisplay: e.target.value})}
                        className="mr-2"
                      />
                      Ending Year
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Period display option</label>
                  <select
                    value={fiscalSettings.periodDisplay}
                    onChange={(e) => setFiscalSettings({...fiscalSettings, periodDisplay: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option>Number by Quarter</option>
                    <option>Name by Quarter</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Preview */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-3">Preview</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700">
                <p>Q1 P1 2025, Q1 P2 2025, Q1 P3 2025</p>
                <p>Q2 P1 2025, Q2 P2 2025, Q2 P3 2025</p>
                <p>Q3 P1 2025, Q3 P2 2025, Q3 P3 2025</p>
                <p>Q4 P1 2025, Q4 P2 2025, Q4 P3 2025</p>
              </div>
            </div>

            {/* Surplus Week Add-on */}
            <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
              <h4 className="font-medium text-gray-900 mb-2">Surplus week add-on option</h4>
              <p className="text-sm text-gray-700">
                Since each fiscal year in 4-5-4 format will include only 364 days, left out day in each year can be accumulated in 6th year and added as an extra week in any quarter or period.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 pt-6 border-t border-gray-200">
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <Eye className="h-4 w-4 mr-2" />
                Preview Calendar
              </button>
              <button className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Save className="h-4 w-4 mr-2" />
                Save Fiscal Year
              </button>
            </div>
          </div>
        </div>

        {/* Calendar Preview Modal */}
        {showPreview && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[80vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Fiscal Year Calendar Preview</h3>
                <button
                  onClick={() => setShowPreview(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {['Q1 2025', 'Q2 2025', 'Q3 2025', 'Q4 2025'].map((quarter, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">{quarter}</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>P1: 4 weeks</p>
                      <p>P2: 4 weeks</p>
                      <p>P3: 5 weeks</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};