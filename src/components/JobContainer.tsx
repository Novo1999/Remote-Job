'use client'
import { useJob } from '@/hooks/use-job'
import { Job } from '@/utils/interfaces'
import Error, { EmptyResponse } from './Dummies'
import JobChart from './Job/JobChart'
import JobItem from './Job/JobItem'
import Skeleton from './Job/Skeleton'
import { useEffect, useState } from 'react'

const JobContainer = () => {
  const { isLoading, isError, error, data, isFetching, ref, inView } = useJob()

  const [showSkeleton, setShowSkeleton] = useState(false)

  useEffect(() => {
    let ignore = false
    if (inView && isFetching && !ignore) {
      setShowSkeleton(true)
    } else {
      setShowSkeleton(false)
    }

    return () => (ignore = true)
  }, [inView, isFetching])

  let content = null
  if (isLoading) {
    // making skeletons for 10 jobs hard coded
    content = Array.from({ length: 10 }).map((_, index) => (
      <Skeleton key={index} />
    ))
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
        {data?.map((job, index) => (
          <JobItem ref={ref} jobPost={job} index={index} key={job._id} />
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
