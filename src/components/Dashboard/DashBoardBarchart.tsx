import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js'
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { Job, JobData } from '../../../interfaces'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Top Jobs',
    },
  },
}

export const DashBoardBarchart = ({ jobData }: { jobData: JobData }) => {
  const [all, setAll] = useState<Job[]>([])

  console.log(all)

  useEffect(() => {
    const viewedJobs = jobData?.mostViewedJobs?.jobs || []
    const starredJobs = jobData?.mostStarredJobs?.jobs || []
    const appliedJobs = jobData?.mostAppliedJobs?.jobs || []

    // Concatenate the job arrays
    setAll([...viewedJobs, ...starredJobs, ...appliedJobs])
  }, [jobData])

  const data = {
    labels: all.map((job) => job.title),
    datasets: [
      {
        label: 'Viewed',
        data: all?.map((job) => job.viewCount),
        backgroundColor: '#ec0d0d',
      },
      {
        label: 'Starred',
        data: all?.map((job) => job.isStarred.userId.length),
        backgroundColor: '#0b9af9',
      },
      {
        label: 'Applied',
        data: all?.map((job) => job.applyCount),
        backgroundColor: '#fade09',
      },
    ],
  }

  return <Bar options={options} data={data} />
}
