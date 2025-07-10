import React, { useState } from 'react';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { 
  Type, Mail, Phone, Hash, Calendar, ChevronDown, FileText, CheckSquare, Upload,
  DollarSign, Percent, User, Image, Plus, MoreVertical, Edit3, Trash2, 
  GripVertical, Save, Eye, Settings
} from 'lucide-react';

interface Field {
  id: string;
  type: 'text' | 'email' | 'phone' | 'number' | 'currency' | 'percent' | 'checkbox' | 'picklist' | 'date' | 'datetime' | 'textarea' | 'lookup' | 'user' | 'image' | 'file' | 'autonumber' | 'decimal' | 'longinteger' | 'url' | 'formula' | 'multiselect' | 'multipicklist' | 'subform';
  label: string;
  placeholder?: string;
  required: boolean;
  options?: string[];
  properties?: any;
}

interface Section {
  id: string;
  name: string;
  fields: Field[];
}

interface Module {
  id: string;
  name: string;
  sections: Section[];
  createdBy: string;
  modifiedBy: string;
  createdAt: string;
  modifiedAt: string;
}

const fieldTypes = [
  { type: 'text', label: 'Single Line', icon: Type, description: 'Single line text input' },
  { type: 'email', label: 'Email', icon: Mail, description: 'Email address field' },
  { type: 'phone', label: 'Phone', icon: Phone, description: 'Phone number field' },
  { type: 'number', label: 'Number', icon: Hash, description: 'Numeric input field' },
  { type: 'currency', label: 'Currency', icon: DollarSign, description: 'Currency amount field' },
  { type: 'percent', label: 'Percent', icon: Percent, description: 'Percentage field' },
  { type: 'checkbox', label: 'Checkbox', icon: CheckSquare, description: 'Boolean checkbox' },
  { type: 'picklist', label: 'Pick List', icon: ChevronDown, description: 'Select from options' },
  { type: 'date', label: 'Date', icon: Calendar, description: 'Date picker field' },
  { type: 'datetime', label: 'Date Time', icon: Calendar, description: 'Date and time picker' },
  { type: 'textarea', label: 'Multi Line', icon: FileText, description: 'Multi-line text input' },
  { type: 'lookup', label: 'Lookup', icon: User, description: 'Reference to another record' },
  { type: 'user', label: 'User', icon: User, description: 'User selection field' },
  { type: 'image', label: 'Image Upload', icon: Image, description: 'Image file upload' },
  { type: 'file', label: 'File Upload', icon: Upload, description: 'File attachment field' },
  { type: 'autonumber', label: 'Auto Number', icon: Hash, description: 'Auto-generated number' },
  { type: 'decimal', label: 'Decimal', icon: Hash, description: 'Decimal number field' },
  { type: 'longinteger', label: 'Long Integer', icon: Hash, description: 'Large integer field' },
  { type: 'url', label: 'URL', icon: Type, description: 'Website URL field' },
  { type: 'formula', label: 'Formula', icon: Type, description: 'Calculated field' },
  { type: 'multiselect', label: 'Multi Select Lookup', icon: User, description: 'Multiple record references' },
  { type: 'multipicklist', label: 'Multi Pick List', icon: ChevronDown, description: 'Multiple option selection' },
  { type: 'subform', label: 'Subform', icon: FileText, description: 'Embedded form section' }
];

