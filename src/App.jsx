import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Banner from './components/Banner'
import About from './components/About'
import Features from './components/Features'
import Pricing from './components/Pricing'
import HowItWorks from './components/HowItWorks'
import CTA from './components/CTA'
import Legal from './components/Legal'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Banner />
      <About />
      <Features />
      <Pricing />
      <HowItWorks />
      <CTA />
      <Legal />
      <Footer />
    </div>
  )
}

export default App
