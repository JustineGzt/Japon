import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>()
  const product = products.find((p) => p.slug === slug)
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)
  const images = product?.gallery?.length ? product.gallery : product ? [product.photo] : []
  const [imageIndex, setImageIndex] = useState(0)

  // Revenir à la première vue quand on change de produit ou de couleur
  useEffect(() => setImageIndex(0), [slug])

  useEffect(() => {
    if (!added) return
    const timer = setTimeout(() => setAdded(false), 2000)
    return () => clearTimeout(timer)
  }, [added])
  const variants = product?.variantGroup
    ? products.filter((p) => p.variantGroup === product.variantGroup && p.color)
    : []

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-[#5c1219] px-4 py-12 sm:px-6">
        {product ? (
          <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-2 sm:items-start">
            <div>
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl border-[3px] border-amber-300 bg-[#f6ede0] shadow-[0_18px_34px_-14px_rgba(0,0,0,0.55)]">
                <img
                  src={images[imageIndex] ?? product.photo}
                  alt={`${product.name} – vue ${imageIndex + 1}`}
                  className="h-full w-full object-contain p-6"
                />
                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      aria-label="Image précédente"
                      onClick={() => setImageIndex((i) => (i - 1 + images.length) % images.length)}
                      className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#2a1012]/70 text-xl font-bold text-amber-300 hover:bg-[#2a1012]"
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      aria-label="Image suivante"
                      onClick={() => setImageIndex((i) => (i + 1) % images.length)}
                      className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#2a1012]/70 text-xl font-bold text-amber-300 hover:bg-[#2a1012]"
                    >
                      ›
                    </button>
                    <span className="absolute bottom-3 right-3 rounded-full bg-[#2a1012]/70 px-2.5 py-1 text-xs font-bold text-amber-200">
                      {imageIndex + 1} / {images.length}
                    </span>
                  </>
                )}
              </div>

              {images.length > 1 && (
                <div className="mt-4 grid grid-cols-5 gap-2 sm:grid-cols-7">
                  {images.map((src, i) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setImageIndex(i)}
                      aria-label={`Voir l'image ${i + 1}`}
                      aria-current={i === imageIndex ? 'true' : undefined}
                      className={`aspect-square overflow-hidden rounded-lg border-2 bg-[#f6ede0] transition ${
                        i === imageIndex ? 'border-amber-300' : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col">
              <span className="mb-2 w-fit rounded-full bg-amber-300 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-[#2a1012]">
                {product.collection}
              </span>
              <h1 className="text-2xl font-black uppercase leading-tight text-white sm:text-3xl">{product.name}</h1>
              {product.note && <p className="mt-1 text-sm italic text-amber-200/80">{product.note}</p>}
              <p className="mt-4 text-2xl font-black text-amber-300">{product.price}</p>
              <p className="mt-6 text-sm leading-relaxed text-gray-300 sm:text-base">{product.description}</p>

              {variants.length > 1 && (
                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-wide text-amber-200">
                    Couleur : <span className="font-normal normal-case text-white">{product.color?.label}</span>
                  </p>
                  <div className="mt-3 flex gap-3">
                    {variants.map((v) => {
                      const active = v.slug === product.slug
                      return (
                        <Link
                          key={v.slug}
                          to={`/produit/${v.slug}`}
                          replace
                          title={v.color!.label}
                          aria-label={v.color!.label}
                          aria-current={active ? 'true' : undefined}
                          className={`h-9 w-9 rounded-full border border-gray-400 ring-offset-2 ring-offset-[#5c1219] transition ${
                            active ? 'ring-2 ring-amber-300' : 'hover:ring-2 hover:ring-amber-200/50'
                          }`}
                          style={{ background: v.color!.swatch }}
                        />
                      )
                    })}
                  </div>
                </div>
              )}

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => {
                    addItem(product)
                    setAdded(true)
                  }}
                  className="w-fit rounded-full bg-amber-400 px-8 py-3 text-sm font-bold uppercase tracking-wide text-[#2a1012] hover:opacity-90"
                >
                  {added ? 'Ajouté ✓' : 'Ajouter au panier'}
                </button>
                {added && (
                  <Link to="/panier" className="text-sm text-amber-200 underline hover:text-white">
                    Voir le panier
                  </Link>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-2xl font-extrabold text-amber-400">Produit introuvable</h1>
            <Link to="/unisexe" className="mt-4 inline-block text-sm text-gray-300 underline hover:text-white">
              Retour à la boutique
            </Link>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
