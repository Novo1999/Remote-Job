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

const JobCard = () => {
  const [currentTab, setCurrentTab] = useState<string>('description')

  return (
    <Card className='font-poppins bg-gradient-to-bl from-indigo-200 via-red-200 to-yellow-100 h-fit sm:col-span-1'>
      <CardHeader>
        <div className='flex gap-2 justify-between'>
          <CardTitle className='text-base lg:text-xl'>
            Senior Frontend Developer
          </CardTitle>
          <div className='rating rating-md transition-all'>
            <Star />
          </div>
        </div>
        <Badge variant='destructive' className='w-fit'>
          <Link href='/company'>Tech Co.</Link>
        </Badge>
        <CardContent className='text-xs leading-6 flex flex-col gap-6 p-0 lg:text-base'>
          <CardDescription className='text-black'>
            A senior frontend developer at Tech Co is a seasoned professional
            with extensive experience in web development, particularly focusing
            on React JS and CSS. They play a crucial role in designing and
            implementing user interfaces, ensuring a seamless and responsive
            user experience across various platforms.Responsibilities may
            include leading and mentoring junior developers, conducting code
            reviews, and participating in the overall software development
            lifecycle. The senior frontend developer at Tech Co is also adept at
            optimizing web applications for performance and scalability,
            striving to deliver high-quality and efficient code. As someone who
            primarily works with React JS, the senior frontend developer at Tech
            Co is proficient in state management, component-based architecture,
            and integrating APIs. They keep abreast of the latest developments
            in the React ecosystem, applying this knowledge to enhance the
            company&apos;s frontend projects.
          </CardDescription>

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
            <ApplyButton />
          </div>
          <CardTitle className='text-base lg:text-xl'>Requirements</CardTitle>
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
            <Qualifications />
            <ApplyButton />
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  )
}
export default JobCard
