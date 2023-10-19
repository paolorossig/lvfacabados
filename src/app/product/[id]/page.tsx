'use client'

/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { HeartIcon } from '@heroicons/react/24/outline'

import { products } from '@/data/products'
import { useCartStore } from '@/lib/stores/cart'

const defaultImage =
  'https://qidcfx1zbotbdw8uoij2kll.blob.core.windows.net/sys-master-images/h3b/h26/9271637803038/110308_15_media_csl1200Wx1200H'

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id)

  const [quantity, setQuantity] = useState(1)
  const increment = () => setQuantity((prev) => prev + 1)
  const decrease = () => setQuantity((prev) => prev - 1)

  const cart = useCartStore()

  // TODO: Add product not found message
  if (!product) return

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
        <figure>
          <img
            src={!product.image.startsWith('/') ? product.image : defaultImage}
            alt=""
            className="h-full w-full object-cover object-center sm:rounded-lg"
          />
        </figure>
        <div>
          <span className="font-light uppercase tracking-tight text-gray-700">
            {product.sub_category}
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {product.name}
          </h1>
          <span className="text-3xl tracking-tight text-gray-900">
            S/ {product.price}
          </span>
          <form>
            <div className="mt-10 flex space-x-4">
              <div className="flex items-center border-gray-200">
                <button
                  type="button"
                  onClick={decrease}
                  disabled={quantity <= 1}
                  className="cursor-pointer rounded-l-md bg-gray-200 px-5 py-3 duration-100 hover:bg-brand-contrast hover:text-blue-50"
                >
                  -
                </button>
                <input
                  className="h-12 w-12 border bg-white text-center text-xs outline-none"
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                />
                <button
                  type="button"
                  onClick={increment}
                  className="cursor-pointer rounded-r-md bg-gray-200 px-5 py-3 duration-100 hover:bg-brand-contrast hover:text-blue-50"
                >
                  +
                </button>
              </div>
              <button
                type="button"
                className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-brand px-8 py-3 text-base font-medium text-white hover:bg-brand-contrast focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                onClick={() => cart.add({ productId: product.id, quantity })}
              >
                Agregar al carrito
              </button>
              <button
                type="button"
                className="flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
              >
                <HeartIcon
                  className="h-6 w-6 flex-shrink-0"
                  aria-hidden="true"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
