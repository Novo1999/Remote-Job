import useClickableFilter from '@/hooks/use-clickable-filter'
import { Job } from '../../../interfaces'
import { FaLocationDot } from 'react-icons/fa6'

const JobDetailsMobile = ({ jobPost }: { jobPost: Job }) => {
  const {
    location,
    salary: { min },
    jobType,
  } = jobPost
  const locationMobile = location?.split(',')[0]
  const { handleClickableFilter } = useClickableFilter()

  return (
    <div className='text-black sm:hidden min-[375px]:flex flex flex-shrink gap-2 w-24'>
      {/* type */}
      <button
        onClick={(e) => handleClickableFilter(e, 'types')}
        value={jobType}
        className='font-thin bg-purple-500 text-[10px] sm:text-sm text-white whitespace-nowrap rounded-lg px-1 text-center flex items-center w-fit'
      >
        {jobType?.toUpperCase()}
      </button>
      <p className='flex gap-2 items-center w-fit bg-amber-300 px-2 rounded-lg whitespace-nowrap'>
        <span className='hidden sm:block'>
          <FaLocationDot />
        </span>
        {/* mobile location */}
        <button
          value={location}
          onClick={(e) => handleClickableFilter(e, 'locations')}
          className='block sm:hidden w-fit text-center min-[375px]:whitespace-nowrap'
        >
          {locationMobile}
        </button>
      </p>
      {/* salary */}
      <p className='flex items-center bg-lime-400 px-2 rounded-lg whitespace-nowrap w-fit'>
        &#8805;{min}K
      </p>
    </div>
  )
}
export default JobDetailsMobile
