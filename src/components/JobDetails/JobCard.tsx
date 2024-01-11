'use client'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'
import { useState } from 'react'
import Star from '../Job/Star'
import ApplyButton from './ApplyButton'
import Qualifications from './Qualifications'
import Warning from './Warning'
import ProfileImage from './Avatar'

const JobCard = () => {
  const [currentTab, setCurrentTab] = useState<string>('description')

  return (
    <Card className='font-poppins bg-gradient-to-bl from-indigo-200 via-red-200 to-yellow-100 h-fit sm:col-span-1'>
      <CardHeader>
        <div className='flex gap-2 justify-between items-center'>
          <ProfileImage />
          <CardTitle className='text-base lg:text-xl flex-1'>
            Senior Frontend Developer
          </CardTitle>
          <div className='rating rating-md transition-all'>
            <Star />
          </div>
        </div>
        <div className='flex gap-2'>
          <Badge variant='destructive' className='w-fit'>
            <Link href='/company'>Tech Co.</Link>
          </Badge>
          <Badge variant='secondary' className='w-fit'>
            <p>Jan 27, 2024</p>
          </Badge>
        </div>
        <CardContent className='text-xs leading-6 flex flex-col gap-6 p-0 lg:text-base'>
          <div className=' flex justify-between flex-col gap-2'>
            <div className='grid grid-cols-2 flex-col gap-1 *:bg-black *:text-white mb-4'>
              <Badge variant='outline' className='rounded-md'>
                Type
              </Badge>
              <p className='p-2 rounded-md font-thin'>CONTRACT</p>
              <Badge variant='outline' className='rounded-md'>
                Location{' '}
              </Badge>
              <p className='p-2 rounded-md font-thin'>Seattle, WA</p>
              <Badge variant='outline' className='rounded-md'>
                Salary{' '}
              </Badge>
              <p className='p-2 rounded-md font-thin'>$70K - 90K</p>
            </div>
          </div>
          <p>
            We are looking for a Senior Symfony developer with commercial
            experience for one of our clients. You are a perfect candidate if
            you are growth-oriented, you love what you do, and you enjoy working
            on new ideas to develop exciting products and growth features.
          </p>
          <CardTitle className='text-base lg:text-xl'>
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
