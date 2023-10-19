import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface Item {
  productId: string
  quantity: number
}

interface CartState {
  items: Map<string, number>
  add: (item: Item) => void
}

export const useCartStore = create<CartState>()(
  devtools((set) => ({
    items: new Map(),
    add: (item) =>
      set((state) => ({
        items: new Map(state.items).set(item.productId, item.quantity),
      })),
  })),
)
