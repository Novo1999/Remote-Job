'use client'
import { changeFilter } from '@/lib/features/filter/filterSlice'
import { MultiSelectProps } from '../../../interfaces'
import { setMaxFilterCount } from '@/utils/setMaxFilterCount'
import { setSelectItemColor } from '@/utils/setSelectItemColor'
import { useState } from 'react'
import MoreOrLessButton from './MoreOrLess'

const MultiSelect = ({
  options,
  selected,
  onChange,
  category,
}: MultiSelectProps) => {
  const [showMore, setShowMore] = useState<string>('')
  // dynamic grid layout based on category
  let gridSize = ''
  if (category === 'benefits') {
    gridSize = 'grid-cols-2'
  } else {
    gridSize = 'grid-cols-3'
  }

  const handleShowMore = (newShowMore: string) => {
    setShowMore(newShowMore)
  }

  const handleShowLess = () => {
    setShowMore('')
  }

  const handleFilterChange = (option: string) => {
    onChange(changeFilter({ category, newOption: option }))
  }

  return (
    <div>
      <div
        className={`grid ${gridSize} ${setSelectItemColor(
          category
        )} text-black text-xs`}
      >
        {options
          .map((option) => (
            <div
              className='text-xs flex p-2 justify-between border m-1 gap-1 font-semibold border-black shadow-md cursor-pointer'
              key={option}
              onClick={() => {
                handleFilterChange(option)
              }}
            >
              {option}
              <input
                readOnly
                type='checkbox'
                checked={selected.includes(option)}
                className={`checkbox checkbox-accent checkbox-xs self-center shadow-sm ${setSelectItemColor(
                  category
                )} border-white`}
              />
            </div>
          ))
          .slice(0, setMaxFilterCount(category, showMore))}
        {showMore === '' ? (
          <MoreOrLessButton
            text='Show more'
            handler={() => handleShowMore(category)}
            category={category}
          />
        ) : (
          <MoreOrLessButton
            text='Show less'
            handler={() => handleShowLess()}
            category={category}
          />
        )}
      </div>
    </div>
  )
}

export { MultiSelect }
