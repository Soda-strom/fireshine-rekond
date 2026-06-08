'use client'

import Link from 'next/link'
import BokaButton from './BokaButton'

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
    </svg>
  )
}


function SocialLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        width: 38,
        height: 38,
        border: '1px solid rgba(255,255,255,0.12)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'rgba(255,255,255,0.42)',
        textDecoration: 'none',
        transition: 'border-color 200ms ease, color 200ms ease, background 200ms ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--fire)'
        e.currentTarget.style.color = 'var(--fire)'
        e.currentTarget.style.background = 'rgba(200,90,16,0.08)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
        e.currentTarget.style.color = 'rgba(255,255,255,0.42)'
        e.currentTarget.style.background = 'transparent'
      }}
    >
      {children}
    </a>
  )
}

const serviceLinks = [
  { label: 'Polering',        slug: 'polering'       },
  { label: 'Lackskydd',       slug: 'lackskydd'      },
  { label: 'Invändig Rekond', slug: 'invandig-rekond'},
  { label: 'Utvändig Rekond', slug: 'utvandig-rekond'},
  { label: 'Helrekond',       slug: 'helrekond'      },
]

const navLinks = [
  { label: 'Tjänster',             href: '/#tjanster'   },
  { label: 'Om mig',               href: '/om'          },
  { label: 'Lackstift erbjudande', href: '/lackstift'   },
  { label: 'Resultat',             href: '/om#resultat' },
]

