import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyCNES from './components/WhyCNES'
import About from './components/About'
import Process from './components/Process'
import Segments from './components/Segments'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyCNES />
        <About />
        <Process />
        <Segments />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
