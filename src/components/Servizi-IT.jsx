// Servizi.jsx — AI'm by VNS IT
// v2.0 — copy riscritta senza tecnicismi — giugno 2026
import { useEffect, useRef } from 'react'

const pacchetti = [
  {
    nome: 'Starter',
    tag: 'Primo passo',
    desc: 'Hai un sito web ma non sai se ChatGPT ti trova? Controlliamo com\'e\' la tua situazione adesso, ti diciamo cosa non funziona e consegniamo tutto il necessario per sistemarlo. Pagamento unico, nessun abbonamento.',
    incluso: [
      'Prima analisi gratuita — nessun impegno',
      'Controllo completo di come ti vedono i motori AI',
      'File tecnici ottimizzati pronti per il tuo sito',
      'Secondo controllo a 30 giorni per misurare i miglioramenti',
      'Suggerimenti per Google Business Profile',
    ],
    prezzo: 'Da 180 €',
    prezzoSub: 'Pagamento unico · Nessun abbonamento',
    cta: 'Richiedi il tuo audit',
    highlight: false,
  },
  {
    nome: 'Growth',
    tag: 'Servizio principale',
    desc: 'Costruiamo il tuo sito da zero, fatto per essere trovato da ChatGPT fin dal primo giorno. Poi lo teniamo aggiornato con contenuti nuovi e ti mostriamo come crescono i risultati, con numeri reali. Hai gia\' un sito? Parliamone: valutiamo ogni situazione insieme.',
    incluso: [
      'Analisi della situazione prima di iniziare',
      'Creazione del sito ottimizzato per i motori AI',
      'Google Business Profile — configurazione inclusa',
      'Verifica tecnica prima della pubblicazione',
      'Contenuti pensati per le domande reali dei tuoi clienti',
      'Articolo sul blog ogni due settimane, automatico',
      'Report mensili i primi 3 mesi, poi ogni tre mesi',
      'Chiamata con Vittorio per analizzare i dati insieme',
      'Interventi correttivi inclusi',
      'Supporto continuo via email',
    ],
    prezzo: 'Da 480 €',
    prezzoSub: '+ abbonamento annuale da 500 €',
    cta: 'Parliamo del tuo progetto',
    highlight: true,
  },
  {
    nome: 'Pro',
    tag: 'Visibilita\' massima',
    desc: 'Tutto il Growth, piu\' una pagina di domande e risposte sul tuo sito, una dashboard con i tuoi dati sempre aggiornati e la pubblicazione automatica su Instagram. La relazione con i tuoi clienti rimane a te.',
    incluso: [
      'Tutto il pacchetto Growth',
      'Pagina domande e risposte con le 10 domande reali dei tuoi clienti',
      'Dashboard personale — i tuoi dati di visibilita\' sempre aggiornati',
      'Pubblicazione automatica su Instagram',
      'Report mensili invece che ogni tre mesi',
    ],
    prezzo: 'Da 580 €',
    prezzoSub: '+ abbonamento annuale da 780 €',
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
            Lavori con Vittorio direttamente, senza intermediari.
            Ogni intervento viene costruito insieme a te, spiegato in modo semplice
            e verificato prima di andare online. Niente tecnicismi, niente sorprese.
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

              {/* Blocco prezzo */}
              <div style={{ borderTop: '1px solid #141414', paddingTop: '1.25rem', marginBottom: '1.5rem' }}>
                <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700,
                  fontSize: 'clamp(24px,2vw,32px)', color: p.highlight ? '#A0782A' : '#ffffff',
                  letterSpacing: '0.02em', lineHeight: 1 }}>{p.prezzo}</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px',
                  color: '#444', marginTop: '4px', letterSpacing: '0.05em' }}>{p.prezzoSub}</div>
              </div>

              <a href="https://calendly.com/aim-vns-info/30min" target="_blank" rel="noopener" style={{
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
          Tutti i prezzi sono IVA esclusa · Lingua aggiuntiva 100 € · Durata minima 12 mesi per Growth e Pro
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