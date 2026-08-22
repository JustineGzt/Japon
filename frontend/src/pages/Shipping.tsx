import PageLayout from '../components/PageLayout'

export default function Shipping() {
  return (
    <PageLayout title="Livraison et retours">
      <h2 className="text-lg font-bold text-amber-400">Livraison</h2>
      <p>
        Les commandes sont expédiées sous 2 à 5 jours ouvrés. Le délai de livraison estimé est de 3 à 7 jours ouvrés
        selon votre localisation.
      </p>
      <h2 className="text-lg font-bold text-amber-400">Retours</h2>
      <p>
        Vous disposez de 14 jours à compter de la réception de votre commande pour nous retourner un article qui ne
        vous conviendrait pas. Les articles doivent être retournés dans leur état d'origine, non portés et avec leurs
        étiquettes.
      </p>
    </PageLayout>
  )
}
