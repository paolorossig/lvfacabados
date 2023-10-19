'use client'

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline'

import { useCartStore } from '@/lib/stores/cart'

import CartIcon from './icon'

export default function CartModal() {
  const [isOpen, setIsOpen] = useState(false)
  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  const { items } = useCartStore()

  const itemsList = Array.from(items, ([productId, quantity]) => ({
    productId,
    quantity,
  }))

  return (
    <>
      <button onClick={openCart}>
        <CartIcon totalItems={items.size} />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeCart} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="fixed bottom-0 right-0 top-0 flex h-full w-full flex-col border-l border-gray-400 bg-brand/70 p-6 text-white backdrop-blur-xl md:w-[390px]">
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold">Mi Carrito</p>
                <button aria-label="Close cart" onClick={closeCart}>
                  <XMarkIcon className="h-6 transition-all ease-in-out hover:scale-110" />
                </button>
              </div>
              {items.size > 0 ? (
                <ul>
                  {itemsList.map((item) => (
                    <li key={item.productId}>
                      {item.productId}: {item.quantity}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
                  <ShoppingCartIcon className="h-16 stroke-1" />
                  <p className="mt-6 text-center text-2xl">
                    Your cart is empty.
                  </p>
                </div>
              )}
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  )
}
