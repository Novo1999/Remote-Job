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
    <div className='space-y-4 rounded-lg p-2 bg-gradient-to-r flex flex-col items-center from-gray-700 via-gray-900 to-black shadow-xl h-fit'>
      <FilterLabel
        className='relative capitalize
 p-2 rounded-lg text-white flex gap-2 border-2 border-black'
        category={category}
      />
      <div className='w-64 max-h-48 sm:w-full flex flex-col items-center gap-2 overflow-y-auto overflow-x-auto'>
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