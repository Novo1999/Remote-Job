import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userName: '',
  token: '',
}

const userSlice = createSlice({
  name: 'userName',
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload // could not set the user name in any other way, so had to use a slice 😅
    },
    setToken: (state, action) => {
      state.token = action.payload
    },
  },
})

export const { setUserName, setToken } = userSlice.actions
export default userSlice.reducer
