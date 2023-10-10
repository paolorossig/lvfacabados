/* eslint-disable @next/next/no-img-element */
import { HeartIcon } from '@heroicons/react/24/outline'

import { products } from '@/data/products'

type Props = { params: { id: string } }

const defaultImage =
  'https://qidcfx1zbotbdw8uoij2kll.blob.core.windows.net/sys-master-images/h3b/h26/9271637803038/110308_15_media_csl1200Wx1200H'

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => p.id === params.id)

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
            <div className="mt-10 flex">
              <button
                type="submit"
                className="hover:bg-brand-contrast flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-brand px-8 py-3 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
              >
                Agregar al carrito
              </button>
              <button
                type="button"
                className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
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
