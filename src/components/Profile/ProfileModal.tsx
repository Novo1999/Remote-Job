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
import { User, getAuth, updateEmail, updateProfile } from 'firebase/auth'
import { useState } from 'react'
import { toast } from 'react-toastify'

type ProfileModalProp = {
  name: string
  email: string
}

export function ProfileModal({ name, email }: ProfileModalProp) {
  const auth = getAuth()
  const [inputValue, setInputValue] = useState({ name: '', email: '' })

  const handleUpdateProfile = () => {
    updateProfile(auth.currentUser as User, {
      displayName: inputValue.name || name,
    })
      .then(() => {
        toast.success('Successfully Updated Profile')
      })
      .catch((error) => {
        toast.error('Error Occurred Updating Profile!')
      })
    updateEmail(auth.currentUser as User, inputValue.email || email)
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='text-black' variant='outline'>
          Edit Profile
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px] text-black'>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='name' className='text-right'>
              Username
            </Label>
            <Input
              onChange={(e) =>
                setInputValue((prevInputValue) => ({
                  ...prevInputValue,
                  name: e.target.value,
                }))
              }
              id='name'
              defaultValue={name}
              className='col-span-3'
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='email' className='text-right'>
              Email
            </Label>
            <Input
              onChange={(e) =>
                setInputValue((prevInputValue) => ({
                  ...prevInputValue,
                  email: e.target.value,
                }))
              }
              id='email'
              defaultValue={email}
              className='col-span-3'
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleUpdateProfile} type='submit'>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
