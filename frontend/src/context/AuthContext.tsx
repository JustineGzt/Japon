import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type User = {
  id: string
  email: string
  firstName: string
  lastName: string
  createdAt: string
}

export type RegisterData = {
  email: string
  password: string
  firstName: string
  lastName: string
}

type AuthContextValue = {
  user: User | null
  /** true tant que la session enregistrée est en cours de vérification */
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (data: RegisterData) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

const TOKEN_KEY = 'auth_token'
const API_URL = import.meta.env.VITE_API_URL ?? '/api'

const readToken = () => {
  try {
    return localStorage.getItem(TOKEN_KEY)
  } catch {
    return null
  }
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  let response: Response
  try {
    response = await fetch(`${API_URL}${path}`, {
      ...init,
      headers: { 'Content-Type': 'application/json', ...init?.headers },
    })
  } catch {
    throw new Error('Impossible de joindre le serveur. Réessayez plus tard.')
  }
  const body = await response.json().catch(() => null)
  if (!response.ok) {
    // Nest renvoie { message: string | string[] }
    const message = Array.isArray(body?.message) ? body.message[0] : body?.message
    throw new Error(message ?? 'Une erreur est survenue')
  }
  return body as T
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(readToken)
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(() => readToken() !== null)

  useEffect(() => {
    try {
      if (token) localStorage.setItem(TOKEN_KEY, token)
      else localStorage.removeItem(TOKEN_KEY)
    } catch {
      // stockage indisponible : la session ne durera que le temps de l'onglet
    }
  }, [token])

  // Au chargement, vérifie que le jeton enregistré est toujours valide
  useEffect(() => {
    if (!token || user) return
    let cancelled = false
    request<User>('/auth/me', { headers: { Authorization: `Bearer ${token}` } })
      .then((me) => !cancelled && setUser(me))
      .catch(() => !cancelled && setToken(null))
      .finally(() => !cancelled && setLoading(false))
    return () => {
      cancelled = true
    }
  }, [token, user])

  const startSession = ({ token, user }: { token: string; user: User }) => {
    setLoading(false)
    setUser(user)
    setToken(token)
  }

  const login = async (email: string, password: string) => {
    startSession(await request('/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) }))
  }

  const register = async (data: RegisterData) => {
    startSession(await request('/auth/register', { method: 'POST', body: JSON.stringify(data) }))
  }

  const logout = () => {
    setLoading(false)
    setUser(null)
    setToken(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>{children}</AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within an AuthProvider')
  return context
}
