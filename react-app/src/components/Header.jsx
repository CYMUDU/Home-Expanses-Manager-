import { formatCurrency } from '../utils/analytics'

export default function Header({ monthLabel, totalSpend }) {
  return (
    <header className="mb-8 flex flex-wrap items-start justify-between gap-4">
      <div>
        <p className="text-sm text-slate-400">Home Expense Manager</p>
        <h1 className="text-3xl font-semibold">{monthLabel}</h1>
      </div>
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 px-6 py-4 text-right shadow-lg">
        <p className="text-xs uppercase tracking-wide text-slate-400">Total spend</p>
        <p className="text-2xl font-semibold">{formatCurrency(totalSpend)}</p>
      </div>
    </header>
  )
}