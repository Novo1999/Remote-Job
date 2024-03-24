import Error, { EmptyResponse } from '@/components/Dummies'
import Skeleton from '@/components/Job/Skeleton'
import { useJob } from '@/hooks/use-job'
import { useDeleteJobAsAdminMutation } from '@/lib/features/jobsApi/jobsApi'
import { Loader } from 'lucide-react'
import Image from 'next/image'
import { Job } from '../../../interfaces'
import dummyLogo from '../../../public/images/dummylogo.png'

const JobsGrid = () => {
  const { isLoading, isError, error, data, ref, totalJobs } = useJob()

  const [deleteJobAsAdmin] = useDeleteJobAsAdminMutation()

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

  if (!isLoading && !isError && data?.length! > 0) {
    content = (
      <section className='grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3'>
        {(data as Job[]).map(
          ({
            _id,
            companyLogo,
            title,
            jobType,
            location,
            posted,
            appliedBy,
            viewCount,
          }) => {
            return (
              <div
                key={_id}
                className='card card-side bg-gray-100 text-black shadow-xl min-[375px]:px-2 py-6 flex flex-col sm:flex-row'
              >
                <figure>
                  <Image
                    className='size-12 rounded-full'
                    src={companyLogo?.url ?? dummyLogo}
                    height={200}
                    width={200}
                    alt='Movie'
                  />
                </figure>
                <div className='card-body sm:w-48'>
                  <h2 className='card-title text-sm'>{title}</h2>
                  <div className='flex gap-2 flex-wrap'>
                    <p className='bg-yellow-300 text-xs font-bold rounded-full w-fit px-2 m-auto'>
                      {jobType.toUpperCase()}
                    </p>
                    <p className='bg-blue-300 text-xs font-bold rounded-full w-fit px-2 m-auto'>
                      {location}
                    </p>
                    <p className='bg-green-300 text-xs font-bold rounded-full w-fit px-2 m-auto'>
                      {posted}
                    </p>
                    <p className='bg-purple-300 text-xs font-bold rounded-full w-fit px-2 m-auto'>
                      Applied By: {appliedBy.userId.length}
                    </p>
                    <p className='bg-lime-300 text-xs font-bold rounded-full w-fit px-2 m-auto'>
                      Viewed By: {viewCount}
                    </p>
                  </div>
                  <div className='card-actions justify-end'>
                    <button
                      onClick={() =>
                        deleteJobAsAdmin({
                          id: _id,
                          adminId: process.env.NEXT_PUBLIC_ADMIN_UID,
                        })
                      }
                      className='btn btn-error'
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            )
          }
        )}
        {data?.length! < totalJobs! && (
          <div ref={ref} className='flex justify-center items-center min-h-60'>
            <Loader className='animate-spin' />
          </div>
        )}
      </section>
    )
  }

  return content
}
export default JobsGrid
