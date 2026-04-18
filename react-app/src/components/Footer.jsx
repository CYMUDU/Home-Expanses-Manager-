import { Github, Twitter, Linkedin, MessageCircle } from 'lucide-react'

const footerLinks = {
  Products: ['Courses', 'Cohorts', 'FreeAPI'],
  Resources: ['Docs', 'Privacy Policy', 'Terms'],
}

const socialLinks = [
  { label: 'X', icon: Twitter },
  { label: 'GitHub', icon: Github },
  { label: 'LinkedIn', icon: Linkedin },
  { label: 'Discord', icon: MessageCircle },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-bg">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 md:grid-cols-4">
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h3 className="text-sm font-semibold text-brand-text">{title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-brand-muted">
              {links.map(link => (
                <li key={link}>
                  <a href="#" className="hover:text-brand-text">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-sm font-semibold text-brand-text">Social</h3>
          <ul className="mt-3 space-y-2 text-sm text-brand-muted">
            {socialLinks.map(({ label, icon: Icon }) => (
              <li key={label} className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-brand-primary" />
                <a href="#" className="hover:text-brand-text">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-brand-muted">
        © 2026 ExpenseManager. All rights reserved.
      </div>
    </footer>
  )
}