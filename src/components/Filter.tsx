'use client'
import { Slider } from '@/components/ui/slider'
import { typesArray } from '@/utils/Constants'
import { jobPosts } from '@/utils/dummyData'
import {
  extractBenefits,
  extractPositions,
  mergeAndUnique,
} from '@/utils/extractPositions'
import { useState } from 'react'
import { FaDollarSign } from 'react-icons/fa6'
import { JobPost } from './Job/JobItem'
import { MultiSelect } from './SelectItem'
import { Label } from './ui/label'

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
      <div className='flex flex-col gap-2'>
        <label htmlFor='salary' className='flex items-center'>
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
      <div className='w-64 sm:w-full flex flex-col items-center gap-2'>
        <Label htmlFor='location'>Location</Label>
        <MultiSelect
          onChange={setSelected}
          selected={selected}
          className='text-black'
          options={locations as string[]}
          category={category}
        />
      </div>
    )
  }

  if (category === 'position') {
    return (
      <div className='w-64 sm:w-full flex flex-col items-center gap-2'>
        <Label htmlFor='position'>Position</Label>
        <MultiSelect
          onChange={setSelected}
          selected={selected}
          className='text-black'
          options={uniquePositions}
          category={category}
        />
      </div>
    )
  }
  if (category === 'benefits') {
    return (
      <div className='w-64 sm:w-full flex flex-col items-center gap-2'>
        <Label htmlFor='benefits'>Benefits</Label>
        <MultiSelect
          onChange={setSelected}
          selected={selected}
          className='text-black'
          options={uniqueBenefits}
          category={category}
        />
      </div>
    )
  }

  if (category === 'types') {
    return (
      <div className='w-64 sm:w-full flex flex-col items-center gap-2'>
        <Label htmlFor='types'>Types</Label>
        <MultiSelect
          onChange={setSelected}
          selected={selected}
          className='text-black'
          options={typesArray}
          category={category}
        />
      </div>
    )
  }
}
export default Filter
