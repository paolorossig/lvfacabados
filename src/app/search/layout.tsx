import FilterList from '@/components/layout/search/filter'

type Props = { children: React.ReactNode }

export default function SearchLayout({ children }: Props) {
  return (
    <main className="py-4">
      <section className="mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          <FilterList />
          <div className="flex flex-1 flex-col">
            <div>Paginación y Ordenar por</div>
            {children}
          </div>
        </div>
      </section>
    </main>
  )
}
