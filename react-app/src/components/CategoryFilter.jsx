export default function CategoryFilter({ categories, filters, onChange }) {
  return (
    <section className="rounded-2xl border border-white/10 bg-brand-surface/80 p-5 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-semibold">Filters</h2>
        <button
          type="button"
          onClick={() => onChange({ category: 'all', month: '' })}
          className="text-sm text-brand-muted hover:text-brand-text"
        >
          Reset
        </button>
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm text-brand-muted">Category</label>
          <select
            className="mt-1 w-full rounded-lg bg-[#262626] px-4 py-2 text-sm text-brand-text"
            value={filters.category}
            onChange={event => onChange({ ...filters, category: event.target.value })}
          >
            <option value="all">All categories</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm text-brand-muted">Month</label>
          <input
            type="month"
            className="mt-1 w-full rounded-lg bg-[#262626] px-4 py-2 text-sm text-brand-text"
            value={filters.month}
            onChange={event => onChange({ ...filters, month: event.target.value })}
          />
        </div>
      </div>
    </section>
  )
}