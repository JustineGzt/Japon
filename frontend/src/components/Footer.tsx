import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import nuages1 from '../assets/japon/nuages1.png'

const links = [
  { label: 'À PROPOS', to: '/a-propos' },
  { label: 'LIVRAISON ET RETOURS', to: '/livraison-et-retours' },
  { label: 'MENTIONS LÉGALES', to: '/mentions-legales' },
  { label: 'CONTACT', to: '/contact' },
]

export default function Footer() {
  const cloudsBackRef = useRef<HTMLImageElement>(null)
  const cloudsFrontRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5
      const y = e.clientY / window.innerHeight - 0.5

      if (cloudsBackRef.current) {
        cloudsBackRef.current.style.transform = `translate3d(${x * 18}px, ${y * 10}px, 0) scale(1.05)`
      }
      if (cloudsFrontRef.current) {
        cloudsFrontRef.current.style.transform = `translate3d(${x * 38}px, ${y * 20}px, 0) scale(1.1)`
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#7a1b22] text-white">
      <img
        ref={cloudsBackRef}
        src={nuages1}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 -z-20 h-auto w-full opacity-60 transition-transform duration-200 ease-out will-change-transform"
      />
      <img
        ref={cloudsFrontRef}
        src={nuages1}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 -z-10 h-auto w-full transition-transform duration-200 ease-out will-change-transform"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
        <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-6 sm:text-left">
          <nav className="flex flex-col items-center gap-2 text-sm font-semibold tracking-wide sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-2">
            {links.map(({ label, to }) => (
              <Link key={label} to={to} className="whitespace-nowrap hover:opacity-80">
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <span className="text-sm font-extrabold tracking-wide">SUIVEZ-NOUS</span>
            <div className="flex items-center gap-2">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-400 text-[#7a1b22] hover:opacity-80"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M13.5 21v-7.5H16l.4-3H13.5V8.4c0-.87.24-1.46 1.5-1.46H16.5V4.35A20 20 0 0 0 14.2 4.2c-2.28 0-3.84 1.39-3.84 3.94v2.36H8v3h2.36V21h3.14Z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-400 text-[#7a1b22] hover:opacity-80"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
                  <circle cx="12" cy="12" r="3.8" />
                  <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-400 text-[#7a1b22] hover:opacity-80"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <rect x="3" y="6" width="18" height="12" rx="4" fill="none" stroke="currentColor" strokeWidth={2} />
                  <path d="M10.5 9.5v5l4.5-2.5Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-white/70">
          © 2024 STYLE JAPONAIS. Tous droits réservés.
        </p>
      </div>
    </footer>
  )
}
