import { auth } from '@/firebase/config'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { onAuthStateChanged } from 'firebase/auth'

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_APP_URL,
})

const api = createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: ['all-jobs'],
  endpoints: (builder) => ({}),
})

export default api
