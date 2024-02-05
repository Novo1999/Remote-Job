import { changeSalary } from '@/lib/features/filter/filterSlice'
import { useGetAllJobsQuery } from '@/lib/features/jobsApi/jobsApi'
import { useAppDispatch, useAppSelector } from '@/lib/features/hooks'

export const useFilter = () => {
  const { filterBy, filterQuery } = useAppSelector((state) => state.filter)
  const dispatch = useAppDispatch()

  const { data, isLoading } = useGetAllJobsQuery({
    sortBy: '',
    limit: 0,
    filterBy: '',
    q: '',
  })

  const handleSalary = (value: number[]) => {
    dispatch(changeSalary(value[0]))
  }

  // getting unique locations, positions and benefits
  const locations =
    !isLoading &&
    data
      ?.map((item) => item.location)
      .filter((value, index, self) => self.indexOf(value) === index)

  const positions =
    !isLoading &&
    data
      ?.map((item) => item.position)
      .filter((value, index, self) => self.indexOf(value) === index)

  const benefits =
    !isLoading &&
    (data?.reduce((acc: string[], curr) => {
      return [...acc, ...curr.benefits].filter(
        (value, index, self) => self.indexOf(value) === index
      )
    }, []) ||
      [])

  return { handleSalary, locations, positions, benefits, filterBy, dispatch }
}
