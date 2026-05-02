// App.jsx — AI'm by VNS IT
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Risultati from './components/Risultati.jsx'
import Servizi from './components/Servizi.jsx'
import FAQ from './components/FAQ.jsx'
import Blog from './components/Blog.jsx'
import Contatti from './components/Contatti.jsx'
import Footer from './components/Footer.jsx'
import LangBanner from './components/LangBanner.jsx'

export default function App() {
  return (
    <>
      <LangBanner />
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Risultati />
        <Servizi />
        <FAQ />
        <Blog />
        <Contatti />
      </main>
      <Footer />
    </>
  )
}
