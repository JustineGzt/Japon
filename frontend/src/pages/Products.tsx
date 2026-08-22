import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { products } from '../data/products'

export default function Products() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-black px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-8 text-2xl font-extrabold tracking-wide text-amber-400 sm:text-3xl">Unisexe</h1>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-4 md:gap-x-8">
            {products.map((product) => (
              <div key={product.name} className="flex flex-col items-center text-center">
                <div className="aspect-square w-full rounded-2xl border-[3px] border-amber-300 bg-[#f6ede0] p-5 shadow-[0_18px_34px_-14px_rgba(0,0,0,0.55)]">
                  <img src={product.photo} alt={product.name} className="h-full w-full object-contain" />
                </div>
                <h2 className="mt-4 text-sm font-black uppercase leading-tight text-white sm:text-base">
                  {product.name}
                </h2>
                {product.note && <p className="mt-1 text-xs italic text-amber-200/80">{product.note}</p>}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
