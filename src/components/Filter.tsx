'use client'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { JobPost } from './JobItem'
import { extractPositions, mergeAndUnique } from '@/utils/extractPostions'
import { jobPosts } from '@/utils/dummyData'
import { useState } from 'react'

const Filter = ({ category }: { category: string }) => {
  const [salary, setSalary] = useState<number[]>([0])
  const locations = jobPosts.map((job: JobPost) => job.location)
  const salaries = jobPosts.map((job: JobPost) => job.salaryRange)
  const positionsArray = extractPositions(jobPosts)
  const uniquePositions = mergeAndUnique(positionsArray)

  if (category === 'location') {
    return (
      <Select>
        <SelectTrigger className='w-[180px] rounded-full text-black'>
          <SelectValue placeholder='Location' />
        </SelectTrigger>
        <SelectContent>
          {locations.map((c: string, index: number) => (
            <SelectItem key={index} value={c.toLowerCase()}>
              {c}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    )
  }

  if (category === 'salary') {
    return (
      <div>
        <label htmlFor='salary'>Salary: ₹{salary}</label>
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

  if (category === 'position') {
    return (
      <Select>
        <SelectTrigger className='w-[180px] rounded-full text-black'>
          <SelectValue placeholder='Positions' />
        </SelectTrigger>
        <SelectContent>
          {uniquePositions.map((c: string, index: number) => (
            <SelectItem key={index} value={c.toLowerCase()}>
              {c}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    )
  }
}
export default Filter
