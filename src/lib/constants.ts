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

export type FilterItem = {
  id: string
  name: string
  options: { value: string; label: string; checked: boolean }[]
}

export const filters: FilterItem[] = [
  {
    id: 'type',
    name: 'Tipo de Producto',
    options: [
      { value: 'cruceta', label: 'Cruceta', checked: false },
      { value: 'perfil_pvc', label: 'Perfil de pvc', checked: false },
      { value: 'porcelanato', label: 'Porcelanato', checked: true },
    ],
  },
  {
    id: 'price',
    name: 'Precio',
    options: [
      { value: '0', label: 'S/ 0 - S/ 49.99', checked: false },
      { value: '1', label: 'S/ 50 - S/ 199.99', checked: false },
      { value: '2', label: 'S/ 200 - S/ 499.99', checked: true },
    ],
  },
  {
    id: 'brand',
    name: 'Marca',
    options: [
      { value: 'celima', label: 'Celima', checked: false },
      { value: 'emil', label: 'Emil', checked: false },
      { value: 'emil_ceramica', label: 'Emil ceramica', checked: false },
      { value: 'nefusac', label: 'Nefusac', checked: false },
      { value: 'rodoplast', label: 'Rodoplast', checked: false },
    ],
  },
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'azul', label: 'Azul', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blanco', label: 'Blanco', checked: false },
      { value: 'gris', label: 'Gris', checked: false },
      { value: 'negro', label: 'Negro', checked: false },
    ],
  },
]
