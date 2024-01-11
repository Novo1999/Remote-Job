import { Dispatch, SetStateAction } from 'react'
import { JobSVG, ResponsibilitySVG } from './SVG'

const Tabs = ({
  currentTab,
  setCurrentTab,
}: {
  currentTab: string
  setCurrentTab: Dispatch<SetStateAction<string>>
}) => {
  const activeTabJob =
    currentTab === 'description'
      ? 'border-b-2 border-blue-500 text-blue-500'
      : 'border-b-2 border-transparent text-gray-700'
  const activeTabResponsibility =
    currentTab === 'responsibilities'
      ? 'border-b-2 border-blue-500 text-blue-500'
      : 'border-b-2 border-transparent text-gray-700'

  const handleTabChange = (tabName: string) => {
    setCurrentTab(tabName)
  }
  return (
    <div className='flex overflow-x-auto overflow-y-hidden border-b justify-center border-gray-200 whitespace-nowrap dark:border-gray-700'>
      <button
        onClick={() => handleTabChange('description')}
        className={`inline-flex items-center h-10 px-2 py-2 -mb-px text-center text-blue-600 bg-transparent ${activeTabJob} sm:px-4 -px-1 dark:border-blue-400 dark:text-blue-300 whitespace-nowrap focus:outline-none`}
      >
        <JobSVG />
        <span className='mx-1 text-sm sm:text-base'>Job</span>
      </button>
      <button
        onClick={() => handleTabChange('responsibilities')}
        className={`inline-flex items-center h-10 px-2 py-2 -mb-px text-center ${activeTabResponsibility} bg-transparent sm:px-4 -px-1 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400`}
      >
        <ResponsibilitySVG />
        <span className='mx-1 text-sm sm:text-base'>Responsibilities</span>
      </button>
    </div>
  )
}
export default Tabs
