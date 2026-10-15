import { Link, Navigate } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'

export default function Account() {
  const { user, loading, logout } = useAuth()
  const { totalQuantity } = useCart()

  if (loading) {
    return (
      <PageLayout title="Mon compte">
        <p>Chargement…</p>
      </PageLayout>
    )
  }

  if (!user) return <Navigate to="/connexion" replace />

  const memberSince = new Date(user.createdAt).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })

  return (
    <PageLayout title="Mon compte">
      <p className="text-lg text-white">
        Bonjour <span className="font-bold text-amber-300">{user.firstName}</span> !
      </p>

      <dl className="grid gap-4 rounded-2xl border border-white/15 bg-black/15 p-6 sm:grid-cols-2">
        <div>
          <dt className="text-xs font-bold uppercase tracking-wide text-amber-200">Nom</dt>
          <dd className="text-white">
            {user.firstName} {user.lastName}
          </dd>
        </div>
        <div>
          <dt className="text-xs font-bold uppercase tracking-wide text-amber-200">E-mail</dt>
          <dd className="break-all text-white">{user.email}</dd>
        </div>
        <div>
          <dt className="text-xs font-bold uppercase tracking-wide text-amber-200">Membre depuis</dt>
          <dd className="text-white">{memberSince}</dd>
        </div>
        <div>
          <dt className="text-xs font-bold uppercase tracking-wide text-amber-200">Panier</dt>
          <dd>
            <Link to="/panier" className="text-white underline hover:text-amber-300">
              {totalQuantity} article{totalQuantity > 1 ? 's' : ''}
            </Link>
          </dd>
        </div>
      </dl>

      <button
        type="button"
        onClick={logout}
        className="rounded-full border border-amber-300 px-6 py-2 text-sm font-bold uppercase tracking-wide text-amber-300 hover:bg-amber-300 hover:text-[#2a1012]"
      >
        Se déconnecter
      </button>
    </PageLayout>
  )
}
