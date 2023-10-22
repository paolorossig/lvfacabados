'use client'

import { type FormEvent } from 'react'
import { HeartIcon } from '@heroicons/react/24/outline'

import { useCartStore } from '@/lib/stores/cart'

import ItemQuantityButtons from './item-quantity-buttons'

function SubmitButton() {
  return (
    <button
      type="submit"
      aria-label="Add to cart"
      className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-brand px-8 py-3 text-base font-medium text-white hover:bg-brand-contrast focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
    >
      Agregar al carrito
    </button>
  )
}

function FavoriteButton() {
  return (
    <button
      type="button"
      className="flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
    >
      <HeartIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
    </button>
  )
}

export default function AddToCart({ productId }: { productId: string }) {
  const cart = useCartStore()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const productId = formData.get('productId') as string
    const quantity = parseInt(formData.get('quantity') as string)

    cart.add({ productId, quantity })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-10 flex space-x-4">
        <input type="text" name="productId" value={productId} hidden readOnly />
        <ItemQuantityButtons />
        <SubmitButton />
        <FavoriteButton />
      </div>
    </form>
  )
}
