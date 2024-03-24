import NameHeader from '@/components/Dashboard/NameHeader'
import { DashBoardBarchart } from '../../components/Dashboard/DashBoardBarchart'
import JobsGrid from '../../components/Dashboard/JobsGrid'
import PieChart from '../../components/Dashboard/PieChart'

export default function Page() {
  return (
    <div className='min-h-[80vh] pt-20 px-10 2xl:px-[24rem] bg-stone-800 pb-20'>
      <NameHeader />
      <div className='mockup-window w-fit m-auto mt-4 bg-white'>
        <div className='flex flex-col lg:flex-row justify-between items-center lg:items-start px-4 py-16 bg-base-200 dashboard'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className='w-[34rem] lg:w-[36rem] xl:w-[50rem] h-96 hidden sm:block'>
            <DashBoardBarchart />
          </div>
          <div className='w-48 sm:w-60 lg:w-72 min-h-72'>
            <PieChart />
          </div>
        </div>
      </div>
      <section className='mt-20'>
        <JobsGrid />
      </section>
    </div>
  )
}
