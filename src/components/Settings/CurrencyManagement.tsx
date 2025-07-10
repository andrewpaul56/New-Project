import React, { useState } from 'react';
import { DollarSign, Plus, Edit3, Trash2, Search, ToggleLeft, ToggleRight } from 'lucide-react';

interface Currency {
  id: string;
  name: string;
  code: string;
  format: string;
  exchangeRate: number;
  lastModifiedBy: string;
  lastModified: string;
  status: 'Active' | 'Inactive';
}

export const CurrencyManagement: React.FC = () => {
  const [currencies, setCurrencies] = useState<Currency[]>([
    {
      id: '1',
      name: 'US Dollar',
      code: 'USD',
      format: 'USD 1 234 567,89',
      exchangeRate: 12,
      lastModifiedBy: 'Admin User',
      lastModified: '4/6/2025',
      status: 'Active'
    },
    {
      id: '2',
      name: 'Euro',
      code: 'EUR',
      format: 'EUR 1,234,567.89',
      exchangeRate: 5,
      lastModifiedBy: 'Admin User',
      lastModified: '9/6/2025',
      status: 'Active'
    },
    {
      id: '3',
      name: 'Japanese Yen',
      code: 'JPY',
      format: '¥ 1,234,567.8999',
      exchangeRate: 200,
      lastModifiedBy: 'Admin User',
      lastModified: '9/6/2025',
      status: 'Active'
    },
    {
      id: '4',
      name: 'Australian Dollar',
      code: 'AUD',
      format: 'AUD 1,234,567.89',
      exchangeRate: 4,
      lastModifiedBy: 'Admin User',
      lastModified: '10/6/2025',
      status: 'Active'
    }
  ]);

  const [showAddCurrency, setShowAddCurrency] = useState(false);
  const [homeCurrency] = useState('Indian Rupee-INR');
  const [currencyFormat] = useState('INR 1,234,567.89');

  const toggleCurrencyStatus = (id: string) => {
    setCurrencies(currencies.map(currency => 
      currency.id === id 
        ? { ...currency, status: currency.status === 'Active' ? 'Inactive' : 'Active' }
        : currency
    ));
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Currencies</h2>
          <p className="text-gray-600">
            This page helps you to define the currency preferences used by your organization. Home currency is the primary transactional currency of your organization. Multiple currencies allow you to handle financial operation across several regions.
          </p>
        </div>

        {/* Home Currency Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Home Currency</label>
              <p className="text-lg font-semibold text-gray-900">{homeCurrency}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Currency Format</label>
              <div className="flex items-center space-x-2">
                <p className="text-lg font-semibold text-gray-900">{currencyFormat}</p>
                <button className="text-blue-600 hover:text-blue-700 text-sm">Edit</button>
              </div>
            </div>
          </div>
        </div>

        {/* Currency List */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Currency List</h3>
              <button
                onClick={() => setShowAddCurrency(true)}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Currency
              </button>
            </div>
            
            <div className="flex space-x-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search Currency"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>All Status</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Currency Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Format</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exchange Rate</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Modified By</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currencies.map((currency) => (
                  <tr key={currency.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{currency.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{currency.format}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{currency.exchangeRate}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center mr-2">
                          <span className="text-white text-xs font-medium">
                            {currency.lastModifiedBy.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <div className="text-sm text-gray-900">{currency.lastModifiedBy}</div>
                          <div className="text-xs text-gray-500">{currency.lastModified}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => toggleCurrencyStatus(currency.id)}
                        className="flex items-center"
                      >
                        {currency.status === 'Active' ? (
                          <ToggleRight className="h-6 w-6 text-green-500" />
                        ) : (
                          <ToggleLeft className="h-6 w-6 text-gray-400" />
                        )}
                        <span className={`ml-2 text-sm ${currency.status === 'Active' ? 'text-green-600' : 'text-gray-500'}`}>
                          {currency.status}
                        </span>
                      </button>
                    </td>
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

        {/* Add Currency Modal */}
        {showAddCurrency && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Currency</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Currency Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., British Pound"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Currency Code</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., GBP"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Format</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., GBP 1,234,567.89"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Exchange Rate</label>
                  <input
                    type="number"
                    step="0.01"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., 0.85"
                  />
                </div>

                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  <label className="text-sm text-gray-700">Enable this currency</label>
                </div>
              </div>

              <div className="flex space-x-3 mt-6">
                <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Add Currency
                </button>
                <button
                  onClick={() => setShowAddCurrency(false)}
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