/* eslint-disable react/display-name */
'use client'
import { useAppDispatch } from '@/lib/features/hooks'
import { useAddViewCountMutation } from '@/lib/features/jobsApi/jobsApi'
import { openModal } from '@/lib/features/modal/modalSlice'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { Ref, forwardRef } from 'react'
import { Job } from '../../../interfaces'
import dummyLogo from '../../../public/images/dummylogo.png'
import JobPositions from './JobPositions'
import SpecialJobs from './SpecialJobs'
import Star from './Star'

type JobItemProp = {
  jobPost: Job
}

const JobItem = forwardRef(
  ({ jobPost }: JobItemProp, ref: Ref<HTMLDivElement>) => {
    const { _id, companyLogo } = jobPost
    const dispatch = useAppDispatch()
    const [addViewCount] = useAddViewCountMutation()
    const router = useRouter()
    // click handler
    const handleClick = (e: React.SyntheticEvent) => {
      e.preventDefault()
      router.push(`/job/${_id}`, { scroll: true })
      // increment job view count
      addViewCount(_id)
      dispatch(openModal(false))
    }
    return (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          once: true,
        }}
        ref={ref}
        onClick={handleClick}
        whileHover={{ scale: 1.01 }}
        transition={{
          type: 'tween',
          stiffness: 100,
          duration: 0.2,
        }}
        className='group w-full relative py-2 px-2 sm:py-3 rounded-lg bg-gradient-to-r from-rose-100 to-teal-100 text-black grid grid-cols-9 sm:grid-cols-7 lg:grid-cols-8 sm:items-start lg:items-center text-xs font-poppins z-10 cursor-pointer'
      >
        <div className='absolute left-0 h-full border-r-4 rounded-l-full hidden group-hover:block border-orange-500'></div>

        {/* main items */}
        <div className='flex col-span-1 flex-col gap-1 items-center m-auto sm:flex-row'>
          <Image
            src={companyLogo?.url ?? dummyLogo}
            alt='logo'
            width={300}
            height={300}
            className='w-12 sm:w-16 rounded-full m-auto shadow-lg lg:w-[90px] xl:w-20'
          />
          <button className='text-lg right-2 sm:hidden'>
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
