import { createSlice } from '@reduxjs/toolkit'
import { User } from 'firebase/auth'

const initialState = {
  user: {} as User,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.user = action.payload
    },
  },
})

export const { setCurrentUser } = userSlice.actions
export default userSlice.reducer
