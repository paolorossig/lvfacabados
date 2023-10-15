import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'
import NextAuthProvider from '@/lib/auth/provider'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LVF Acabados',
  description: 'Ecommerce de LVF Acabados',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
