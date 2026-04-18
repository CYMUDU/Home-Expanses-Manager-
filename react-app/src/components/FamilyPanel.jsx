import { formatCurrency } from '../utils/analytics'
import { getDaysInMonth } from '../utils/date'

export default function FamilyPanel({ totalSpend, familySize, onFamilySizeChange }) {
  const daysInMonth = getDaysInMonth(new Date())
  const perPersonDaily = familySize > 0 ? totalSpend / familySize / daysInMonth : 0

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl">
      <h2 className="text-lg font-semibold">Family overview</h2>
      <p className="mt-1 text-sm text-slate-400">Track per-person daily spend.</p>

      <div className="mt-4 flex items-center gap-3">
        <label className="text-sm text-slate-300">Family size</label>
        <input
          type="number"
          min={1}
          value={familySize}
          onChange={event => onFamilySizeChange(Number(event.target.value) || 1)}
          className="w-20 rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-1 text-sm"
        />
      </div>

      <div className="mt-6 rounded-xl border border-slate-800/70 bg-slate-950/40 p-4">
        <p className="text-xs uppercase tracking-wide text-slate-400">Per-person daily average</p>
        <p className="text-2xl font-semibold">{formatCurrency(perPersonDaily)}</p>
      </div>
    </section>
  )
}