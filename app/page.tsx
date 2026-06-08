'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import GalleryCarousel from './components/GalleryCarousel'

const services = [
  { num: '01', title: 'Polering',        sub: 'Maskinpolering · repor · lack' },
  { num: '02', title: 'Lackskydd',       sub: 'Keramisk coating · UV-skydd · hydrofob' },
  { num: '03', title: 'Invändig Rekond', sub: 'Djuprengöring · klädsel · mattor' },
  { num: '04', title: 'Utvändig Rekond', sub: 'Tvätt · avfettning · finish' },
  { num: '05', title: 'Helrekond',       sub: 'In & ut · showroom-skick · garanti' },
]

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

export default function Home() {
  const heroRef      = useRef<HTMLDivElement>(null)
  const videoRef     = useRef<HTMLVideoElement>(null)
  const blurVideoRef = useRef<HTMLVideoElement>(null)
  const statementRef = useRef<HTMLElement>(null)
  const servicesRef  = useRef<HTMLElement>(null)
  const ctaRef       = useRef<HTMLElement>(null)

  useReveal(statementRef)
  useReveal(servicesRef)
  useReveal(ctaRef)

  useEffect(() => {
    const sharp = videoRef.current
    const blur  = blurVideoRef.current
    if (!sharp || !blur) return
    const SKIP = 2
    const initAt2 = (v: HTMLVideoElement) => { v.currentTime = SKIP }
    ;[sharp, blur].forEach(v => {
      if (v.readyState >= 1) initAt2(v)
      else v.addEventListener('loadedmetadata', () => initAt2(v), { once: true })
    })
    const handleLoop = () => {
      if (sharp.currentTime < SKIP - 0.5) {
        sharp.currentTime = SKIP
        blur.currentTime  = SKIP
      }
    }
    sharp.addEventListener('timeupdate', handleLoop)
    return () => sharp.removeEventListener('timeupdate', handleLoop)
  }, [])

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(18px)'
    const id = setTimeout(() => {
      el.style.transition = 'opacity 1.3s cubic-bezier(0.23,1,0.32,1), transform 1.3s cubic-bezier(0.23,1,0.32,1)'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, 400)
    return () => clearTimeout(id)
  }, [])

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero-section" id="hero">
        <video
          ref={blurVideoRef}
          autoPlay muted loop playsInline
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center',
            filter: 'blur(14px) brightness(0.32) saturate(0.7)',
            transform: 'scale(1.12)',
            zIndex: 1,
          }}
        >
          <source src="/fireshine-video.mp4" type="video/mp4" />
        </video>

        <video
          ref={videoRef}
          autoPlay muted loop playsInline
          style={{
            position: 'absolute', top: 0, left: '50%',
            transform: 'translateX(-50%)',
            height: '100%',
            width: 'calc(100svh * 9 / 16)',
            minWidth: '40%',
            objectFit: 'cover',
            filter: 'brightness(0.7) contrast(1.05)',
            zIndex: 3,
          }}
        >
          <source src="/fireshine-video.mp4" type="video/mp4" />
        </video>

        {/* Top vignette */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '180px',
          background: 'linear-gradient(to bottom, rgba(12,10,8,0.7) 0%, transparent 100%)',
          zIndex: 4, pointerEvents: 'none',
        }} />

        {/* Bottom gradient */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '420px',
          background: 'linear-gradient(to top, #0c0a08 0%, rgba(12,10,8,0.88) 30%, rgba(12,10,8,0.35) 65%, transparent 100%)',
          zIndex: 4, pointerEvents: 'none',
        }} />

        <div className="hero-noise" />

        {/* Bottom bar */}
        <div ref={heroRef} className="hero-bottom-bar">
          <div>
            <div className="hero-location">
              <span className="hero-location-line" />
              Piteå, Sverige
            </div>
            <p className="font-display hero-tagline">
              PROFESSIONELL<br />REKOND
            </p>
          </div>
          <div className="hero-bottom-right">
            <p className="hero-scroll-hint">Scrolla ned</p>
            <a href="/boka" className="hero-cta-link">Boka rekond →</a>
          </div>
        </div>
      </section>

      {/* ── TJÄNSTER ── */}
      <section ref={servicesRef} id="tjanster" className="services-section">
        <div className="services-header-row">
          <p className="section-label reveal">Tjänster</p>
        </div>
        {services.map((s, i) => (
          <a
            key={s.num}
            href="/boka"
            className={`service-line reveal reveal-delay-${(i % 3) + 1}`}
          >
            <span className="service-line-num font-display">{s.num}</span>
            <span className="service-line-title-wrap">
              <span className="service-line-title font-display">{s.title}</span>
              <span className="service-line-price-hint">Se pris →</span>
            </span>
            <span className="service-line-sub">{s.sub}</span>
            <span className="service-line-arrow">Boka →</span>
          </a>
        ))}
      </section>

      {/* ── SAMARBETE BILFÄRG.SE ── */}
      <section className="partner-section" id="lackstift">
        <div className="partner-split">

          {/* Bild */}
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

          {/* Text */}
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

      {/* ── OM EMILIA ── */}
      <section ref={statementRef} className="statement-section" id="om-fireshine">
        <div className="about-split">

          {/* Foto */}
          <div className="about-photo-wrap reveal">
            <Image
              src="/om-mig.png"
              alt="Emilia Lindmark, grundare Fireshine Rekond"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              sizes="(max-width: 900px) 100vw, 580px"
              quality={100}
              priority
              unoptimized
            />
          </div>

          {/* Text */}
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
              Fireshine Rekond är ett rekondföretag i Piteå med
              höga krav på resultat. Noggrannhet och ett skarpt
              öga för detaljer är grunden i varje uppdrag som
              lämnar verkstaden.
            </p>
            <a
              href="/boka"
              className="btn-primary reveal reveal-delay-3"
              style={{ marginTop: '2.5rem', display: 'inline-flex' }}
            >
              Boka rekond →
            </a>
          </div>
        </div>
      </section>

      {/* ── RESULTAT ── */}
      <GalleryCarousel />

      {/* ── KONTAKT / BOKA ── */}
      <section ref={ctaRef} className="cta-final" id="boka">
        <p className="font-serif cta-ready reveal">Redo?</p>
        <p className="font-display cta-heading reveal reveal-delay-1">BOKA DIN REKOND</p>
        <a href="/boka" className="btn-primary reveal reveal-delay-2">Boka tid →</a>
      </section>
    </>
  )
}
