export type RawHeader =
  | 'Date'
  | 'Time'
  | 'Category'
  | 'Card'
  | 'Operation description'
  | 'Card currency amount'
  | 'Card currency'
  | 'Transaction currency amount'
  | 'Transaction currency'
  | 'Ending balance'
  | 'Rest currency'

export type Transaction = {
  id: string
  timestamp: number
  amount: number
  description: string
  balanceAfter: number
}

export type Category = {
  name: string
  value: string
}

export type SortedTransaction = Transaction & {
  category?: string
}

/* ===== */

export enum DataInputHeader {
  date = 'Date',
  time = 'Time',
  category = 'Category',
  card = 'Card',
  description = 'Operation description',
  amount = 'Card currency amount',
  currency = 'Card currency',
  transactionCurrencyAmount = 'Transaction currency amount',
  transactionCurrency = 'Transaction currency',
  balanceAfter = 'Ending balance',
  restCurrency = 'Rest currency',
}

export type RawTransaction = Record<DataInputHeader, string>

export type DataInputResult = string[]
