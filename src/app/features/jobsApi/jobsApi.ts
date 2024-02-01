import { FilterBy, GetJobs, GetRandomJobs, Job } from '@/utils/interfaces'
import api from '../api/apiSlice'

const jobsApi = api.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    // GET JOBS
    getAllJobs: builder.query<Array<Job>, GetJobs>({
      query: ({ sortBy, limit = 10 }) => `/all?sortBy=${sortBy}&limit=${limit}`,
    }),
    // GET SIMILAR JOBS
    getRandomJobs: builder.query<Array<Job>, GetRandomJobs>({
      query: ({ id, relevant }) => `/random/${id}?relevant=${relevant}`,
    }),
    // GET JOB
    getSingleJob: builder.query<Job, string>({
      query: (id) => `/${id}`,
    }),
    // INCREMENT VIEW COUNT WHEN USER CLICKS
    addViewCount: builder.mutation<void, string>({
      query: (id) => ({
        method: 'PATCH',
        url: `/${id}`,
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          jobsApi.util.updateQueryData('getSingleJob', id, (draft: Job) => {
            draft.viewCount += 1
          })
        )
        try {
          await queryFulfilled
        } catch (error) {
          patchResult.undo()
        }
      },
    }),
    // TOTAL JOB COUNT
    getTotalJobs: builder.query<number, void>({
      query: () => '/total-jobs',
    }),
    // SEARCH JOB
    getSearchedJob: builder.query<void, string>({
      query: (query) => `/search?q=${query}`,
    }),
    filterJobs: builder.query<void, string>({
      query: (filterQuery) => `/filter?${filterQuery}`,
    }),
  }),
})

export const {
  useGetAllJobsQuery,
  useGetRandomJobsQuery,
  useGetSingleJobQuery,
  useAddViewCountMutation,
  useGetTotalJobsQuery,
  useGetSearchedJobQuery,
  useFilterJobsQuery,
} = jobsApi
