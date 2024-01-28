import { Job } from '@/app/features/jobsApi/jobsApi'
import { useState } from 'react'
import { FaLocationDot } from 'react-icons/fa6'
const JobDetailsMobile = ({ jobPost }: { jobPost: Job }) => {
  const {
    location,
    salary: { min },
    jobType,
  } = jobPost
  const [checked, setChecked] = useState(false)

  return (
    <div className='text-black sm:hidden min-[375px]:flex grid grid-cols-2 grow gap-2 just'>
      <p className='font-thin bg-purple-500 text-[10px] sm:text-sm text-white whitespace-nowrap rounded-lg px-1 text-center flex items-center w-fit'>
        {jobType?.toUpperCase()}
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
      <p className='flex items-center bg-lime-400 px-2 rounded-lg whitespace-nowrap w-fit'>
        &#8805;{min}K
      </p>
      <button className='text-lg absolute right-2'>
        <div className='rating rating-sm transition-all'>
          <input
            onChange={() => setChecked(!checked)}
            type='checkbox'
            name='rating-8'
            className={`mask mask-star-2 ${
              checked ? 'bg-orange-400' : 'bg-gray-400'
            }`}
          />
        </div>
      </button>
    </div>
  )
}
export default JobDetailsMobile
