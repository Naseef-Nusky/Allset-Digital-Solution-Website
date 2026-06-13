import { Link } from 'react-router-dom'
import { MailIcon, PhoneIcon } from './Icons'
import { EMAIL, EMAIL_HREF, PHONE, PHONE_HREF } from '../data/siteData'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <Link to="/" className="shrink-0">
            <img src="/logo.png" alt="All Set Digital Solutions" className="h-14 w-auto" />
          </Link>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Contact
            </p>
            <a
              href={PHONE_HREF}
              className="flex items-center gap-3 text-sm text-slate-600 transition hover:text-emerald-600"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <PhoneIcon className="h-4 w-4" />
              </span>
              {PHONE}
            </a>
            <a
              href={EMAIL_HREF}
              className="flex items-center gap-3 text-sm text-slate-600 transition hover:text-emerald-600"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <MailIcon className="h-4 w-4" />
              </span>
              <span className="break-all">{EMAIL}</span>
            </a>
          </div>

          <div className="flex flex-col gap-2 text-sm text-slate-500 lg:items-end">
            <Link to="/privacy-policy" className="transition hover:text-emerald-600">
              Privacy Policy
            </Link>
            <p>© 2026 All Set Digital Solutions. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
