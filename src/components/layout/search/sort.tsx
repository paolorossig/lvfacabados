'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'

import type { SortFilterItem } from '@/lib/constants'
import { createUrl } from '@/lib/utils'

export default function SortBy({ list }: { list: SortFilterItem[] }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [sort, setSort] = useState('')

  const q = searchParams.get('q')

  useEffect(() => {
    list.forEach((item) => {
      if (item.slug === searchParams.get('sort')) {
        setSort(item.name)
      }
    })
  }, [list, searchParams])

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="group inline-flex items-center text-gray-700 hover:text-gray-900">
        Ordenar por
        <ChevronDownIcon
          className="-mr-1 ml-2 h-5 w-5 flex-shrink-0 text-gray-700 group-hover:text-gray-900"
          aria-hidden="true"
        />
      </Menu.Button>
      <Menu.Items className="absolute right-0 z-10 mt-2 w-52 origin-top-right overflow-hidden rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
        {list.map((item) => {
          const href = createUrl(
            pathname,
            new URLSearchParams({
              ...(q && { q }),
              ...(item.slug && { sort: item.slug }),
            }),
          )

          return (
            <Menu.Item key={item.name} as="div" className="relative">
              {({ active }) => (
                <>
                  <Link
                    href={href}
                    className={clsx(
                      'block py-2 pl-3 pr-6 text-sm',
                      active && 'bg-gray-100',
                    )}
                  >
                    {item.name}
                  </Link>
                  {item.name === sort && (
                    <CheckIcon className="absolute right-2 top-2 h-4 w-4" />
                  )}
                </>
              )}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
}
