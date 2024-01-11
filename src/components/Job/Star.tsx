import { Dispatch, SetStateAction } from 'react'

const Star = ({
  setChecked,
  checked,
  className,
}: {
  setChecked?: Dispatch<SetStateAction<boolean>>
  checked?: boolean
  className?: string
}) => {
  return (
    <input
      onChange={() => setChecked!(!checked)}
      type='checkbox'
      name='rating-8'
      className={`mask mask-star-2 ${className} ${
        checked ? 'bg-orange-400' : 'bg-gray-400'
      }`}
    />
  )
}
export default Star
