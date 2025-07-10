import React, { useState } from 'react';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { SortableField } from './SortableField';
import { FieldPalette } from './FieldPalette';
import { ModulePreview } from './ModulePreview';
import { Plus, Save, Eye, Settings } from 'lucide-react';

export interface Field {
  id: string;
  type: 'text' | 'email' | 'phone' | 'number' | 'date' | 'select' | 'textarea' | 'checkbox' | 'file';
  label: string;
  placeholder?: string;
  required: boolean;
  options?: string[];
}

export interface Module {
  id: string;
  name: string;
  description: string;
  fields: Field[];
  icon: string;
  color: string;
}

export const ModuleBuilder: React.FC = () => {
  const [currentModule, setCurrentModule] = useState<Module>({
    id: '',
    name: 'New Module',
    description: 'Custom module description',
    fields: [],
    icon: 'Package',
    color: 'blue'
  });
  const [showPreview, setShowPreview] = useState(false);
  const [activeTab, setActiveTab] = useState<'builder' | 'settings'>('builder');

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setCurrentModule(prev => ({
        ...prev,
        fields: arrayMove(prev.fields, 
          prev.fields.findIndex(field => field.id === active.id),
          prev.fields.findIndex(field => field.id === over.id)
        )
      }));
    }
  };

  const addField = (fieldType: Field['type']) => {
    const newField: Field = {
      id: `field_${Date.now()}`,
      type: fieldType,
      label: `New ${fieldType} field`,
      required: false,
      placeholder: `Enter ${fieldType}...`
    };

    if (fieldType === 'select') {
      newField.options = ['Option 1', 'Option 2', 'Option 3'];
    }

    setCurrentModule(prev => ({
      ...prev,
      fields: [...prev.fields, newField]
    }));
  };

  const updateField = (fieldId: string, updates: Partial<Field>) => {
    setCurrentModule(prev => ({
      ...prev,
      fields: prev.fields.map(field => 
        field.id === fieldId ? { ...field, ...updates } : field
      )
    }));
  };

  const removeField = (fieldId: string) => {
    setCurrentModule(prev => ({
      ...prev,
      fields: prev.fields.filter(field => field.id !== fieldId)
    }));
  };

  const saveModule = () => {
    // In a real app, this would save to a backend
    console.log('Saving module:', currentModule);
    alert('Module saved successfully!');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Design Your CRM Modules Visually
        </h1>
        <p className="text-gray-600">
          Use our intuitive drag-and-drop builder to add fields, arrange them in sections, and design modules exactly the way your business needs.
        </p>
      </div>

      <div className="flex space-x-6">
        {/* Left Sidebar - Field Palette */}
        <div className="w-80 bg-white rounded-lg shadow-lg p-6">
          <div className="flex space-x-1 mb-6">
            <button
              onClick={() => setActiveTab('builder')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'builder' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Builder
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'settings' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Settings
            </button>
          </div>

          {activeTab === 'builder' ? (
            <FieldPalette onAddField={addField} />
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Module Name
                </label>
                <input
                  type="text"
                  value={currentModule.name}
                  onChange={(e) => setCurrentModule(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={currentModule.description}
                  onChange={(e) => setCurrentModule(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Color Theme
                </label>
                <div className="flex space-x-2">
                  {['blue', 'green', 'purple', 'red', 'yellow'].map(color => (
                    <button
                      key={color}
                      onClick={() => setCurrentModule(prev => ({ ...prev, color }))}
                      className={`w-8 h-8 rounded-full bg-${color}-500 ${
                        currentModule.color === color ? 'ring-2 ring-offset-2 ring-gray-400' : ''
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Main Content - Module Builder */}
        <div className="flex-1 bg-white rounded-lg shadow-lg">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{currentModule.name}</h2>
                <p className="text-gray-600">{currentModule.description}</p>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowPreview(!showPreview)}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Preview
                </button>
                <button
                  onClick={saveModule}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save Module
                </button>
              </div>
            </div>
          </div>

          <div className="p-6">
            {showPreview ? (
              <ModulePreview module={currentModule} />
            ) : (
              <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
                modifiers={[restrictToVerticalAxis]}
              >
                <div className="space-y-4">
                  {currentModule.fields.length === 0 ? (
                    <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg">
                      <Plus className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">No fields added yet</h3>
                      <p className="text-gray-600 mb-4">Start building your module by adding fields from the palette</p>
                      <button
                        onClick={() => addField('text')}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center mx-auto"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add New Field
                      </button>
                    </div>
                  ) : (
                    <SortableContext items={currentModule.fields.map(f => f.id)} strategy={verticalListSortingStrategy}>
                      {currentModule.fields.map((field) => (
                        <SortableField
                          key={field.id}
                          field={field}
                          onUpdate={updateField}
                          onRemove={removeField}
                        />
                      ))}
                    </SortableContext>
                  )}
                </div>
              </DndContext>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};