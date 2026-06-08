'use client'

export default function BookdWidget() {
  return (
    <section className="bookd-section">
      <iframe
        src="https://www.bookd.se/book/9775b53a?embed=1"
        className="bookd-iframe"
        loading="eager"
        allow="fullscreen"
        title="Boka rekond — Fireshine Recond"
      />
    </section>
  )
}
