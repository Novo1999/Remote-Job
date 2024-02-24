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
import { toast } from 'react-toastify'

export const useJob = () => {
  const searchParams = useSearchParams()
  const { limit } = useAppSelector((state) => state.limit)
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
  }, [inView, totalJobs, dispatch])

  useEffect(() => {
    if (limit >= totalJobs! || searchQueryParam || filterParam) {
      dispatch(setShowSkeleton(false))
    }
  }, [dispatch, filterParam, limit, searchQueryParam, totalJobs])

  return {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    inView,
    ref,
  }
}
