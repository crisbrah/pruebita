import { useState } from 'react'

const navLinks = [
  { label: 'Nuestra Misión', href: '#mission', active: true },
  { label: 'Reuniones', href: '#gatherings' },
  { label: 'Ministerios', href: '#ministries' },
  { label: 'Participa', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md">
      <nav className="flex justify-between items-center px-6 md:px-12 py-6 max-w-screen-2xl mx-auto">
        <div className="text-2xl font-headline italic text-primary-container">
          Casa Evangélica de Oración
        </div>

        <div className="hidden md:flex items-center space-x-10 font-headline font-medium tracking-tight">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={
                link.active
                  ? 'text-secondary font-semibold border-b-2 border-secondary pb-1'
                  : 'text-on-surface hover:text-primary-container transition-colors'
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-6">
          <button className="hover:opacity-80 transition-opacity duration-300">
            <span className="material-symbols-outlined text-primary-container">search</span>
          </button>
          <button className="bg-secondary text-on-secondary px-8 py-2.5 rounded-lg font-medium transition-transform active:scale-95 duration-200 ease-in-out">
            Donar
          </button>
          <button
            className="md:hidden hover:opacity-80"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="material-symbols-outlined text-primary-container">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-surface/95 backdrop-blur-md px-6 pb-6 space-y-4 font-headline">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-on-surface hover:text-primary-container transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
