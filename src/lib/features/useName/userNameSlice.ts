import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userName: '',
}

const searchSlice = createSlice({
  name: 'userName',
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload // could not set the user name in any other way, so had to use a slice 😅
    },
  },
})

export const { setUserName } = searchSlice.actions
export default searchSlice.reducer
