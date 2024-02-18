import { GetJobs, GetSimilarJobs, Job, StarJob } from '../../../../interfaces'
import api from '../api/apiSlice'

const jobsApi = api.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    // GET JOBS
    getAllJobs: builder.query<Array<Job>, GetJobs>({
      query: ({ sortBy, limit = 10, filterBy, q }) =>
        `/all?sortBy=${sortBy}&${filterBy}&limit=${limit}&q=${q}`,
      providesTags: ['all-jobs'],
    }),
    // GET SIMILAR JOBS
    getSimilarJobs: builder.query<Array<Job>, GetSimilarJobs>({
      query: ({ id, relevant }) => `/random/${id}?relevant=${relevant}`,
      providesTags: ['similar-jobs'],
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
    getUserStarredJobs: builder.query<Job[], string>({
      query: (uid) => `/starred/${uid}`,
      providesTags: ['user-starred'],
    }),
    // STAR JOB
    starJob: builder.mutation<Job, StarJob>({
      query: ({ jobId, userId }) => ({
        method: 'POST',
        url: `/star/${jobId}`,
        body: { userId },
      }),
      invalidatesTags: ['all-jobs', 'similar-jobs', 'user-starred'], // this will refetch the jobs to show the updated ui
      async onQueryStarted({ jobId, userId }, { dispatch, queryFulfilled }) {
        // this is for one job only
        const patchResult = dispatch(
          jobsApi.util.updateQueryData('getSingleJob', jobId, (draft: Job) => {
            // Find the specific job in the draft
            const jobStarredIdArray = draft.isStarred.userId
            const idExists = jobStarredIdArray.includes(userId)
            if (idExists) {
              const idToRemove = jobStarredIdArray.indexOf(userId)
              jobStarredIdArray.splice(idToRemove, 1)
            } else {
              jobStarredIdArray.push(userId)
            }
          })
        )
        try {
          await queryFulfilled
        } catch (error) {
          patchResult.undo()
        }
      },
    }),
    // POST JOB
    postJob: builder.mutation({
      query: (job) => ({
        method: 'POST',
        url: '/post-job',
        body: job,
      }),
    }),
  }),
})

export const {
  useGetAllJobsQuery,
  useGetSimilarJobsQuery,
  useGetSingleJobQuery,
  useAddViewCountMutation,
  useGetTotalJobsQuery,
  useStarJobMutation,
  useGetUserStarredJobsQuery,
  usePostJobMutation,
} = jobsApi
