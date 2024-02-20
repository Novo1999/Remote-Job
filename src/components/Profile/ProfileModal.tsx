'use client'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { auth } from '@/firebase/config'
import { useAppDispatch } from '@/lib/features/hooks'
import { setEmail, setUserName } from '@/lib/features/useName/userSlice'
import { validateEmail } from '@/utils/validateEmail'
import { ErrorMessage } from '@hookform/error-message'
import { zodResolver } from '@hookform/resolvers/zod'
import { User, updateEmail } from 'firebase/auth'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from 'zod'

const profileSchema = z.object({
  name: z.string().min(6, { message: 'Name must be at least 6 characters' }),
  email: z.string().refine((email) => validateEmail(email), {
    message: 'Wrong Email Pattern',
  }),
})

export function ProfileModal() {
  const dispatch = useAppDispatch()
  const [modalOpen, setModalOpen] = useState(false)
  const [user] = useAuthState(auth)

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user?.displayName!,
      email: user?.email!,
    },
  })

  const watchedName = watch('name')
  const watchedEmail = watch('email')

  const [updateProfile, updating, error] = useUpdateProfile(auth)

  const onSubmit = (values: z.infer<typeof profileSchema>) => {
    const { name: newName, email: newEmail } = values

    // update name
    if (user?.displayName !== newName) {
      updateProfile({
        displayName: newName || user?.displayName,
      })
        .then(() => {
          toast.success('Successfully Updated name')
          dispatch(setUserName(user?.displayName))
          setModalOpen(false)
        })
        .catch((error) => {
          toast.error('ERROR UPDATING NAME!', error)
        })
    }

    // update email
    if (user?.email !== newEmail) {
      updateEmail(auth.currentUser as User, newEmail || user?.email!)
        .then(() => {
          dispatch(setEmail(user?.email))
          setModalOpen(false)
        })
        .catch((error) => {
          toast.error('ERROR UPDATING EMAIL!', error)
        })
    }
  }

  let btnContent = null

  if (updating && !error) {
    btnContent = <Loader2 className='animate-spin' />
  } else if (error) {
    btnContent = <p className='text-red-500'>{error.message}</p>
  } else {
    btnContent = 'Save Changes'
  }

  return (
    <Dialog open={modalOpen} onOpenChange={() => setModalOpen(!modalOpen)}>
      <DialogTrigger asChild>
        <Button
          onClick={() => setModalOpen(true)}
          className='text-black'
          variant='outline'
        >
          Edit Profile
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px] text-white bg-stone-900'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className='grid gap-4 py-4'>
            <div className='flex flex-col items-start gap-4 '>
              <Label htmlFor='name' className='text-right'>
                Username
              </Label>
              <Input
                {...register('name')}
                id='name'
                className='col-span-3 text-black'
              />
              <ErrorMessage
                errors={errors}
                name='name'
                render={({ message }) => (
                  <p className='text-red-500 text-xs w-full'>{message}</p>
                )}
              />
            </div>
            <div className='flex flex-col items-start gap-4 '>
              <Label htmlFor='email' className='text-right'>
                Email
              </Label>
              <Input
                {...register('email')}
                id='email'
                className='col-span-3 text-black'
              />
              <ErrorMessage
                errors={errors}
                name='email'
                render={({ message }) => (
                  <p className='text-red-500 text-xs w-full'>{message}</p>
                )}
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              disabled={
                watchedName === user?.displayName &&
                watchedEmail === user?.email
              }
              type='submit'
              className='bg-gray-700 hover:bg-gray-500'
            >
              {btnContent}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
