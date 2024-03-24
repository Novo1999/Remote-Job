'use client'

import { loadData } from '@/lib/features/adminJobData/adminJobDataSlice'
import { useAppDispatch, useAppSelector } from '@/lib/features/hooks'
import { useGetJobsStatsQuery } from '@/lib/features/jobsApi/jobsApi'
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'
import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const defaultData = {
  labels: ['Most Viewed', 'Most Starred', 'Most Applied'],
  datasets: [
    {
      label: 'Count',
      data: [12, 19, 3],
      backgroundColor: ['#ec0d0d', '#0b9af9', '#fade09'],
      borderColor: ['#ec0d0d', '#0b9af9', '#fade09'],
      borderWidth: 1,
    },
  ],
}

const PieChart = () => {
  const { data } = useGetJobsStatsQuery(process.env.NEXT_PUBLIC_ADMIN_UID)
  const dispatch = useAppDispatch()
  const { jobData } = useAppSelector((state) => state.adminJobData)
  useEffect(() => {
    dispatch(loadData(data))
  }, [data, dispatch])

  const [pieData, setPieData] = useState(defaultData)
  useEffect(() => {
    setPieData((prevData) => ({
      ...prevData,
      datasets: [
        {
          ...prevData.datasets[0],
          data: [
            jobData?.mostViewedJobs?.count,
            jobData?.mostStarredJobs?.count,
            jobData?.mostAppliedJobs?.count,
          ],
        },
      ],
    }))
  }, [
    jobData?.mostViewedJobs?.count,
    jobData?.mostStarredJobs?.count,
    jobData?.mostAppliedJobs?.count,
  ])

  return <Pie className='w-full' data={pieData} />
}

export default PieChart
