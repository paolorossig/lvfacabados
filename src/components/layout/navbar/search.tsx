'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import { createUrl } from '@/lib/utils'

export default function Search() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    setSearchValue(searchParams?.get('q') || '')
  }, [searchParams, setSearchValue])

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const val = e.target as HTMLFormElement
    const search = val.search as HTMLInputElement
    const newParams = new URLSearchParams(searchParams.toString())

    if (search.value) {
      newParams.set('q', search.value)
    } else {
      newParams.delete('q')
    }

    router.push(createUrl('search', newParams))
  }

  return (
    <form onSubmit={onSubmit} className="w-full">
      <input
        type="text"
        name="search"
        placeholder="Buscar..."
        autoComplete="off"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="w-full rounded-xl px-4 py-3"
      />
    </form>
  )
}
