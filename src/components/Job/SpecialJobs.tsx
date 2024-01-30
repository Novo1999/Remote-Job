import { usePostedDate } from '@/hooks/usePostedDate'
import Ping from '../ui/Ping'
import { Job } from '@/utils/interfaces'

const AdBadge = ({ pc, mobile }: { pc: boolean; mobile: boolean }) => {
  if (pc) {
    return (
      <div className='bg-slate-500 shadow-md rounded-full -right-2 -top-2 px-2 absolute block min-[375px]:hidden'>
        Ad
      </div>
    )
  }
  if (mobile) {
    return (
      <div className='bg-slate-500 shadow-md rounded-full -right-2 -top-2 px-2 sm:hidden hidden min-[375px]:block'>
        Ad
      </div>
    )
  }
}

const SpecialJobs = ({ jobPost }: { jobPost: Job }) => {
  const { isFeatured, isAd, posted } = jobPost
  const { formattedDate } = usePostedDate(posted)
  const handleButtonClick = (e: React.SyntheticEvent) => {
    e.stopPropagation()
  }

  return (
    <div className='flex gap-4 h-fit justify-end text-white flex-col col-span-2 sm:col-span-1 lg:col-span-1 lg:self-start relative z-50'>
      <div className='flex gap-2 flex-col justify-end'>
        <div className='flex justify-end gap-2'>
          <div className='flex gap-2'>
            {isFeatured && (
              <button
                onClick={handleButtonClick}
                className='bg-orange-400 hover:bg-orange-300 px-1 rounded-full sm:p-2 transition-all shadow-md'
              >
                Featured
              </button>
            )}
            {formattedDate === 'Today' && (
              <div onClick={handleButtonClick} className='relative'>
                <Ping />
                <button className='bg-green-400 hover:bg-green-300 px-1 rounded-full sm:p-2 transition-all shadow-md'>
                  New
                </button>
              </div>
            )}

            {isAd && (
              <div
                onClick={handleButtonClick}
                className='bg-slate-500 shadow-md rounded-full self-center p-2 hidden sm:block hover:bg-slate-400'
              >
                Ad
              </div>
            )}
          </div>
          {isAd && <AdBadge pc={true} mobile={false} />}
          {isAd && <AdBadge pc={false} mobile={true} />}
        </div>
      </div>
    </div>
  )
}
export default SpecialJobs
