'use client'
import ClientOnly from '@/components/PostJob/ClientOnly'
import { auth } from '@/firebase/config'
import { useGetJobsStatsQuery } from '@/lib/features/jobsApi/jobsApi'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { JobData } from '../../../interfaces'
import { DashBoardBarchart } from '../../components/Dashboard/DashBoardBarchart'
import JobsGrid from '../../components/Dashboard/JobsGrid'
import PieChart from '../../components/Dashboard/PieChart'

export default function Page() {
  const [user, authLoading] = useAuthState(auth)

  const [jobData, setJobData] = useState<JobData>({
    mostViewedJobs: { jobs: [], count: 0 },
    mostStarredJobs: { jobs: [], count: 0 },
    mostAppliedJobs: { jobs: [], count: 0 },
  })

  const { data } = useGetJobsStatsQuery('4f4vhBDNImYe2JuHt7SLpvf2wLZ2')

  useEffect(() => {
    if (!authLoading && user?.uid) {
      setJobData(data)
    }
  }, [authLoading, data, user])

  return (
    <ClientOnly>
      <div className='min-h-[80vh] pt-20 px-10 2xl:px-[24rem]'>
        <div className='flex justify-between items-end'>
          <p className='large rise sm:text-4xl font-oswald'>
            Hi there, {user?.displayName}
          </p>
          <p className='text-md sm:text-4xl font-oswald'>Top Jobs Summary</p>
        </div>
        <div className='mockup-window w-fit m-auto mt-4 bg-white'>
          <div className='flex flex-col lg:flex-row justify-between items-center lg:items-start px-4 py-16 bg-base-200 dashboard'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className='w-[34rem] lg:w-[36rem] xl:w-[50rem] h-96 hidden sm:block'>
              <DashBoardBarchart jobData={jobData} />
            </div>
            <div className='w-48 sm:w-60 lg:w-72 min-h-72'>
              <PieChart jobData={jobData} />
            </div>
          </div>
        </div>
        <section className='mt-20'>
          <JobsGrid />
        </section>
      </div>
    </ClientOnly>
  )
}
