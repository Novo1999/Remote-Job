'use client'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { BriefcaseIcon } from 'lucide-react'
import ProfileImage from './Avatar'
import Link from 'next/link'
import Tabs from './Tabs'
import { useState } from 'react'
import ApplyButton from './ApplyButton'

const JobCard = () => {
  const [currentTab, setCurrentTab] = useState<string>('description')

  return (
    <Card className='font-poppins bg-gradient-to-bl from-indigo-200 via-red-200 to-yellow-100 h-fit'>
      <Tabs setCurrentTab={setCurrentTab} currentTab={currentTab} />
      <CardHeader>
        <div className='flex gap-2 justify-between'>
          <CardTitle className='text-base lg:text-xl'>
            Senior Frontend Developer
          </CardTitle>
          <ProfileImage />
        </div>
        <Badge variant='destructive' className='w-fit'>
          <Link href='/company'>Tech Co.</Link>
        </Badge>
        {currentTab === 'description' ? (
          <CardDescription className='text-xs leading-6 flex flex-col gap-6 text-black lg:text-base'>
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
            <div className='flex justify-between flex-col gap-2'>
              <div className='flex flex-col gap-1 *:bg-black *:text-white *:w-fit'>
                <Badge variant='outline'>Type: CONTRACT</Badge>
                <Badge variant='outline'>Location: Seattle, WA</Badge>
                <Badge variant='outline'>Salary: $70K - 90K</Badge>
              </div>
              <ApplyButton />
            </div>
          </CardDescription>
        ) : (
          <div className='text-xs leading-6 flex flex-col gap-6 sm:gap-20 text-black lg:text-base h-fit'>
            <span>
              <li>5+ years of PHP expertise</li>
              <li>3+ years mastering Symfony 4+</li>
              <li>Test-driven development champion</li>
              <li>Domain-Driven Design advocate</li>
              <li>Docker aficionado</li>
              <li>Messaging maestro</li>
              <li>Database polyglot</li>
              <li>Architectural architect</li>
              <li>Javascript jack-of-all-trades</li>
              <li>Communication powerhouse</li>
              <li>Independent thinker and doer</li>
              <li>Seasoned professional</li>
            </span>
            <ApplyButton />
          </div>
        )}
      </CardHeader>
    </Card>
  )
}
export default JobCard
