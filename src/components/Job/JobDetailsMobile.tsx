import { BsFillSignpostFill } from 'react-icons/bs'
import { FaLocationDot } from 'react-icons/fa6'
import { JobPost } from './JobItem'
const JobDetails = ({ jobPost }: { jobPost: JobPost }) => {
  const { postedAgo, location, salaryRange, type } = jobPost
  const brokenPostedAgo = postedAgo?.split(' ') as string[]
  return (
    <div className='text-black sm:hidden flex gap-2 shrink'>
      <p className='flex gap-2 items-center xl:gap-6 bg-stone-300 px-2 rounded-lg'>
        <span className='hidden sm:block'>
          <BsFillSignpostFill />
        </span>
        <span className='block sm:hidden'>{`${brokenPostedAgo[0]}${brokenPostedAgo[1][0]}`}</span>
        <span className='hidden sm:block'>{postedAgo}</span>
      </p>
      <p className='flex gap-2 items-center bg-amber-300 px-2 rounded-lg whitespace-nowrap'>
        <span className='hidden sm:block'>
          <FaLocationDot />
        </span>
        <span className='block sm:hidden'>{location?.split(',')[0]}</span>
        <span className='hidden sm:block'>{location}</span>
      </p>
      <p className='flex items-center bg-red-300 px-2 rounded-lg whitespace-nowrap'>
        {salaryRange?.split('-')[0]}&#8804;
      </p>
      <p className='font-thin bg-purple-500 text-white whitespace-nowrap rounded-lg px-1 text-center flex items-center'>
        {type?.toUpperCase()}
      </p>
    </div>
  )
}
export default JobDetails
