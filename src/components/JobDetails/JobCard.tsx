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

const JobCard = () => {
  return (
    <Card className='font-poppins bg-gradient-to-bl from-indigo-200 via-red-200 to-yellow-100'>
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
        <CardDescription className='text-xs leading-6 flex flex-col gap-6 sm:gap-20 text-black lg:text-base'>
          A senior frontend developer at Tech Co is a seasoned professional with
          extensive experience in web development, particularly focusing on
          React JS and CSS. They play a crucial role in designing and
          implementing user interfaces, ensuring a seamless and responsive user
          experience across various platforms.Responsibilities may include
          leading and mentoring junior developers, conducting code reviews, and
          participating in the overall software development lifecycle. The
          senior frontend developer at Tech Co is also adept at optimizing web
          applications for performance and scalability, striving to deliver
          high-quality and efficient code. As someone who primarily works with
          React JS, the senior frontend developer at Tech Co is proficient in
          state management, component-based architecture, and integrating APIs.
          They keep abreast of the latest developments in the React ecosystem,
          applying this knowledge to enhance the company&apos;s frontend
          projects.
          <Button className='flex gap-2 w-full'>
            <BriefcaseIcon /> Apply
          </Button>
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
export default JobCard
