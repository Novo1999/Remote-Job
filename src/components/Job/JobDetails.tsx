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
  isAd,
}: JobPost) => {
  return (
    <>
      <div className='hidden sm:flex flex-col gap-2 col-span-2 lg:text-base justify-evenly lg:flex-row lg:col-span-4 *:border *:border-black *:shadow-md'>
        <p className='flex gap-2 items-center xl:gap-6 bg-stone-300 px-2 sm:text-sm rounded-full'>
          <BsFillSignpostFill />
          {postedAgo}
        </p>
        <p className='flex gap-2 items-center bg-amber-300 px-2 sm:text-sm rounded-full'>
          <FaLocationDot />
          {location}
        </p>
        <p className='flex gap-2 items-center bg-red-300 px-2 sm:text-sm rounded-full'>
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
          {isAd && (
            <div className='bg-slate-300 shadow-md rounded-full right-2 top-2 px-2 sm:hidden'>
              Ad
            </div>
          )}
        </div>
        {/* salary, location */}
        <div className='text-black sm:hidden flex flex-col gap-2'>
          <p className='flex gap-2 items-center xl:gap-6 bg-stone-300 px-2 rounded-full'>
            <BsFillSignpostFill />
            {postedAgo}
          </p>
          <p className='flex gap-2 items-center bg-amber-300 px-2 rounded-full'>
            <FaLocationDot />
            {location}
          </p>
          <p className='flex gap-2 items-center bg-red-300 px-2 rounded-full'>
            <FaRupeeSign />
            {salaryRange}
          </p>
        </div>
      </div>
    </>
  )
}
export default JobDetails
