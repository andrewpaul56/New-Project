import React from 'react';
import { Package, DollarSign, Calculator, FileText } from 'lucide-react';

export const CPQSettings: React.FC = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">CPQ (Configure, Price, Quote)</h2>
        <p className="text-gray-600">Simplify your sales process</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Product Configurator */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Package className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Product Configurator</h3>
          </div>
          <p className="text-gray-600 mb-4">Create product bundles and options</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Software Bundle</p>
                <p className="text-sm text-gray-600">Base + Premium features</p>
              </div>
              <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">Edit</button>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Hardware Package</p>
                <p className="text-sm text-gray-600">Server + Support</p>
              </div>
              <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">Edit</button>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Service Plan</p>
                <p className="text-sm text-gray-600">Consulting + Training</p>
              </div>
              <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">Edit</button>
            </div>
          </div>
          <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Create Product Bundle
          </button>
        </div>

        {/* Price Rules */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <DollarSign className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Price Rules</h3>
          </div>
          <p className="text-gray-600 mb-4">Automate discounts, markups, and complex pricing logic</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Volume Discount</p>
                <p className="text-sm text-gray-600">10% off orders &gt; $10,000</p>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-1">
                  Active
                </span>
              </div>
              <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">Edit</button>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Early Bird Pricing</p>
                <p className="text-sm text-gray-600">15% off Q1 purchases</p>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mt-1">
                  Scheduled
                </span>
              </div>
              <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">Edit</button>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Partner Discount</p>
                <p className="text-sm text-gray-600">20% off for certified partners</p>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-1">
                  Active
                </span>
              </div>
              <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">Edit</button>
            </div>
          </div>
          <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Create Price Rule
          </button>
        </div>

        {/* Quote Templates */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <FileText className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Quote Templates</h3>
          </div>
          <p className="text-gray-600 mb-4">Design professional quote layouts</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Standard Quote</p>
                <p className="text-sm text-gray-600">Default template with company branding</p>
              </div>
              <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">Edit</button>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Premium Quote</p>
                <p className="text-sm text-gray-600">Enhanced layout for enterprise clients</p>
              </div>
              <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">Edit</button>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Service Quote</p>
                <p className="text-sm text-gray-600">Specialized for service offerings</p>
              </div>
              <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded">Edit</button>
            </div>
          </div>
          <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Create Template
          </button>
        </div>

        {/* Approval Workflows */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Calculator className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Approval Workflows</h3>
          </div>
          <p className="text-gray-600 mb-4">Set up approval processes for quotes and discounts</p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Discount Approval Threshold</label>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="15"
                />
                <span className="text-sm text-gray-600">% requires manager approval</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Quote Value Threshold</label>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">$</span>
                <input
                  type="number"
                  className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="50000"
                />
                <span className="text-sm text-gray-600">requires director approval</span>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-700">Approval Chain</p>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                <label className="text-sm text-gray-700">Sales Manager → Director → VP</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm text-gray-700">Parallel approval (all must approve)</label>
              </div>
            </div>
          </div>
        </div>

        {/* CPQ Analytics */}
        <div className="bg-gray-50 rounded-lg p-6 lg:col-span-2">
          <div className="flex items-center mb-4">
            <Calculator className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">CPQ Performance</h3>
          </div>
          <p className="text-gray-600 mb-4">Monitor quote-to-close performance and pricing effectiveness</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 bg-white rounded-lg">
              <p className="text-2xl font-bold text-gray-900">68%</p>
              <p className="text-sm text-gray-600">Quote Win Rate</p>
              <p className="text-xs text-green-600">↑ 5% this month</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <p className="text-2xl font-bold text-gray-900">2.3 days</p>
              <p className="text-sm text-gray-600">Avg Quote Time</p>
              <p className="text-xs text-green-600">↓ 0.5 days</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <p className="text-2xl font-bold text-gray-900">$45K</p>
              <p className="text-sm text-gray-600">Avg Deal Size</p>
              <p className="text-xs text-green-600">↑ $3K</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <p className="text-2xl font-bold text-gray-900">12%</p>
              <p className="text-sm text-gray-600">Avg Discount</p>
              <p className="text-xs text-red-600">↑ 2%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Save CPQ Settings
        </button>
      </div>
    </div>
  );
};