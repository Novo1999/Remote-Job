'use client'
import { Slider } from '@/components/ui/slider'
import { jobPosts } from '@/utils/dummyData'

import { useState } from 'react'
import { FaDollarSign } from 'react-icons/fa6'
import { typesArray } from '../../utils/constants'
import FilterCategory from './FilterCategory'
import { useGetAllJobsQuery } from '@/app/features/jobsApi/jobsApi'

const Filter = ({ category }: { category: string }) => {
  const [salary, setSalary] = useState<number[]>([10000])
  const { data, isLoading } = useGetAllJobsQuery(undefined)

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
          className='hover:cursor-grab'
          onValueChange={(value) => setSalary(value)}
          value={[salary[0]]}
          min={10000}
          max={200000}
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
        options={positions as string[]}
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
        options={benefits as string[]}
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
