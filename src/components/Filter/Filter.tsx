'use client'
import { Slider } from '@/components/ui/slider'
import { typesArray } from '@/utils/constants'
import { jobPosts } from '@/utils/dummyData'
import {
  extractBenefits,
  extractPositions,
  mergeAndUnique,
} from '@/utils/extractPositions'
import { useState } from 'react'
import { FaDollarSign } from 'react-icons/fa6'
import FilterCategory from './FilterCategory'
import { JobPost } from '../Job/JobItem'

const Filter = ({ category }: { category: string }) => {
  const [salary, setSalary] = useState<number[]>([0])
  const locations = jobPosts.map((job: JobPost) => job.location)
  const positionsArray = extractPositions(jobPosts)
  const uniquePositions = mergeAndUnique(positionsArray)
  const benefitsArray = extractBenefits(jobPosts)
  const uniqueBenefits = mergeAndUnique(benefitsArray)
  const [selected, setSelected] = useState<string[]>([])

  if (category === 'salary') {
    return (
      <div className='flex flex-col gap-2 sm:col-span-2'>
        <label
          htmlFor='salary'
          className='flex items-center bg-blue-600 w-fit p-4 rounded-lg text-white'
        >
          Salary: <FaDollarSign /> {salary}
        </label>
        <Slider
          className='hover:cursor-pointer'
          onValueChange={(value) => setSalary(value)}
          value={[salary[0]]}
          min={10000}
          max={100000}
          step={1}
        />
      </div>
    )
  }

  if (category === 'location') {
    return (
      <FilterCategory
        onChange={setSelected}
        selected={selected}
        className='text-black'
        options={locations as string[]}
        category={category}
      />
    )
  }

  if (category === 'position') {
    return (
      <FilterCategory
        onChange={setSelected}
        selected={selected}
        className='text-black'
        options={uniquePositions}
        category={category}
      />
    )
  }
  if (category === 'benefits') {
    return (
      <FilterCategory
        onChange={setSelected}
        selected={selected}
        className='text-black'
        options={uniqueBenefits}
        category={category}
      />
    )
  }
  if (category === 'types') {
    return (
      <FilterCategory
        onChange={setSelected}
        selected={selected}
        className='text-black'
        options={typesArray}
        category={category}
      />
    )
  }
}
export default Filter
