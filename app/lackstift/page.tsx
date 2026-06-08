'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import BokaButton from '../components/BokaButton'

function useReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(e => {
          if (e.isIntersecting)
            e.target.querySelectorAll<HTMLElement>('.reveal').forEach(el =>
              el.classList.add('visible')
            )
        }),
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref])
}

export default function LackstiftPage() {
  const ctaRef = useRef<HTMLElement>(null)
  useReveal(ctaRef)

  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="page-hero-dark">
        <div className="page-hero-inner">
          <p className="page-hero-label">Exklusivt samarbete</p>
          <h1 className="font-display page-hero-title">
            LACKSTIFT<br />ERBJUDANDE
          </h1>
        </div>
      </section>

      {/* ── SAMARBETE BILFÄRG.SE ── */}
      <section className="partner-section" id="lackstift">
        <div className="partner-split">

          <div className="partner-photo-wrap">
            <Image
              src="/samarbete.png"
              alt="Samarbete med bilfärg.se"
              fill
              unoptimized
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              sizes="(max-width: 900px) 100vw, 580px"
            />
          </div>

          <div className="partner-text">
            <p className="section-label" style={{ marginBottom: '1.4rem' }}>
              Exklusivt samarbete
            </p>
            <h2 className="font-display partner-heading">
              25% PÅ<br />LACKSTIFT
            </h2>
            <p className="partner-desc">
              Boka rekond hos Fireshine och få en personlig kod som ger&nbsp;
              <strong>25&nbsp;% rabatt</strong> på hela lackstiftssortimentet
              hos bilfärg.se.
            </p>
            <a
              href="https://bilfarg.se"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ marginTop: '2.5rem', display: 'inline-flex' }}
            >
              Besök bilfärg.se →
            </a>
          </div>

        </div>
      </section>

      {/* ── BOKA CTA ── */}
      <section ref={ctaRef} className="cta-final" id="boka">
        <p className="font-serif cta-ready reveal">Redo?</p>
        <p className="font-display cta-heading reveal reveal-delay-1">BOKA DIN REKOND</p>
        <BokaButton className="btn-primary reveal reveal-delay-2">Boka tid →</BokaButton>
      </section>
    </>
  )
}
