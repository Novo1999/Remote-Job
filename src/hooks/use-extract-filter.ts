import { changeFilter, changeSalary } from '@/lib/features/filter/filterSlice'
import { useAppDispatch } from '@/lib/features/hooks'
import { useSearchParams } from 'next/navigation'

export const useExtractFilter = () => {
  const dispatch = useAppDispatch()
  const params = useSearchParams()
  const urlFilterString = params.getAll('filter')[0]

  // Split the string into key-value pairs
  const pairs = urlFilterString.split('&')

  // Loop through each key-value pair and extract the relevant information
  pairs.forEach((pair) => {
    const [key, value] = pair.split('=')
    switch (key) {
      case 'locations':
        value.split(',').forEach((location) => {
          dispatch(
            changeFilter({ category: 'locations', newOption: location.trim() })
          )
        })
        break
      case 'positions':
        value.split(',').forEach((position) => {
          dispatch(
            changeFilter({ category: 'positions', newOption: position.trim() })
          )
        })
        break
      case 'types':
        value.split(',').forEach((type) => {
          dispatch(changeFilter({ category: 'types', newOption: type.trim() }))
        })
        break
      case 'benefits':
        value.split(',').forEach((benefit) => {
          dispatch(
            changeFilter({ category: 'benefits', newOption: benefit.trim() })
          )
        })
        break
      case 'salary':
        dispatch(changeSalary(parseFloat(value)))
        break
      default:
        break
    }
  })

  // Return the filterBy object
  // return filterBy
}
