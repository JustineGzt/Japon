import type { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function PageLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-[#5c1219] px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-6 text-2xl font-extrabold tracking-wide text-amber-400 sm:text-3xl">{title}</h1>
          <div className="space-y-4 text-sm leading-relaxed text-gray-300 sm:text-base">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