const SortableField: React.FC<{ 
  field: Field; 
  onEdit: (field: Field) => void; 
  onRemove: (fieldId: string) => void;
  onToggleRequired: (fieldId: string) => void;
}> = ({ field, onEdit, onRemove, onToggleRequired }) => {
  const [showMenu, setShowMenu] = useState(false);
  
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: field.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const fieldType = fieldTypes.find(ft => ft.type === field.type);

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow relative"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button
            {...attributes}
            {...listeners}
            className="p-1 text-gray-400 hover:text-gray-600 cursor-grab active:cursor-grabbing"
          >
            <GripVertical className="h-4 w-4" />
          </button>
          
          <div className="p-2 bg-blue-100 rounded-lg">
            {fieldType && <fieldType.icon className="h-4 w-4 text-blue-600" />}
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-gray-900">{field.label}</h4>
            <p className="text-xs text-gray-500 capitalize">{field.type} field</p>
          </div>
          
          {field.required && (
            <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
              Required
            </span>
          )}
        </div>
        
        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="p-1 text-gray-400 hover:text-gray-600"
          >
            <MoreVertical className="h-4 w-4" />
          </button>
          
          {showMenu && (
            <div className="absolute right-0 top-6 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[150px]">
              <button
                onClick={() => {
                  onEdit(field);
                  setShowMenu(false);
                }}
                className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center"
              >
                <Edit3 className="h-4 w-4 mr-2" />
                Edit Properties
              </button>
              <button
                onClick={() => {
                  onToggleRequired(field.id);
                  setShowMenu(false);
                }}
                className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center"
              >
                <CheckSquare className="h-4 w-4 mr-2" />
                {field.required ? 'Mark as Optional' : 'Mark as Required'}
              </button>
              <button
                onClick={() => {
                  onRemove(field.id);
                  setShowMenu(false);
                }}
                className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 text-red-600 flex items-center"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const ModuleFieldsBuilder: React.FC = () => {
  const [currentModule, setCurrentModule] = useState<Module>({
    id: '',
    name: 'New Module',
    sections: [
      {
        id: 'section_1',
        name: 'Untitled Section',
        fields: []
      }
    ],
    createdBy: 'Andrew Paul',
    modifiedBy: 'Andrew Paul',
    createdAt: new Date().toISOString(),
    modifiedAt: new Date().toISOString()
  });

  const [showPreview, setShowPreview] = useState(false);
  const [editingField, setEditingField] = useState<Field | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const addField = (fieldType: any, sectionId: string) => {
    const newField: Field = {
      id: `field_${Date.now()}`,
      type: fieldType.type,
      label: `New ${fieldType.label}`,
      required: false,
      placeholder: `Enter ${fieldType.label.toLowerCase()}...`
    };

    if (fieldType.type === 'picklist' || fieldType.type === 'multipicklist') {
      newField.options = ['Option 1', 'Option 2', 'Option 3'];
    }

    setCurrentModule(prev => ({
      ...prev,
      sections: prev.sections.map(section =>
        section.id === sectionId
          ? { ...section, fields: [...section.fields, newField] }
          : section
      ),
      modifiedBy: 'Andrew Paul',
      modifiedAt: new Date().toISOString()
    }));
  };

  const updateField = (fieldId: string, updates: Partial<Field>) => {
    setCurrentModule(prev => ({
      ...prev,
      sections: prev.sections.map(section => ({
        ...section,
        fields: section.fields.map(field =>
          field.id === fieldId ? { ...field, ...updates } : field
        )
      })),
      modifiedBy: 'Andrew Paul',
      modifiedAt: new Date().toISOString()
    }));
  };

  const removeField = (fieldId: string) => {
    setCurrentModule(prev => ({
      ...prev,
      sections: prev.sections.map(section => ({
        ...section,
        fields: section.fields.filter(field => field.id !== fieldId)
      })),
      modifiedBy: 'Andrew Paul',
      modifiedAt: new Date().toISOString()
    }));
  };

  const toggleRequired = (fieldId: string) => {
    setCurrentModule(prev => ({
      ...prev,
      sections: prev.sections.map(section => ({
        ...section,
        fields: section.fields.map(field =>
          field.id === fieldId ? { ...field, required: !field.required } : field
        )
      })),
      modifiedBy: 'Andrew Paul',
      modifiedAt: new Date().toISOString()
    }));
  };

  const addSection = () => {
    const newSection: Section = {
      id: `section_${Date.now()}`,
      name: 'New Section',
      fields: []
    };

    setCurrentModule(prev => ({
      ...prev,
      sections: [...prev.sections, newSection],
      modifiedBy: 'Andrew Paul',
      modifiedAt: new Date().toISOString()
    }));
  };

  const updateSectionName = (sectionId: string, name: string) => {
    setCurrentModule(prev => ({
      ...prev,
      sections: prev.sections.map(section =>
        section.id === sectionId ? { ...section, name } : section
      ),
      modifiedBy: 'Andrew Paul',
      modifiedAt: new Date().toISOString()
    }));
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over) return;

    // Find which section contains the active field
    let activeSection: Section | null = null;
    let activeFieldIndex = -1;

    for (const section of currentModule.sections) {
      const fieldIndex = section.fields.findIndex(field => field.id === active.id);
      if (fieldIndex !== -1) {
        activeSection = section;
        activeFieldIndex = fieldIndex;
        break;
      }
    }

    if (!activeSection || activeFieldIndex === -1) return;

    // Find which section contains the over field
    let overSection: Section | null = null;
    let overFieldIndex = -1;

    for (const section of currentModule.sections) {
      const fieldIndex = section.fields.findIndex(field => field.id === over.id);
      if (fieldIndex !== -1) {
        overSection = section;
        overFieldIndex = fieldIndex;
        break;
      }
    }

    if (!overSection || overFieldIndex === -1) return;

    // If moving within the same section
    if (activeSection.id === overSection.id) {
      const newFields = arrayMove(activeSection.fields, activeFieldIndex, overFieldIndex);
      setCurrentModule(prev => ({
        ...prev,
        sections: prev.sections.map(section =>
          section.id === activeSection!.id ? { ...section, fields: newFields } : section
        ),
        modifiedBy: 'Andrew Paul',
        modifiedAt: new Date().toISOString()
      }));
    }
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Module Builder</h2>
          <p className="text-gray-600">Create and customize modules with drag-and-drop field builder</p>
        </div>

        <div className="flex space-x-6">
          {/* Field Palette */}
          <div className="w-80 bg-white rounded-lg shadow-lg p-6 border border-gray-200 h-fit">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Field Types</h3>
            <div className="space-y-2 max-h-[600px] overflow-y-auto custom-scrollbar">
              {fieldTypes.map((fieldType) => {
                const Icon = fieldType.icon;
                return (
                  <div
                    key={fieldType.type}
                    className="p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors group cursor-pointer"
                    onClick={() => addField(fieldType, currentModule.sections[0].id)}
                  >
                    <div className="flex items-start">
                      <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-blue-100 mr-3">
                        <Icon className="h-4 w-4 text-gray-600 group-hover:text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">{fieldType.label}</h4>
                        <p className="text-xs text-gray-500 mt-1">{fieldType.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Module Builder */}
          <div className="flex-1 bg-white rounded-lg shadow-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <div>
                  <input
                    type="text"
                    value={currentModule.name}
                    onChange={(e) => setCurrentModule(prev => ({ ...prev, name: e.target.value }))}
                    className="text-xl font-semibold text-gray-900 bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2"
                  />
                  <div className="text-sm text-gray-600 mt-1">
                    Created by {currentModule.createdBy} • Modified by {currentModule.modifiedBy}
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={() => setShowPreview(!showPreview)}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center">
                    <Save className="h-4 w-4 mr-2" />
                    Save Module
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6">
              {showPreview ? (
                <div className="max-w-2xl mx-auto">
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{currentModule.name}</h3>
                    {currentModule.sections.map((section) => (
                      <div key={section.id} className="mb-6">
                        <h4 className="text-lg font-medium text-gray-900 mb-4">{section.name}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {section.fields.map((field) => (
                            <div key={field.id}>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                {field.label}
                                {field.required && <span className="text-red-500 ml-1">*</span>}
                              </label>
                              {/* Render appropriate input based on field type */}
                              <div className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-500">
                                {field.placeholder || `${field.label} field`}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <DndContext
                  sensors={sensors}
                  collisionDetection={closestCenter}
                  onDragEnd={handleDragEnd}
                >
                  <div className="space-y-6">
                    {currentModule.sections.map((section) => (
                      <div key={section.id} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex justify-between items-center mb-4">
                          <input
                            type="text"
                            value={section.name}
                            onChange={(e) => updateSectionName(section.id, e.target.value)}
                            className="text-lg font-medium text-gray-900 bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2"
                          />
                          <div className="text-sm text-gray-500">
                            {section.fields.length} fields
                          </div>
                        </div>

                        {section.fields.length === 0 ? (
                          <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
                            <Plus className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-gray-600">Drag fields from the left panel to add them here</p>
                          </div>
                        ) : (
                          <SortableContext items={section.fields.map(f => f.id)} strategy={verticalListSortingStrategy}>
                            <div className="space-y-3">
                              {section.fields.map((field) => (
                                <SortableField
                                  key={field.id}
                                  field={field}
                                  onEdit={setEditingField}
                                  onRemove={removeField}
                                  onToggleRequired={toggleRequired}
                                />
                              ))}
                            </div>
                          </SortableContext>
                        )}
                      </div>
                    ))}

                    <button
                      onClick={addSection}
                      className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors flex items-center justify-center"
                    >
                      <Plus className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-gray-600">Add New Section</span>
                    </button>
                  </div>
                </DndContext>
              )}
            </div>
          </div>
        </div>

        {/* Edit Field Modal */}
        {editingField && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Edit Field Properties</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Field Label</label>
                  <input
                    type="text"
                    value={editingField.label}
                    onChange={(e) => setEditingField({ ...editingField, label: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Placeholder</label>
                  <input
                    type="text"
                    value={editingField.placeholder || ''}
                    onChange={(e) => setEditingField({ ...editingField, placeholder: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {(editingField.type === 'picklist' || editingField.type === 'multipicklist') && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Options (one per line)</label>
                    <textarea
                      value={editingField.options?.join('\n') || ''}
                      onChange={(e) => setEditingField({ 
                        ...editingField, 
                        options: e.target.value.split('\n').filter(opt => opt.trim()) 
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows={4}
                    />
                  </div>
                )}

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={editingField.required}
                    onChange={(e) => setEditingField({ ...editingField, required: e.target.checked })}
                    className="mr-2"
                  />
                  <label className="text-sm text-gray-700">Required field</label>
                </div>
              </div>

              <div className="flex space-x-3 mt-6">
                <button
                  onClick={() => {
                    updateField(editingField.id, editingField);
                    setEditingField(null);
                  }}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setEditingField(null)}
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