import { useAppDispatch, useAppSelector } from '@/lib/features/hooks'
import {
  useGetAllJobsQuery,
  useGetTotalJobsQuery,
} from '@/lib/features/jobsApi/jobsApi'
import { changeLimit } from '@/lib/features/limit/limitSlice'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export const useJob = () => {
  const searchParams = useSearchParams()
  const { limit } = useAppSelector((state) => state.limit)
  const { isSearching } = useAppSelector((state) => state.search)
  const { data: totalJobs } = useGetTotalJobsQuery()
  const sortParam = searchParams.get('sort')
  const filterParam = searchParams.get('filter') as string
  const searchQueryParam = searchParams.get('q') as string

  const dispatch = useAppDispatch()
  const { isLoading, isError, error, data, isFetching } = useGetAllJobsQuery(
    {
      sortBy: sortParam,
      limit,
      filterBy: filterParam,
      q: searchQueryParam || '',
    },
    { refetchOnMountOrArgChange: true }
  )

  const { ref, inView } = useInView({
    threshold: 0.5,
  })

  useEffect(() => {
    // fetch more jobs as user scrolls
    if (inView && limit < totalJobs!) {
      dispatch(changeLimit(10))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, dispatch, totalJobs])
  return {
    isLoading,
    isError,
    error,
    data,
    isSearching,
    isFetching,
    inView,
    ref,
  }
}
