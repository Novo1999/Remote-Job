import Error, { EmptyResponse } from '@/components/Dummies'
import useDebounce from '@/hooks/use-debounce'
import { useJob } from '@/hooks/use-job'
import { useDeleteJobAsAdminMutation } from '@/lib/features/jobsApi/jobsApi'
import { AnimatePresence, motion } from 'framer-motion'
import { Loader, Search } from 'lucide-react'
import Image from 'next/image'
import { ChangeEvent, useState } from 'react'
import { Job } from '../../../interfaces'
import dummyLogo from '../../../public/images/dummylogo.png'
import JobDeleteModal from '../JobDetails/JobDeleteModal'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

const JobsGrid = () => {
  const [search, setSearch] = useState('')
  const [modalOpen, setModalOpen] = useState('')
  const { isLoading, isError, error, data, ref, totalJobs } = useJob(search)

  const debouncedSearch = useDebounce((value: string) => {
    setSearch(value)
  }, 300)

  const handleSearchChange = (event: ChangeEvent<any>) => {
    const { value } = event.target
    debouncedSearch(value)
  }

  const [deleteJobAsAdmin, { isLoading: isDeleteLoading }] =
    useDeleteJobAsAdminMutation()

  let content = null
  if (isLoading) {
    // making skeletons for 10 jobs hard coded
    content = (
      <section className='grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3'>
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className='w-full'>
            <div className='w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600'></div>

            <h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
            <p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
          </div>
        ))}
      </section>
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
        <AnimatePresence mode='popLayout'>
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
                <motion.div
                  layout
                  key={_id}
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ y: 300, opacity: 0 }}
                  className='card card-side bg-gray-100 text-black shadow-xl min-[375px]:px-2 py-4 pt-10 flex flex-col sm:flex-row'
                >
                  <figure>
                    <Image
                      className='size-24 lg:size-[80px] rounded-full'
                      src={companyLogo?.url ?? dummyLogo}
                      height={200}
                      width={200}
                      alt='Movie'
                    />
                  </figure>
                  <div className='card-body sm:w-48'>
                    <h2 className='card-title text-sm'>{title}</h2>
                    <div className='flex gap-2 flex-wrap *:text-xs *:font-bold *:rounded-full *:w-fit *:px-2 *:m-auto'>
                      <p className='bg-yellow-300 '>{jobType.toUpperCase()}</p>
                      <p className='bg-blue-300'>{location}</p>
                      <p className='bg-green-300'>{posted}</p>
                      <p className='bg-purple-300'>
                        Applied By: {appliedBy.userId.length}
                      </p>
                      <p className='bg-lime-300'>Viewed By: {viewCount}</p>
                    </div>
                    <div className='card-actions justify-end'>
                      <button
                        onClick={() => setModalOpen(_id)}
                        className='btn btn-error font-poppins font-thin'
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <JobDeleteModal
                    handleCancel={() => setModalOpen('')}
                    handleDelete={() =>
                      deleteJobAsAdmin({
                        id: _id,
                        adminId: process.env.NEXT_PUBLIC_ADMIN_UID,
                      }).then(() => setModalOpen(''))
                    }
                    isDeleteLoading={isDeleteLoading}
                    modalOpen={modalOpen === _id}
                    id={_id}
                  />
                </motion.div>
              )
            }
          )}
        </AnimatePresence>
        {data?.length! < totalJobs! && !search && (
          <div ref={ref} className='flex justify-center items-center min-h-60'>
            <Loader className='animate-spin' />
          </div>
        )}
      </section>
    )
  }

  return (
    <main>
      <div className='flex justify-between mb-6 font-poppins'>
        <p className='text-sm sm:text-xl'>{totalJobs} Jobs</p>
        <div className='grid w-full max-w-sm items-center gap-1.5 relative'>
          <Label htmlFor='Search'>Search</Label>
          <Input
            onChange={handleSearchChange}
            className='text-black'
            type='search'
            id='search'
            placeholder='Search'
          />
          <Search className='absolute text-black text-sm right-2 w-4 top-7' />
        </div>
      </div>
      {content}
    </main>
  )
}
export default JobsGrid
