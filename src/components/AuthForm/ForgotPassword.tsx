'use client'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { auth } from '@/firebase/config'
import { validateEmail } from '@/utils/validateEmail'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from 'zod'
import ErrorElement from '../Profile/ErrorElement'

const forgotPasswordSchema = z.object({
  email: z.string().refine((email) => validateEmail(email), {
    message: 'Wrong Email Pattern',
  }),
})

const ForgotPassword = () => {
  const {
    handleSubmit,
    register,
    watch,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  })

  const [modalOpen, setModalOpen] = useState(false)
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth)

  // RESET FN
  const handleReset = async (email: string) => {
    try {
      const success = await sendPasswordResetEmail(email)
      if (success) {
        toast.success(`Email sent to ${email}`)
      }
      if (error) {
        toast.error('Error sending email')
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message.split(': ')[1])
      }
    }
  }
  // FORGOT PASSWORD
  const forgotPassword = async (email: string) => {
    await handleReset(email)
  }

  const handleModal = () => {
    setModalOpen(!modalOpen)
    if (!modalOpen) {
      reset() // reset the form on modal close
    }
  }

  const onSubmit = async (values: z.infer<typeof forgotPasswordSchema>) => {
    await forgotPassword(values.email)
    setModalOpen(false)
    reset()
  }

  return (
    <Dialog open={modalOpen} onOpenChange={handleModal}>
      <DialogTrigger asChild>
        <p
          onClick={() => setModalOpen(true)}
          className='text-xs underline underline-offset-2 cursor-pointer text-blue-500'
        >
          Forgot Password?
        </p>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px] text-white bg-stone-900'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Please Enter Email</DialogTitle>
          </DialogHeader>
          <div className='grid gap-4 py-4'>
            <div className='flex flex-col items-start gap-4 '>
              <Label htmlFor='email' className='text-right'>
                Email
              </Label>
              <Input
                {...register('email')}
                id='email'
                className='col-span-3 text-black'
              />
              <ErrorElement errors={errors} name='email' />
            </div>
          </div>
          <DialogFooter>
            <Button
              disabled={!watch('email')}
              type='submit'
              className='bg-gray-700 hover:bg-gray-500'
            >
              {sending ? <Loader2 className='animate-spin' /> : 'Send Email'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
export default ForgotPassword
