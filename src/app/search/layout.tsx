import FilterList from '@/components/layout/search/filter'
import SortBy from '@/components/layout/search/sort'
import { filters, sorting } from '@/lib/constants'

type Props = { children: React.ReactNode }

export default function SearchLayout({ children }: Props) {
  return (
    <main className="py-4">
      <section className="mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          <FilterList list={filters} />
          <div className="flex flex-col lg:col-span-3">
            <div className="flex h-16 items-center justify-between border-b border-gray-400">
              <span>5 Resultados</span>
              <SortBy list={sorting} />
            </div>
            {children}
          </div>
        </div>
      </section>
    </main>
  )
}
