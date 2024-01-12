import { FormField } from '@/components/ui/form'
import FormRow from './FormRow'
import { z } from 'zod'
import { formSchema } from './PostForm'
import { UseFormReturn } from 'react-hook-form'

interface CompanyFormProps {
  form: UseFormReturn<z.infer<typeof formSchema>>
}

const CompanyForm = ({ form }: CompanyFormProps) => {
  return (
    <section className='space-y-8'>
      <h1 className='text-2xl font-bold'>Tell us about your Company</h1>
      <FormField
        control={form.control}
        name='companyName'
        render={({ field }) => (
          <FormRow
            label='Company Name *'
            placeholder='e.g. The big company'
            field={field}
          />
        )}
      />
      <FormField
        control={form.control}
        name='companyWebsite'
        render={({ field }) => (
          <FormRow
            label='Company Website'
            placeholder='e.g. www.mycompany.com'
            field={field}
          />
        )}
      />
      <FormField
        control={form.control}
        name='companyImage'
        render={({ field }) => <FormRow label='Company Logo' field={field} />}
      />
      <FormField
        control={form.control}
        name='companyDescription'
        render={({ field }) => (
          <FormRow
            label='Company Description *'
            placeholder='Company Description...'
            field={field}
          />
        )}
      />
    </section>
  )
}
export default CompanyForm
