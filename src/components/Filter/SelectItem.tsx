'use client'
import { changeFilter } from '@/app/features/filter/filterSlice'
import { Dispatch } from '@reduxjs/toolkit'
import { useState } from 'react'

const MoreOrLessButton = ({
  category,
  handler,
  text,
}: {
  category: string
  handler: () => void
  text: string
}) => {
  return (
    <button
      onClick={handler}
      className={`text-start btn btn-xs flex !rounded-none ml-2 w-fit h-fit ${
        category === 'types' && 'hidden'
      } self-center my-2`}
    >
      {text}
    </button>
  )
}

const setSelectItemColor = (category: string) => {
  if (category === 'locations') {
    return 'bg-red-400'
  }
  if (category === 'types') {
    return 'bg-blue-400'
  }
  if (category === 'benefits') {
    return 'bg-purple-400'
  }
  if (category === 'positions') {
    return 'bg-teal-400'
  }
}

export interface MultiSelectProps {
  options: string[]
  selected: string[]
  className?: string
  onChange: Dispatch
  category: string
}

const MultiSelect = ({
  options,
  selected,
  onChange,
  className,
  category,
  ...props
}: MultiSelectProps) => {
  const [showMore, setShowMore] = useState<string>('')
  console.log(selected)
  // dynamically set the maximum amount of filter items showed at once
  const setMaxFilterCount = () => {
    if (showMore === category || category === 'types') {
      return undefined
    } else if (showMore === '' && showMore === category) {
      return 4
    } else return 4
  }

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

  return (
    <div {...props}>
      <div
        className={`grid ${gridSize} ${setSelectItemColor(
          category
        )} text-black text-xs`}
      >
        {options
          .map((option) => (
            <div
              className='text-xs flex p-2 justify-between border m-1 gap-1 font-semibold  border-black shadow-md cursor-pointer'
              key={option}
              onClick={(e) => {
                console.log(category)
                e.stopPropagation()
                onChange(changeFilter({ category, newOption: option }))
              }}
            >
              {option}
              <input
                readOnly
                type='checkbox'
                checked={selected.includes(option)}
                className={`checkbox checkbox-accent checkbox-xs self-center shadow-sm  ${setSelectItemColor(
                  category
                )} border-white`}
              />
            </div>
          ))
          .slice(0, setMaxFilterCount())}
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
