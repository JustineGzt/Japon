import { Link } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import { useCart } from '../context/CartContext'
import { products } from '../data/products'

const formatPrice = (value: number) =>
  value.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })

export default function Cart() {
  const { items, updateQuantity, removeItem, clearCart, totalPrice } = useCart()

  if (items.length === 0) {
    return (
      <PageLayout title="Mon panier">
        <p>Votre panier est vide.</p>
        <Link
          to="/unisexe"
          className="inline-block rounded-full bg-amber-400 px-6 py-2 text-sm font-bold uppercase tracking-wide text-[#2a1012] hover:opacity-90"
        >
          Découvrir la boutique
        </Link>
      </PageLayout>
    )
  }

  return (
    <PageLayout title="Mon panier">
      <ul className="divide-y divide-white/10">
        {items.map((item) => {
          const color = products.find((p) => p.slug === item.slug)?.color
          return (
            <li key={item.slug} className="flex items-center gap-4 py-4">
              <Link
                to={`/produit/${item.slug}`}
                className="h-20 w-20 shrink-0 rounded-xl border-2 border-amber-300 bg-[#f6ede0] p-2"
              >
                <img src={item.photo} alt={item.name} className="h-full w-full object-contain" />
              </Link>

              <div className="min-w-0 flex-1">
                <Link to={`/produit/${item.slug}`} className="font-bold text-white hover:underline">
                  {item.name}
                </Link>
                {color && <p className="text-xs text-amber-200/80">Couleur : {color.label}</p>}
                <p className="text-sm text-amber-300">{item.price}</p>
              </div>

              <div className="flex items-center rounded-full border border-white/30">
                <button
                  type="button"
                  aria-label="Diminuer la quantité"
                  onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                  className="px-3 py-1 text-white hover:text-amber-300"
                >
                  −
                </button>
                <span className="w-6 text-center text-white">{item.quantity}</span>
                <button
                  type="button"
                  aria-label="Augmenter la quantité"
                  onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                  className="px-3 py-1 text-white hover:text-amber-300"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                onClick={() => removeItem(item.slug)}
                className="text-xs text-gray-400 underline hover:text-white"
              >
                Retirer
              </button>
            </li>
          )
        })}
      </ul>

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/20 pt-6">
        <button type="button" onClick={clearCart} className="text-xs text-gray-400 underline hover:text-white">
          Vider le panier
        </button>
        <p className="text-lg font-bold text-white">
          Total : <span className="text-amber-300">{formatPrice(totalPrice)}</span>
        </p>
      </div>
    </PageLayout>
  )
}
