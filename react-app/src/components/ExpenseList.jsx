import ExpenseCard from './ExpenseCard'

export default function ExpenseList({ expenses, onDelete, onEdit }) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-xl">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Expenses</h2>
        <span className="text-sm text-slate-400">{expenses.length} items</span>
      </div>

      <div className="mt-4 grid gap-3">
        {expenses.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-700 p-6 text-center text-sm text-slate-400">
            No expenses match your filters yet.
          </div>
        ) : (
          expenses.map(exp => (
            <ExpenseCard key={exp.id} expense={exp} onDelete={onDelete} onEdit={onEdit} />
          ))
        )}
      </div>
    </section>
  )
}