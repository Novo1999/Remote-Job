'use client'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { auth } from '@/firebase/config'
import { usePostedDate } from '@/hooks/use-posted-date'
import { useAppSelector } from '@/lib/features/hooks'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { FaArrowAltCircleRight, FaCheckCircle } from 'react-icons/fa'
import { LuMousePointerClick } from 'react-icons/lu'
import { MdDelete } from 'react-icons/md'
import { RxCross1 } from 'react-icons/rx'
import { Job } from '../../../interfaces'
import Star from '../Job/Star'
import { TooltipForButton } from '../Tooltip'
import { Button } from '../ui/button'
import ApplyButton from './ApplyButton'
import ProfileImage from './Avatar'
import JobDeleteModal from './JobDeleteModal'
import Qualifications from './Qualifications'
import Warning from './Warning'

const JobCard = ({ job }: { job: Job }) => {
  const {
    _id,
    posted,
    title,
    companyName,
    location,
    salary: { min, max },
    position,
    jobType,
    viewCount,
    createdBy,
  } = job

  const { formattedDate } = usePostedDate(posted)
  const { showStarLoader } = useAppSelector((state) => state.loader)

  const [modalOpen, setModalOpen] = useState(false)

  const [user] = useAuthState(auth)

  return (
    <Card className='font-poppins bg-gradient-to-bl from-indigo-200 via-red-200 to-yellow-100 h-fit sm:col-span-1'>
      <CardHeader>
        <div className='flex gap-2 justify-between items-center flex-wrap'>
          <ProfileImage />
          <CardTitle className='text-base lg:text-xl flex gap-2 items-center flex-1'>
            <p className='sm:whitespace-nowrap'>{title}</p>
            <div className='flex flex-wrap flex-col sm:flex-row justify-between gap-2 sm:w-full'>
              <button className='btn-xs btn transition-all ease-in-out rounded-full flex gap-2 bg-red-500 text-white'>
                <p className='outline-none'>Apply Now</p>
                <FaArrowAltCircleRight />
              </button>
              <div className='rating rating-md transition-all flex gap-2'>
                <p className='font-thin flex gap-2 items-center'>
                  <LuMousePointerClick /> Viewed: {viewCount} times
                </p>
                {showStarLoader === _id ? (
                  <span className='loading loading-spinner text-warning'></span> // shows loader when clicked on star
                ) : (
                  <Star job={job} />
                )}
              </div>
            </div>
          </CardTitle>
        </div>
        <div className='flex flex-wrap gap-2'>
          <Badge variant='destructive' className='w-fit'>
            <Link href='/company'>{companyName}</Link>
          </Badge>
          <Badge variant='secondary' className='w-fit'>
            <p>{formattedDate}</p>
          </Badge>
          <div className='flex gap-2 flex-wrap justify-between'>
            <div className='flex gap-2 flex-wrap items-center'>
              <p>Tag: </p>
              <Badge
                variant='secondary'
                className='w-fit bg-teal-500 text-white hover:bg-teal-400'
              >
                <p>{position}</p>
              </Badge>
            </div>
            {createdBy === user?.uid && (
              <TooltipForButton content='Delete'>
                <motion.div
                  whileHover={{
                    scale: 1.1,
                  }}
                >
                  <Button onClick={() => setModalOpen(true)}>
                    <MdDelete className='text-2xl' />
                  </Button>
                </motion.div>
              </TooltipForButton>
            )}
            <JobDeleteModal
              id={_id}
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
            />{' '}
            {/* job delete modal */}
          </div>
        </div>
        <CardContent className='text-xs leading-6 flex flex-col gap-6 p-0 lg:text-base'>
          <div className=' flex justify-between flex-col gap-2'>
            <div className='grid grid-cols-2 flex-col gap-1 *:bg-black *:text-white mb-4'>
              <Badge variant='outline' className='rounded-md'>
                Type
              </Badge>
              <p className='p-2 rounded-md font-thin'>
                {jobType.toUpperCase()}
              </p>
              <Badge variant='outline' className='rounded-md'>
                Location{' '}
              </Badge>
              <p className='p-2 rounded-md font-thin'>{location}</p>
              <Badge variant='outline' className='rounded-md'>
                Salary{' '}
              </Badge>
              <p className='p-2 rounded-md font-thin'>
                {min}K-{max}K
              </p>
            </div>
          </div>
          {/* just some dummy data here */}
          <p>
            We are looking for a Senior Symfony developer with commercial
            experience for one of our clients. You are a perfect candidate if
            you are growth-oriented, you love what you do, and you enjoy working
            on new ideas to develop exciting products and growth features.
          </p>
          <CardTitle className='text-base lg:text-xl bg-black text-white rounded-md px-2 py-1 flex items-center gap-2'>
            <FaCheckCircle />
            Responsibilities
          </CardTitle>
          <div className='text-xs leading-6 flex flex-col gap-6 sm:gap-20 text-black lg:text-base h-fit'>
            <span>
              <li>
                Work as part of a team to deliver digital solutions across web
                and mobile platforms
              </li>
              <li>
                Translate high-level requirements into executable software
                designs
              </li>
              <li>
                Implement software solutions using Symfony / PHP programming
                language
              </li>
              <li>
                Ensure all code is thoroughly tested and meets development
                criteria
              </li>
              <li>Identify and address technical debt in the codebase</li>
            </span>
          </div>
          <Qualifications />
          <div className='flex flex-col gap-2'>
            <ApplyButton />
            <Warning />
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  )
}
export default JobCard
