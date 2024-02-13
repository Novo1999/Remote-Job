'use client'
import { Listbox } from '@headlessui/react'
import { Check, ChevronsUpDownIcon } from 'lucide-react'
import { useState } from 'react'

function BenefitsListbox({
  field,
  options,
}: {
  field: Record<string, any>
  options: string[]
}) {
  const [selectedBenefits, setSelectedBenefits] = useState([
    options[0],
    options[1],
  ])

  console.log(field)

  return (
    <Listbox value={selectedBenefits} onChange={setSelectedBenefits} multiple>
      <label className='relative top-6'>Job Benefits *</label>
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
        {options.map((benefit) => (
          <Listbox.Option
            className='p-1 pl-2 border-black border-b-2 flex gap-2 hover:bg-slate-400 transition-colors'
            key={benefit}
            value={benefit}
            {...field}
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
