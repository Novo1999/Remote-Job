'use client'
import { Button } from '@/components/ui/button'
import { Form, FormField } from '@/components/ui/form'
import { auth } from '@/firebase/config'
import useRouting from '@/hooks/use-routing'
import { usePostJobMutation } from '@/lib/features/jobsApi/jobsApi'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
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

const PostForm = () => {
  const [user, loading, error] = useAuthState(auth)
  const [postJob, { isError, error: postError, isLoading }] =
    usePostJobMutation()
  const handleRouting = useRouting()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const [selectedBenefits, setSelectedBenefits] = useState([
    remoteJobBenefits[0],
    remoteJobBenefits[1],
  ])

  const [image, setImage] = useState<void>() // image state

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log('SUBMIT')
    postJob({
      ...values,
      companyImage: image,
      benefits: selectedBenefits,
      createdBy: user?.uid,
    }).then(() => {
      handleRouting('/')
      toast.success('Added Job Successfully')
    })
    if (isError) {
      toast.error('Error posting job')
    }
  }

  let content = null

  if (loading && !error) {
    content = (
      <div className='min-h-screen flex justify-center items-center'></div>
    )
  }

  if (!loading && !error && user?.email) {
    content = (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-8 font-poppins mx-4 min-[425px]:mx-6 sm:mx-32 lg:mx-60 xl:mx-96 2xl:mx-[36rem] mt-10'
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
          <CompanyForm setImage={setImage} form={form} formOf='post' />
          <Button
            disabled={isLoading}
            className='hover:bg-white hover:text-black'
            type='submit'
          >
            {isLoading ? <Loader2 className='animate-spin' /> : 'Submit'}
          </Button>
        </form>
      </Form>
    )
  }

  return content
}
export default PostForm
