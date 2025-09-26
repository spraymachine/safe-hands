import { useState, useEffect } from 'react'

const navItems = [
  { href: '#hero', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 820) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className="top-bar">
      <div className="container">
        <div className="logo">Safe Hands</div>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`} id="primary-nav">
          {navItems.map(({ href, label }) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="phone" href="tel:+918074695965">
            +91 8074695965
          </a>
          <a className="btn-outline" href="#emergency">
            Emergency
          </a>
          <button
            className={`menu-toggle ${menuOpen ? 'active' : ''}`}
            id="menu-toggle"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

