import Link from 'next/link'
import JobDetailsMobile from './JobDetailsMobile'
import { JobPost } from './JobItem'

const JobPositions = ({ jobPost }: { jobPost: JobPost }) => {
  const { title, companyName, positions, type } = jobPost

  return (
    <div className='flex flex-col ml-4 flex-1 gap-1 lg:gap-3 shrink col-span-6 sm:col-span-2'>
      <p className='font-semibold lg:text-[15px] lg:whitespace-nowrap'>
        {title}
      </p>
      <p>{companyName}</p>
      <JobDetailsMobile jobPost={jobPost} />
      <div className='hidden gap-2 sm:flex'>
        {positions!.map((pos: string) => (
          <button
            className='bg-teal-400 w-fit text-xs rounded-md whitespace-nowrap px-2 flex justify-center items-center hover:bg-teal-300 transition-all shadow-md sm:p-1'
            key={crypto.randomUUID()}
          >
            {pos}
          </button>
        ))}
        <Link
          href='/'
          className='font-semibold bg-purple-500 text-white whitespace-nowrap rounded-md px-1 text-center hover:bg-purple-400 transition-colors flex items-center'
        >
          {type?.toUpperCase()}
        </Link>
      </div>
    </div>
  )
}
export default JobPositions
