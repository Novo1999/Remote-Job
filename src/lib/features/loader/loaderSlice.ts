import { createSlice } from '@reduxjs/toolkit'

interface LoaderState {
  showSkeleton: boolean
  showStarLoader: string
}

const initialState: LoaderState = {
  showSkeleton: false,
  showStarLoader: '',
}

const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setShowSkeleton: (state, action) => {
      state.showSkeleton = action.payload
    },
    setShowStarLoader: (state, action) => {
      state.showStarLoader = action.payload
    },
  },
})

export const { setShowStarLoader, setShowSkeleton } = loaderSlice.actions
export default loaderSlice.reducer
