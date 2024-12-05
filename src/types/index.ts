export interface Account {
  id: string;
  name: string;
  bank: string;
  balance: number;
  currency: string;
  change: number;
  type: 'business' | 'savings';
  iconColor: string;
}

export interface CashflowMetric {
  label: string;
  value: number;
  type: 'inflow' | 'outflow' | 'net';
  trend?: 'up' | 'down';
}