'use client'
import EditForm from '@/components/PostJob/EditForm'
import { useGetSingleJobQuery } from '@/lib/features/jobsApi/jobsApi'
import { Loader } from 'lucide-react'
import { useParams } from 'next/navigation'
import { Job } from '../../../../interfaces'

const Page = () => {
  const { id }: { id: string } = useParams()
  const { data, isLoading, isError, error } = useGetSingleJobQuery(id)

  return (
    <div>
      {isLoading && !isError ? (
        <div className='min-h-screen flex justify-center items-center'>
          <Loader className='animate-spin' />
        </div>
      ) : (
        <EditForm data={data as Job} />
      )}
    </div>
  )
}
export default Page
