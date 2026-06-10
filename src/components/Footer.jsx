import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <Link to="/">
          <img src="/logo.png" alt="All Set Digital Solutions" className="h-14 w-auto" />
        </Link>
        <div className="flex flex-col items-center gap-2 text-sm text-slate-500 sm:items-end">
          <Link to="/contact" className="transition hover:text-emerald-600">
            Privacy Policy
          </Link>
          <p>© 2024 All Set Digital Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
