'use client'

import { Disclosure } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid'

const filters = [
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

export default function FilterList() {
  return (
    <aside className="hidden bg-slate-200 px-8 py-6 lg:block">
      <h3 className="text-lg font-bold">Filtros</h3>
      <div className="space-y-4 py-4">
        {filters.map((filter) => (
          <Disclosure key={filter.id} as="div" defaultOpen>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full items-center justify-between border-b border-gray-400 py-3">
                  <span className="font-medium text-gray-900">
                    {filter.name}
                  </span>
                  <span className="ml-2 flex items-center">
                    {open ? (
                      <MinusIcon className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <PlusIcon className="h-5 w-5" aria-hidden="true" />
                    )}
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel as="ul" className="space-y-4 pt-6">
                  {filter.options.map((option, idx) => (
                    <li key={option.value} className="flex items-center">
                      <input
                        id={`filter-${filter.id}-${idx}`}
                        name={`${filter.id}[]`}
                        type="checkbox"
                        defaultValue={option.value}
                        defaultChecked={option.checked}
                        className="h-4 w-4 rounded"
                      />
                      <label
                        htmlFor={`filter-${filter.id}-${idx}`}
                        className="ml-3 text-sm text-gray-600"
                      >
                        {option.label}
                      </label>
                    </li>
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </aside>
  )
}
