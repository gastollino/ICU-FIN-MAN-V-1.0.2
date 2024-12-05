import React from 'react';
import { Header } from './components/layout/Header';
import { CashflowChart } from './components/dashboard/CashflowChart';
import { AccountsSummary } from './components/dashboard/AccountsSummary';
import { QuickActions } from './components/dashboard/QuickActions';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <CashflowChart />
          </div>
          <div>
            <AccountsSummary />
          </div>
          <div className="lg:col-span-3">
            <QuickActions />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;