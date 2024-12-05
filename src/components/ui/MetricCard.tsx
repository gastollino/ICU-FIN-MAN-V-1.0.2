import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface MetricCardProps {
  label: string;
  value: string | number;
  trend?: 'up' | 'down';
  className?: string;
}

export function MetricCard({ label, value, trend, className = '' }: MetricCardProps) {
  return (
    <div className={`p-4 bg-gray-50 rounded-lg ${className}`}>
      <div className="flex items-center space-x-2 mb-2">
        <span className="text-sm text-gray-600">{label}</span>
        {trend && (
          trend === 'up' 
            ? <ArrowUpRight className="h-4 w-4 text-green-500" />
            : <ArrowDownRight className="h-4 w-4 text-red-500" />
        )}
      </div>
      <p className="text-xl font-semibold">
        {typeof value === 'number' ? `€${value.toLocaleString()}` : value}
      </p>
    </div>
  );
}