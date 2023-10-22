'use client'

import { useState } from 'react'

function EditButton({
  variant,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: 'increase' | 'decrease'
}) {
  return (
    <button
      type="button"
      {...props}
      className={`${
        variant === 'increase' ? 'rounded-r-md' : 'rounded-l-md'
      } cursor-pointer bg-gray-200 px-5 py-3 duration-100 hover:bg-brand-contrast hover:text-blue-50`}
    >
      {variant === 'increase' ? '+' : '-'}
    </button>
  )
}

export default function ItemQuantityButtons() {
  const [quantity, setQuantity] = useState(1)
  const increment = () => setQuantity((prev) => prev + 1)
  const decrease = () => setQuantity((prev) => prev - 1)

  return (
    <div className="flex items-center border-gray-200">
      <EditButton
        variant="decrease"
        onClick={decrease}
        disabled={quantity <= 1}
      />
      <input
        name="quantity"
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
        className="h-12 w-12 border bg-white text-center text-xs outline-none"
      />
      <EditButton variant="increase" onClick={increment} />
    </div>
  )
}
