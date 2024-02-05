'use client'
import { Slider } from '@/components/ui/slider'
import { useFilter } from '@/hooks/use-filter'
import { FaDollarSign } from 'react-icons/fa6'
import { typesArray } from '../../utils/constants'
import FilterCategory from './FilterCategory'

const Filter = ({ category }: { category: string }) => {
  const { handleSalary, locations, positions, benefits, filterBy, dispatch } =
    useFilter()

  if (category === 'salary') {
    return (
      <div className='flex flex-col gap-2 sm:col-span-2'>
        <label
          htmlFor='salary'
          className='flex items-center bg-blue-600 w-fit p-4 rounded-lg text-white'
        >
          Salary: <FaDollarSign /> {filterBy.salary}
        </label>
        <Slider
          className='hover:cursor-grab'
          onValueChange={handleSalary}
          value={[filterBy.salary]}
          min={90000}
          max={200000}
          step={1}
        />
      </div>
    )
  }

  if (category === 'locations') {
    return (
      <FilterCategory
        onChange={dispatch}
        selected={filterBy.locations}
        className='text-black'
        options={locations as string[]}
        category={category}
      />
    )
  }

  if (category === 'positions') {
    return (
      <FilterCategory
        onChange={dispatch}
        selected={filterBy.positions}
        className='text-black'
        options={positions as string[]}
        category={category}
      />
    )
  }
  if (category === 'benefits') {
    return (
      <FilterCategory
        onChange={dispatch}
        selected={filterBy.benefits}
        className='text-black'
        options={benefits as string[]}
        category={category}
      />
    )
  }
  if (category === 'types') {
    return (
      <FilterCategory
        onChange={dispatch}
        selected={filterBy.types}
        className='text-black'
        options={typesArray}
        category={category}
      />
    )
  }
}
export default Filter
