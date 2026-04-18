import { formatCurrency } from '../utils/analytics'

export default function HeroSection({ monthLabel, totalSpend }) {
  return (
    <section className="mt-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-brand-muted">Consistency and Community</p>
          <h1 className="mt-3 text-3xl font-semibold text-brand-text sm:text-4xl">
            Manage home expenses with confidence.
          </h1>
          <p className="mt-3 max-w-xl text-sm text-brand-muted">
            Stay on top of every purchase, split spending with your family, and build better habits
            together.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-brand-surface/80 px-6 py-4 shadow-xl">
          <p className="text-xs uppercase tracking-wide text-brand-muted">{monthLabel}</p>
          <p className="mt-2 text-2xl font-semibold text-brand-primary">
            {formatCurrency(totalSpend)}
          </p>
          <p className="text-xs text-brand-muted">total spend this month</p>
        </div>
      </div>

    </section>
  )
}