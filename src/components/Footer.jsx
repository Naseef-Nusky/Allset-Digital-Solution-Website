import { Link } from 'react-router-dom'
import { MailIcon, PhoneIcon } from './Icons'
import { EMAIL, EMAIL_HREF, navLinks, PHONE, PHONE_HREF } from '../data/siteData'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <Link to="/" className="shrink-0 sm:col-span-2 lg:col-span-3">
            <img src="/logo.png" alt="All Set Digital Solutions" className="h-14 w-auto" />
          </Link>

          <div className="space-y-3 sm:col-span-2 lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Quick Links
            </p>
            <nav className="grid grid-cols-2 gap-x-6 gap-y-2.5 min-[480px]:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-slate-600 transition hover:text-emerald-600"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/privacy-policy"
                className="text-sm text-slate-600 transition hover:text-emerald-600"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>

          <div className="space-y-3 sm:col-span-2 lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Contact
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:flex-col xl:flex-row xl:flex-wrap">
              <a
                href={PHONE_HREF}
                className="flex min-w-0 items-center gap-3 text-sm text-slate-600 transition hover:text-emerald-600"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <PhoneIcon className="h-4 w-4" />
                </span>
                <span className="whitespace-nowrap">{PHONE}</span>
              </a>
              <a
                href={EMAIL_HREF}
                className="flex min-w-0 items-center gap-3 text-sm text-slate-600 transition hover:text-emerald-600"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <MailIcon className="h-4 w-4" />
                </span>
                <span className="break-all">{EMAIL}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          <p>© 2026 All Set Digital Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
