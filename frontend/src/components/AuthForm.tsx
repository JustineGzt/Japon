import type { FormEvent, InputHTMLAttributes, ReactNode } from 'react'

export function Field({ label, ...props }: { label: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-amber-200">{label}</span>
      <input
        {...props}
        className="w-full rounded-lg border border-white/20 bg-white px-4 py-2 text-sm text-gray-800 outline-none focus:border-amber-300 focus:ring-2 focus:ring-amber-300/50"
      />
    </label>
  )
}

export default function AuthForm({
  onSubmit,
  error,
  submitting,
  submitLabel,
  children,
  footer,
}: {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  error: string | null
  submitting: boolean
  submitLabel: string
  children: ReactNode
  footer: ReactNode
}) {
  return (
    <form onSubmit={onSubmit} className="max-w-md space-y-4">
      {children}
      {error && (
        <p role="alert" className="rounded-lg bg-red-950/60 px-4 py-2 text-sm text-red-200">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-full bg-amber-400 px-8 py-3 text-sm font-bold uppercase tracking-wide text-[#2a1012] hover:opacity-90 disabled:opacity-60"
      >
        {submitting ? 'Patientez…' : submitLabel}
      </button>
      <p className="text-center text-sm text-gray-300">{footer}</p>
    </form>
  )
}