export default function Footer() {
  return (
    <>
      {/* ── KARTA / KONTAKT ── */}
      <div id="kontakt" style={{ background: '#0c0a08', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{
            fontFamily: "var(--font-body), 'Outfit', sans-serif",
            fontSize: '0.55rem',
            fontWeight: 500,
            letterSpacing: '0.26em',
            textTransform: 'uppercase',
            color: 'var(--fire)',
            marginBottom: '1.4rem',
          }}>
            Hitta hit
          </p>
          <h2 style={{
            fontFamily: "var(--font-display), 'Bebas Neue', sans-serif",
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 400,
            letterSpacing: '0.04em',
            color: '#fff',
            lineHeight: 1,
            marginBottom: '3rem',
          }}>
            VI FINNS I PITEÅ
          </h2>

          <div className="map-layout">
            {/* Karta */}
            <div className="map-wrap">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=21.45%2C65.30%2C21.51%2C65.34&layer=mapnik&marker=65.3173%2C21.4791"
                width="100%"
                height="320"
                style={{ border: 0, display: 'block' }}
                loading="lazy"
                title="Fireshine Recond — Piteå"
              />
            </div>

            {/* Info */}
            <div className="map-info">
              <p style={{
                fontFamily: "var(--font-body), 'Outfit', sans-serif",
                fontSize: '0.52rem',
                fontWeight: 500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.2)',
                marginBottom: '0.75rem',
              }}>Adress</p>
              <p style={{
                fontFamily: "var(--font-body), 'Outfit', sans-serif",
                fontSize: '1rem',
                fontWeight: 300,
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.7,
                marginBottom: '2.5rem',
              }}>
                Centrala Piteå
              </p>

              <a
                href="https://maps.google.com/?q=Piteå+centrum"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: "var(--font-body), 'Outfit', sans-serif",
                  fontSize: '0.65rem',
                  fontWeight: 500,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#fff',
                  textDecoration: 'none',
                  background: 'var(--fire)',
                  padding: '0.9rem 2rem',
                  transition: 'background 160ms ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--fire-hover)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--fire)')}
              >
                Öppna i Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', background: '#0c0a08' }}>
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '3.5rem 2rem',
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            gap: '3rem',
          }}
          className="footer-cols"
        >
          {/* Brand */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <span
                style={{
                  fontFamily: "var(--font-display), 'Bebas Neue', sans-serif",
                  fontSize: '1.9rem',
                  fontWeight: 400,
                  letterSpacing: '0.06em',
                  color: '#ffffff',
                  display: 'block',
                  lineHeight: 1,
                }}
              >
                FIRE<span style={{ color: 'var(--fire)' }}>SHINE</span>
              </span>
              <span
                style={{
                  fontFamily: "var(--font-body), 'Outfit', sans-serif",
                  display: 'block',
                  fontSize: '0.56rem',
                  fontWeight: 500,
                  letterSpacing: '0.24em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.25)',
                  marginTop: '0.15rem',
                }}
              >
                Recond
              </span>
            </div>
            <p
              style={{
                fontWeight: 300,
                fontSize: '0.84rem',
                lineHeight: 1.8,
                color: 'rgba(255,255,255,0.32)',
                maxWidth: 230,
                marginBottom: '1.6rem',
              }}
            >
              Professionell rekond i Piteå.
              Varje fordon lämnar i showroom-skick.
            </p>

            {/* Social media */}
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              <SocialLink href="https://www.instagram.com/fireshine_recond" label="Instagram">
                <InstagramIcon />
              </SocialLink>
              <SocialLink href="https://www.tiktok.com/@3milialindmark" label="TikTok">
                <TikTokIcon />
              </SocialLink>
            </div>
          </div>

          {/* Tjänster */}
          <div>
            <p
              style={{
                fontSize: '0.63rem',
                fontWeight: 500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.2)',
                marginBottom: '1.25rem',
              }}
            >
              Tjänster
            </p>
            {serviceLinks.map(s => (
              <Link
                key={s.slug}
                href={`/tjanster/${s.slug}`}
                style={{
                  display: 'block',
                  fontWeight: 300,
                  fontSize: '0.84rem',
                  color: 'rgba(255,255,255,0.32)',
                  textDecoration: 'none',
                  marginBottom: '0.6rem',
                  transition: 'color 0.18s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.32)')}
              >
                {s.label}
              </Link>
            ))}
          </div>

          {/* Navigera */}
          <div>
            <p
              style={{
                fontSize: '0.63rem',
                fontWeight: 500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.2)',
                marginBottom: '1.25rem',
              }}
            >
              Navigera
            </p>
            {navLinks.map(l => (
              <Link
                key={l.label}
                href={l.href}
                style={{
                  display: 'block',
                  fontWeight: 300,
                  fontSize: '0.84rem',
                  color: 'rgba(255,255,255,0.32)',
                  textDecoration: 'none',
                  marginBottom: '0.6rem',
                  transition: 'color 0.18s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.32)')}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Kontakt */}
          <div>
            <p
              style={{
                fontSize: '0.63rem',
                fontWeight: 500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.2)',
                marginBottom: '1.25rem',
              }}
            >
              Kontakt
            </p>
            <a
              href="mailto:fireshine_recond@hotmail.com"
              style={{
                display: 'block',
                fontWeight: 300,
                fontSize: '0.84rem',
                color: 'rgba(255,255,255,0.32)',
                textDecoration: 'none',
                marginBottom: '0.6rem',
                transition: 'color 0.18s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.32)')}
            >
              fireshine_recond@hotmail.com
            </a>
            <BokaButton
              className="btn-primary"
              style={{
                fontSize: '0.65rem',
                padding: '0.7rem 1.5rem',
                marginTop: '0.75rem',
                display: 'inline-flex',
              }}
            >
              Boka tid →
            </BokaButton>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.05)',
            padding: '1.25rem 2rem',
            maxWidth: 1200,
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
          }}
        >
          <p
            suppressHydrationWarning
            style={{
              fontWeight: 300,
              fontSize: '0.73rem',
              color: 'rgba(255,255,255,0.18)',
              letterSpacing: '0.04em',
            }}
          >
            © {new Date().getFullYear()} Fireshine Recond. Alla rättigheter förbehållna.
          </p>
          <span
            className="font-display"
            style={{
              fontSize: '0.85rem',
              color: 'var(--fire)',
              letterSpacing: '0.18em',
              opacity: 0.65,
            }}
          >
            FIRESHINE ✦ RECOND
          </span>
        </div>
      </footer>
    </>
  )
}
