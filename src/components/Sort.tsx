'use client'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useChangeSearchParams } from '@/hooks/use-change-search-params'
import { MdSort } from 'react-icons/md'

const Sort = () => {
  const { handleSort, sortParam } = useChangeSearchParams()

  return (
    <div>
      <Select
        value={(sortParam as string) || 'default'}
        onValueChange={handleSort}
      >
        <SelectTrigger className='special-btn hover:bg-slate-200 transition-colors text-xs rounded-full text-black border-0'>
          <MdSort />
          <SelectValue placeholder='Sort By' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='default'>Sort By</SelectItem>
          <SelectItem value='salary(low-high)'>Salary(Low-High)</SelectItem>
          <SelectItem value='salary(high-low)'>Salary(High-Low)</SelectItem>
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
