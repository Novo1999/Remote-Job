import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sortBy: 'init',
}

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    changeSort: (state, action) => {
      state.sortBy = action.payload
    },
  },
})

export const { changeSort } = sortSlice.actions
export default sortSlice.reducer
