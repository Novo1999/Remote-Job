import { createSlice } from '@reduxjs/toolkit'

interface SearchState {
  query: string
}

const initialState: SearchState = {
  query: '',
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeSearchInput: (state, action) => {
      state.query = action.payload.query
    },
  },
})

export const { changeSearchInput } = searchSlice.actions
export default searchSlice.reducer
