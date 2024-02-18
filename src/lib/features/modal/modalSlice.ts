import { createSlice } from '@reduxjs/toolkit'

interface ModalState {
  modalOpen: boolean
}

const initialState: ModalState = {
  modalOpen: false,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.modalOpen = action.payload
    },
  },
})

export const { openModal } = modalSlice.actions
export default modalSlice.reducer
