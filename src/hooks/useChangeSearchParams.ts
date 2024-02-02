'use client'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

export const useChangeSearchParams = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const sortParam = searchParams.get('sort')

  const handleSort = (value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('sort', value)
    router.push(pathname + '?' + params.toString(), { scroll: false })
  }

  const handleFilter = (value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('filter', value)
    router.push(pathname + '?' + params.toString(), { scroll: false })
  }

  const handleQuery = (value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('q', value)
    router.push(pathname + '?' + params.toString(), { scroll: false })
  }

  return { handleSort, sortParam, router, handleFilter, handleQuery }
}
