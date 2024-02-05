import { GetJobs, GetRandomJobs, Job } from '@/utils/interfaces'
import api from '../api/apiSlice'

const jobsApi = api.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    // GET JOBS
    getAllJobs: builder.query<Array<Job>, GetJobs>({
      query: ({ sortBy, limit = 10, filterBy, q }) =>
        `/all?sortBy=${sortBy}&${filterBy}&limit=${limit}&q=${q}`,
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
    // STAR JOB
    starJob: builder.mutation<void, { jobId: string; userId: string }>({
      query: ({ jobId, userId }) => ({
        method: 'POST',
        url: `/star/${jobId}`,
        body: { userId },
      }),
      async onQueryStarted({ jobId, userId }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          jobsApi.util.updateQueryData(
            'getAllJobs',
            undefined!,
            (draft: Job[]) => {
              const updatedDraft = draft.map((job) => {
                if (job._id === jobId) {
                  // Find the specific job in the draft
                  const jobStarredIdArray = job.isStarred.userId
                  const idExists = jobStarredIdArray.includes(userId)
                  if (idExists) {
                    const idToRemove = jobStarredIdArray.indexOf(userId)
                    jobStarredIdArray.splice(idToRemove, 1)
                  } else {
                    jobStarredIdArray.push(userId)
                  }
                }
                return job
              })

              return updatedDraft
            }
          )
        )
        try {
          await queryFulfilled
        } catch (error) {
          patchResult.undo()
        }
      },
    }),
  }),
})

export const {
  useGetAllJobsQuery,
  useGetRandomJobsQuery,
  useGetSingleJobQuery,
  useAddViewCountMutation,
  useGetTotalJobsQuery,
  useStarJobMutation,
} = jobsApi
