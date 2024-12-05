import React from 'react';
import { Wallet, ArrowRight } from 'lucide-react';
import { Card } from '../ui/Card';
import { AccountCard } from '../ui/AccountCard';
import { accounts } from '../../data/accounts';

export function AccountsSummary() {
  return (
    <Card>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Accounts Overview</h2>
          <p className="text-sm text-gray-500">All connected accounts</p>
        </div>
        <Wallet className="h-6 w-6 text-gray-400" />
      </div>

      <div className="space-y-4">
        {accounts.map((account) => (
          <AccountCard
            key={account.id}
            name={account.name}
            bank={account.bank}
            balance={account.balance}
            change={account.change}
            iconColor={account.iconColor}
          />
        ))}

        <button className="w-full mt-4 flex items-center justify-center space-x-2 text-blue-600 hover:text-blue-700">
          <span>View all accounts</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </Card>
  );
}