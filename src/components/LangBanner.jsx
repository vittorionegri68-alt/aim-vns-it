// LangBanner.jsx — AI'm by VNS IT
import { useState, useEffect } from 'react'

const LANGS = {
  nl: {
    url: 'https://nl.aim-vns.com',
    msg: 'Je browser is ingesteld op Nederlands.',
    cta: 'Ga naar de Nederlandse versie',
  },
  en: {
    url: 'https://en.aim-vns.com',
    msg: 'Your browser is set to English.',
    cta: 'Go to the English version',
  },
}

export default function LangBanner() {
  const [banner, setBanner] = useState(null)

  useEffect(() => {
    if (sessionStorage.getItem('aim-lang-choice')) return
    const lang = (navigator.language || navigator.userLanguage || '').toLowerCase()
    if (lang.startsWith('nl')) setBanner('nl')
    else if (!lang.startsWith('it')) setBanner('en')
  }, [])

  const handleClose = () => {
    sessionStorage.setItem('aim-lang-choice', 'it')
    setBanner(null)
  }

  const handleGo = (url) => {
    sessionStorage.setItem('aim-lang-choice', url)
    window.location.href = url
  }

  if (!banner) return null

  const { msg, cta, url } = LANGS[banner]

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
      background: '#0d0d0d', borderBottom: '1px solid #A0782A',
      padding: '10px clamp(24px,4vw,64px)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      gap: '16px', flexWrap: 'wrap',
    }}>

      {/* Sinistra: messaggio */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ width: '4px', height: '4px', borderRadius: '50%',
          background: '#A0782A', flexShrink: 0 }} />
        <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400,
          fontSize: '12px', color: '#aaaaaa', letterSpacing: '0.05em' }}>
          {msg}
        </span>
      </div>

      {/* Destra: i due bottoni affiancati */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <button onClick={() => handleGo(url)} style={{
          background: 'none', border: '1px solid #A0782A', cursor: 'pointer',
          fontFamily: "'Inter', sans-serif", fontWeight: 700,
          fontSize: '10px', color: '#A0782A', letterSpacing: '0.15em',
          textTransform: 'uppercase', padding: '6px 14px', borderRadius: 0,
          transition: 'all 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = '#A0782A'; e.currentTarget.style.color = '#080808' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = '#A0782A' }}
        >{cta} →</button>

        <button onClick={handleClose} style={{
          background: 'none', border: '1px solid #333', cursor: 'pointer',
          fontFamily: "'Inter', sans-serif", fontWeight: 700,
          fontSize: '10px', color: '#aaaaaa', letterSpacing: '0.15em',
          textTransform: 'uppercase', padding: '6px 14px', borderRadius: 0,
          transition: 'all 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = '#aaaaaa'; e.currentTarget.style.color = '#ffffff' }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.color = '#aaaaaa' }}
        >Resta in italiano ✕</button>
      </div>

    </div>
  )
}
