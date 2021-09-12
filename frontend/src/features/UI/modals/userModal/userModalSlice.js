import { createSlice } from '@reduxjs/toolkit'

export const userModalSlice = createSlice({
  name: 'userModalToggle',
  initialState: { userToggled: null },
  reducers: {
    userModalToggle: (state, action) => {
      state.userToggled = action.payload
    }
  },
})

export const userModalSelector = state => state.ui.modals.userModal.userToggled
export const { userModalToggle } = userModalSlice.actions
export default userModalSlice.reducer