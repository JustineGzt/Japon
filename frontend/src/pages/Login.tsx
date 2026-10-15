import { useState, type FormEvent } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import AuthForm, { Field } from '../components/AuthForm'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const { user, login } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  if (user) return <Navigate to="/compte" replace />

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    setError(null)
    setSubmitting(true)
    try {
      await login(String(form.get('email')), String(form.get('password')))
      navigate('/compte', { replace: true })
    } catch (err) {
      setError((err as Error).message)
      setSubmitting(false)
    }
  }

  return (
    <PageLayout title="Connexion">
      <AuthForm
        onSubmit={handleSubmit}
        error={error}
        submitting={submitting}
        submitLabel="Se connecter"
        footer={
          <>
            Pas encore de compte ?{' '}
            <Link to="/inscription" className="text-amber-300 underline hover:text-white">
              Créer un compte
            </Link>
          </>
        }
      >
        <Field label="E-mail" name="email" type="email" autoComplete="email" required />
        <Field label="Mot de passe" name="password" type="password" autoComplete="current-password" required />
      </AuthForm>
    </PageLayout>
  )
}
