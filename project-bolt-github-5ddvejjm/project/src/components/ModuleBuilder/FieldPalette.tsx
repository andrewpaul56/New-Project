import React from 'react';
import { Type, Mail, Phone, Hash, Calendar, ChevronDown, FileText, CheckSquare, Upload } from 'lucide-react';
import { Field } from './ModuleBuilder';

interface FieldPaletteProps {
  onAddField: (fieldType: Field['type']) => void;
}

export const FieldPalette: React.FC<FieldPaletteProps> = ({ onAddField }) => {
  const fieldTypes = [
    { type: 'text' as const, label: 'Text Field', icon: Type, description: 'Single line text input' },
    { type: 'email' as const, label: 'Email', icon: Mail, description: 'Email address field' },
    { type: 'phone' as const, label: 'Phone', icon: Phone, description: 'Phone number field' },
    { type: 'number' as const, label: 'Number', icon: Hash, description: 'Numeric input field' },
    { type: 'date' as const, label: 'Date', icon: Calendar, description: 'Date picker field' },
    { type: 'select' as const, label: 'Dropdown', icon: ChevronDown, description: 'Select from options' },
    { type: 'textarea' as const, label: 'Text Area', icon: FileText, description: 'Multi-line text input' },
    { type: 'checkbox' as const, label: 'Checkbox', icon: CheckSquare, description: 'Boolean checkbox' },
    { type: 'file' as const, label: 'File Upload', icon: Upload, description: 'File attachment field' },
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Field Types</h3>
      <div className="space-y-2">
        {fieldTypes.map((fieldType) => {
          const Icon = fieldType.icon;
          return (
            <button
              key={fieldType.type}
              onClick={() => onAddField(fieldType.type)}
              className="w-full p-3 text-left border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors group"
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
            </button>
          );
        })}
      </div>
    </div>
  );
};