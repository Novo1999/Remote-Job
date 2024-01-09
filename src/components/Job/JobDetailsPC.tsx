import { BsFillSignpostFill } from 'react-icons/bs'
import { FaDollarSign, FaLocationDot } from 'react-icons/fa6'
import { JobPost } from './JobItem'
import { MdOutlineStarBorder } from 'react-icons/md'
import JobDate from './JobDate'
const JobDetailsPC = ({ jobPost }: { jobPost: JobPost }) => {
  const { location, salaryRange } = jobPost
  return (
    <div className='hidden sm:flex flex-col sm:flex-row gap-0 sm:gap-2 col-span-3 lg:text-base justify-evenly lg:col-span-4 *:border *:border-black *:shadow-md *:sm:text-xs *:lg:text-sm'>
      <p className='flex gap-2 items-center bg-amber-300 px-2 rounded-md'>
        <span className='hidden lg:block'>
          <FaLocationDot />
        </span>
        <span className='block lg:hidden'>{location?.split(',')[0]}</span>
        <span className='hidden lg:block'>{location}</span>
      </p>
      <p className='flex items-center bg-lime-400 px-2 rounded-md'>
        <span className='hidden lg:block'>
          <FaDollarSign />
        </span>
        <button className='text-2xl absolute right-2'>
          <MdOutlineStarBorder />
        </button>
        <span className='block lg:hidden'>
          &#8805;{salaryRange?.split('-')[0]}
        </span>
        <span className='hidden lg:block'>{salaryRange}</span>
      </p>
    </div>
  )
}
export default JobDetailsPC
