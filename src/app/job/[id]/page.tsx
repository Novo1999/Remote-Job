'use client'
import Error, { EmptyResponse } from '@/components/Dummies'
import AboutCompany from '@/components/JobDetails/AboutCompany'
import JobCard from '@/components/JobDetails/JobCard'
import SimilarJobs from '@/components/JobDetails/SimilarJobs'
import { useGetSingleJobQuery } from '@/lib/features/jobsApi/jobsApi'

function Page({ params }: { params: { id: string } }) {
  const {
    data: job,
    isLoading,
    isError,
    error,
  } = useGetSingleJobQuery(params.id)

  let content = null
  if (isLoading) {
    content = (
      <span className='loading loading-dots loading-lg min-h-screen m-auto'></span>
    )
  }

  if (isError) {
    if ('status' in error) {
      content = <Error error={error} />
    }
  }

  if (!isLoading && !isError && !job?.title) {
    content = <EmptyResponse />
  }

  if (!isLoading && !isError && job?.title) {
    content = <JobCard job={job!} />
  }

  return (
    <main className='flex gap-4 flex-col sm:mx-8 mt-6 mx-4 lg:mx-20 xl:mx-60 2xl:mx-96'>
      {content}
      <AboutCompany job={job!} />
      {!isLoading && !isError && job && (
        <SimilarJobs id={job._id} position={job.position} />
      )}
    </main>
  )
}

export default Page
