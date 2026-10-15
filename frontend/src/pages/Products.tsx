import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { catalogProducts as products } from '../data/products'

type SortOption = 'default' | 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc' | 'theme'

const sortLabels: Record<SortOption, string> = {
  default: 'Tri par défaut',
  'price-asc': 'Prix croissant',
  'price-desc': 'Prix décroissant',
  'name-asc': 'Nom (A → Z)',
  'name-desc': 'Nom (Z → A)',
  theme: 'Thème / Collection',
}

const parsePrice = (price: string) => parseFloat(price.replace(',', '.').replace(/[^\d.]/g, '')) || 0

export default function Products() {
  const [sortOption, setSortOption] = useState<SortOption>('default')
  const [themeFilter, setThemeFilter] = useState<string>('all')

  const themes = useMemo(() => Array.from(new Set(products.map((p) => p.collection))), [])

  const visibleProducts = useMemo(() => {
    const list =
      themeFilter === 'all' ? [...products] : products.filter((p) => p.collection === themeFilter)

    switch (sortOption) {
      case 'price-asc':
        return list.sort((a, b) => parsePrice(a.price) - parsePrice(b.price))
      case 'price-desc':
        return list.sort((a, b) => parsePrice(b.price) - parsePrice(a.price))
      case 'name-asc':
        return list.sort((a, b) => a.name.localeCompare(b.name))
      case 'name-desc':
        return list.sort((a, b) => b.name.localeCompare(a.name))
      case 'theme':
        return list.sort((a, b) => a.collection.localeCompare(b.collection))
      default:
        return list
    }
  }, [sortOption, themeFilter])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-[#5c1219] px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <h1 className="text-2xl font-extrabold tracking-wide text-amber-400 sm:text-3xl">Unisexe</h1>

            <div className="relative">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as SortOption)}
                className="cursor-pointer appearance-none rounded-full border border-amber-400/60 bg-[#161616] py-2 pl-4 pr-9 text-sm font-semibold text-amber-200 shadow-[0_4px_14px_-6px_rgba(0,0,0,0.6)] outline-none transition-colors hover:border-amber-300 focus:ring-2 focus:ring-amber-400"
              >
                {(Object.keys(sortLabels) as SortOption[]).map((option) => (
                  <option key={option} value={option} className="bg-[#161616] text-amber-100">
                    {sortLabels[option]}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-amber-300">
                ▾
              </span>
            </div>
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setThemeFilter('all')}
              className={`rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-wide transition-colors ${
                themeFilter === 'all'
                  ? 'border-amber-400 bg-amber-400 text-black'
                  : 'border-amber-400/50 text-amber-200 hover:border-amber-300 hover:text-amber-100'
              }`}
            >
              Tous
            </button>
            {themes.map((theme) => (
              <button
                key={theme}
                type="button"
                onClick={() => setThemeFilter(theme)}
                className={`rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-wide transition-colors ${
                  themeFilter === theme
                    ? 'border-amber-400 bg-amber-400 text-black'
                    : 'border-amber-400/50 text-amber-200 hover:border-amber-300 hover:text-amber-100'
                }`}
              >
                {theme}
              </button>
            ))}
          </div>

          {visibleProducts.length === 0 && (
            <p className="mb-8 text-sm text-amber-200/70">Aucun produit ne correspond à ce thème.</p>
          )}

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-4 md:gap-x-8">
            {visibleProducts.map((product) => (
              <Link
                key={product.slug}
                to={`/produit/${product.slug}`}
                className="flex flex-col items-center text-center transition-transform hover:-translate-y-1"
              >
                <div className="aspect-square w-full rounded-2xl border-[3px] border-amber-300 bg-[#f6ede0] p-5 shadow-[0_18px_34px_-14px_rgba(0,0,0,0.55)]">
                  <img src={product.photo} alt={product.name} className="h-full w-full object-contain" />
                </div>
                <h2 className="mt-4 text-sm font-black uppercase leading-tight text-white sm:text-base">
                  {product.name}
                </h2>
                {product.note && <p className="mt-1 text-xs italic text-amber-200/80">{product.note}</p>}
                <p className="mt-1 text-sm font-black text-amber-300">{product.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
