'use client'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { auth } from '@/firebase/config'
import { usePostedDate } from '@/hooks/use-posted-date'
import useRouting from '@/hooks/use-routing'
import { useAppSelector } from '@/lib/features/hooks'
import {
  useApplyJobMutation,
  useDeleteJobMutation,
} from '@/lib/features/jobsApi/jobsApi'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { LuMousePointerClick } from 'react-icons/lu'
import { MdDelete, MdEdit } from 'react-icons/md'
import { toast } from 'react-toastify'
import { Job } from '../../../interfaces'
import Star from '../Job/Star'
import { TooltipForButton } from '../Tooltip'
import { Button } from '../ui/button'
import ApplyButton from './ApplyButton'
import ProfileImage from './Avatar'
import JobDeleteModal from './JobDeleteModal'
import JobEditModal from './JobEditModal'
import ResponsibilitiesAndQualifications from './Reponsibilities&Qualifications'
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
    appliedBy,
    companyLogo,
    jobDescription,
  } = job
  const { formattedDate } = usePostedDate(posted)
  const { showStarLoader } = useAppSelector((state) => state.loader)
  const [deleteJob, { isLoading: isDeleteLoading }] = useDeleteJobMutation()
  const handleRouting = useRouting()

  const [modalOpen, setModalOpen] = useState(false)
  const [editModalOpen, setEditModalOpen] = useState(false)

  const [user, loading] = useAuthState(auth)
  const userId = !loading && user ? user.uid : ''
  const [applyJob, { isLoading }] = useApplyJobMutation()
  const alreadyApplied = appliedBy?.userId.includes(userId)
  const applyBtnDisabled =
    alreadyApplied ||
    !user ||
    createdBy === userId ||
    userId === process.env.NEXT_PUBLIC_ADMIN_UID

  const handleApply = async () => {
    if (!user || alreadyApplied || createdBy === userId) return
    applyJob({ jobId: _id, userId }).then((result: any) => {
      if (result.error) {
        toast.error(result.error.data.msg)
      } else toast.success(`Applied for ${title} at ${companyName}`)
    })
  }

  return (
    <Card className='font-poppins bg-gradient-to-bl from-indigo-200 via-red-200 to-yellow-100 h-fit sm:col-span-1'>
      <CardHeader>
        <div className='flex gap-2 justify-between items-center flex-wrap'>
          {/* profile image */}
          <ProfileImage companyLogo={companyLogo?.url} />
          <CardTitle className='text-base lg:text-xl flex gap-2 items-center flex-1'>
            {/* job title */}
            <p className='sm:whitespace-nowrap'>{title}</p>
            <div className='flex flex-wrap flex-col sm:flex-row justify-between gap-2 sm:w-full'>
              {/* apply */}
              <ApplyButton job={job}>
                <button
                  disabled={applyBtnDisabled}
                  onClick={handleApply}
                  className={`btn-xs transition-all ease-in-out rounded-full flex gap-2 bg-red-500 text-white button ${
                    alreadyApplied ||
                    !user ||
                    createdBy === userId ||
                    userId === process.env.NEXT_PUBLIC_ADMIN_UID
                      ? '!bg-gray-500 cursor-default'
                      : ''
                  } transition-all ease-in-out sm:self-end`}
                >
                  <p className='outline-none text-xs'>Apply Now</p>
                  <FaArrowAltCircleRight />
                </button>
              </ApplyButton>
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
          {/* company name */}
          <Badge variant='destructive' className='w-48 break-all'>
            <Link className='m-auto' href='/company'>
              {companyName}
            </Link>
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
              <div className='flex gap-2'>
                {/* EDIT */}
                <TooltipForButton content='Edit'>
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                    }}
                  >
                    <Button>
                      <Link href={`/edit-job/${_id}`}>
                        <MdEdit className='text-2xl' />
                      </Link>
                    </Button>
                  </motion.div>
                </TooltipForButton>
                {/* DELETE */}
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
              </div>
            )}
            {/* job delete modal */}
            <JobDeleteModal
              id={_id}
              isDeleteLoading={isDeleteLoading}
              handleCancel={() => setModalOpen(false)}
              handleDelete={() => {
                deleteJob(_id)
                  .then(
                    () => {
                      toast.success('Deleted Job Successfully')
                      handleRouting('/')
                    },
                    () => {
                      toast.error('Could not delete the job')
                    }
                  )
                  .finally(() => {
                    setModalOpen(false)
                  })
              }}
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
            />{' '}
            <JobEditModal
              id={_id}
              modalOpen={editModalOpen}
              setModalOpen={setEditModalOpen}
            />
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
          <ResponsibilitiesAndQualifications jd={jobDescription as string} />
          <div className='flex flex-col gap-2'>
            <ApplyButton job={job}>
              <motion.button
                // disabled if user already has applied or no user or its the users posted job or if the user is admin
                disabled={applyBtnDisabled}
                onClick={handleApply}
                whileTap={{ scale: 0.8 }}
                transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                className={`button ${
                  alreadyApplied ||
                  !user ||
                  createdBy === userId ||
                  userId === process.env.NEXT_PUBLIC_ADMIN_UID
                    ? '!bg-gray-500 cursor-default'
                    : ''
                } transition-all ease-in-out sm:self-end`}
              >
                {isLoading ? <Loader2 className='animate-spin' /> : 'Apply Now'}
                <FaArrowAltCircleRight />
              </motion.button>
            </ApplyButton>
            <Warning />
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  )
}
export default JobCard
