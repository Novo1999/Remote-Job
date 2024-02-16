'use client'
import { Button } from '@/components/ui/button'
import { Form, FormField } from '@/components/ui/form'
import { auth } from '@/firebase/config'
import { usePostJobMutation } from '@/lib/features/jobsApi/jobsApi'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import {
  remoteJobBenefits,
  remoteJobLocations,
  remoteJobPositions,
  typesArray,
} from '../../utils/constants'
import CompanyForm from './CompanyForm'
import { FilterBar } from './FilterBar'
import FormRow from './FormRow'
import { FormRowSelect } from './FormRowSelect'
import BenefitsListbox from './Listbox'
import { formSchema } from './formSchema'

const MAX_FILE_SIZE = 2 * 1024 * 1024 // 2MB
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp']

// Define the Zod schema for image file validation
const ImageSchema = z.object({
  size: z.number().max(MAX_FILE_SIZE, `Max image size is 2MB.`),
  type: z.enum(
    ACCEPTED_IMAGE_TYPES,
    'Only .jpg, .jpeg, .png, and .webp formats are supported.'
  ),
})

const PostForm = () => {
  const [user, loading, error] = useAuthState(auth)
  const [postJob, { isError, error: postError }] = usePostJobMutation()

  const form = useForm<z.infer<typeof formSchema>>({
    // resolver: zodResolver(formSchema),
    defaultValues: {
      title: 'something',
      jobType: 'Full-Time',
      location: 'New York, NY',
      position: 'Backend Engineer',
      jobDescription: '',
      benefits: [],
      companyName: 'The big company',
      companyDescription: '',
    },
  })
  const [selectedBenefits, setSelectedBenefits] = useState([
    remoteJobBenefits[0],
    remoteJobBenefits[1],
  ])
  console.log(selectedBenefits)
  const [image, setImage] = useState()

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log('yes')
    postJob({
      ...values,
      companyImage: image,
      benefits: selectedBenefits,
    })
  }

  let content = null

  if (loading && !error) {
    content = (
      <div className='min-h-screen flex justify-center items-center'>
        <Loader2 height={100} width={100} className='animate-spin' />
      </div>
    )
  }

  if (!loading && !error && user?.email) {
    content = (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-8 font-poppins mx-4 min-[425px]:mx-6 sm:mx-32 lg:mx-60 xl:mx-96'
        >
          <h1 className='text-2xl font-bold'>Tell us about your Job</h1>
          <FormField
            control={form.control}
            name='title'
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
            name='location'
            render={({ field }) => (
              <FilterBar
                form={form}
                field={field.value}
                filterFor='location'
                options={remoteJobLocations}
              />
            )}
          />
          <FormField
            control={form.control}
            name='position'
            render={({ field }) => (
              <FilterBar
                form={form}
                field={field.value}
                filterFor='position'
                options={remoteJobPositions}
              />
            )}
          />
          <FormField
            control={form.control}
            name='benefits'
            render={({ field }) => (
              <BenefitsListbox
                selectedBenefits={selectedBenefits}
                setSelectedBenefits={setSelectedBenefits}
              />
            )}
          />
          <FormField
            control={form.control}
            name='salary'
            render={({ field }) => (
              <FormRow
                label='Salary *'
                placeholder='e.g. 50-60'
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
          <CompanyForm setImage={setImage} form={form} />
          <Button className='hover:bg-white hover:text-black' type='submit'>
            Submit
          </Button>
        </form>
      </Form>
    )
  }

  return content
}
export default PostForm
