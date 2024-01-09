import { FaLocationDot, FaThumbsUp, FaUserTie } from 'react-icons/fa6'
import { BiSolidCategory } from 'react-icons/bi'
import { MultiSelect, MultiSelectProps } from './SelectItem'
import { Label } from '../ui/label'

const FilterLabel = ({
  category,
  className,
}: {
  category: string
  className: string
}) => {
  if (category === 'location') {
    return (
      <div className={`${className} bg-red-400`}>
        <span>
          <FaLocationDot />
        </span>
        <Label htmlFor='location'>{category}</Label>
      </div>
    )
  }
  if (category === 'position') {
    return (
      <div className={`${className} bg-teal-400`}>
        <span>
          <FaUserTie />
        </span>
        <Label htmlFor='location'>{category}</Label>
      </div>
    )
  }
  if (category === 'types') {
    return (
      <div className={`${className} bg-blue-400`}>
        <span>
          <BiSolidCategory />
        </span>
        <Label htmlFor='location'>{category}</Label>
      </div>
    )
  }
  if (category === 'benefits') {
    return (
      <div className={`${className} bg-purple-400`}>
        <span>
          <FaThumbsUp />
        </span>
        <Label htmlFor='location'>{category}</Label>
      </div>
    )
  }
}

const FilterCategory = ({
  options,
  category,
  selected,
  onChange,
}: MultiSelectProps) => {
  return (
    <div className=''>
      <FilterLabel
        className='relative capitalize
        p-2 rounded-lg text-white flex mb-2 gap-2 border-2 border-black'
        category={category}
      />
      <div className='gap2 overflow-auto scrollbar-hide max-h-48 border border-black'>
        <MultiSelect
          onChange={onChange}
          selected={selected}
          className='text-black border-2 rounded-lg border-black'
          options={options}
          category={category}
        />
      </div>
    </div>
  )
}
export default FilterCategory
