import AboutCompany from '@/components/JobDetails/AboutCompany'
import JobCard from '@/components/JobDetails/JobCard'
import SimilarJobs from '@/components/JobDetails/SimilarJobs'

export default function Page({ params }: { params: { id: string } }) {
  return (
    <main className='flex gap-4 flex-col sm:grid grid-cols-2 sm:mx-8 mt-6 mx-4 lg:mx-20 xl:mx-60 2xl:mx-96'>
      <JobCard />
      <AboutCompany />
      <SimilarJobs />
    </main>
  )
}
