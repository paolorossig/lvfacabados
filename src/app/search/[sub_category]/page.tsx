import { products } from '@/data/products'
import { defaultSort, sorting } from '@/lib/constants'

type Props = {
  params: { sub_category: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}

export default function CategoryPage({ params, searchParams }: Props) {
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
          <li key={product.name} className="flex flex-col">
            <span>{product.id}</span>
            <a href="#">
              <span>{product.name}</span>
            </a>
            <span>S/ {product.price}</span>
            {product.new && <span>New</span>}
          </li>
        ))}
      </ol>
    </section>
  )
}
