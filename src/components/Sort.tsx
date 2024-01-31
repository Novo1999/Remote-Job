'use client'
import { changeSort } from '@/app/features/sort/sortSlice'
import { useAppDispatch } from '@/app/hooks'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useChangeSearchParams } from '@/hooks/useChangeSearchParams'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { MdSort } from 'react-icons/md'

const Sort = () => {
  const { handleSort } = useChangeSearchParams()

  return (
    <div className='w-full'>
      <Select onValueChange={handleSort}>
        <SelectTrigger className='w-full hover:bg-slate-200 transition-colors text-xs rounded-full text-black border-0'>
          <MdSort />
          <SelectValue placeholder='Sort By' />
        </SelectTrigger>
        <SelectContent>
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
