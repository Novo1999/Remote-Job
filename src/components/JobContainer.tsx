'use client'
import { useGetAllJobsQuery } from '@/app/features/jobsApi/jobsApi'
import JobItem from './Job/JobItem'
import Error, { EmptyResponse } from './Dummies'

const JobContainer = () => {
  const { isLoading, isError, error, data } = useGetAllJobsQuery()
  let content = null

  if (isLoading) {
    content = (
      <span className='loading loading-dots loading-lg min-h-screen'></span>
    )
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
    content = data?.map((job, index) => (
      <JobItem jobPost={job} index={index} key={job._id} />
    ))
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
