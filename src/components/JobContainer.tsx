'use client'
import { Job } from '@/utils/interfaces'
import Error, { EmptyResponse } from './Dummies'
import JobChart from './Job/JobChart'
import JobItem from './Job/JobItem'
import Skeleton from './Job/Skeleton'
import { useJob } from '@/hooks/useJob'

const JobContainer = () => {
  const { isLoading, isError, error, data, searchData, ref, isSearching } =
    useJob()

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

  // if is searching then show the searched data
  if (isSearching && (searchData! as Job[]).length! > 0) {
    content = (searchData! as Job[])?.map((job: Job, index: number) => (
      <JobItem ref={ref} jobPost={job} index={index} key={job._id} />
    ))
  }

  // if not searching show regular jobs
  if (!isLoading && !isError && data?.length! > 0 && !isSearching) {
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
      className='flex flex-col gap-4 justify-center items-center mt-2
      min-[425px]:mx-2 sm:mx-7'
    >
      {content}
    </section>
  )
}
export default JobContainer
