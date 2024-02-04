import { auth } from '@/firebase/config'
import { useAppDispatch } from '@/lib/features/hooks'
import { setCurrentUser } from '@/lib/features/user/userSlice'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

export interface IFormInput {
  email: string
  password: string
  displayName: string
}

export const useAuth = () => {
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()
  const onSubmitRegisterUser: SubmitHandler<IFormInput> = (data) => {
    registerUser(data.email, data.password, data.displayName)
  }
  const onSubmitLoginUser: SubmitHandler<IFormInput> = (data) => {
    loginUser(data.email, data.password)
  }

  const initAuth = () => {
    onAuthStateChanged(auth, (currentUser) => {
      dispatch(setCurrentUser(currentUser))
    })
  }

  const registerUser = async (
    email: string,
    password: string,
    displayName: string
  ) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password)

      await updateProfile(user.user, {
        displayName: displayName,
      })

      console.log(user)
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message.split(': ')[1])
      }
    }
  }

  const handleReset = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email)
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message.split(': ')[1])
      }
    }
  }

  const loginUser = async (email: string, password: string) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password)
      console.log(user)
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message.split(': ')[1])
      }
    }
  }

  const logoutUser = async () => {
    await signOut(auth)
  }

  const forgotPassword = async (email: string) => {
    await handleReset(email)
  }

  return {
    register,
    handleSubmit,
    errors,
    logoutUser,
    onSubmitRegisterUser,
    onSubmitLoginUser,
    forgotPassword,
    initAuth,
  }
}
