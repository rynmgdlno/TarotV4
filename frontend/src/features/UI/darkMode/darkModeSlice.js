import { createSlice } from '@reduxjs/toolkit'

export const darkModeSlice = createSlice({
  name: 'setDarkMode',
  initialState: { darkMode: false },
  reducers: {
    setDarkMode: (state, action) => {
      state.darkMode = action.payload
    }
  },
})

export const { setDarkMode } = darkModeSlice.actions
export default darkModeSlice.reducer