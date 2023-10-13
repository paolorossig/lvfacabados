/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'

import Cart from '@/components/cart'

import Search from './search'
import SignIn from './signin'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10">
      <nav className="bg-brand">
        <div className="mx-auto max-w-7xl px-8">
          <div className="flex h-24 items-center justify-between space-x-6">
            <Link href="/">
              <img
                src="https://cassinelli.com/assets/cassinelli/logo-cassinelli-white.svg"
                alt=""
              />
            </Link>
            <div className="hidden flex-1 lg:flex">
              <Search />
            </div>
            <div className="flex h-12 items-center justify-center divide-x divide-white text-white">
              <SignIn />
              <div className="flex h-full flex-col items-start px-6">
                <span>Mis</span>
                <span>Compras</span>
              </div>
              <div className="flex h-full items-center pl-6 pr-3">
                <Cart />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
