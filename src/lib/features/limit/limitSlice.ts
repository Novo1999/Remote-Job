import { createSlice } from '@reduxjs/toolkit'

interface LimitState {
  limit: number
}

const initialState: LimitState = {
  limit: 10,
}

const limitSlice = createSlice({
  name: 'limit',
  initialState,
  reducers: {
    changeLimit: (state, action) => {
      state.limit += action.payload
    },
  },
})

export const { changeLimit } = limitSlice.actions
export default limitSlice.reducer
