import type { Metadata } from 'next'
import BookdWidget from '../components/BookdWidget'

export const metadata: Metadata = {
  title: 'Boka rekond — Fireshine Recond',
}

export default function BokaPage() {
  return (
    <>
      <section className="page-hero-dark">
        <div className="page-hero-inner">
          <p className="page-hero-label">Bokning</p>
          <h1 className="font-display page-hero-title">
            BOKA DIN<br />REKOND
          </h1>
        </div>
      </section>
      <BookdWidget />
    </>
  )
}
