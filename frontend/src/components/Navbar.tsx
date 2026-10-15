import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/japon/logo.png'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'

const links = [
  { label: 'UNISEXE', to: '/unisexe' },
  { label: 'NOUVEAUTÉS', to: '#' },
  { label: 'EXCLUSIFS', to: '#' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { totalQuantity } = useCart()
  const { user } = useAuth()
  const accountPath = user ? '/compte' : '/connexion'

  return (
    <header className="bg-[#7a1b22] text-white">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 md:gap-8 md:px-6">
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <img src={logo} alt="Style Japonais" className="h-9 w-9 rounded-full object-cover md:h-10 md:w-10" />
          <span className="text-base font-bold leading-tight tracking-wide md:text-lg">
            STYLE
            <br />
            JAPONAIS
          </span>
        </Link>

        <nav className="hidden items-center gap-5 text-sm font-semibold tracking-wide md:flex lg:gap-6">
          {links.map(({ label, to }) => (
            <Link key={label} to={to} className="whitespace-nowrap hover:opacity-80">
              {label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 md:gap-5">
          <div className="hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-gray-500 sm:flex sm:w-32 md:w-40">
            <svg
              className="h-4 w-4 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.35-4.35" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              placeholder="Recherche"
              className="w-full bg-transparent text-sm text-gray-700 placeholder-gray-500 outline-none"
            />
          </div>

          <button type="button" aria-label="Rechercher" className="sm:hidden">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.35-4.35" strokeLinecap="round" />
            </svg>
          </button>

          <Link to={accountPath} aria-label="Mon compte" className="hidden md:block">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.5-7 8-7s8 3 8 7" strokeLinecap="round" />
            </svg>
          </Link>

          <Link to="/panier" aria-label={`Panier (${totalQuantity} article${totalQuantity > 1 ? 's' : ''})`} className="relative">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M6 6h15l-1.5 9h-12z" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 6 5 3H2" strokeLinecap="round" />
              <circle cx="9" cy="19" r="1.5" />
              <circle cx="17" cy="19" r="1.5" />
            </svg>
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-xs font-bold text-[#7a1b22]">
              {totalQuantity}
            </span>
          </Link>

          <button
            type="button"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 px-4 pb-4 pt-2 text-sm font-semibold tracking-wide md:hidden">
          {links.map(({ label, to }) => (
            <Link key={label} to={to} className="rounded px-2 py-2 hover:bg-white/10">
              {label}
            </Link>
          ))}
          <div className="mt-2 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-gray-500 sm:hidden">
            <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.35-4.35" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              placeholder="Recherche"
              className="w-full bg-transparent text-sm text-gray-700 placeholder-gray-500 outline-none"
            />
          </div>
          <Link to={accountPath} className="mt-1 rounded px-2 py-2 hover:bg-white/10">
            Mon compte
          </Link>
        </nav>
      )}
    </header>
  )
}
