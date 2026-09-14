import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import ServiceArea from './components/ServiceArea'
import About from './components/About'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CallButton from './components/CallButton'

function App() {
  return (
    <>
      <a className="skip-link" href="#top">
        İçeriğe geç
      </a>
      <Header />
      <main>
        <Hero />
        <Services />
        <ServiceArea />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <CallButton />
    </>
  )
}

export default App
