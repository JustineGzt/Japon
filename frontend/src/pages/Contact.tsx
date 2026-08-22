import { useState } from 'react'
import PageLayout from '../components/PageLayout'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <PageLayout title="Contact">
      <p>Une question ? Écrivez-nous et nous vous répondrons dans les plus brefs délais.</p>

      {sent ? (
        <p className="font-semibold text-amber-400">Merci, votre message a bien été envoyé.</p>
      ) : (
        <form
          className="mt-4 flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault()
            setSent(true)
          }}
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm font-semibold text-gray-200">
              Nom
            </label>
            <input
              id="name"
              type="text"
              required
              className="rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#7a1b22]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-semibold text-gray-200">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#7a1b22]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-sm font-semibold text-gray-200">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              className="rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#7a1b22]"
            />
          </div>
          <button
            type="submit"
            className="self-start rounded-full bg-[#7a1b22] px-6 py-2 text-sm font-semibold text-white hover:opacity-90"
          >
            Envoyer
          </button>
        </form>
      )}
    </PageLayout>
  )
}
