'use client'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { MdSort } from 'react-icons/md'

const Sort = () => {
  return (
    <div>
      <Select>
        <SelectTrigger className='w-24 text-xs rounded-full text-black border-0'>
          <MdSort />
          <SelectValue placeholder='Sort By' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='salary(a-z)'>Salary(Low-High)</SelectItem>
          <SelectItem value='salary(z-a)'>Salary(High-Low)</SelectItem>
          <SelectItem value='most-applied'>Most Applied</SelectItem>
          <SelectItem value='most-viewed'>Most Viewed</SelectItem>
          <SelectItem value='new-jobs'>New Jobs</SelectItem>
          <SelectItem value='featured-jobs'>Featured Jobs</SelectItem>
          <SelectItem value='ads'>Advertisements</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
export default Sort
