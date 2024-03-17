import { useAppSelector } from '@/lib/features/hooks'
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js'
import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Job } from '../../../interfaces'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Most Viewed and Most applied Jobs',
    },
  },
  redraw: true,
}

const JobChart = ({ data: jobs }: { data: Job[] }) => {
  // getting the labels from the jobs
  const labels = [...jobs]
    .sort((a, b) => b.viewCount - a.viewCount)
    .slice(0, 10)
    .map((job) => job.title)

  // data that will be used for the chart
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Viewed',
        data: [...jobs]
          .sort((a: Job, b: Job) => b.viewCount - a.viewCount)
          .slice(0, 10) // get 10
          .map((job: Job) => job.viewCount),
        backgroundColor: 'rgba(255, 99, 132)',
      },
      {
        label: 'Applied',
        data: [...jobs]
          .sort((a: Job, b: Job) => b.applyCount - a.applyCount)
          .slice(0, 10)
          .map((job: Job) => job.applyCount),
        backgroundColor: 'rgba(53, 162, 235)',
      },
    ],
  }

  return (
    <div className='w-[18rem] h-[20rem] sm:w-[30rem] sm:h-[30rem] lg:w-[40rem] lg:h-[40rem] flex items-center justify-center relative right-3'>
      <Bar width={100} height={100} options={options} data={data} />
    </div>
  )
}
export default JobChart
