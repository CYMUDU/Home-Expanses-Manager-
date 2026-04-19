import { useMemo, useState, useEffect } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import VideoSection from './components/VideoSection'
import ExpenseForm from './components/ExpenseForm'
import CategoryFilter from './components/CategoryFilter'
import ExpenseList from './components/ExpenseList'
import DashboardAnalytics from './components/DashboardAnalytics'
import Footer from './components/Footer'
import { categories } from './utils/categories'
import { getMonthKey, getMonthLabel, getLastSixMonths } from './utils/date'
import { sumTotal, sumByCategory, sumByMonth } from './utils/analytics'

const STORAGE_KEY = 'expenses_v2'
const FAMILY_KEY = 'family_size_v2'

export default function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  })
  const [filters, setFilters] = useState({ category: 'all', month: '' })
  const [editingExpense, setEditingExpense] = useState(null)
  const [familySize, setFamilySize] = useState(() => {
    const saved = localStorage.getItem(FAMILY_KEY)
    return saved ? Number(saved) : 3
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses))
  }, [expenses])

  useEffect(() => {
    localStorage.setItem(FAMILY_KEY, String(familySize))
  }, [familySize])

  const currentMonthKey = getMonthKey(new Date())
  const currentMonthLabel = getMonthLabel(new Date())

  const currentMonthExpenses = useMemo(
    () => expenses.filter(exp => exp.date?.startsWith(currentMonthKey)),
    [expenses, currentMonthKey]
  )

  const filteredExpenses = useMemo(() => {
    return expenses.filter(exp => {
      const matchCategory = filters.category === 'all' || exp.category === filters.category
      const matchMonth = !filters.month || (exp.date && exp.date.startsWith(filters.month))
      return matchCategory && matchMonth
    })
  }, [expenses, filters])

  const totalSpend = sumTotal(currentMonthExpenses)

  const handleSaveExpense = data => {
    if (editingExpense) {
      setExpenses(prev =>
        prev.map(exp => (exp.id === editingExpense.id ? { ...exp, ...data } : exp))
      )
      setEditingExpense(null)
      return
    }

    const id = typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID()
      : Date.now().toString()

    setExpenses(prev => [
      {
        ...data,
        id,
      },
      ...prev,
    ])
  }

  const handleDelete = id => {
    setExpenses(prev => prev.filter(exp => exp.id !== id))
    if (editingExpense && editingExpense.id === id) {
      setEditingExpense(null)
    }
  }

  const recurringBase = useMemo(() => {
    const map = new Map()
    expenses
      .filter(exp => exp.recurring && exp.recurringId)
      .forEach(exp => {
        const existing = map.get(exp.recurringId)
        if (!existing || new Date(exp.date) > new Date(existing.date)) {
          map.set(exp.recurringId, exp)
        }
      })
    return Array.from(map.values())
  }, [expenses])

  const recurringSuggestions = recurringBase.filter(exp => {
    return !expenses.some(
      item => item.recurringId === exp.recurringId && item.date?.startsWith(currentMonthKey)
    )
  })

  const handleAddRecurring = exp => {
    const id = typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID()
      : Date.now().toString()
    const today = new Date().toISOString().slice(0, 10)
    setExpenses(prev => [
      {
        ...exp,
        id,
        date: today,
      },
      ...prev,
    ])
  }

  const chartData = sumByCategory(currentMonthExpenses, categories)
  const trendData = sumByMonth(expenses, getLastSixMonths())

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      <Header />

      <main className="mx-auto max-w-6xl px-4 pb-16">
        <HeroSection monthLabel={currentMonthLabel} totalSpend={totalSpend} />

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="order-2 lg:order-1">
            <DashboardAnalytics
              chartData={chartData}
              trendData={trendData}
              totalSpend={totalSpend}
              familySize={familySize}
              onFamilySizeChange={setFamilySize}
              monthLabel={currentMonthLabel}
            />
          </div>

          <div className="order-1 lg:order-2">
            <div className="mx-auto w-full max-w-2xl space-y-6">
              <h2 className="text-center text-lg font-semibold lg:text-left">Add new expense</h2>
              <ExpenseForm
                categories={categories}
                onSubmit={handleSaveExpense}
                editingExpense={editingExpense}
                onCancelEdit={() => setEditingExpense(null)}
              />

              {recurringSuggestions.length > 0 && (
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-brand-surface/90 p-5 shadow-xl">
                  <div className="pointer-events-none absolute -top-10 right-6 h-24 w-24 rounded-full bg-brand-primary/20 blur-3xl" />
                  <h3 className="text-lg font-semibold">Recurring suggestions</h3>
                  <p className="mt-1 text-sm text-brand-muted">
                    One-click re-entry for items marked as recurring this month.
                  </p>
                  <div className="mt-4 grid gap-3">
                    {recurringSuggestions.map(item => (
                      <div
                        key={item.recurringId}
                        className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/10 bg-brand-bg/60 px-4 py-3"
                      >
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-xs text-brand-muted">
                            {item.category} · ${Number(item.amount).toFixed(2)}
                          </p>
                        </div>
                        <button
                          className="rounded-full bg-brand-primary px-4 py-1 text-sm font-semibold text-brand-bg transition hover:brightness-110"
                          onClick={() => handleAddRecurring(item)}
                        >
                          Add
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <CategoryFilter
                categories={categories}
                filters={filters}
                onChange={setFilters}
              />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <ExpenseList
            expenses={filteredExpenses}
            onDelete={handleDelete}
            onEdit={setEditingExpense}
          />
        </div>

        <VideoSection />
      </main>

      <Footer />
    </div>
  )
}
