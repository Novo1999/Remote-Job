import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userName: '',
  token: '',
  email: '',
  url: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload // could not set the user name in any other way, so had to use a slice 😅
    },
    setToken: (state, action) => {
      state.token = action.payload
    },
    setEmail: (state, action) => {
      state.email = action.payload
    },
    setProfileImgURL: (state, action) => {
      state.url = action.payload
    },
  },
})

export const { setUserName, setToken, setEmail, setProfileImgURL } =
  userSlice.actions
export default userSlice.reducer
