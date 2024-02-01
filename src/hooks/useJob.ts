import {
  useGetTotalJobsQuery,
  useGetSearchedJobQuery,
  useGetAllJobsQuery,
} from '@/app/features/jobsApi/jobsApi'
import { changeLimit } from '@/app/features/limit/limitSlice'
import { useAppSelector, useAppDispatch } from '@/app/hooks'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export const useJob = () => {
  const searchParams = useSearchParams()
  const { limit } = useAppSelector((state) => state.limit)
  const { isSearching, query } = useAppSelector((state) => state.search)
  const { data: totalJobs } = useGetTotalJobsQuery()
  const { data: searchData } = useGetSearchedJobQuery(query)
  const sortParam = searchParams.get('sort')

  const dispatch = useAppDispatch()
  const { isLoading, isError, error, data } = useGetAllJobsQuery({
    sortBy: sortParam,
    limit,
  })
  const { ref, inView } = useInView({
    threshold: 0,
  })

  useEffect(() => {
    // fetch more jobs as user scrolls
    if (inView && limit < totalJobs!) {
      dispatch(changeLimit(10))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, dispatch, totalJobs])
  return { isLoading, isError, error, data, searchData, isSearching, ref }
}
