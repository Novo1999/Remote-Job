'use client'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useChangeSearchParams } from '@/hooks/use-change-search-params'
import { OPTIONS } from '@/utils/constants'
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
          {OPTIONS.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
export default Sort
