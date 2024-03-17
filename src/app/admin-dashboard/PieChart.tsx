import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'
import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2'
import { JobData } from '../../../interfaces'

ChartJS.register(ArcElement, Tooltip, Legend)

const data = {
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

const PieChart = ({ jobData }: { jobData: JobData }) => {
  const [pieData, setPieData] = useState(data)
  console.log(jobData?.mostViewedJobs?.count)
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
