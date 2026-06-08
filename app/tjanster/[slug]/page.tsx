import { notFound } from 'next/navigation'
import Link from 'next/link'
import { services } from '../../lib/services'
import BookdWidget from '../../components/BookdWidget'

export function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }))
}

export default async function TjanstPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = services.find(s => s.slug === slug)
  if (!service) notFound()

  const idx  = services.indexOf(service)
  const prev = services[idx - 1] ?? null
  const next = services[idx + 1] ?? null

  return (
    <>
      {/* ── SERVICE HEADER ── */}
      <section className="service-page-hero">
        <div className="service-page-hero-inner">
          <span className="service-page-num">{service.num}</span>
          <h1 className="font-display service-page-title">
            {service.title.toUpperCase()}
          </h1>
          <p className="service-page-sub">{service.sub}</p>
        </div>
      </section>

      {/* ── SERVICE CONTENT ── */}
      <section className="service-page-content">
        <div className="service-page-grid">

          <div>
            <p className="section-label" style={{ marginBottom: '1.6rem' }}>
              Om tjänsten
            </p>
            <p className="service-page-desc">{service.description}</p>
          </div>

          <div>
            <p className="section-label" style={{ marginBottom: '1.6rem' }}>
              Pris
            </p>
            <p className="service-page-pricing">{service.pricing}</p>
            <Link
              href="/boka"
              className="btn-primary"
              style={{ display: 'inline-flex', marginTop: '2.2rem' }}
            >
              Boka tid →
            </Link>
          </div>

        </div>

        {/* ── BOKNING ── */}
        <BookdWidget />

        {/* ── PREV / NEXT ── */}
        <div className="service-page-nav">
          {prev ? (
            <Link href={`/tjanster/${prev.slug}`} className="service-page-nav-link">
              ← {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/tjanster/${next.slug}`} className="service-page-nav-link">
              {next.title} →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </section>
    </>
  )
}
