import { useState, type FormEvent } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import AuthForm, { Field } from '../components/AuthForm'
import { useAuth } from '../context/AuthContext'

export default function Register() {
  const { user, register } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  if (user) return <Navigate to="/compte" replace />

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    if (form.get('password') !== form.get('confirm')) {
      setError('Les mots de passe ne correspondent pas')
      return
    }
    setError(null)
    setSubmitting(true)
    try {
      await register({
        firstName: String(form.get('firstName')),
        lastName: String(form.get('lastName')),
        email: String(form.get('email')),
        password: String(form.get('password')),
      })
      navigate('/compte', { replace: true })
    } catch (err) {
      setError((err as Error).message)
      setSubmitting(false)
    }
  }

  return (
    <PageLayout title="Créer un compte">
      <AuthForm
        onSubmit={handleSubmit}
        error={error}
        submitting={submitting}
        submitLabel="Créer mon compte"
        footer={
          <>
            Déjà inscrit ?{' '}
            <Link to="/connexion" className="text-amber-300 underline hover:text-white">
              Se connecter
            </Link>
          </>
        }
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Prénom" name="firstName" autoComplete="given-name" required maxLength={50} />
          <Field label="Nom" name="lastName" autoComplete="family-name" required maxLength={50} />
        </div>
        <Field label="E-mail" name="email" type="email" autoComplete="email" required />
        <Field
          label="Mot de passe (8 caractères minimum)"
          name="password"
          type="password"
          autoComplete="new-password"
          required
          minLength={8}
          maxLength={72}
        />
        <Field label="Confirmer le mot de passe" name="confirm" type="password" autoComplete="new-password" required />
      </AuthForm>
    </PageLayout>
  )
}
