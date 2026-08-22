import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductSection from './components/ProductSection'
import Footer from './components/Footer'
import Products from './pages/Products'
import About from './pages/About'
import Shipping from './pages/Shipping'
import Legal from './pages/Legal'
import Contact from './pages/Contact'

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProductSection />
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/unisexe" element={<Products />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="/livraison-et-retours" element={<Shipping />} />
      <Route path="/mentions-legales" element={<Legal />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
