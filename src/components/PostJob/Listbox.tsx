'use client'
import { remoteJobBenefits } from '@/utils/constants'
import { Listbox } from '@headlessui/react'
import { Check, ChevronsUpDownIcon } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'

type ListboxProp = {
  selectedBenefits: string[]
  setSelectedBenefits: Dispatch<SetStateAction<string[]>>
}

function BenefitsListbox({
  selectedBenefits,
  setSelectedBenefits,
}: ListboxProp) {
  return (
    <Listbox value={selectedBenefits} onChange={setSelectedBenefits} multiple>
      <label className='relative top-6'>Job Benefits *</label>
      <Listbox.Button className='bg-white w-full rounded-md py-2 text-black text-sm'>
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
