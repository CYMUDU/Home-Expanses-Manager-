import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line,
} from 'recharts'

export default function SpendingChart({ chartData, trendData }) {
  return (
    <section className="rounded-2xl border border-white/10 bg-brand-surface/80 p-5 shadow-xl">
      <h2 className="text-lg font-semibold">Spending analytics</h2>
      <p className="text-sm text-brand-muted">Track what you spend most</p>

      <div className="mt-5 h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#262626" />
            <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} />
            <YAxis stroke="#9ca3af" fontSize={12} />
            <Tooltip
              contentStyle={{ background: '#111827', border: '1px solid #262626' }}
              cursor={{ fill: 'rgba(245,158,11,0.08)' }}
            />
            <Bar dataKey="total" fill="#f59e0b" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 h-36">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#262626" />
            <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} />
            <YAxis stroke="#9ca3af" fontSize={12} />
            <Tooltip
              contentStyle={{ background: '#111827', border: '1px solid #262626' }}
              cursor={{ stroke: '#f59e0b' }}
            />
            <Line type="monotone" dataKey="total" stroke="#f59e0b" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}