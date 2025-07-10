import React, { useState } from 'react';
import { Package, Layout, BarChart3, FileText, Palette, GripVertical } from 'lucide-react';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface Module {
  id: string;
  name: string;
  icon: string;
  description: string;
  enabled: boolean;
}

const SortableModule: React.FC<{ module: Module; onToggle: (id: string) => void }> = ({ module, onToggle }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: module.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button
            {...attributes}
            {...listeners}
            className="p-1 text-gray-400 hover:text-gray-600 cursor-grab active:cursor-grabbing"
          >
            <GripVertical className="h-5 w-5" />
          </button>
          <div className="p-2 bg-blue-100 rounded-lg">
            <Package className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h4 className="font-medium text-gray-900">{module.name}</h4>
            <p className="text-sm text-gray-600">{module.description}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={module.enabled}
              onChange={() => onToggle(module.id)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
    </div>
  );
};

export const CustomizationSettings: React.FC = () => {
  const [modules, setModules] = useState<Module[]>([
    { id: '1', name: 'Leads', icon: 'Target', description: 'Manage sales leads and prospects', enabled: true },
    { id: '2', name: 'Contacts', icon: 'Users', description: 'Store and organize contact information', enabled: true },
    { id: '3', name: 'Deals', icon: 'DollarSign', description: 'Track sales opportunities', enabled: true },
    { id: '4', name: 'Activities', icon: 'Calendar', description: 'Schedule and track activities', enabled: true },
    { id: '5', name: 'Campaigns', icon: 'Mail', description: 'Manage marketing campaigns', enabled: false },
    { id: '6', name: 'Reports', icon: 'BarChart3', description: 'Generate business reports', enabled: true },
    { id: '7', name: 'Analytics', icon: 'TrendingUp', description: 'View performance analytics', enabled: true },
    { id: '8', name: 'Tasks', icon: 'CheckSquare', description: 'Manage tasks and to-dos', enabled: false },
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setModules((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const toggleModule = (id: string) => {
    setModules(modules.map(module => 
      module.id === id ? { ...module, enabled: !module.enabled } : module
    ));
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-white min-h-screen">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Customization</h2>
        <p className="text-gray-600">Personalize the CRM to fit your business needs</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Drag and Drop Module Management */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-6 border border-gray-200">
          <div className="flex items-center mb-6">
            <Package className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Modules and Fields</h3>
          </div>
          <p className="text-gray-600 mb-6">Drag and drop to reorder modules. Toggle switches to enable/disable modules.</p>
          
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext items={modules.map(m => m.id)} strategy={verticalListSortingStrategy}>
              <div className="space-y-3">
                {modules.map((module) => (
                  <SortableModule
                    key={module.id}
                    module={module}
                    onToggle={toggleModule}
                  />
                ))}
              </div>
            </SortableContext>
          </DndContext>
        </div>

        {/* Canvas Designer */}
        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
          <div className="flex items-center mb-4">
            <Layout className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Canvas</h3>
          </div>
          <p className="text-gray-600 mb-4">Design custom views for your records</p>
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-900">Lead Detail View</p>
                  <p className="text-sm text-gray-600">Custom layout active</p>
                </div>
                <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">Edit</button>
              </div>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-900">Contact Profile</p>
                  <p className="text-sm text-gray-600">Default layout</p>
                </div>
                <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200">Customize</button>
              </div>
            </div>
          </div>
          <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Create New Canvas
          </button>
        </div>

        {/* Analytics Customization */}
        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
          <div className="flex items-center mb-4">
            <BarChart3 className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Analytics</h3>
          </div>
          <p className="text-gray-600 mb-4">Set up reports and visual dashboards</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div>
                <p className="font-medium text-gray-900">Sales Report</p>
                <p className="text-sm text-gray-600">Monthly performance</p>
              </div>
              <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">Edit</button>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div>
                <p className="font-medium text-gray-900">Lead Conversion</p>
                <p className="text-sm text-gray-600">Funnel analysis</p>
              </div>
              <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">Edit</button>
            </div>
          </div>
          <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Create New Report
          </button>
        </div>

        {/* Theme Customization */}
        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
          <div className="flex items-center mb-4">
            <Palette className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Theme & Branding</h3>
          </div>
          <p className="text-gray-600 mb-4">Customize colors and branding elements</p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Primary Color</label>
              <div className="flex space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full border-4 border-blue-200 cursor-pointer"></div>
                <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-gray-300 cursor-pointer"></div>
                <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-gray-300 cursor-pointer"></div>
                <div className="w-8 h-8 bg-red-500 rounded-full border-2 border-gray-300 cursor-pointer"></div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Logo Upload</label>
              <div className="border-2 border-dashed border-blue-300 rounded-lg p-4 text-center bg-blue-50">
                <p className="text-sm text-blue-600">Drop your logo here or click to upload</p>
              </div>
            </div>
          </div>
        </div>

        {/* Print Templates */}
        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
          <div className="flex items-center mb-4">
            <FileText className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Print Template</h3>
          </div>
          <p className="text-gray-600 mb-4">Create templates for printed documents</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div>
                <p className="font-medium text-gray-900">Invoice Template</p>
                <p className="text-sm text-gray-600">Standard format</p>
              </div>
              <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">Edit</button>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div>
                <p className="font-medium text-gray-900">Quote Template</p>
                <p className="text-sm text-gray-600">Professional layout</p>
              </div>
              <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">Edit</button>
            </div>
          </div>
          <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Create Template
          </button>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md">
          Save Customization
        </button>
      </div>
    </div>
  );
};