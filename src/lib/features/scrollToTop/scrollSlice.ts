import { createSlice } from '@reduxjs/toolkit'

interface ScrollState {
  isScrollShowed: boolean
}

const initialState: ScrollState = {
  isScrollShowed: false,
}

const scrollSlice = createSlice({
  name: 'scrollBtn',
  initialState,
  reducers: {
    showScrollButton: (state, action) => {
      state.isScrollShowed = action.payload
    },
  },
})

export const { showScrollButton } = scrollSlice.actions
export default scrollSlice.reducer
