import { createSlice } from '@reduxjs/toolkit'
import { User } from 'firebase/auth'

const initialState = {
  user: {} as User,
  isLoading: true,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.user = action.payload
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
  },
})

export const { setCurrentUser, setIsLoading } = userSlice.actions
export default userSlice.reducer
