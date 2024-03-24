import { auth } from '@/firebase/config'
import { useAppDispatch } from '@/lib/features/hooks'
import { setUserName } from '@/lib/features/useName/userSlice'
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useUpdateProfile,
} from 'react-firebase-hooks/auth'
import { SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'
import { ZodEffects, ZodObject, ZodString, z } from 'zod'
import useRouting from './use-routing'
export type FormSchemaType = ZodObject<{
  displayName?: ZodEffects<ZodEffects<ZodString, string, string>>
  email: ZodEffects<ZodString, string, string>
  password: ZodEffects<ZodString, string, string>
}>

export const useAuth = (formSchema: FormSchemaType) => {
  const handleRouting = useRouting()
  const dispatch = useAppDispatch()
  const [createUserWithEmailAndPassword, loading, creationError] =
    useCreateUserWithEmailAndPassword(auth)

  const [signInWithEmailAndPassword, , loginLoading, loginError] =
    useSignInWithEmailAndPassword(auth)

  const [updateProfile, updating, updateError] = useUpdateProfile(auth)

  // REGISTER FN
  const registerUser = async (
    email: string,
    password: string,
    displayName: string
  ) => {
    try {
      const user = await createUserWithEmailAndPassword(email, password)

      const success: boolean | void = await updateProfile({
        displayName: displayName,
      })

      if (success && !updateError && user) {
        toast.success(`Welcome, ${user.user.displayName}`, {
          position: 'bottom-right',
        })
        dispatch(setUserName(user.user.displayName))
        handleRouting('/')
      }
      if (!success) {
        toast.error('Error creating user')
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message.split(': ')[1]) // omitting the 'firebase: ' text
      }
    }
  }
  // REGISTER SUBMIT
  const onSubmitRegisterUser: SubmitHandler<z.infer<typeof formSchema>> = (
    data
  ) => {
    registerUser(data.email, data.password, data.displayName as string)
  }
  // LOGIN SUBMIT
  const onSubmitLoginUser: SubmitHandler<z.infer<typeof formSchema>> = (
    data
  ) => {
    loginUser(data.email, data.password)
  }

  // LOGIN FN
  const loginUser = async (email: string, password: string) => {
    try {
      const user = await signInWithEmailAndPassword(email, password)
      if (!loginError && user) {
        toast.success(`Welcome, ${user.user.displayName}`, {
          position: 'bottom-right',
        })
        dispatch(setUserName(user.user.displayName))
        handleRouting('/')
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message.split(': ')[1])
      }
    }
  }

  return {
    onSubmitRegisterUser,
    onSubmitLoginUser,
    loading,
    updating,
    loginLoading,
    loginError,
  }
}
