'use client'
import {
  useGetAllJobsQuery,
  useGetTotalJobsQuery,
} from '@/app/features/jobsApi/jobsApi'
import { changeLimit } from '@/app/features/limit/limitSlice'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Error, { EmptyResponse } from './Dummies'
import JobItem from './Job/JobItem'
import { useSearchParams } from 'next/navigation'
import Skeleton from './Job/Skeleton'
import JobChart from './Job/JobChart'
import { Job } from '@/utils/interfaces'

const JobContainer = () => {
  const searchParams = useSearchParams()
  const { limit } = useAppSelector((state) => state.limit)
  const { data: totalJobs } = useGetTotalJobsQuery()
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

  let content = null

  if (isLoading) {
    // making skeletons for 10 jobs hard coded
    content = Array.from({ length: 10 }).map((_, index) => (
      <Skeleton key={index} />
    ))
  }

  if (isError) {
    if ('status' in error) {
      content = <Error error={error} />
    }
  }

  if (!isLoading && !isError && data?.length === 0) {
    content = <EmptyResponse />
  }

  if (!isLoading && !isError && data?.length! > 0) {
    content = (
      <>
        <JobChart data={data} />
        {data?.map((job, index) => (
          <JobItem ref={ref} jobPost={job} index={index} key={job._id} />
        ))}
      </>
    )
  }

  return (
    <section
      style={{
        scrollBehavior: 'unset',
      }}
      className='flex flex-col gap-4 justify-center items-center mt-2
      min-[425px]:mx-2 sm:mx-7'
    >
      {/* {!isLoading && !isError && data?.length! > 0 && <JobChart />} */}
      {content}
    </section>
  )
}
export default JobContainer
