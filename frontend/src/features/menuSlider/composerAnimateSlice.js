import { createSlice } from '@reduxjs/toolkit'

export const composerAnimateSlice = createSlice({
  name: 'composerAnimate',
  initialState: { composerInitialClass: 'composer-animate-off' },
  reducers: {
    composerAnimate: (state, action) => {
      state.composerInitialClass = action.payload
    }
  },
})

export const { composerAnimate } = composerAnimateSlice.actions
export default composerAnimateSlice.reducer