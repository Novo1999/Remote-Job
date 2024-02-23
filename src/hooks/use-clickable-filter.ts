import { setFilterQuery } from '@/lib/features/filter/filterSlice'
import { useAppDispatch, useAppSelector } from '@/lib/features/hooks'
import { openModal } from '@/lib/features/modal/modalSlice'
import { constructFilterQuery } from '@/utils/constructFilterQuery'
import { scrollAfterSearch } from '@/utils/scrollAfterSearch'
import { usePathname } from 'next/navigation'
import { useChangeSearchParams } from './use-change-search-params'
import useRouting from './use-routing'

const useClickableFilter = () => {
  const dispatch = useAppDispatch()
  const { filterBy } = useAppSelector((state) => state.filter)
  const { handleQuery } = useChangeSearchParams()
  const pathName = usePathname()
  const inJobPath = pathName.includes('job')
  const handleRouting = useRouting()
  const { handleFilter } = useChangeSearchParams()

  // when user clicks on the buttons on the job item, filter or search will happen
  const handleClickableFilter = (
    e: React.MouseEvent<HTMLButtonElement>,
    filterOption: string
  ) => {
    e.stopPropagation()

    const query = constructFilterQuery({
      ...filterBy,
      [filterOption]: [e.currentTarget.value],
    })
    dispatch(setFilterQuery({ query, isFiltering: true }))
    dispatch(openModal(false))
    handleFilter(query)
    scrollAfterSearch()
  }

  return { handleClickableFilter }
}

export default useClickableFilter
