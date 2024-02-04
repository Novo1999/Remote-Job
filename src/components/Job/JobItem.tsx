/* eslint-disable react/display-name */
'use client'
import Image from 'next/image'
import dummyLogo from '../../../public/images/dummylogo.png'

import { useAddViewCountMutation } from '@/lib/features/jobsApi/jobsApi'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Ref, forwardRef, useState } from 'react'
import JobPositions from './JobPositions'
import SpecialJobs from './SpecialJobs'
import { Job } from '@/utils/interfaces'
import Star from './Star'

const JobItem = forwardRef(
  (
    { jobPost, index }: { jobPost: Job; index: number },
    ref: Ref<HTMLDivElement>
  ) => {
    const { _id } = jobPost
    const [currentHovered, setCurrentHovered] = useState<number | undefined>(
      undefined
    )
    const [addViewCount] = useAddViewCountMutation()
    const router = useRouter()
    const handleClick = (e: React.SyntheticEvent) => {
      e.preventDefault()
      router.push(`/job/${_id}`, { scroll: true })
      // increment job view count
      addViewCount(_id)
    }
    return (
      <motion.div
        ref={ref}
        onClick={handleClick}
        onHoverStart={() => setCurrentHovered(index)}
        onHoverEnd={() => setCurrentHovered(undefined)}
        whileHover={{ scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 200, damping: 10 }}
        className='w-full relative py-2 px-2 sm:py-3 rounded-lg bg-gradient-to-r from-rose-100 to-teal-100 text-black grid grid-cols-9 sm:grid-cols-7 lg:grid-cols-8 sm:items-start lg:items-center text-xs font-poppins z-10 cursor-pointer'
      >
        {index === currentHovered && (
          <div className='absolute left-0 h-full border-r-4 rounded-l-full border-orange-500'></div>
        )}
        {/* main items */}
        <div className='flex col-span-1 flex-col gap-1 items-center m-auto sm:flex-row'>
          <Image
            src={dummyLogo}
            alt='logo'
            className='w-12 sm:w-16 rounded-full m-auto shadow-lg lg:w-[90px] xl:w-20'
          />
          <button className='text-lg right-2 sm:hidden'>
            <div className='rating rating-sm transition-all'>
              <Star />
            </div>
          </button>
        </div>
        <JobPositions jobPost={jobPost} />
        <SpecialJobs jobPost={jobPost} />
      </motion.div>
    )
  }
)
export default JobItem
