import { formatCurrency } from '../utils/analytics'

export default function ExpenseCard({ expense, onDelete, onEdit }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-800/70 bg-slate-950/40 px-4 py-3 transition-all duration-300 hover:border-emerald-500/40">
      <div>
        <p className="font-medium">{expense.name}</p>
        <p className="text-xs text-slate-400">{expense.date}</p>
      </div>
      <span className="rounded-full bg-slate-800/80 px-3 py-1 text-xs font-semibold text-emerald-200">
        {expense.category}
      </span>
      <div className="text-right">
        <p className="text-sm font-semibold">{formatCurrency(expense.amount)}</p>
        {expense.member && (
          <p className="text-xs text-slate-400">{expense.member}</p>
        )}
      </div>
      <div className="flex gap-2">
        <button
          className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300 hover:border-emerald-400 hover:text-emerald-200"
          onClick={() => onEdit(expense)}
        >
          Edit
        </button>
        <button
          className="rounded-full border border-rose-500/60 px-3 py-1 text-xs text-rose-300 hover:border-rose-400 hover:text-rose-200"
          onClick={() => onDelete(expense.id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}