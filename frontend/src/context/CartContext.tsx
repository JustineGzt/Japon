import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Product } from '../data/products'

export type CartItem = {
  slug: string
  name: string
  photo: string
  price: string
  quantity: number
}

type CartContextValue = {
  items: CartItem[]
  addItem: (product: Product, quantity?: number) => void
  removeItem: (slug: string) => void
  updateQuantity: (slug: string, quantity: number) => void
  clearCart: () => void
  totalQuantity: number
  totalPrice: number
}

const CartContext = createContext<CartContextValue | undefined>(undefined)

const STORAGE_KEY = 'cart'

const parsePrice = (price: string) => parseFloat(price.replace(',', '.').replace(/[^\d.]/g, '')) || 0

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? (JSON.parse(stored) as CartItem[]) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addItem = (product: Product, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.slug === product.slug)
      if (existing) {
        return prev.map((item) =>
          item.slug === product.slug ? { ...item, quantity: item.quantity + quantity } : item,
        )
      }
      return [
        ...prev,
        { slug: product.slug, name: product.name, photo: product.photo, price: product.price, quantity },
      ]
    })
  }

  const removeItem = (slug: string) => {
    setItems((prev) => prev.filter((item) => item.slug !== slug))
  }

  const updateQuantity = (slug: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(slug)
      return
    }
    setItems((prev) => prev.map((item) => (item.slug === slug ? { ...item, quantity } : item)))
  }

  const clearCart = () => setItems([])

  const totalQuantity = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items])
  const totalPrice = useMemo(
    () => items.reduce((sum, item) => sum + parsePrice(item.price) * item.quantity, 0),
    [items],
  )

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearCart, totalQuantity, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within a CartProvider')
  return context
}
