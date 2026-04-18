export default function CategoryFilter({ categories, filters, onChange }) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-semibold">Filters</h2>
        <button
          type="button"
          onClick={() => onChange({ category: 'all', month: '' })}
          className="text-sm text-slate-400 hover:text-slate-200"
        >
          Reset
        </button>
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm text-slate-300">Category</label>
          <select
            className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-2 text-sm"
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
          <label className="text-sm text-slate-300">Month</label>
          <input
            type="month"
            className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-2 text-sm"
            value={filters.month}
            onChange={event => onChange({ ...filters, month: event.target.value })}
          />
        </div>
      </div>
    </section>
  )
}