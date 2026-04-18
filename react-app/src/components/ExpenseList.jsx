export default function ExpenseList({ expenses, onDelete, onEdit }) {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Recent Activity</h2>
          <p className="text-sm text-brand-muted">Latest expense entries</p>
        </div>
        <span className="text-xs text-brand-muted">{expenses.length} items</span>
      </div>

      <div className="space-y-3">
        {expenses.length === 0 ? (
          <div className="rounded-xl border border-white/10 bg-brand-surface/70 p-6 text-center text-sm text-brand-muted">
            No expenses match your filters yet.
          </div>
        ) : (
          expenses.map(exp => (
            <div
              key={exp.id}
              className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-white/10 bg-brand-surface/80 px-4 py-3"
            >
              <div>
                <p className="font-semibold text-brand-text">{exp.name}</p>
                <p className="text-xs text-brand-muted">{exp.date}</p>
              </div>
              <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                {exp.category}
              </span>
              <div className="text-right">
                <p className="text-sm font-semibold">${Number(exp.amount).toFixed(2)}</p>
                {exp.member && <p className="text-xs text-brand-muted">{exp.member}</p>}
              </div>
              <div className="flex gap-2">
                <button
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-brand-muted hover:text-brand-text"
                  onClick={() => onEdit(exp)}
                >
                  Edit
                </button>
                <button
                  className="rounded-full border border-rose-500/40 px-3 py-1 text-xs text-rose-300 hover:text-rose-200"
                  onClick={() => onDelete(exp.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  )
}