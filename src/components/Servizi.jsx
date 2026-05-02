// Servizi.jsx — AI'm by VNS IT
import { useEffect, useRef } from 'react'

const pacchetti = [
  {
    nome: 'Starter',
    tag: 'Ottimizzazione tecnica',
    desc: 'Analisi baseline GEO/AEO + ottimizzazione completa del sito esistente o nuovo. Schema.org, llms.txt, ai.txt, robots.txt. Set iniziale di 10 domande costruite insieme a te.',
    incluso: [
      '10 domande validate insieme a te',
      'Schema.org completo validato',
      'llms.txt + ai.txt',
      'robots.txt con crawler AI',
      'Report baseline iniziale',
    ],
    cta: 'Parla con noi',
    highlight: false,
  },
  {
    nome: 'Growth',
    tag: 'Starter + automazione',
    desc: 'Tutto di Starter più blog GEO/AEO automatizzato bimensile e report trimestrale di misurazione progressi.',
    incluso: [
      'Tutto del pacchetto Starter',
      'Blog GEO/AEO automatizzato (N8N)',
      'Report trimestrale GEO score',
      'Analisi competitor AI',
      'Supporto via email',
    ],
    cta: 'Parla con noi',
    highlight: true,
  },
  {
    nome: 'Pro',
    tag: 'Growth + Instagram',
    desc: 'Tutto di Growth più automazione Instagram, analisi competitor AI avanzata e supporto prioritario.',
    incluso: [
      'Tutto del pacchetto Growth',
      'Instagram automation (N8N)',
      'Analisi competitor AI avanzata',
      'Supporto prioritario WhatsApp',
      'Check-in mensile video call',
    ],
    cta: 'Parla con noi',
    highlight: false,
  },
]

export default function Servizi() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="servizi" ref={ref}
      style={{ background: '#0d0d0d', padding: 'clamp(64px,8vw,120px) 0',
        borderTop: '1px solid #141414' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(24px,4vw,64px)' }}>

        {/* Header */}
        <div style={{ marginBottom: 'clamp(40px,5vw,64px)' }}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '10px',
            letterSpacing: '0.3em', textTransform: 'uppercase', color: '#A0782A',
            marginBottom: '1rem' }}>Pacchetti</div>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700,
            fontSize: 'clamp(36px,4vw,64px)', textTransform: 'uppercase',
            letterSpacing: '0.02em', color: '#ffffff', lineHeight: 0.95 }}>
            SCEGLI IL TUO<br />
            <span style={{ color: '#A0782A' }}>PUNTO DI PARTENZA.</span>
          </h2>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
          gap: '1px', background: '#141414' }}
          className="packs-grid">
          {pacchetti.map((p, i) => (
            <div key={i} className="reveal"
              style={{
                background: p.highlight ? '#0f0f0f' : '#0a0a0a',
                padding: 'clamp(28px,3vw,48px) clamp(20px,2.5vw,36px)',
                borderTop: p.highlight ? '2px solid #A0782A' : '2px solid transparent',
                transitionDelay: `${i * 0.1}s`,
                display: 'flex', flexDirection: 'column',
              }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700,
                fontSize: '9px', color: p.highlight ? '#A0782A' : '#333',
                letterSpacing: '0.25em', textTransform: 'uppercase',
                marginBottom: '0.5rem' }}>{p.tag}</div>
              <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700,
                fontSize: 'clamp(28px,2.5vw,40px)', color: '#ffffff',
                textTransform: 'uppercase', letterSpacing: '0.02em',
                marginBottom: '1rem', lineHeight: 1 }}>{p.nome}</div>
              <div style={{ width: '24px', height: '1px', background: '#1A1A1A', marginBottom: '1rem' }} />
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(13px,1vw,14px)',
                color: '#444', lineHeight: 1.7, marginBottom: '1.5rem' }}>{p.desc}</p>

              <ul style={{ listStyle: 'none', marginBottom: '2rem', flex: 1 }}>
                {p.incluso.map((item, j) => (
                  <li key={j} style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px',
                    color: '#555', padding: '6px 0', borderBottom: '1px solid #141414',
                    display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#A0782A', fontSize: '10px' }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>

              <a href="#contatti" style={{
                fontFamily: "'Inter', sans-serif", fontWeight: 700,
                fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase',
                color: p.highlight ? '#080808' : '#ffffff',
                background: p.highlight ? '#A0782A' : 'transparent',
                border: p.highlight ? 'none' : '1px solid #1A1A1A',
                padding: '12px 24px', borderRadius: 0,
                textDecoration: 'none', display: 'inline-block',
                transition: 'all 0.2s', textAlign: 'center',
              }}
              onMouseEnter={e => {
                if (p.highlight) { e.currentTarget.style.opacity = '0.85' }
                else { e.currentTarget.style.borderColor = '#A0782A'; e.currentTarget.style.color = '#A0782A' }
              }}
              onMouseLeave={e => {
                if (p.highlight) { e.currentTarget.style.opacity = '1' }
                else { e.currentTarget.style.borderColor = '#1A1A1A'; e.currentTarget.style.color = '#ffffff' }
              }}
              >{p.cta} →</a>
            </div>
          ))}
        </div>

        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: '#333',
          letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '1.5rem',
          textAlign: 'center' }}>
          Prezzi disponibili su richiesta · IT e NL · Contattaci per un preventivo
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .packs-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
