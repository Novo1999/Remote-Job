import { createSlice } from '@reduxjs/toolkit'

interface SearchState {
  query: string
  isSearching: boolean
}

const initialState: SearchState = {
  query: '',
  isSearching: false,
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeSearchInput: (state, action) => {
      state.query = action.payload.query
      state.isSearching = action.payload.isSearching
    },
  },
})

export const { changeSearchInput } = searchSlice.actions
export default searchSlice.reducer
