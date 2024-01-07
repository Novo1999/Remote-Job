import { BsFillSignpostFill } from 'react-icons/bs'
import { FaDollarSign, FaLocationDot } from 'react-icons/fa6'
import { JobPost } from './JobItem'
const JobDetailsPC = ({ jobPost }: { jobPost: JobPost }) => {
  const { postedAgo, location, salaryRange } = jobPost
  const brokenPostedAgo = postedAgo?.split(' ') as string[]
  return (
    <div className='hidden sm:flex flex-col sm:flex-row gap-0 col-span-3 lg:text-base justify-evenly lg:flex-row lg:col-span-4 *:border *:border-black *:shadow-md *:sm:text-xs *:lg:text-sm'>
      <p className='flex gap-2 items-center xl:gap-6 bg-stone-300 px-2 rounded-md'>
        <span className='hidden lg:block'>
          <BsFillSignpostFill />
        </span>
        <span className='block lg:hidden'>{`${brokenPostedAgo[0]}${brokenPostedAgo[1][0]}`}</span>
        <span className='hidden lg:block'>{postedAgo}</span>
      </p>
      <p className='flex gap-2 items-center bg-amber-300 px-2 rounded-md'>
        <span className='hidden lg:block'>
          <FaLocationDot />
        </span>
        <span className='block lg:hidden'>{location?.split(',')[0]}</span>
        <span className='hidden lg:block'>{location}</span>
      </p>
      <p className='flex items-center bg-red-300 px-2 rounded-md'>
        <span className='hidden lg:block'>
          <FaDollarSign />
        </span>
        <span className='block lg:hidden'>
          &#8805;{salaryRange?.split('-')[0]}
        </span>
        <span className='hidden lg:block'>{salaryRange}</span>
      </p>
    </div>
  )
}
export default JobDetailsPC
