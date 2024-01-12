'use client'
import {
  remoteJobLocations,
  remoteJobPositions,
  typesArray,
  zodRemoteJobLocations,
  zodRemoteJobPositions,
  zodTypesArray,
} from '../../utils/constants'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Form, FormField } from '@/components/ui/form'
import FormRow from './FornRow'
import { FormRowSelect } from './FormRowSelect'
import * as z from 'zod'
import CompanyForm from './CompanyForm'

const jobTypeEnum = z.enum(zodTypesArray)
const jobLocationEnum = z.enum(zodRemoteJobLocations)
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
  salary: z.string().refine((value) => /^\$\d+K - \$\d+K$/.test(value), {
    message: 'Invalid salary range format. It should be like "$50K - $60K"',
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
  companyWebsite: z
    .string()
    .min(10, 'Cannot be less than 10 characters')
    .optional()
    .or(z.literal('')),
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
    resolver: zodResolver(formSchema),
    defaultValues: {
      jobTitle: '',
      jobType: 'Full-Time',
      jobLocation: 'Chicago, IL',
      jobDescription: '',
      companyName: 'The big company',
      companyWebsite: '',
      companyDescription: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-8 font-poppins mx-4 min-[425px]:mx-6 sm:mx-32 lg:mx-60 xl:mx-96'
      >
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
            <FormRowSelect
              field={field}
              placeholder='Select Job Location'
              label='Job Location *'
              options={remoteJobLocations}
            />
          )}
        />
        <FormField
          control={form.control}
          name='jobPosition'
          render={({ field }) => (
            <FormRowSelect
              field={field}
              placeholder='Select Job Position'
              label='Job Position *'
              options={remoteJobPositions}
            />
          )}
        />
        <FormField
          control={form.control}
          name='salary'
          render={({ field }) => (
            <FormRow
              label='Salary *'
              placeholder='e.g. $50K - $60K'
              field={field}
            />
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
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  )
}
export default PostForm
