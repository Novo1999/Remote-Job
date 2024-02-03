'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export const useChangeSearchParams = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const sortParam = searchParams.get('sort')
  const hasSearchParam = searchParams.has('q')
  const doParamsOperation = (param: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set(param, value)
    router.push(pathname + '?' + params.toString(), { scroll: false })
  }

  const removeQueryParam = (param: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.delete(param)
    router.push(pathname + '?' + params.toString(), { scroll: false })
  }

  const handleSort = (value: string) => {
    if (value === 'default') {
      handleResetSort()
    } else {
      doParamsOperation('sort', value)
    }
  }

  const handleFilter = (value: string) => {
    doParamsOperation('filter', value)
  }

  const handleQuery = (value: string) => {
    doParamsOperation('q', value)
  }

  const handleResetFilter = () => {
    removeQueryParam('filter')
  }

  const handleResetSearch = () => {
    removeQueryParam('q')
  }

  const handleResetSort = () => {
    removeQueryParam('sort')
  }
  const hasFilterValue =
    searchParams.has('filter') && searchParams.get('filter') !== ''

  return {
    handleSort,
    sortParam,
    router,
    handleFilter,
    handleQuery,
    handleResetFilter,
    hasFilterValue,
    handleResetSearch,
    handleResetSort,
    hasSearchParam,
  }
}
