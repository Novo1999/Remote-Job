'use client'
import { useJob } from '@/hooks/use-job'
import Error, { EmptyResponse } from './Dummies'
import JobChart from './Job/JobChart'
import JobItem from './Job/JobItem'
import Skeleton from './Job/Skeleton'
import { Job } from '@/utils/interfaces'
import { useSearchParams } from 'next/navigation'

const JobContainer = () => {
  const { isLoading, isError, error, data, ref } = useJob()

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
