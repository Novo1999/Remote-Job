'use client'
import { auth } from '@/firebase/config'
import { useAppDispatch, useAppSelector } from '@/lib/features/hooks'
import {
  setEmail,
  setProfileImgURL,
  setUserName,
} from '@/lib/features/useName/userSlice'
import uploadImage from '@/utils/uploadUserImage'
import { validateEmail } from '@/utils/validateEmail'
import { zodResolver } from '@hookform/resolvers/zod'
import { User, updateEmail } from 'firebase/auth'
import { FormEvent, useState } from 'react'
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from 'zod'

const MAX_FILE_SIZE = 1024 * 1024 * 5
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
  'image/gif',
]

const profileSchema = z.object({
  name: z.string().min(6, { message: 'Name must be at least 6 characters' }),
  email: z.string().refine((email) => validateEmail(email), {
    message: 'Wrong Email Pattern',
  }),
  picture: z
    .any()
    .refine((files) => {
      if (files && files.length > 0) {
        return files[0].size <= MAX_FILE_SIZE
      }
      return true
    }, `Max image size is 5MB.`)
    .refine((files) => {
      if (files && files.length > 0) {
        return ACCEPTED_IMAGE_TYPES.includes(files[0].type)
      }
      return true
    }, 'Only .jpg, .jpeg, .png, .gif, and .webp formats are supported.'),
})

const useProfile = () => {
  const { email, userName } = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()
  const [modalOpen, setModalOpen] = useState(false)
  const [user] = useAuthState(auth)
  const [image, setImage] = useState<any>()
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

  // to track if user changed any information in the form
  const submitDisabled = () => {
    const watchedEmail = watch('email')
    const watchedName = watch('name')

    if (userName === watchedName && email === watchedEmail) {
      if (image) {
        return false
      }
      return true
    }
  }

  // user changes image or name or email -> submit enabled

  const [updateProfile, updating, error] = useUpdateProfile(auth)

  const handleImage = (e: FormEvent<HTMLInputElement>) => {
    const file = (e.target as HTMLInputElement).files![0]
    setImage(file)
  }

  const onSubmit = async (values: z.infer<typeof profileSchema>) => {
    const { name: newName, email: newEmail, picture } = values

    let photoUrl

    // check if picture exists
    if (picture.length > 0) {
      photoUrl = await uploadImage(picture[0].name, image)
      updateProfile({
        photoURL: photoUrl,
      })
      if (photoUrl) {
        // set the photo url by updating profile
        dispatch(setProfileImgURL(photoUrl))
      }
      setModalOpen(false)
    }

    // update name
    if (user?.displayName !== newName) {
      updateProfile({
        displayName: newName || user?.displayName,
        photoURL: photoUrl,
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

  return {
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
  }
}
export default useProfile
