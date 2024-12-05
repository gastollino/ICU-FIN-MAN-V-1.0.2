import React from 'react';
import { LineChart } from 'lucide-react';
import { Card } from '../ui/Card';
import { MetricCard } from '../ui/MetricCard';
import { cashflowMetrics } from '../../data/cashflow';

export function CashflowChart() {
  return (
    <Card>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Cash Flow Overview</h2>
          <p className="text-sm text-gray-500">Last 30 days performance</p>
        </div>
        <LineChart className="h-6 w-6 text-gray-400" />
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-6">
        {cashflowMetrics.map((metric) => (
          <MetricCard
            key={metric.label}
            label={metric.label}
            value={metric.value}
            trend={metric.trend}
          />
        ))}
      </div>
      
      <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
        <p className="text-gray-400">Chart visualization would go here</p>
      </div>
    </Card>
  );
}