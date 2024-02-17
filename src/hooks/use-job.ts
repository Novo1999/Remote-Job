import { useAppDispatch, useAppSelector } from '@/lib/features/hooks'
import {
  useGetAllJobsQuery,
  useGetTotalJobsQuery,
} from '@/lib/features/jobsApi/jobsApi'
import { changeLimit } from '@/lib/features/limit/limitSlice'
import { setShowSkeleton } from '@/lib/features/loader/loaderSlice'
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
  const { isLoading, isError, error, data, isFetching } = useGetAllJobsQuery({
    sortBy: sortParam,
    limit,
    filterBy: filterParam,
    q: searchQueryParam || '',
  })

  const { ref, inView } = useInView({
    threshold: 0.5,
  })

  useEffect(() => {
    // fetch more jobs as user scrolls
    if (inView && limit < totalJobs!) {
      dispatch(setShowSkeleton(true))
      dispatch(changeLimit(10)) // the payload is 10 which will be added to the limit as user scrolls so there are +10 data and so on
    }
    // if there are no jobs, don't show skeleton
  }, [inView, totalJobs, dispatch])

  console.log(isSearching)

  useEffect(() => {
    if (limit >= totalJobs! || isSearching || filterParam) {
      dispatch(setShowSkeleton(false))
    }
  }, [dispatch, filterParam, isSearching, limit, totalJobs])

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
