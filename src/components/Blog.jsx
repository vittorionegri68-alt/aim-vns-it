// Blog.jsx — AI'm by VNS IT
import { posts } from '../data/posts.jsx'

export default function Blog() {
  const attivi = posts.filter(p => p.attivo)

  return (
    <section id="blog"
      style={{ background: '#0d0d0d', padding: 'clamp(64px,8vw,120px) 0',
        borderTop: '1px solid #141414' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(24px,4vw,64px)' }}>

        {/* Header */}
        <div style={{ marginBottom: 'clamp(40px,5vw,64px)' }}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '10px',
            letterSpacing: '0.3em', textTransform: 'uppercase', color: '#A0782A',
            marginBottom: '1rem' }}>Blog</div>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700,
            fontSize: 'clamp(36px,4vw,64px)', textTransform: 'uppercase',
            letterSpacing: '0.02em', color: '#ffffff', lineHeight: 0.95 }}>
            VISIBILITÀ AI<br />
            <span style={{ color: '#1f1f1f' }}>SPIEGATA SEMPLICE.</span>
          </h2>
        </div>

        {/* Grid articoli */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
          gap: '1px', background: '#141414' }}
          className="blog-grid">
          {attivi.map((p, i) => (
            <article key={p.id}
              style={{ background: '#0a0a0a',
                padding: 'clamp(24px,2.5vw,40px) clamp(20px,2vw,32px)',
                display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700,
                fontSize: '9px', color: '#333', letterSpacing: '0.2em',
                textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                {p.categoria} · {p.data}
              </div>
              <h3 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700,
                fontSize: 'clamp(18px,1.8vw,24px)', color: '#ffffff',
                textTransform: 'uppercase', letterSpacing: '0.02em',
                lineHeight: 1.15, marginBottom: '1rem', flex: 1 }}>
                {p.titolo}
              </h3>
              <div style={{ width: '24px', height: '1px', background: '#1A1A1A', marginBottom: '1rem' }} />
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px',
                color: '#444', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {p.sommario}
              </p>
              <a href={`#blog-${p.id}`} style={{
                fontFamily: "'Inter', sans-serif", fontWeight: 700,
                fontSize: '10px', color: '#A0782A', letterSpacing: '0.15em',
                textTransform: 'uppercase', textDecoration: 'none',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => e.target.style.opacity = '0.7'}
              onMouseLeave={e => e.target.style.opacity = '1'}
              >Leggi →</a>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .blog-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .blog-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  )
}
