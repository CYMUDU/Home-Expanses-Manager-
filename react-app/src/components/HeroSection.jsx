import { Play } from 'lucide-react'
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

      <div className="relative mt-8 overflow-hidden rounded-2xl border border-white/10">
        <div className="aspect-video w-full bg-gradient-to-br from-[#1f1f1f] via-[#0d0d0d] to-[#050505]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center gap-3 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-sm text-brand-muted">
            <Play className="h-4 w-4 text-brand-primary" />
            App overview video
          </div>
        </div>
      </div>
    </section>
  )
}