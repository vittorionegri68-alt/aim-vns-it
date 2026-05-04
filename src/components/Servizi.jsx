// Servizi.jsx — AI'm by VNS IT
// v1.1 — 04/05/2026 — testi pacchetti aggiornati
import { useEffect, useRef } from 'react'

const pacchetti = [
  {
    nome: 'Starter',
    tag: 'Primo passo',
    desc: 'Hai già un sito web ma non sai se ChatGPT, Gemini o Perplexity ti trovano? Misuriamo la tua visibilità attuale sui motori AI, ti mostriamo cosa manca e consegniamo i file tecnici ottimizzati per colmare i gap. Pagamento unico, nessun abbonamento.',
    incluso: [
      'Analisi baseline gratuita nel primo colloquio — nessun impegno successivo',
      'Audit completo: schema.org, robots.txt, llms.txt, ai.txt, sitemap',
      'File tecnici ottimizzati pronti all\'uso per il tuo settore',
      'Secondo baseline a 30 giorni per misurare i miglioramenti',
      'Suggerimento Google Business Profile',
    ],
    cta: 'Richiedi il tuo audit',
    highlight: false,
  },
  {
    nome: 'Growth',
    tag: 'Servizio principale',
    desc: 'Costruiamo il tuo sito da zero, ottimizzato per essere trovato da ChatGPT, Perplexity e Gemini fin dal primo giorno. Poi lo manteniamo vivo con contenuto fresco e ti mostriamo come cresce la tua visibilità, con dati reali. Se hai già un sito e vuoi mantenerlo, parliamone: valutiamo ogni situazione caso per caso.',
    incluso: [
      'Analisi baseline prima di iniziare',
      'Creazione sito React ottimizzato per i motori AI',
      'Google Business Profile — creazione e configurazione incluse',
      'Validazione Rich Results Test prima del deploy',
      '10 domande GEO/AEO validate per il tuo settore',
      'Blog ogni due settimane, automatizzato',
      'Report mensili i primi 3 mesi, poi trimestrale',
      'Chiamata post-report con Vittorio per analizzare i dati',
      'Esecuzione delle azioni correttive',
      'Supporto continuo via email',
    ],
    cta: 'Parliamo del tuo progetto',
    highlight: true,
  },
  {
    nome: 'Pro',
    tag: 'Visibilità massima',
    desc: 'Tutto il Growth, più una sezione Q&A pubblica sul sito, una dashboard personalizzata con i tuoi dati di visibilità sempre aggiornati e la pubblicazione automatizzata dei contenuti Instagram. La relazione con i tuoi follower rimane a te.',
    incluso: [
      'Tutto il pacchetto Growth',
      'Blocco Q&A pubblico con le 10 domande validate e risposte complete',
      'Dashboard personale online — dati di visibilità AI sempre aggiornati',
      'Pubblicazione automatizzata su Instagram',
      'Report mensili invece che trimestrali',
    ],
    cta: 'Parliamo del tuo progetto',
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
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(13px,1vw,15px)',
            color: '#444', lineHeight: 1.7, marginTop: '1.5rem', maxWidth: '600px' }}>
            Ogni progetto è una collaborazione diretta con Vittorio. Niente intermediari,
            niente soluzioni standard: ogni intervento viene costruito insieme a te e
            validato prima di andare online. Siamo qui per farti crescere insieme.
          </p>
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
          Sito monolingua da 480 € · Lingua aggiuntiva 100 € · Abbonamento da 500 €/anno
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
