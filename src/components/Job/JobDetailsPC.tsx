import useClickableFilter from '@/hooks/use-clickable-filter'
import { useAppSelector } from '@/lib/features/hooks'
import { FaDollarSign, FaLocationDot } from 'react-icons/fa6'
import { Job } from '../../../interfaces'
import Star from './Star'

const JobDetailsPC = ({
  jobPost,
  inJobPathOrFavoriteModalOpen,
}: {
  jobPost: Job
  inJobPathOrFavoriteModalOpen: boolean
}) => {
  const {
    location,
    salary: { max, min },
  } = jobPost
  const { showStarLoader } = useAppSelector((state) => state.loader)
  const { handleClickableFilter } = useClickableFilter()

  return (
    <div className='hidden sm:flex flex-col sm:flex-row gap-0 sm:gap-2 col-span-3 lg:text-base justify-evenly lg:col-span-4 *:border *:border-black *:shadow-md *:sm:text-xs *:lg:text-sm'>
      <div className='flex gap-2 items-center bg-amber-300 px-2 rounded-md hover:bg-amber-400'>
        <span className='hidden lg:block'>
          <FaLocationDot />
        </span>
        <button
          disabled={inJobPathOrFavoriteModalOpen}
          onClick={(e) => handleClickableFilter(e, 'locations')}
          value={location?.split(',')[0]}
          className='block lg:hidden'
        >
          {location?.split(',')[0]}
        </button>
        <button
          disabled={inJobPathOrFavoriteModalOpen}
          onClick={(e) => handleClickableFilter(e, 'locations')}
          value={location}
          className='hidden lg:block'
        >
          {location}
        </button>
      </div>
      <p className='flex items-center bg-lime-400 px-2 rounded-md'>
        <span className='hidden lg:block'>
          <FaDollarSign />
        </span>
        <button className='text-2xl absolute right-2'>
          <div className='rating rating-md transition-all'>
            {showStarLoader === jobPost._id ? (
              <span className='loading loading-spinner text-warning'></span>
            ) : (
              <Star job={jobPost} />
            )}
          </div>
        </button>
        <span>
          {min}K-{max}K
        </span>
      </p>
    </div>
  )
}
export default JobDetailsPC
