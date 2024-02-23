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
import useProfile from '@/hooks/use-profile'
import { Loader2 } from 'lucide-react'
import ErrorElement from './ErrorElement'

export function ProfileModal() {
  const {
    updating,
    error,
    modalOpen,
    setModalOpen,
    handleSubmit,
    onSubmit,
    register,
    errors,
    handleImage,
    submitDisabled,
    reset,
  } = useProfile()

  // render button content
  let btnContent = null

  if (updating && !error) {
    btnContent = <Loader2 className='animate-spin' />
  } else if (error) {
    btnContent = <p className='text-red-500'>{error.message}</p>
  } else {
    btnContent = 'Save Changes'
  }

  const isSubmitDisabled = submitDisabled() // check if submit button should be disabled

  const handleModal = () => {
    setModalOpen(!modalOpen)
    if (!modalOpen) {
      reset() // reset the form on modal close
    }
  }

  return (
    <Dialog open={modalOpen} onOpenChange={handleModal}>
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
                Profile Picture
              </Label>
              <Input
                type='file'
                accept='image/png, image/gif, image/jpeg'
                {...register('picture')}
                onChange={handleImage}
                id='picture'
                className='col-span-3 text-white bg-black cursor-pointer'
              />
              <ErrorElement errors={errors} name='picture' />
            </div>
            <div className='flex flex-col items-start gap-4 '>
              <Label htmlFor='name' className='text-right'>
                Username
              </Label>
              <Input
                {...register('name')}
                id='name'
                className='col-span-3 text-black'
              />
              <ErrorElement errors={errors} name='name' />
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
              <ErrorElement errors={errors} name='email' />
            </div>
          </div>
          <DialogFooter>
            <Button
              disabled={isSubmitDisabled}
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
