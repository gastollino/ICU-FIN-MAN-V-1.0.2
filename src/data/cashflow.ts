import { CashflowMetric } from '../types';

export const cashflowMetrics: CashflowMetric[] = [
  {
    label: 'Inflow',
    value: 245000,
    type: 'inflow',
    trend: 'up'
  },
  {
    label: 'Outflow',
    value: 182000,
    type: 'outflow',
    trend: 'down'
  },
  {
    label: 'Net Flow',
    value: 63000,
    type: 'net'
  }
];