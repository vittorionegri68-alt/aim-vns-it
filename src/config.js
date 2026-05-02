// AI'm by VNS — config.js
// Aggiornare gli URL dopo il deploy su Vercel

export const config = {
  brand: {
    name: "AI'm by VNS",
    tagline: "Be Found. Grow.",
    settore: "Visibilità AI per piccole imprese",
    anno: "2026",
    email: "info@aim-vns.com",
    emailVittorio: "vittorio@aim-vns.com",
    telefono: "+31613078576",
    telefonoDisplay: "+31 (0)6 1307 8576",
    whatsapp: "https://wa.me/31613078576",
    indirizzo: "Steen van Ommerenstraat 14",
    cap: "3861AW",
    citta: "Nijkerk",
    paese: "NL",
    instagram: "https://www.instagram.com/aimbyvns/",
    linkedin: "https://www.linkedin.com/company/113227560",
    facebook: "https://www.facebook.com/profile.php?id=61589050562729",
  },
  gestore: {
    nome: "Vittorio Negri",
    ruolo: "Fondatore",
    lingue: ["it", "en", "nl"],
    linkedin: "https://www.linkedin.com/company/113227560",
    competenze: [
      "Visibilità digitale per PMI",
      "GEO/AEO optimization",
      "Schema.org markup",
      "AI search visibility",
    ],
  },
  urls: {
    it: "https://www.aim-vns.com",       // aggiornare dopo deploy
    en: "https://en.aim-vns.com",        // aggiornare dopo deploy
    nl: "https://nl.aim-vns.com",        // aggiornare dopo deploy
    xDefault: "https://www.aim-vns.com", // aggiornare dopo deploy
    ogImage: "/og-image.jpg",
  },
  ga4: {
    id: "G-TEST123", // sostituire con ID reale prima del deploy
  },
  // Design tokens — AI Dark Brutalist (Brand Identity v1.0)
  design: {
    colors: {
      bg:       "#080808",
      bg2:      "#0d0d0d",
      bg3:      "#0f0f0f",
      line:     "#141414",
      recede:   "#1A1A1A",
      recede2:  "#1f1f1f",
      gold:     "#A0782A",
      white:    "#ffffff",
      muted:    "#555555",
      muted2:   "#444444",
    },
    fonts: {
      display: "'Oswald', 'Helvetica Neue', sans-serif",
      ui:      "'Inter', system-ui, sans-serif",
      mono:    "'JetBrains Mono', monospace",
    },
  },
}
