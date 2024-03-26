import { FormField } from '@/components/ui/form'
import { UseFormReturn } from 'react-hook-form'
import { z } from 'zod'
import FormRow from './FormRow'
import { editFormSchema, formSchema } from './formSchema'

interface CompanyFormProps {
  form:
    | UseFormReturn<z.infer<typeof formSchema>>
    | UseFormReturn<z.infer<typeof editFormSchema>>
  setImage: () => void
  formOf: 'post' | 'edit' //accept only 'post' or 'edit'
}

const CompanyForm = ({ form, setImage, formOf }: CompanyFormProps) => {
  type FormControlType = typeof formOf extends 'edit'
    ? UseFormReturn<z.infer<typeof editFormSchema>>['control']
    : UseFormReturn<z.infer<typeof formSchema>>['control']

  return (
    <section className='space-y-8'>
      <h1 className='text-2xl font-bold'>Tell us about your Company</h1>
      <FormField
        control={form.control as FormControlType}
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
      <FormRow formOf={formOf} setImage={setImage} label='Company Logo' />

      <FormField
        control={form.control as FormControlType}
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
