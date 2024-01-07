'use client'
import Image from 'next/image'
import dummyLogo from '../../../public/images/dummylogo.png'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { MdOutlineStarBorder } from 'react-icons/md'
import JobDetailsPC from './JobDetailsPC'
import JobPositions from './JobPositions'
import SpecialJobs from './SpecialJobs'

export type JobPost = {
  title?: string
  companyName?: string
  positions?: string[]
  benefits?: string[]
  postedAgo?: string
  location?: string
  salaryRange?: string
  isFeatured?: boolean
  isNew?: boolean
  index?: number
  currentHovered?: number
  isAd?: boolean
  type?: string
}

const JobItem = ({ jobPost, index }: { jobPost: JobPost; index: number }) => {
  const [currentHovered, setCurrentHovered] = useState<number | undefined>(
    undefined
  )
  const {
    title,
    companyName,
    positions,
    postedAgo,
    location,
    salaryRange,
    isFeatured,
    isNew,
    isAd,
  } = jobPost
  const brokenPostedAgo = postedAgo?.split(' ') as string[]

  return (
    <motion.div
      onHoverStart={() => setCurrentHovered(index)}
      onHoverEnd={() => setCurrentHovered(undefined)}
      whileHover={{ scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 200, damping: 10 }}
      className='w-full bg-white relative py-2 px-2 sm:px-6 sm:py-2 rounded-lg text-black grid grid-cols-7 sm:grid-cols-7 lg:grid-cols-8 sm:items-center text-xs gap-4 font-poppins'
    >
      {index === currentHovered && (
        <div className='absolute left-0 h-full border-r-4 rounded-l-full border-orange-500'></div>
      )}
      {isAd && (
        <div className='bg-slate-300 shadow-md rounded-full absolute -right-2 -top-2 px-2 hidden sm:block'>
          Ad
        </div>
      )}
      <div className='col-span-1 flex'>
        <button className='text-2xl'>
          <MdOutlineStarBorder />
        </button>
        <Image
          src={dummyLogo}
          alt='logo'
          className='w-12 sm:w-16 rounded-full m-auto shadow-lg lg:w-[90px] xl:w-20'
        />
      </div>
      <JobPositions jobPost={jobPost} />
      <JobDetailsPC jobPost={jobPost} />
      <SpecialJobs jobPost={jobPost} />
    </motion.div>
  )
}
export default JobItem
