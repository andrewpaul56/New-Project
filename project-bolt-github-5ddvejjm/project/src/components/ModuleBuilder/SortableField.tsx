import React, { useState } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical, Settings, Trash2, Eye, EyeOff } from 'lucide-react';
import { Field } from './ModuleBuilder';

interface SortableFieldProps {
  field: Field;
  onUpdate: (fieldId: string, updates: Partial<Field>) => void;
  onRemove: (fieldId: string) => void;
}

export const SortableField: React.FC<SortableFieldProps> = ({ field, onUpdate, onRemove }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValues, setEditValues] = useState(field);

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

  const handleSave = () => {
    onUpdate(field.id, editValues);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValues(field);
    setIsEditing(false);
  };

  const renderFieldPreview = () => {
    switch (field.type) {
      case 'text':
      case 'email':
      case 'phone':
      case 'number':
        return (
          <input
            type={field.type}
            placeholder={field.placeholder}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
            disabled
          />
        );
      case 'date':
        return (
          <input
            type="date"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
            disabled
          />
        );
      case 'select':
        return (
          <select className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50" disabled>
            <option>Select an option...</option>
            {field.options?.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        );
      case 'textarea':
        return (
          <textarea
            placeholder={field.placeholder}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
            rows={3}
            disabled
          />
        );
      case 'checkbox':
        return (
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" disabled />
            <span className="text-gray-600">{field.label}</span>
          </div>
        );
      case 'file':
        return (
          <div className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500">
            Choose file...
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center">
          <button
            {...attributes}
            {...listeners}
            className="p-1 text-gray-400 hover:text-gray-600 mr-2 cursor-grab active:cursor-grabbing"
          >
            <GripVertical className="h-4 w-4" />
          </button>
          <div>
            <h4 className="text-sm font-medium text-gray-900">{field.label}</h4>
            <p className="text-xs text-gray-500 capitalize">{field.type} field</p>
          </div>
          {field.required && (
            <span className="ml-2 text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
              Required
            </span>
          )}
        </div>
        <div className="flex space-x-1">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="p-1 text-gray-400 hover:text-gray-600"
          >
            <Settings className="h-4 w-4" />
          </button>
          <button
            onClick={() => onRemove(field.id)}
            className="p-1 text-gray-400 hover:text-red-600"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      {isEditing ? (
        <div className="space-y-3 p-3 bg-gray-50 rounded-lg">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Label</label>
            <input
              type="text"
              value={editValues.label}
              onChange={(e) => setEditValues(prev => ({ ...prev, label: e.target.value }))}
              className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Placeholder</label>
            <input
              type="text"
              value={editValues.placeholder || ''}
              onChange={(e) => setEditValues(prev => ({ ...prev, placeholder: e.target.value }))}
              className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
            />
          </div>
          {field.type === 'select' && (
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Options (one per line)</label>
              <textarea
                value={editValues.options?.join('\n') || ''}
                onChange={(e) => setEditValues(prev => ({ 
                  ...prev, 
                  options: e.target.value.split('\n').filter(opt => opt.trim()) 
                }))}
                className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                rows={3}
              />
            </div>
          )}
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={editValues.required}
              onChange={(e) => setEditValues(prev => ({ ...prev, required: e.target.checked }))}
              className="mr-2"
            />
            <label className="text-xs text-gray-700">Required field</label>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={handleSave}
              className="px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="px-3 py-1 bg-gray-300 text-gray-700 text-xs rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div>
          {renderFieldPreview()}
        </div>
      )}
    </div>
  );
};