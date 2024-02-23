'use client'
import { resetFilter } from '@/lib/features/filter/filterSlice'
import { useAppDispatch } from '@/lib/features/hooks'
import { scrollAfterSearch } from '@/utils/scrollAfterSearch'
import { usePathname, useSearchParams } from 'next/navigation'
import useRouting from './use-routing'

export const useChangeSearchParams = () => {
  const dispatch = useAppDispatch()
  const handleRouting = useRouting()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const sortParam = searchParams.get('sort')
  const hasSearchParam = searchParams.has('q')
  const searchQuery = searchParams.get('q')

  const doParamsOperation = (param: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set(param, value)
    handleRouting(pathname + '?' + params.toString())
    // scrolling down after the params operation
    setTimeout(() => {
      scrollAfterSearch()
    }, 1000)
  }

  const removeQueryParam = (param: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.delete(param)
    handleRouting(pathname + '?' + params.toString())
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
    dispatch(resetFilter())
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
    handleFilter,
    handleQuery,
    handleResetFilter,
    hasFilterValue,
    handleResetSearch,
    handleResetSort,
    hasSearchParam,
    searchQuery,
  }
}
