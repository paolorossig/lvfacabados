import { ShoppingCartIcon } from '@heroicons/react/24/outline'

export default function CartIcon({ totalItems }: { totalItems: number }) {
  return (
    <div className="relative">
      <ShoppingCartIcon className="h-8 w-8" />
      {totalItems ? (
        <div className="absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded bg-red-600 text-[11px] font-medium text-white">
          {totalItems}
        </div>
      ) : null}
    </div>
  )
}
