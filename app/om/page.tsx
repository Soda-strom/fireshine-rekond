'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import GalleryCarousel from '../components/GalleryCarousel'
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

export default function OmMig() {
  const aboutRef = useRef<HTMLElement>(null)
  useReveal(aboutRef)

  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="page-hero-dark">
        <div className="page-hero-inner">
          <p className="page-hero-label">Om Fireshine</p>
          <h1 className="font-display page-hero-title">
            BAKOM<br />FIRESHINE
          </h1>
        </div>
      </section>

      {/* ── OM EMILIA ── */}
      <section ref={aboutRef} className="statement-section" id="om-fireshine">
        <div className="about-split">

          <div className="about-photo-wrap reveal">
            <Image
              src="/om-mig.jpg"
              alt="Emilia Lindmark, grundare Fireshine Recond"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              sizes="(max-width: 900px) 100vw, 580px"
              quality={100}
              priority
              unoptimized
            />
          </div>

          <div className="about-text">
            <p className="section-label reveal" style={{ marginBottom: '1.4rem' }}>
              Bakom Fireshine
            </p>
            <h2 className="font-display about-name reveal reveal-delay-1">
              EMILIA<br />LINDMARK
            </h2>
            <p className="statement-meta reveal reveal-delay-1" style={{ marginBottom: '1.8rem' }}>
              Grundare &amp; rekondspecialist · Piteå
            </p>
            <p className="statement-desc reveal reveal-delay-2">
              Fireshine Recond är ett rekondföretag i Piteå med
              höga krav på resultat. Noggrannhet och ett skarpt
              öga för detaljer är grunden i varje uppdrag som
              lämnar verkstaden.
            </p>
            <BokaButton
              className="btn-primary reveal reveal-delay-3"
              style={{ marginTop: '2.5rem', display: 'inline-flex' }}
            >
              Boka rekond →
            </BokaButton>
          </div>

        </div>
      </section>

      {/* ── RESULTAT ── */}
      <GalleryCarousel />
    </>
  )
}
