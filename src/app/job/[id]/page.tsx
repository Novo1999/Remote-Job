import SingleJob from '@/components/Job/SingleJob'
import { Job } from '../../../../interfaces'

export async function generateStaticParams() {
  const jobs = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/all`).then(
    (res) => res.json()
  )

  return jobs.map((job: Job) => ({
    id: job._id,
  }))
}

function Page({ params: { id } }: { params: { id: string } }) {
  return <SingleJob id={id} />
}

export default Page
