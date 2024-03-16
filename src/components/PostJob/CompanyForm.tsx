import { FormField } from '@/components/ui/form'
import { UseFormReturn } from 'react-hook-form'
import { z } from 'zod'
import FormRow from './FormRow'
import { editFormSchema } from './formSchema'

interface CompanyFormProps {
  form: UseFormReturn<z.infer<typeof editFormSchema>>
  setImage: () => void
}

const CompanyForm = ({ form, setImage }: CompanyFormProps) => {
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

      {/* image */}
      <FormRow setImage={setImage} label='Company Logo' />

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
