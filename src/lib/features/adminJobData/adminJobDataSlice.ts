import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  jobData: {
    mostViewedJobs: { jobs: [], count: 0 },
    mostStarredJobs: { jobs: [], count: 0 },
    mostAppliedJobs: { jobs: [], count: 0 },
  },
}

const adminJobDataSlice = createSlice({
  name: 'adminJobData',
  initialState,
  reducers: {
    loadData: (state, action) => {
      state.jobData = action.payload
    },
  },
})

export const { loadData } = adminJobDataSlice.actions
export default adminJobDataSlice.reducer
