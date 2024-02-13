'use client'
import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import { remoteJobBenefits } from '@/utils/constants'
import { Check, ChevronsUpDownIcon } from 'lucide-react'

function BenefitsListbox() {
  const [selectedBenefits, setSelectedBenefits] = useState([
    remoteJobBenefits[0],
    remoteJobBenefits[1],
  ])

  return (
    <Listbox value={selectedBenefits} onChange={setSelectedBenefits} multiple>
      <Listbox.Button className='bg-white w-full rounded-md py-2 text-black'>
        <span className='pointer-events-none inset-y-0 right-0 flex items-center pr-2'>
          <span className='block w-full'>
            {selectedBenefits.length > 1
              ? selectedBenefits.join(', ')
              : selectedBenefits}
          </span>
          <ChevronsUpDownIcon
            className='size-5 text-gray-400'
            aria-hidden='true'
          />
        </span>
      </Listbox.Button>
      <Listbox.Options
        className={
          'bg-white w-full rounded-md py-2 text-black cursor-pointer h-48 overflow-y-scroll'
        }
      >
        {remoteJobBenefits.map((benefit) => (
          <Listbox.Option
            className='p-1 pl-2 border-black border-b-2 flex gap-2 hover:bg-slate-400 transition-colors'
            key={benefit}
            value={benefit}
          >
            <p>
              <Check
                className={`size-4 ${
                  selectedBenefits.includes(benefit) ? 'visible' : 'invisible'
                }`}
              />
            </p>
            <p>{benefit}</p>
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}

export default BenefitsListbox
