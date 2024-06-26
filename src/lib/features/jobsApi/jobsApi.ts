import { GetJobs, GetSimilarJobs, Job, StarJob } from '../../../../interfaces'
import api from '../api/apiSlice'

const jobsApi = api.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    // GET JOBS
    getAllJobs: builder.query<Array<Job>, GetJobs>({
      query: ({ sortBy, limit, filterBy, q }) =>
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
    // GET MAX SALARY
    getMaxSalary: builder.query<{ max: number }, void>({
      query: () => '/max-salary',
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
      providesTags: ['total-jobs'],
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
        // cache update
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
    editJob: builder.mutation({
      query: ({ id, updatedJob }) => ({
        method: 'PATCH',
        url: `/edit-job/${id}`,
        body: updatedJob,
      }),
    }),
    // DELETE JOB
    deleteJob: builder.mutation({
      query: (id) => ({
        method: 'DELETE',
        url: `/delete/${id}`,
      }),
      invalidatesTags: ['all-jobs'],
    }),
    // DELETE AS ADMIN
    deleteJobAsAdmin: builder.mutation({
      query: ({ id, adminId }) => ({
        method: 'DELETE',
        url: `/admin/delete-as-admin/${adminId}/${id}`,
      }),
      invalidatesTags: ['all-jobs', 'total-jobs'],
    }),
    // APPLY JOB
    applyJob: builder.mutation<Job, StarJob>({
      query: ({ jobId, userId }) => ({
        method: 'POST',
        url: `/apply/${jobId}`,
        body: { userId },
      }),
      async onQueryStarted({ jobId, userId }, { dispatch, queryFulfilled }) {
        // cache update
        const patchResult = dispatch(
          jobsApi.util.updateQueryData('getSingleJob', jobId, (draft: Job) => {
            // Find the specific job in the draft
            const jobStarredAppliedArray = draft.appliedBy.userId
            const idExists = jobStarredAppliedArray.includes(userId)
            if (idExists) {
              const idToRemove = jobStarredAppliedArray.indexOf(userId)
              jobStarredAppliedArray.splice(idToRemove, 1)
            } else {
              jobStarredAppliedArray.push(userId)
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
    getJobsStats: builder.query({
      query: (uid) => `/admin/job-stats/${uid}`,
    }),
  }),
})

export const {
  useGetAllJobsQuery,
  useDeleteJobAsAdminMutation,
  useEditJobMutation,
  useGetSimilarJobsQuery,
  useGetSingleJobQuery,
  useAddViewCountMutation,
  useGetTotalJobsQuery,
  useStarJobMutation,
  useGetUserStarredJobsQuery,
  usePostJobMutation,
  useGetMaxSalaryQuery,
  useDeleteJobMutation,
  useGetJobsStatsQuery,
  useApplyJobMutation,
} = jobsApi
