import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductSection from './components/ProductSection'
import Footer from './components/Footer'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import About from './pages/About'
import Shipping from './pages/Shipping'
import Legal from './pages/Legal'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import Account from './pages/Account'

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
      <Route path="/produit/:slug" element={<ProductDetail />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="/livraison-et-retours" element={<Shipping />} />
      <Route path="/mentions-legales" element={<Legal />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/panier" element={<Cart />} />
      <Route path="/connexion" element={<Login />} />
      <Route path="/inscription" element={<Register />} />
      <Route path="/compte" element={<Account />} />
    </Routes>
  )
}

export default App
