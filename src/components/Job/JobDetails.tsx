import Ping from '../ui/Ping'
import { BsFillSignpostFill } from 'react-icons/bs'
import { FaLocationDot } from 'react-icons/fa6'
import { FaRupeeSign } from 'react-icons/fa'
import { JobPost } from './JobItem'
import { Button } from '../ui/button'
const JobDetails = ({
  postedAgo,
  location,
  salaryRange,
  isFeatured,
  isNew,
  index,
  currentHovered,
}: JobPost) => {
  return (
    <>
      <div className='hidden sm:flex flex-col col-span-2 lg:text-base justify-evenly lg:flex-row lg:col-span-4'>
        <p className='flex gap-2 items-center xl:gap-6'>
          <BsFillSignpostFill />
          {postedAgo}
        </p>
        <p className='flex gap-2 items-center'>
          <FaLocationDot />
          {location}
        </p>
        <p className='flex gap-2 items-center'>
          <FaRupeeSign />
          {salaryRange}
        </p>
      </div>
      <div className='flex gap-4 h-fit justify-end text-white flex-col col-span-2 sm:col-span-1 lg:col-span-2'>
        <div className='flex gap-2 justify-end'>
          {isFeatured && (
            <button className='bg-green-400 hover:bg-green-300 px-1 rounded-full sm:p-3 transition-all shadow-md'>
              Featured
            </button>
          )}
          {isNew && (
            <div className='relative'>
              <Ping />
              <button className='bg-orange-400 hover:bg-orange-300 px-1 rounded-full sm:p-3 transition-all shadow-md'>
                New
              </button>
            </div>
          )}
          {index === currentHovered && (
            <Button className='rounded-full'>Apply</Button>
          )}
        </div>
        {/* salary, location */}
        <div className='text-black sm:hidden'>
          <p className='flex gap-2 items-center xl:gap-6'>
            <BsFillSignpostFill />
            {postedAgo}
          </p>
          <p className='flex gap-2 items-center'>
            <FaLocationDot />
            {location}
          </p>
          <p className='flex gap-2 items-center'>
            <FaRupeeSign />
            {salaryRange}
          </p>
        </div>
      </div>
    </>
  )
}
export default JobDetails
