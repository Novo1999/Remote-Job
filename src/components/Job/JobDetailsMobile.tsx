import { BsFillSignpostFill } from 'react-icons/bs'
import { FaLocationDot } from 'react-icons/fa6'
import { JobPost } from './JobItem'
import { MdOutlineStarBorder } from 'react-icons/md'
const JobDetailsMobile = ({ jobPost }: { jobPost: JobPost }) => {
  const { postedAgo, location, salaryRange, type } = jobPost
  const brokenPostedAgo = postedAgo?.split(' ') as string[]
  return (
    <div className='text-black sm:hidden min-[375px]:flex grid grid-cols-2 grow gap-2 just'>
      <p className='font-thin bg-purple-500 text-[10px] sm:text-sm text-white whitespace-nowrap rounded-lg px-1 text-center flex items-center w-fit'>
        {type?.toUpperCase()}
      </p>
      <p className='flex gap-2 items-center bg-amber-300 px-2 rounded-lg whitespace-nowrap'>
        <span className='hidden sm:block'>
          <FaLocationDot />
        </span>
        <span className='block sm:hidden w-fit whitespace-normal min-[375px]:whitespace-nowrap'>
          {location?.split(',')[0]}
        </span>
        <span className='hidden sm:block'>{location}</span>
      </p>
      <p className='flex items-center bg-red-300 px-2 rounded-lg whitespace-nowrap w-fit'>
        &#8804;{salaryRange?.split('-')[0]}
      </p>
      <button className='text-lg absolute right-2'>
        <MdOutlineStarBorder />
      </button>
    </div>
  )
}
export default JobDetailsMobile
