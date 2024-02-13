'use client'
import { Button } from '@/components/ui/button'
import { Form, FormField } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import {
  remoteJobBenefits,
  remoteJobLocations,
  remoteJobPositions,
  typesArray,
  zodRemoteJobBenefits,
  zodRemoteJobLocations,
  zodRemoteJobPositions,
  zodTypesArray,
} from '../../utils/constants'
import CompanyForm from './CompanyForm'
import { FilterBar } from './FilterBar'
import FormRow from './FormRow'
import { FormRowSelect } from './FormRowSelect'
import BenefitsListbox from './Listbox'

const jobTypeEnum = z.enum(zodTypesArray)
const jobLocationEnum = z.enum(zodRemoteJobLocations)
const jobBenefitsEnum = z.enum(zodRemoteJobBenefits)
const jobPositionEnum = z.enum(zodRemoteJobPositions)

const MAX_FILE_SIZE = 2000000
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
]

export const formSchema = z.object({
  jobTitle: z.string().min(6, {
    message: 'Job title must be at least 6 characters.',
  }),
  jobType: jobTypeEnum,
  jobLocation: jobLocationEnum,
  jobPosition: jobPositionEnum,
  jobBenefits: z.array(z.string()),
  salary: z.string().refine((value) => /^\d+-\d+$/.test(value), {
    message: 'Invalid salary range format. It should be like "50-60"',
  }),
  jobDescription: z
    .string()
    .min(100, {
      message: 'Job Description must be at least 100 characters.',
    })
    .max(1000, {
      message: 'Job Description must not be longer than 1000 characters.',
    }),
  companyDescription: z
    .string()
    .min(100, {
      message: 'Company Description must be at least 100 characters.',
    })
    .max(1000, {
      message: 'Company Description must not be longer than 1000 characters.',
    }),
  companyName: z.string().min(6, {
    message: 'Company Name must be at least 6 characters.',
  }),
  companyImage: z.object({
    image: z
      .any()
      .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 2MB.`)
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        'Only .jpg, .jpeg, .png and .webp formats are supported.'
      ),
  }),
})

const PostForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    // resolver: zodResolver(formSchema),
    defaultValues: {
      jobTitle: 'something',
      jobType: 'Full-Time',
      jobLocation: 'New York, NY',
      jobPosition: 'Backend Engineer',
      jobDescription: '',
      jobBenefits: [],
      companyName: 'The big company',
      companyDescription: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log('yes')
    console.log(values)
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-8 font-poppins mx-4 min-[425px]:mx-6 sm:mx-32 lg:mx-60 xl:mx-96'
      >
        <h1 className='text-2xl font-bold'>Tell us about your Job</h1>
        <FormField
          control={form.control}
          name='jobTitle'
          render={({ field }) => (
            <FormRow
              label='Job Title *'
              placeholder='e.g. Software engineer'
              field={field}
            />
          )}
        />
        <FormField
          control={form.control}
          name='jobType'
          render={({ field }) => (
            <FormRowSelect
              field={field}
              placeholder='Select Job Type'
              label='Job Type *'
              options={typesArray}
            />
          )}
        />
        <FormField
          control={form.control}
          name='jobLocation'
          render={({ field }) => (
            <FilterBar
              form={form}
              field={field.value}
              filterFor='jobLocation'
              options={remoteJobLocations}
            />
          )}
        />
        <FormField
          control={form.control}
          name='jobPosition'
          render={({ field }) => (
            <FilterBar
              form={form}
              field={field.value}
              filterFor='jobPosition'
              options={remoteJobPositions}
            />
          )}
        />
        <FormField
          control={form.control}
          name='jobBenefits'
          render={({ field }) => (
            <BenefitsListbox field={field.value} options={remoteJobBenefits} />
          )}
        />
        <FormField
          control={form.control}
          name='salary'
          render={({ field }) => (
            <FormRow label='Salary *' placeholder='e.g. 50-60' field={field} />
          )}
        />
        <FormField
          control={form.control}
          name='jobDescription'
          render={({ field }) => (
            <FormRow
              label='Job Description *'
              placeholder='Job Description...'
              field={field}
            />
          )}
        />
        <CompanyForm form={form} />
        <Button className='hover:bg-white hover:text-black' type='submit'>
          Submit
        </Button>
      </form>
    </Form>
  )
}
export default PostForm
