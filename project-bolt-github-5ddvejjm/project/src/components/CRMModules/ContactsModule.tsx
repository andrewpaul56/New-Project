import React from 'react';
import { Users, Plus, Filter, Search, Mail, Phone } from 'lucide-react';

export const ContactsModule: React.FC = () => {
  const contacts = [
    { id: 1, name: 'Alice Brown', email: 'alice@example.com', phone: '+1234567890', company: 'ABC Corp', role: 'Manager' },
    { id: 2, name: 'Bob Davis', email: 'bob@example.com', phone: '+1234567891', company: 'XYZ Ltd', role: 'Director' },
    { id: 3, name: 'Carol White', email: 'carol@example.com', phone: '+1234567892', company: 'Tech Solutions', role: 'CEO' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <Users className="h-8 w-8 mr-3 text-blue-600" />
            Contacts
          </h1>
          <p className="text-gray-600 mt-1">Manage your business contacts</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
          <Plus className="h-4 w-4 mr-2" />
          Add Contact
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <div className="flex space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search contacts..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {contacts.map((contact) => (
            <div key={contact.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <div className="h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium">{contact.name.charAt(0)}</span>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-900">{contact.name}</h3>
                  <p className="text-xs text-gray-500">{contact.role} at {contact.company}</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="h-4 w-4 mr-2" />
                  {contact.email}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="h-4 w-4 mr-2" />
                  {contact.phone}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};