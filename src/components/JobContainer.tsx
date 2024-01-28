'use client'
import { jobPosts } from '@/utils/dummyData'
import JobItem from './Job/JobItem'
import { useGetAllJobsQuery } from '@/app/features/jobsApi/jobsApi'

const JobContainer = () => {
  const { isLoading, isError, error, data } = useGetAllJobsQuery()

  let content = null

  if (isLoading) {
    content = <span className='loading loading-dots loading-lg'></span>
  }

  if (isError) {
    content = (
      <div role='alert' className='alert alert-error'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='stroke-current shrink-0 h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
        <span>Error! Task failed successfully.</span>
      </div>
    )
  }

  if (!isLoading && !isError && data?.length === 0) {
    content = (
      <div role='alert' className='alert alert-info'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          className='stroke-current shrink-0 w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          ></path>
        </svg>
        <span>No Jobs available at the moment.</span>
      </div>
    )
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
