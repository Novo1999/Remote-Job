import Link from 'next/link'
import StatBlock from './StatBlock'

const Stats = () => {
  return (
    <section className=' dark:bg-gray-800 dark:text-gray-100 font-poppins'>
      <div className='container mx-auto p-4 my-6 space-y-2 text-center'>
        <h2 className='text-5xl font-bold'>Stats</h2>
        <Link href='/' className='text-2xl font-chewy'>
          RemoteJumbo
        </Link>
      </div>
      <div className='container mx-auto grid justify-center items-center gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-5'>
        <StatBlock className='col-span-1' statName='Open rate' stat='100%' />
        <StatBlock className='col-span-1' statName='Traffic' stat='3,293' />
        <StatBlock
          className='col-span-1'
          statName='Monthly visits'
          stat='2,235'
        />
        <StatBlock className='col-span-1' statName='From where' stat='US, UK' />
        <StatBlock
          className='col-span-2 m-auto lg:col-span-1'
          statName='Subscribers'
          stat='2,375'
        />
      </div>
    </section>
  )
}
export default Stats
