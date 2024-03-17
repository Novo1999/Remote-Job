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

const labels = ['Most Viewed', 'Most Starred', 'Most Applied']

export const DashBoardBarchart = ({ jobData }: { jobData: JobData }) => {
  const [all, setAll] = useState<Job[]>([])

  useEffect(() => {
    const viewedJobs = jobData?.mostViewedJobs?.jobs || []
    const starredJobs = jobData?.mostStarredJobs?.jobs || []
    const appliedJobs = jobData?.mostAppliedJobs?.jobs || []

    // Concatenate the job arrays
    setAll([...viewedJobs, ...starredJobs, ...appliedJobs])
  }, [jobData])

  console.log(all)

  const data = {
    labels: all.map((job) => job.title),
    datasets: [
      {
        label: 'Viewed',
        data: all?.map((job) => job.viewCount),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Starred',
        data: all?.map((job) => Object.keys(job.isStarred).length),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Applied',
        data: all?.map((job) => job.applyCount),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  }

  return <Bar options={options} data={data} />
}
