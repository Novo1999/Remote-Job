import { useChangeSearchParams } from '@/hooks/use-change-search-params'
import { usePostedDate } from '@/hooks/use-posted-date'
import { useAppDispatch } from '@/lib/features/hooks'
import { openModal } from '@/lib/features/modal/modalSlice'
import { changeSearchInput } from '@/lib/features/search/searchSlice'
import { Job } from '../../../interfaces'
import Ping from '../ui/Ping'

const SpecialJobs = ({ jobPost }: { jobPost: Job }) => {
  const { isFeatured, isAd, posted } = jobPost
  const { formattedDate } = usePostedDate(posted)
  const { handleSort } = useChangeSearchParams()
  const dispatch = useAppDispatch()

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    handleSort(e.currentTarget.value)
    dispatch(changeSearchInput({ query: '' }))
    dispatch(openModal(false))
  }

  return (
    <div className='flex gap-4 h-fit justify-end text-white flex-col col-span-2 sm:col-span-1 lg:col-span-1 lg:self-start relative z-50'>
      <div className='flex gap-2 flex-col justify-end'>
        <div className='flex justify-end gap-2'>
          <div className='flex gap-2 flex-col sm:flex-row'>
            <div className='flex gap-2 flex-col sm:flex-row'>
              {isFeatured && (
                <button
                  value='featured-jobs'
                  onClick={handleButtonClick}
                  className='bg-orange-400 hover:bg-orange-300 px-1 rounded-full sm:p-2 transition-all shadow-md'
                >
                  Featured
                </button>
              )}
              {formattedDate === 'Today' && (
                <button
                  value='new-jobs'
                  onClick={handleButtonClick}
                  className='relative self-end'
                >
                  <Ping />
                  <p className='bg-green-400 hover:bg-green-300 px-1 rounded-full sm:p-2 transition-all shadow-md'>
                    New
                  </p>
                </button>
              )}
            </div>

            {isAd && (
              <button
                value='ads'
                onClick={handleButtonClick}
                className='bg-slate-500 shadow-md rounded-full w-fit px-2 self-end sm:py-2 hover:bg-slate-400'
              >
                Ad
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecialJobs
