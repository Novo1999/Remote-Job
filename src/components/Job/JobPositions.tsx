import { useChangeSearchParams } from '@/hooks/use-change-search-params'
import { changeFilter, setFilterQuery } from '@/lib/features/filter/filterSlice'
import { useAppDispatch, useAppSelector } from '@/lib/features/hooks'
import { changeSearchInput } from '@/lib/features/search/searchSlice'
import { constructFilterQuery } from '@/utils/constructFilterQuery'
import { Job } from '@/utils/interfaces'
import { scrollAfterSearch } from '@/utils/scrollAfterSearch'
import React from 'react'
import JobDate from './JobDate'
import JobDetailsMobile from './JobDetailsMobile'
import JobDetailsPC from './JobDetailsPC'

const JobPositions = ({ jobPost }: { jobPost: Job }) => {
  const { title, company, jobType, position } = jobPost
  const dispatch = useAppDispatch()
  const { handleQuery } = useChangeSearchParams()

  const { filterBy } = useAppSelector((state) => state.filter)

  const { handleFilter } = useChangeSearchParams()

  // when user clicks on the buttons on the job item, filter or search will happen
  const handleClickableFilter = (
    e: React.MouseEvent<HTMLButtonElement>,
    filterOption: string
  ) => {
    e.stopPropagation()
    dispatch(
      changeFilter({
        category: filterOption,
        [filterOption]: e.currentTarget.value,
      })
    )
    const query = constructFilterQuery({
      ...filterBy,
      [filterOption]: [e.currentTarget.value],
    })
    dispatch(setFilterQuery({ query, isFiltering: true }))
    handleFilter(query)
    scrollAfterSearch()
    return null
  }

  const handlePositionClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    handleQuery(e.currentTarget.value)
    dispatch(
      changeSearchInput({ query: e.currentTarget.value, isSearching: true }) // this is not doing anything but setting the isSearching to true is necessary so the app does not show skeleton under the jobs
    )
    scrollAfterSearch()
  }

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
        <p>{company}</p>
        <JobDate jobPost={jobPost} />
      </div>
      <JobDetailsMobile
        handleClickableFilter={handleClickableFilter}
        jobPost={jobPost}
      />
      <div className='hidden gap-2 sm:flex flex-wrap'>
        <button
          onClick={(e) => handleClickableFilter(e, 'types')}
          value={jobType}
          className='font-semibold bg-purple-500 text-white whitespace-nowrap rounded-md px-1 text-center hover:bg-purple-400 transition-colors flex items-center'
        >
          {jobType.toUpperCase()}
        </button>
        <JobDetailsPC
          handleClickableFilter={handleClickableFilter}
          jobPost={jobPost}
        />
      </div>
    </div>
  )
}
export default JobPositions
