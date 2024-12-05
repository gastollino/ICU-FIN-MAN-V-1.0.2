import React from 'react';
import { TrendingUp } from 'lucide-react';

interface AccountCardProps {
  name: string;
  bank: string;
  balance: number;
  change: number;
  iconColor: string;
}

export function AccountCard({ name, bank, balance, change, iconColor }: AccountCardProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
      <div className="flex items-center space-x-4">
        <div className={`w-10 h-10 bg-${iconColor}-100 rounded-full flex items-center justify-center`}>
          <TrendingUp className={`h-5 w-5 text-${iconColor}-600`} />
        </div>
        <div>
          <p className="font-medium text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">{bank}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-semibold text-gray-900">€{balance.toLocaleString()}</p>
        <p className="text-sm text-green-600">+{change}%</p>
      </div>
    </div>
  );
}