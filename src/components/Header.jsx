import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navLinks, PHONE, PHONE_HREF } from '../data/siteData'
import { PhoneIcon } from './Icons'

function isNavLinkActive(pathname, to) {
  if (to === '/') return pathname === '/'
  return pathname === to
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:gap-4 lg:px-8">
        <Link to="/" className="min-w-0 shrink" onClick={() => setOpen(false)}>
          <img
            src="/logo.png"
            alt="All Set Digital Solutions"
            className="h-11 w-auto sm:h-14 lg:h-16"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = isNavLinkActive(pathname, link.to)

            return (
              <NavLink
                key={link.to}
                to={link.to}
                end
                className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                  isActive ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-600'
                }`}
              >
                {link.label}
              </NavLink>
            )
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={PHONE_HREF}
            className="flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-emerald-500 text-white transition hover:bg-emerald-600 min-[400px]:h-auto min-[400px]:w-auto min-[400px]:px-3 min-[400px]:py-2 min-[400px]:text-xs min-[400px]:font-semibold sm:px-4 sm:py-2.5 sm:text-sm"
          >
            <PhoneIcon className="h-4 w-4 shrink-0" />
            <span className="hidden whitespace-nowrap min-[400px]:inline">{PHONE}</span>
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-700 lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = isNavLinkActive(pathname, link.to)

              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-sm font-medium ${
                    isActive ? 'bg-emerald-50 text-emerald-700' : 'text-slate-700'
                  }`}
                >
                  {link.label}
                </NavLink>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}
