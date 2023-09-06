import { defaultSort, sorting } from '@/lib/constants'

type Props = { searchParams?: { [key: string]: string | string[] | undefined } }

const products = [
  {
    name: 'Product 1',
    sort: {
      RELEVANCE: 1,
      NEW: 5,
      PRICE: 2,
    },
  },
  {
    name: 'Product 2',
    sort: {
      RELEVANCE: 2,
      NEW: 2,
      PRICE: 1,
    },
  },
  {
    name: 'Product 3',
    sort: {
      RELEVANCE: 3,
      NEW: 1,
      PRICE: 5,
    },
  },
  {
    name: 'Product 4',
    sort: {
      RELEVANCE: 4,
      NEW: 3,
      PRICE: 4,
    },
  },
  {
    name: 'Product 5',
    sort: {
      RELEVANCE: 5,
      NEW: 4,
      PRICE: 3,
    },
  },
]

export default function SearchPage({ searchParams }: Props) {
  const { sort, q: searchValue } = searchParams as { [key: string]: string }
  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort

  const sortedProducts = products.sort(
    (a, b) => (a.sort[sortKey] - b.sort[sortKey]) * (reverse ? -1 : 1),
  )

  return (
    <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3">
      {sortedProducts.map((product) => (
        <a key={product.name} href="#">
          {product.name}
        </a>
      ))}
    </div>
  )
}
