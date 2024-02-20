import { auth } from '@/firebase/config'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { useAuthState } from 'react-firebase-hooks/auth'

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_APP_URL,
  // prepareHeaders: (headers, {getState}) => {
  //   const token = !loading && user?.accessToken!
  // }
})

const api = createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: ['all-jobs', 'similar-jobs', 'user-starred'],
  endpoints: (builder) => ({}),
})

export default api
