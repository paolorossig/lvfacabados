export type SortFilterItem = {
  name: string
  slug: string | null
  sortKey: 'RELEVANCE' | 'NEW' | 'PRICE'
  reverse: boolean
}

export const defaultSort: SortFilterItem = {
  name: 'Relevancia',
  slug: null,
  sortKey: 'RELEVANCE',
  reverse: false,
}

export const sorting: SortFilterItem[] = [
  defaultSort,
  {
    name: 'Nuevo',
    slug: 'new',
    sortKey: 'NEW',
    reverse: false,
  },
  {
    name: 'Precio: Menor a Mayor',
    slug: 'price-asc',
    sortKey: 'PRICE',
    reverse: false,
  },
  {
    name: 'Precio: Mayor a Menor',
    slug: 'price-desc',
    sortKey: 'PRICE',
    reverse: true,
  },
]
