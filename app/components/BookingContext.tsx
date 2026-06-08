'use client'
import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react'

interface BookingCtx { open: () => void }
const Ctx = createContext<BookingCtx>({ open: () => {} })
export const useBooking = () => useContext(Ctx)

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const open  = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
      document.addEventListener('keydown', onKey)
      return () => {
        document.body.style.overflow = ''
        document.removeEventListener('keydown', onKey)
      }
    }
  }, [isOpen, close])

  return (
    <Ctx.Provider value={{ open }}>
      {children}
      {isOpen && (
        <div className="booking-overlay" onClick={close}>
          <div className="booking-modal" onClick={e => e.stopPropagation()}>
            <button className="booking-close" onClick={close} aria-label="Stäng">✕</button>
            <iframe
              src="https://www.bookd.se/book/9775b53a?embed=1"
              className="booking-iframe"
              loading="eager"
              allow="fullscreen"
              title="Boka rekond — Fireshine Recond"
            />
          </div>
        </div>
      )}
    </Ctx.Provider>
  )
}
