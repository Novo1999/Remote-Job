import { FaLocationDot, FaThumbsUp, FaUserTie } from 'react-icons/fa6'
import { BiSolidCategory } from 'react-icons/bi'
import { MultiSelect } from './SelectItem'
import { Label } from '../ui/label'
import { MultiSelectProps } from '../../../interfaces'

const FilterLabel = ({
  category,
  className,
}: {
  category: string
  className: string
}) => {
  if (category === 'locations') {
    return (
      <div className={`${className} bg-red-400`}>
        <span>
          <FaLocationDot />
        </span>
        <Label htmlFor='location'>{category}</Label>
      </div>
    )
  }
  if (category === 'positions') {
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
        <Label htmlFor='types'>{category}</Label>
      </div>
    )
  }
  if (category === 'benefits') {
    return (
      <div className={`${className} bg-purple-400`}>
        <span>
          <FaThumbsUp />
        </span>
        <Label htmlFor='benefits'>{category}</Label>
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
    <div>
      <FilterLabel
        className='relative capitalize
        p-2 text-white w-fit flex shadow-md mb-2 gap-2'
        category={category}
      />
      <div className='overflow-auto scrollbar-hide max-h-52'>
        <MultiSelect
          onChange={onChange}
          selected={selected}
          className='text-black border-2 border-black'
          options={options}
          category={category}
        />
      </div>
    </div>
  )
}
export default FilterCategory
