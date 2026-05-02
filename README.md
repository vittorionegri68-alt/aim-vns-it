# AI'm by VNS — Sito IT

Stack: React 18 + Vite + Vercel  
Lingua: Italiano (versione primaria)  
Stile: AI Dark Brutalist — Oswald 700 + Inter  
Brand Identity: v1.0 (01/05/2026)

## Run locale

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy su Vercel

1. Push su GitHub
2. Collega repo su vercel.com
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`

## Post-deploy checklist

- [ ] Aggiornare URL in `src/config.js` (it, en, nl, xDefault)
- [ ] Aggiornare `GA4 ID` in `index.html` (sostituire G-TEST123)
- [ ] Caricare `og-image.jpg` in `public/` (1200x630px)
- [ ] Caricare file SVG logo in `public/`:
  - aim-vns-logo-v2-dark.svg
  - aim-vns-logo-v4b-light.svg
  - aim-vns-logo-social-circle.svg
- [ ] Aggiornare `sitemap.xml` con data corrente
- [ ] Verificare `vercel.json` — redirect SOLO per dominio radice
- [ ] Validare schema con Rich Results Test: search.google.com/test/rich-results
- [ ] Attivare workflow N8N blog (disattivare timeout manualmente dopo import)

## Struttura file

```
aim-vns-it/
├── index.html              # Schema.org, GA4, hreflang, meta
├── public/
│   ├── robots.txt          # Con crawler AI espliciti
│   ├── sitemap.xml         # Senza changefreq/priority
│   ├── llms.txt            # AI Permissions
│   ├── ai.txt
│   ├── vercel.json         # Redirect solo dominio radice
│   └── privacy.html
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    ├── config.js           # Token brand, URL, contatti
    ├── components/
    │   ├── Nav.jsx         # Sticky nav + WhatsApp + lang switcher
    │   ├── Hero.jsx        # Headline 3 righe + data strip
    │   ├── HowItWorks.jsx  # 3 step
    │   ├── Risultati.jsx   # Case study + barre animate
    │   ├── Servizi.jsx     # 3 pacchetti Starter/Growth/Pro
    │   ├── FAQ.jsx         # Accordion 10 domande GEO
    │   ├── Blog.jsx        # 3 articoli GEO/AEO
    │   ├── Contatti.jsx    # Form + WhatsApp + email
    │   └── Footer.jsx
    └── data/
        ├── posts.jsx       # Articoli blog (aggiornare con N8N)
        └── qanda.jsx       # 10 domande GEO validate
```

## Note GEO/AEO

Le 10 domande in `qanda.jsx` sono allineate con:
- FAQPage schema in `index.html`
- Blog in `posts.jsx`
- Workflow N8N blog

Mantenere coerenza tra i tre punti per massimizzare la visibilità AI.
