/* eslint-disable react/display-name */
'use client'
import Image from 'next/image'
import dummyLogo from '../../../public/images/dummylogo.png'

import { useAddViewCountMutation } from '@/lib/features/jobsApi/jobsApi'
import { Job } from '@/utils/interfaces'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Ref, forwardRef } from 'react'
import JobPositions from './JobPositions'
import SpecialJobs from './SpecialJobs'
import Star from './Star'

type JobItemProp = { jobPost: Job; index: number }

const JobItem = forwardRef(
  ({ jobPost, index }: JobItemProp, ref: Ref<HTMLDivElement>) => {
    const { _id } = jobPost

    const [addViewCount] = useAddViewCountMutation()
    const router = useRouter()
    // click handler
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
        whileHover={{ scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 200, damping: 10 }}
        className='group w-full relative py-2 px-2 sm:py-3 rounded-lg bg-gradient-to-r from-rose-100 to-teal-100 text-black grid grid-cols-9 sm:grid-cols-7 lg:grid-cols-8 sm:items-start lg:items-center text-xs font-poppins z-10 cursor-pointer'
      >
        <div className='absolute left-0 h-full border-r-4 rounded-l-full hidden group-hover:block border-orange-500'></div>

        {/* main items */}
        <div className='flex col-span-1 flex-col gap-1 items-center m-auto sm:flex-row'>
          <Image
            src={dummyLogo}
            alt='logo'
            className='w-12 sm:w-16 rounded-full m-auto shadow-lg lg:w-[90px] xl:w-20'
          />
          <button
            onClick={() => console.log(_id)}
            className='text-lg right-2 sm:hidden'
          >
            <div className='rating rating-sm transition-all'>
              <Star job={jobPost} />
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
