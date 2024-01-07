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
import SelectComponent from './SelectItem'
import { typesArray } from '@/utils/Constants'
import { FaDollarSign } from 'react-icons/fa6'

const Filter = ({ category }: { category: string }) => {
  const [salary, setSalary] = useState<number[]>([0])
  const locations = jobPosts.map((job: JobPost) => job.location)
  const positionsArray = extractPositions(jobPosts)
  const uniquePositions = mergeAndUnique(positionsArray)
  const benefitsArray = extractBenefits(jobPosts)
  const uniqueBenefits = mergeAndUnique(benefitsArray)

  if (category === 'location') {
    return (
      <SelectComponent
        placeholder='Location'
        contents={locations as string[]}
      />
    )
  }

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

  if (category === 'position') {
    return <SelectComponent placeholder='Position' contents={uniquePositions} />
  }
  if (category === 'benefits') {
    return <SelectComponent placeholder='Benefits' contents={uniqueBenefits} />
  }

  if (category === 'types') {
    return <SelectComponent placeholder='Job Types' contents={typesArray} />
  }
}
export default Filter
