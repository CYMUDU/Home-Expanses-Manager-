import SpendingChart from './SpendingChart'
import FamilyPanel from './FamilyPanel'

export default function DashboardAnalytics({
  chartData,
  trendData,
  totalSpend,
  familySize,
  onFamilySizeChange,
  monthLabel,
}) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold">Spending Insights</h2>
        <p className="text-sm text-brand-muted">Swipe through your analytics highlights.</p>
      </div>

      <div className="flex snap-x gap-3 overflow-x-auto pb-3 hide-scrollbar">
        <div className="min-w-[85vw] snap-center sm:min-w-[260px]">
          <SpendingChart chartData={chartData} trendData={trendData} />
        </div>
        <div className="min-w-[85vw] snap-center sm:min-w-[260px]">
          <FamilyPanel
            totalSpend={totalSpend}
            familySize={familySize}
            onFamilySizeChange={onFamilySizeChange}
            monthLabel={monthLabel}
          />
        </div>
        <div className="min-w-[85vw] snap-center sm:min-w-[260px] rounded-2xl border border-white/10 bg-brand-surface/80 p-5">
          <p className="text-sm text-brand-muted">Monthly goal</p>
          <p className="mt-3 text-2xl font-semibold text-brand-primary">$1,200</p>
          <p className="text-xs text-brand-muted">78% achieved</p>
          <div className="mt-4 h-2 w-full rounded-full bg-[#262626]">
            <div className="h-2 w-3/4 rounded-full bg-brand-primary" />
          </div>
        </div>
      </div>
    </section>
  )
}