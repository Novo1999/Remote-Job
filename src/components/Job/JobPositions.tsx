import Link from 'next/link'
import JobDetailsMobile from './JobDetailsMobile'
import JobDetailsPC from './JobDetailsPC'
import JobDate from './JobDate'
import { Job } from '@/app/features/jobsApi/jobsApi'

const JobPositions = ({ jobPost }: { jobPost: Job }) => {
  const { title, company, jobType, position } = jobPost

  return (
    <div className='flex flex-col ml-4 flex-1 gap-1 lg:gap-3 w-fit col-span-6 sm:gap-3 sm:col-span-5 lg:col-span-6 z-50'>
      <div className='flex flex-wrap gap-2 items-center'>
        <p className='font-semibold lg:text-[15px] lg:whitespace-nowrap'>
          {title}
        </p>

        <div>
          <button className='bg-teal-400 w-fit text-xs rounded-md whitespace-nowrap px-2 hidden sm:flex justify-center items-center hover:bg-teal-300 transition-all shadow-md lg:p-1'>
            {position}
          </button>
        </div>
      </div>
      <div className='flex gap-2'>
        <p>{company}</p>
        <JobDate jobPost={jobPost} />
      </div>
      <JobDetailsMobile jobPost={jobPost} />
      <div className='hidden gap-2 sm:flex flex-wrap'>
        <Link
          href='/'
          className='font-semibold bg-purple-500 text-white whitespace-nowrap rounded-md px-1 text-center hover:bg-purple-400 transition-colors flex items-center'
        >
          {jobType.toUpperCase()}
        </Link>
        <JobDetailsPC jobPost={jobPost} />
      </div>
    </div>
  )
}
export default JobPositions
