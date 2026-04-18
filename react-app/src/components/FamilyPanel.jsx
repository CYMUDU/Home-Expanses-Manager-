import { formatCurrency } from '../utils/analytics'
import { getDaysInMonth } from '../utils/date'

export default function FamilyPanel({ totalSpend, familySize, onFamilySizeChange }) {
  const daysInMonth = getDaysInMonth(new Date())
  const perPersonDaily = familySize > 0 ? totalSpend / familySize / daysInMonth : 0

  return (
    <section className="rounded-2xl border border-white/10 bg-brand-surface/80 p-5 shadow-xl">
      <h2 className="text-lg font-semibold">Family overview</h2>
      <p className="text-sm text-brand-muted">Track per-person daily spend.</p>

      <div className="mt-4 flex items-center gap-3">
        <label className="text-sm text-brand-muted">Family size</label>
        <input
          type="number"
          min={1}
          value={familySize}
          onChange={event => onFamilySizeChange(Number(event.target.value) || 1)}
          className="w-20 rounded-lg bg-[#262626] px-3 py-1 text-sm text-brand-text"
        />
      </div>

      <div className="mt-6 rounded-xl border border-white/10 bg-brand-bg/60 p-4">
        <p className="text-xs uppercase tracking-wide text-brand-muted">Per-person daily average</p>
        <p className="text-2xl font-semibold">{formatCurrency(perPersonDaily)}</p>
      </div>
    </section>
  )
}