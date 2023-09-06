/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'
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
            <div className="flex items-center space-x-3 text-white">
              <SignIn />
              <a href="#">Mis compras</a>
              <a href="#">Carrito</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
