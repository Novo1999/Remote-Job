'use client'
import { Slider } from '@/components/ui/slider'
import { JobPost } from './Job/JobItem'
import {
  extractBenefits,
  extractPositions,
  mergeAndUnique,
} from '@/utils/extractPositions'
import { jobPosts } from '@/utils/dummyData'
import { useState } from 'react'
import { MultiSelect } from './SelectItem'
import { typesArray } from '@/utils/Constants'
import { FaDollarSign } from 'react-icons/fa6'
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
          className='w-[180px] rounded-full text-black'
          options={locations as string[]}
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
          className='w-[180px] rounded-full text-black'
          options={uniquePositions}
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
          className='w-[180px] rounded-full text-black'
          options={uniqueBenefits}
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
          className='w-[180px] rounded-full text-black'
          options={typesArray}
        />
      </div>
    )
  }
}
export default Filter
