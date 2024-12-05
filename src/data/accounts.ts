import { Account } from '../types';

export const accounts: Account[] = [
  {
    id: '1',
    name: 'Main Business Account',
    bank: 'Deutsche Bank',
    balance: 324250.00,
    currency: '€',
    change: 2.4,
    type: 'business',
    iconColor: 'blue'
  },
  {
    id: '2',
    name: 'Savings Account',
    bank: 'Commerzbank',
    balance: 156800.00,
    currency: '€',
    change: 1.8,
    type: 'savings',
    iconColor: 'purple'
  }
];