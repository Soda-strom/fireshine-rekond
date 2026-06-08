'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const links = [
  { href: '/#tjanster',  label: 'Tjänster'             },
  { href: '/om',         label: 'Om mig'               },
  { href: '/lackstift',  label: 'Lackstift erbjudande' },
  { href: '#kontakt',    label: 'Kontakt'              },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const pathname = usePathname()
  const isHome   = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onHero = isHome && !scrolled

  return (
    <header
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 40,
        transition: 'background 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease',
        background: onHero ? 'transparent' : 'rgba(250,248,245,0.94)',
        borderBottom: onHero ? '1px solid transparent' : '1px solid var(--border)',
        backdropFilter: onHero ? 'none' : 'blur(16px)',
        WebkitBackdropFilter: onHero ? 'none' : 'blur(16px)',
      }}
    >
      <div
        className="navbar-inner"
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: '0.55rem', flexShrink: 0 }}>
          <span
            style={{
              fontFamily: "var(--font-display), 'Bebas Neue', sans-serif",
              fontSize: '1.75rem',
              fontWeight: 400,
              letterSpacing: '0.06em',
              color: onHero ? '#ffffff' : 'var(--text)',
              transition: 'color 0.35s ease',
              lineHeight: 1,
            }}
          >
            FIRE<span style={{ color: 'var(--fire)' }}>SHINE</span>
          </span>
          <span
            style={{
              fontFamily: "var(--font-body), 'Outfit', sans-serif",
              fontSize: '0.56rem',
              fontWeight: 500,
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: onHero ? 'rgba(255,255,255,0.35)' : 'var(--text-dim)',
              transition: 'color 0.35s ease',
            }}
          >
            Recond
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="nav-desktop"
          style={{ display: 'flex', alignItems: 'center', gap: '2.2rem' }}
        >
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link${onHero ? ' nav-link-light' : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link href="/boka" className={`nav-desktop btn-primary`}>
          Boka tid
        </Link>

        {/* Mobile hamburger */}
        <button
          aria-label="Öppna meny"
          onClick={() => setMenuOpen(v => !v)}
          className="nav-mobile"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            padding: '4px',
          }}
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              style={{
                display: 'block',
                width: 22,
                height: 1.5,
                background: onHero ? '#ffffff' : 'var(--text)',
                transition: 'all 0.22s var(--ease-out)',
                transform: menuOpen
                  ? i === 0
                    ? 'translateY(6.5px) rotate(45deg)'
                    : i === 2
                    ? 'translateY(-6.5px) rotate(-45deg)'
                    : 'scaleX(0)'
                  : 'none',
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            background: 'rgba(250,248,245,0.97)',
            borderTop: '1px solid var(--border)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
          }}
        >
          <div style={{ padding: '1rem 1.5rem 1.75rem' }}>
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'block',
                  padding: '0.9rem 0',
                  borderBottom: '1px solid var(--border)',
                  fontFamily: "var(--font-body), 'Outfit', sans-serif",
                  fontWeight: 400,
                  fontSize: '0.95rem',
                  letterSpacing: '0.05em',
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/boka"
              className="btn-primary"
              onClick={() => setMenuOpen(false)}
              style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center' }}
            >
              Boka tid
            </Link>
          </div>
        </div>
      )}

      <style>{`
        .navbar-inner { height: 76px; }
        .nav-desktop  { display: flex !important; }
        .nav-mobile   { display: none !important; }

        @media (max-width: 768px) {
          .navbar-inner { height: 62px; }
          .nav-desktop  { display: none !important; }
          .nav-mobile   { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
