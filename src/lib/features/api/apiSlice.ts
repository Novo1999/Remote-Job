import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_APP_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).user.token

    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
  },
})

const api = createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: ['all-jobs', 'similar-jobs', 'user-starred', 'jobs'],
  endpoints: (builder) => ({}),
})

export default api
