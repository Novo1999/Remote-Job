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
import { setUserName } from '@/lib/features/useName/userSlice'
import { validateEmail } from '@/utils/validateEmail'
import { ErrorMessage } from '@hookform/error-message'
import { zodResolver } from '@hookform/resolvers/zod'
import { User, updateEmail } from 'firebase/auth'
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from 'zod'

type ProfileModalProp = {
  name: string
  email: string
}

const profileSchema = z.object({
  name: z.string().min(6, { message: 'Name must be at least 6 characters' }),
  email: z.string().refine((email) => validateEmail(email), {
    message: 'Wrong Email Pattern',
  }),
})

export function ProfileModal({ name, email }: ProfileModalProp) {
  const dispatch = useAppDispatch()
  const [user] = useAuthState(auth)
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: name,
      email: email,
    },
  })
  const [updateProfile, updating, error] = useUpdateProfile(auth)

  const onSubmit = (values: z.infer<typeof profileSchema>) => {
    const { name: newName, email: newEmail } = values

    // update name
    updateProfile({
      displayName: newName || name,
    })
      .then(() => {
        toast.success('Successfully Updated Profile')
        dispatch(setUserName(user?.displayName))
      })
      .catch((error) => {
        toast.error('ERROR UPDATING NAME!', error)
      })

    // update email
    updateEmail(auth.currentUser as User, newEmail || email).catch((error) => {
      toast.error('ERROR UPDATING EMAIL!', error)
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='text-black' variant='outline'>
          Edit Profile
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px] text-black'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className='grid gap-4 py-4'>
            <div className='flex flex-col items-start gap-4'>
              <Label htmlFor='name' className='text-right'>
                Username
              </Label>
              <Input
                {...register('name')}
                id='name'
                defaultValue={name}
                className='col-span-3'
              />
              <ErrorMessage
                errors={errors}
                name='name'
                render={({ message }) => (
                  <p className='text-red-500 text-xs w-full'>{message}</p>
                )}
              />
            </div>
            <div className='flex flex-col items-start gap-4'>
              <Label htmlFor='email' className='text-right'>
                Email
              </Label>
              <Input
                {...register('email')}
                id='email'
                defaultValue={email}
                className='col-span-3'
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
            <Button type='submit'>Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
