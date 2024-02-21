'use client'
import { useJob } from '@/hooks/use-job'
import { changeSalary } from '@/lib/features/filter/filterSlice'
import { useAppDispatch, useAppSelector } from '@/lib/features/hooks'
import { useGetMaxSalaryQuery } from '@/lib/features/jobsApi/jobsApi'
import { useEffect } from 'react'
import { Job } from '../../interfaces'
import Error, { EmptyResponse } from './Dummies'
import JobChart from './Job/JobChart'
import JobItem from './Job/JobItem'
import Skeleton from './Job/Skeleton'

const JobContainer = () => {
  const { isLoading, isError, error, data, ref } = useJob()
  const { showSkeleton } = useAppSelector((state) => state.loader)
  const dispatch = useAppDispatch()

  const { data: maxSalary } = useGetMaxSalaryQuery()

  useEffect(() => {
    if (maxSalary) {
      dispatch(changeSalary(maxSalary.max * 10000))
    } else return
  }, [maxSalary, dispatch])

  let content = null
  if (isLoading) {
    // making skeletons for 10 jobs hard coded
    content = (
      <>
        <div className='flex gap-2 sm:gap-4 lg:gap-6 items-end m-auto h-96 mt-12'>
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className='w-4 bg-gray-300 bar'></div>
          ))}
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <Skeleton key={index} />
        ))}
      </>
    )
  }

  if (isError) {
    if ('status' in error!) {
      content = <Error error={error} />
    }
  }

  if (!isLoading && !isError && data?.length === 0) {
    content = <EmptyResponse />
  }

  // if not searching show regular jobs
  if (!isLoading && !isError && data?.length! > 0) {
    content = (
      <>
        <JobChart data={data as Job[]} />
        {data?.map((job) => (
          <JobItem ref={ref} jobPost={job} key={job._id} />
        ))}
        {showSkeleton && <Skeleton />}
      </>
    )
  }

  return (
    <section
      className='flex flex-col gap-4 justify-center items-center mt-2
      min-[425px]:mx-2 sm:mx-7'
    >
      {content}
    </section>
  )
}
export default JobContainer
