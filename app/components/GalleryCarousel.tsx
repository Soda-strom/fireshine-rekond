'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'

export const galleryImages = [
  { src: '/resultat/tesla.jpg',        alt: 'Nyrekondad Tesla Model S',          label: 'Tesla Model S'   },
  { src: '/resultat/invandig-1.jpg',   alt: 'Invändig rekond — skinninteriör',   label: 'Invändig Rekond' },
  { src: '/resultat/vit-lastbil.jpg',  alt: 'Nyrekondad Scania lastbil',         label: 'Scania'          },
  { src: '/resultat/invandig-2.jpg',   alt: 'Invändig rekond — instrumentbräda', label: 'Invändig Rekond' },
  { src: '/resultat/toyota-supra.jpg', alt: 'Nyrekondad Toyota Supra',           label: 'Toyota Supra'    },
  { src: '/resultat/invandig-3.jpg',   alt: 'Invändig rekond — beige skinn',     label: 'Invändig Rekond' },
  { src: '/resultat/vw-amarock.jpg',   alt: 'Nyrekondad VW Amarok',              label: 'VW Amarok'       },
  { src: '/resultat/invandig-4.jpg',   alt: 'Invändig rekond — Skoda',           label: 'Invändig Rekond' },
  { src: '/resultat/bubbla.jpg',       alt: 'Nyrekondad VW Bubbla',              label: 'VW Bubbla'       },
  { src: '/resultat/cheva.jpg',        alt: 'Nyrekondad Chevrolet',              label: 'Chevrolet'       },
  { src: '/resultat/invandig-5.jpg',   alt: 'Invändig rekond — Mercedes',        label: 'Invändig Rekond' },
  { src: '/resultat/audi-cab.jpg',     alt: 'Nyrekondad Audi cabriolet',         label: 'Audi Cabriolet'  },
  { src: '/resultat/vit-ram.jpg',      alt: 'Nyrekondad vit RAM 1500',           label: 'RAM 1500'        },
  { src: '/resultat/invandig-6.jpg',   alt: 'Invändig rekond — Volvo',           label: 'Invändig Rekond' },
  { src: '/resultat/lastbil.jpg',      alt: 'Nyrekondad lastbil',                label: 'Lastbil'         },
  { src: '/resultat/suzuki.jpg',       alt: 'Nyrekondad Suzuki Hayabusa',        label: 'Suzuki Hayabusa' },
  { src: '/resultat/ram.jpg',          alt: 'Nyrekondad RAM',                    label: 'RAM'             },
]

const N        = galleryImages.length
const extended = [...galleryImages, ...galleryImages, ...galleryImages]
const INTERVAL = 5000
const EASING   = 'cubic-bezier(0.23, 1, 0.32, 1)'
const DURATION = 1400

export default function GalleryCarousel() {
  const [index, setIndex]       = useState(N)
  const [animated, setAnimated] = useState(true)
  const [visible, setVisible]   = useState(3)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const update = () => setVisible(window.innerWidth < 640 ? 1 : 3)
    update()
    window.addEventListener('resize', update, { passive: true })
    return () => window.removeEventListener('resize', update)
  }, [])

  const next = useCallback(() => setIndex(i => i + 1), [])
  const prev = useCallback(() => setIndex(i => i - 1), [])

  // Auto-play — always runs, no pause-on-hover
  useEffect(() => {
    const id = setInterval(next, INTERVAL)
    return () => clearInterval(id)
  }, [next])

  // Seamless infinite loop
  const handleTransitionEnd = useCallback((e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return  // ignore bubbled child events
    if (e.propertyName !== 'transform') return
    if (index >= 2 * N) {
      setAnimated(false)
      setIndex(i => i - N)
    } else if (index < N) {
      setAnimated(false)
      setIndex(i => i + N)
    }
  }, [index])

  useEffect(() => {
    if (!animated) {
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = requestAnimationFrame(() => setAnimated(true))
      })
    }
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [animated])

  const offset    = (index * 100) / visible
  const centerIdx = visible === 3 ? index + 1 : index
  const duration  = `${animated ? DURATION : 0}ms`

  return (
    <section className="gallery-section" id="resultat">
      <div className="gallery-header">
        <p className="section-label">Resultat</p>
        <h2 className="font-display gallery-heading">FÄRDIGA FORDON</h2>
      </div>

      <div className="gallery-track-wrap">

        <button className="gallery-arrow" onClick={prev} aria-label="Föregående">
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.4"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div style={{ overflow: 'hidden', flex: 1 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              transform: `translateX(-${offset}%)`,
              transition: `transform ${duration} ${EASING}`,
              willChange: 'transform',
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extended.map((img, i) => {
              const isCenter = i === centerIdx
              return (
                <div
                  key={i}
                  className="gallery-slide"
                  style={{
                    flex: `0 0 ${100 / visible}%`,
                    transform: isCenter ? 'scale(1)' : 'scale(0.8)',
                    opacity: isCenter ? 1 : 0.85,
                    transition: `transform ${duration} ${EASING}, opacity ${duration} ease`,
                    zIndex: isCenter ? 2 : 1,
                  }}
                >
                  <div className="gallery-slide-inner">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      unoptimized
                      style={{ objectFit: 'contain', objectPosition: 'center' }}
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                    <div
                      className="gallery-slide-overlay"
                      style={{ opacity: isCenter ? 1 : 0, transition: `opacity ${duration} ease` }}
                    >
                      <span className="gallery-slide-label">{img.label}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <button className="gallery-arrow" onClick={next} aria-label="Nästa">
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.4"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

      </div>
    </section>
  )
}
