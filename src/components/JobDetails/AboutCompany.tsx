'use client'

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Job } from '../../../interfaces'
import ProfileImage from './Avatar'
const AboutCompany = ({ job }: { job: Job }) => {
  return (
    <Card className='font-poppins bg-gradient-to-r from-teal-200 to-lime-200 h-full sm:col-span-1'>
      <CardHeader>
        <div className='flex gap-2 items-center'>
          <ProfileImage companyLogo={job?.companyLogo?.url} />
          <CardTitle>{job?.companyName}</CardTitle>
        </div>
        <CardDescription className='text-xs leading-6 text-black lg:text-base'>
          <span className='font-bold'>{job?.companyName} </span>is a dynamic and
          innovative company specializing in the field of technology and
          software development. Known for its cutting-edge solutions and
          forward-thinking approach, Tech Co is at the forefront of the
          industry. The company is committed to delivering high-quality digital
          products and services that cater to the evolving needs of its clients.
          With a strong focus on web development, Tech Co leverages modern
          technologies such as React JS and CSS to create seamless and visually
          appealing user interfaces. The company&apos;s dedication to staying
          ahead of industry trends is evident in its pursuit of continuous
          improvement in frontend architecture.
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
export default AboutCompany
