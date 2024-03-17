'use client'
import ClientOnly from '@/components/PostJob/ClientOnly'
import { auth } from '@/firebase/config'
import { useGetJobsStatsQuery } from '@/lib/features/jobsApi/jobsApi'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { JobData } from '../../../interfaces'
import { DashBoardBarchart } from './DashBoardBarchart'
import PieChart from './PieChart'

export default function Page() {
  const [user, authLoading] = useAuthState(auth)

  const [jobData, setJobData] = useState<JobData>({
    mostViewedJobs: { jobs: [], count: 0 },
    mostStarredJobs: { jobs: [], count: 0 },
    mostAppliedJobs: { jobs: [], count: 0 },
  })

  const { data, isLoading, isError, error } = useGetJobsStatsQuery(
    '4f4vhBDNImYe2JuHt7SLpvf2wLZ2'
  )

  useEffect(() => {
    if (!authLoading && user?.uid) {
      setJobData(data)
    }
  }, [authLoading, data, user])

  console.log(data)

  return (
    <ClientOnly>
      <div className='min-h-[80vh] p-20'>
        <p>Hi there, {user?.displayName}</p>
        <div className='mockup-window border w-fit m-auto bg-base-300 mt-4'>
          <div className='flex flex-col lg:flex-row justify-between items-center lg:items-start px-4 py-16 bg-base-200'>
            <div className='w-[34rem] lg:w-[36rem] xl:w-[50rem] h-96 hidden sm:block'>
              <DashBoardBarchart jobData={jobData} />
            </div>
            <div className='w-48 sm:w-60 lg:w-72'>
              <PieChart jobData={jobData} />
            </div>
          </div>
        </div>
      </div>
    </ClientOnly>
  )
}
