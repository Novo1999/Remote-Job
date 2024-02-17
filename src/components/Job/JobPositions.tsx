import useClickableFilter from '@/hooks/use-clickable-filter'
import { Job } from '../../../interfaces'
import JobDate from './JobDate'
import JobDetailsMobile from './JobDetailsMobile'
import JobDetailsPC from './JobDetailsPC'

const JobPositions = ({ jobPost }: { jobPost: Job }) => {
  const { title, companyName, jobType, position } = jobPost
  const { handleClickableFilter, handlePositionClick } = useClickableFilter()

  return (
    <div className='flex flex-col ml-4 flex-1 gap-2 lg:gap-3 w-fit col-span-6 sm:gap-3 sm:col-span-5 lg:col-span-6 z-50'>
      <div className='flex flex-wrap gap-2 items-center'>
        <p className='font-semibold lg:text-[15px] lg:whitespace-nowrap'>
          {title}
        </p>
        <div>
          <button
            onClick={handlePositionClick}
            value={position.split(' ').at(0)}
            className='bg-teal-400 w-fit text-xs rounded-md whitespace-nowrap px-2 hidden sm:flex justify-center items-center hover:bg-teal-300 transition-all shadow-md lg:p-1'
          >
            {position.split(' ').at(0)}
          </button>
        </div>
      </div>
      <div className='flex'>
        <p>{companyName}</p>
        <JobDate jobPost={jobPost} />
      </div>
      <JobDetailsMobile jobPost={jobPost} />
      <div className='hidden gap-2 sm:flex flex-wrap'>
        <button
          onClick={(e) => handleClickableFilter(e, 'types')}
          value={jobType}
          className='font-semibold bg-purple-500 text-white whitespace-nowrap rounded-md px-1 text-center hover:bg-purple-400 transition-colors flex items-center'
        >
          {jobType.toUpperCase()}
        </button>
        <JobDetailsPC jobPost={jobPost} />
      </div>
    </div>
  )
}
export default JobPositions
