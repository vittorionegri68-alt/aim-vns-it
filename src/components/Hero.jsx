// Hero.jsx — AI'm by VNS IT
// v2.1 — muted color #AAAAAA, data strip removed — giugno 2026
import { config } from '../config.js'

export default function Hero() {
  return (
    <section style={{ background: '#080808', paddingTop: '64px', minHeight: '100vh',
      display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>

      {/* Wordmark decorativo background */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        pointerEvents: 'none',
        userSelect: 'none',
        zIndex: 0,
      }}>
        <span style={{
          fontFamily: "'Oswald', sans-serif",
          fontWeight: 700,
          fontSize: 'clamp(120px, 22vw, 340px)',
          letterSpacing: '0.02em',
          textTransform: 'uppercase',
          lineHeight: 1,
          whiteSpace: 'nowrap',
          color: '#111111',
        }}>
          <span style={{ color: '#111111' }}>AI</span>
          <span style={{ color: '#0d0d0d' }}>'M</span>
        </span>
      </div>

      {/* Contenuto */}
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(24px,4vw,64px)',
        position: 'relative', zIndex: 1 }}>

        {/* Eyebrow */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px',
          border: '1px solid #1A1A1A', padding: '6px 14px', marginBottom: '2.5rem' }}>
          <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#A0782A' }} />
          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700,
            fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#AAAAAA' }}>
            Per piccole imprese e artigiani · senza team marketing
          </span>
        </div>

        {/* Headline 3 righe */}
        <h1 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700,
          fontSize: 'clamp(48px, 9vw, 132px)', letterSpacing: '0.02em',
          textTransform: 'uppercase', lineHeight: 0.92, marginBottom: '2.5rem' }}>
          <span style={{ display: 'block', color: '#ffffff' }}>RICEVI MENO</span>
          <span style={{ display: 'block', color: '#A0782A' }}>RICHIESTE</span>
          <span style={{ display: 'block', color: '#1f1f1f' }}>DI PRIMA?</span>
        </h1>

        {/* Subline + CTA */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto',
          gap: '2rem', alignItems: 'flex-end', marginBottom: '3rem' }}
          className="hero-bottom">
          <div>
            <div style={{ width: '40px', height: '2px', background: '#A0782A', marginBottom: '1rem' }} />
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400,
              fontSize: 'clamp(15px,1.2vw,17px)', color: '#AAAAAA', lineHeight: 1.7,
              maxWidth: '460px' }}>
              Le persone non cercano piu solo su Google.
              Adesso chiedono a ChatGPT. Se la tua attivita non appare li,
              quei clienti vanno da qualcun altro.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
            <a href="https://calendly.com/aim-vns-info/30min" target="_blank" rel="noopener" style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 700,
              fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase',
              color: '#080808', background: '#A0782A',
              padding: '14px 28px', borderRadius: 0,
              transition: 'opacity 0.2s', textDecoration: 'none', whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >Scopri se ti trovano - e gratis</a>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px',
              color: '#AAAAAA', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Risposta entro 48 ore · nessun impegno
            </span>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-bottom { grid-template-columns: 1fr !important; }
          .hero-bottom > div:last-child { align-items: flex-start !important; }
        }
      `}</style>
    </section>
  )
}
