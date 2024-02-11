import { changeFilter, changeSalary } from '@/lib/features/filter/filterSlice'
import { useAppDispatch } from '@/lib/features/hooks'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export const useExtractFilter = () => {
  const dispatch = useAppDispatch()
  const params = useSearchParams()
  const urlFilterString = params.getAll('filter')?.at(0)
  console.log(params.getAll('filter'))

  // Loop through each key-value pair and extract the relevant information
  useEffect(() => {
    if (urlFilterString) {
      const pairs = urlFilterString.split('&')

      pairs.forEach((pair) => {
        const [key, value] = pair.split('=')
        switch (key) {
          case 'locations':
            // because the locations are like San Francisco, CA , need to take it as one item
            let locationPair = []
            const locationSplit = value.split(',')
            if (value !== '') {
              for (let i = 0; i < locationSplit.length; i += 2) {
                const pair = `${locationSplit[i]},${locationSplit[i + 1]}`
                locationPair.push(pair.trim())
              }
            }
            locationPair.forEach((location) => {
              dispatch(
                changeFilter({
                  category: 'locations',
                  newOption: location.trim(),
                })
              )
            })
            break
          case 'positions':
            value.split(',').forEach((position) => {
              dispatch(
                changeFilter({
                  category: 'positions',
                  newOption: position.trim(),
                })
              )
            })
            break
          case 'types':
            value.split(',').forEach((type) => {
              dispatch(
                changeFilter({ category: 'types', newOption: type.trim() })
              )
            })
            break
          case 'benefits':
            value.split(',').forEach((benefit) => {
              dispatch(
                changeFilter({
                  category: 'benefits',
                  newOption: benefit.trim(),
                })
              )
            })
            break
          case 'salary':
            dispatch(changeSalary(parseFloat(value) * 1000))
            break
          default:
            break
        }
      })
    }
  }, [])
}
