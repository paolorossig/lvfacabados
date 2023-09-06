import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import NextAuthProvider from '@/lib/auth/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LVF Acabados',
  description: 'Ecommerce de LVF Acabados',
}

type Props = { children: React.ReactNode }

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <Navbar />
          {children}
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  )
}
