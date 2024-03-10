'use client'

import PostForm from '@/components/PostJob/PostForm'
import { useGetSingleJobQuery } from '@/lib/features/jobsApi/jobsApi'
import { Loader } from 'lucide-react'
import { useParams } from 'next/navigation'
import { Job } from '../../../../interfaces'

const Page = () => {
  const { id }: { id: string } = useParams()
  const { data, isLoading, isError, error } = useGetSingleJobQuery(id)

  console.log(data)

  return (
    <div>
      {isLoading && !isError ? (
        <div className='min-h-screen flex justify-center items-center'>
          <Loader className='animate-spin' />
        </div>
      ) : (
        <PostForm data={data as Job} />
      )}
    </div>
  )
}
export default Page
