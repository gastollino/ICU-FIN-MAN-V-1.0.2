import React from 'react';
import { Plus, FileText, Download, Share2 } from 'lucide-react';
import { Card } from '../ui/Card';

interface QuickAction {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const actions: QuickAction[] = [
  { id: 'new-transaction', label: 'New Transaction', icon: <Plus className="h-5 w-5 text-blue-600" /> },
  { id: 'create-report', label: 'Create Report', icon: <FileText className="h-5 w-5 text-blue-600" /> },
  { id: 'export-data', label: 'Export Data', icon: <Download className="h-5 w-5 text-blue-600" /> },
  { id: 'share-access', label: 'Share Access', icon: <Share2 className="h-5 w-5 text-blue-600" /> }
];

export function QuickActions() {
  return (
    <Card>
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-4">
        {actions.map((action) => (
          <button
            key={action.id}
            className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
          >
            {action.icon}
            <span className="font-medium text-gray-900">{action.label}</span>
          </button>
        ))}
      </div>
    </Card>
  );
}