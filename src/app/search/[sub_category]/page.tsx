import Link from 'next/link'

import { products } from '@/data/products'
import { defaultSort, sorting } from '@/lib/constants'

export default function CategoryPage({
  params,
  searchParams,
}: {
  params: { sub_category: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const subCategory = decodeURI(params.sub_category)
  const { sort } = searchParams as { [key: string]: string }

  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort

  const sortedProducts = products
    .filter((p) => p.sub_category.toLowerCase() === subCategory)
    .sort((a, b) => {
      const aValue = Number(a[sortKey]) ?? 9999
      const bValue = Number(b[sortKey]) ?? 9999

      return (aValue - bValue) * (reverse ? -1 : 1)
    })

  return (
    <section>
      <ol className="mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3">
        {sortedProducts.map((product) => (
          <li key={product.name}>
            <Link href={`/product/${product.id}`}>
              <div className="flex flex-col">
                <span>{product.id}</span>
                <span>{product.name}</span>
                <span>S/ {product.price}</span>
                {product.new && <span>New</span>}
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  )
}
