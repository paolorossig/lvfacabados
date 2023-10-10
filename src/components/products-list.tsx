/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

import { type Product } from '@/data/products'

function ProductCard({ product }: { product: Product }) {
  return (
    <li key={product.id}>
      <Link href={`/product/${product.id}`}>
        <div className="flex flex-col rounded-lg bg-white p-3 shadow-sm">
          <picture>
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full rounded-md object-cover object-center"
            />
          </picture>
          <div className="mt-8 flex flex-col">
            <span className="font-extralight">{product.sub_category}</span>
            <span>{product.name}</span>
            <span className="text-gray-700">{product.price}</span>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default function ProductsList({
  title,
  products,
}: {
  title: string
  products: Product[]
}) {
  return (
    <div className="py-8">
      <div className="mx-auto flex max-w-7xl flex-col px-8">
        <div className="mb-4 flex items-center space-x-4">
          <div className="h-3 w-3 rounded-full bg-brand" />
          <span>{title}</span>
        </div>
        <ul className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </div>
  )
}
