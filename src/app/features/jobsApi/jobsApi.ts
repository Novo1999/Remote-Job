import api from '../api/apiSlice'

export interface Job {
  _id: string
  title: string
  salary: {
    min: number
    max: number
  }
  position: string
  new: boolean
  location: string
  jobType: string
  isStarred: {
    userId: Array<string>
  }
  isFeatured: boolean
  isAd: boolean
  company: string
  benefits: Array<string>
  applyCount: number
  viewCount: number
  posted: string
}

const jobsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllJobs: builder.query<Array<Job>, void>({
      query: () => '/all',
    }),
    getRandomJobs: builder.query<Array<Job>, { id: string; relevant: string }>({
      query: ({ id, relevant }) => `/random/${id}?relevant=${relevant}`,
    }),
    getSingleJob: builder.query<Job, string>({
      query: (id) => `/${id}`,
    }),
  }),
})

export const {
  useGetAllJobsQuery,
  useGetRandomJobsQuery,
  useGetSingleJobQuery,
} = jobsApi
