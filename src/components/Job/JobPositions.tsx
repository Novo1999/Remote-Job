import JobDetails from './JobDetailsMobile'
import { JobPost } from './JobItem'

const JobPositions = ({ jobPost }: { jobPost: JobPost }) => {
  const { title, companyName, positions, type } = jobPost

  return (
    <div className='flex flex-col ml-4 flex-1 gap-1 shrink col-span-4 sm:col-span-2 '>
      <p className='font-semibold lg:text-lg'>{title}</p>
      <div className='flex gap-1'>
        <p>{companyName}</p>
        <p className='font-semibold bg-purple-500 text-white rounded-full px-1 text-center flex items-center'>
          {type?.toUpperCase()}
        </p>
      </div>
      <div className='hidden gap-2 sm:flex'>
        {positions!.map((pos: string) => (
          <button
            className='bg-teal-400 w-fit text-xs rounded-full px-2 flex justify-center items-center hover:bg-teal-300 transition-all shadow-md sm:p-2'
            key={crypto.randomUUID()}
          >
            {pos}
          </button>
        ))}
      </div>
      <JobDetails jobPost={jobPost} />
    </div>
  )
}
export default JobPositions
