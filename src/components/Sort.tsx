'use client'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const Sort = () => {
  return (
    <div>
      <Select>
        <SelectTrigger className='w-[180px] rounded-full text-black'>
          <SelectValue placeholder='Sort By' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='salary(a-z)'>Salary(Low-High)</SelectItem>
          <SelectItem value='salary(z-a)'>Salary(High-Low)</SelectItem>
          <SelectItem value='most-applied'>Most Applied</SelectItem>
          <SelectItem value='most-viewed'>Most Viewed</SelectItem>
          <SelectItem value='new-jobs'>New Jobs</SelectItem>
          <SelectItem value='featured-jobs'>Featured Jobs</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
export default Sort
