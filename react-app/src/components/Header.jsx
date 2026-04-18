import { useState } from 'react'
import { Wallet, SunMoon, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Dashboard', href: '#' },
  { label: 'Family Panel', href: '#' },
  { label: 'Settings', href: '#' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-brand-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-surface">
            <Wallet className="h-5 w-5 text-brand-primary" />
          </div>
          <div>
            <p className="text-sm text-brand-muted">Expense Manager</p>
            <p className="text-lg font-semibold">ExpenseManager</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="rounded-full border border-white/10 p-2 text-brand-muted hover:text-brand-text">
            <SunMoon className="h-4 w-4" />
          </button>
          <button
            className="rounded-full border border-white/10 p-2 text-brand-muted hover:text-brand-text"
            onClick={() => setOpen(prev => !prev)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-brand-bg/90 px-4 pb-4 pt-2">
          <nav className="mx-auto flex max-w-6xl flex-col gap-2 text-sm">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-lg px-3 py-2 text-brand-muted hover:bg-white/5 hover:text-brand-text"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}