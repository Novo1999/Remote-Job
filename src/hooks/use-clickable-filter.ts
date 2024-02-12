import { setFilterQuery } from '@/lib/features/filter/filterSlice'
import { useAppDispatch, useAppSelector } from '@/lib/features/hooks'
import { changeSearchInput } from '@/lib/features/search/searchSlice'
import { constructFilterQuery } from '@/utils/constructFilterQuery'
import { scrollAfterSearch } from '@/utils/scrollAfterSearch'
import { useChangeSearchParams } from './use-change-search-params'

const useClickableFilter = () => {
  const dispatch = useAppDispatch()
  const { filterBy } = useAppSelector((state) => state.filter)
  const { handleQuery } = useChangeSearchParams()

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

  return { handleClickableFilter, handlePositionClick }
}

export default useClickableFilter
