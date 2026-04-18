import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const defaultValues = {
  name: '',
  date: '',
  amount: '',
  category: '',
  recurring: false,
  household: true,
  member: '',
}

export default function ExpenseForm({ categories, onSubmit, editingExpense, onCancelEdit }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({ defaultValues })

  const household = watch('household')

  useEffect(() => {
    if (editingExpense) {
      reset({
        ...defaultValues,
        ...editingExpense,
        amount: editingExpense.amount?.toString() ?? '',
      })
    } else {
      reset(defaultValues)
    }
  }, [editingExpense, reset])

  const handleFormSubmit = values => {
    const payload = {
      ...values,
      amount: Number(values.amount),
      recurring: Boolean(values.recurring),
      household: Boolean(values.household),
      member: values.household ? '' : values.member,
      recurringId: values.recurring
        ? values.recurringId || (editingExpense?.recurringId ?? (crypto.randomUUID ? crypto.randomUUID() : Date.now().toString()))
        : '',
    }

    onSubmit(payload)
    if (!editingExpense) reset(defaultValues)
  }

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-xl font-semibold">{editingExpense ? 'Edit expense' : 'Add new expense'}</h2>
        {editingExpense && (
          <button
            className="text-sm text-slate-400 hover:text-slate-200"
            type="button"
            onClick={onCancelEdit}
          >
            Cancel edit
          </button>
        )}
      </div>

      <form onSubmit={handleSubmit(handleFormSubmit)} className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="md:col-span-2">
          <label className="text-sm text-slate-300">Item name</label>
          <input
            className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-2 text-sm focus:border-emerald-400 focus:outline-none"
            placeholder="Groceries"
            {...register('name', {
              required: 'Please enter what was purchased',
              minLength: { value: 2, message: 'Please enter what was purchased' },
            })}
          />
          {errors.name && <p className="mt-1 text-xs text-rose-400">{errors.name.message}</p>}
        </div>

        <div>
          <label className="text-sm text-slate-300">Date</label>
          <input
            type="date"
            className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-2 text-sm focus:border-emerald-400 focus:outline-none"
            {...register('date', {
              required: 'Date cannot be in the future',
              validate: value => {
                if (!value) return 'Date cannot be in the future'
                const selected = new Date(value)
                const today = new Date()
                today.setHours(23, 59, 59, 999)
                return selected <= today || 'Date cannot be in the future'
              },
            })}
          />
          {errors.date && <p className="mt-1 text-xs text-rose-400">{errors.date.message}</p>}
        </div>

        <div>
          <label className="text-sm text-slate-300">Amount</label>
          <input
            type="number"
            step="0.01"
            className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-2 text-sm focus:border-emerald-400 focus:outline-none"
            {...register('amount', {
              required: 'Enter a valid amount',
              min: { value: 0.01, message: 'Enter a valid amount' },
              max: { value: 999999, message: 'Enter a valid amount' },
            })}
          />
          {errors.amount && <p className="mt-1 text-xs text-rose-400">{errors.amount.message}</p>}
        </div>

        <div>
          <label className="text-sm text-slate-300">Category</label>
          <select
            className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-2 text-sm focus:border-emerald-400 focus:outline-none"
            {...register('category', { required: 'Please choose a category' })}
          >
            <option value="">Select category</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && <p className="mt-1 text-xs text-rose-400">{errors.category.message}</p>}
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" {...register('recurring')} />
          <label className="text-sm text-slate-300">Recurring monthly</label>
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" {...register('household')} defaultChecked />
          <label className="text-sm text-slate-300">Household expense</label>
        </div>

        {!household && (
          <div className="md:col-span-2">
            <label className="text-sm text-slate-300">Family member</label>
            <input
              className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-2 text-sm focus:border-emerald-400 focus:outline-none"
              placeholder="Who made this purchase?"
              {...register('member', {
                validate: value => {
                  if (!household && !value) return 'Who made this purchase?'
                  return true
                },
              })}
            />
            {errors.member && <p className="mt-1 text-xs text-rose-400">{errors.member.message}</p>}
          </div>
        )}

        <div className="md:col-span-2">
          <button
            className="w-full rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
            type="submit"
          >
            {editingExpense ? 'Update expense' : 'Add expense'}
          </button>
        </div>
      </form>
    </section>
  )
}