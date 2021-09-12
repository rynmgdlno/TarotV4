import { createSlice } from '@reduxjs/toolkit'

export const darkModeSlice = createSlice({
  name: 'setDarkMode',
  initialState: { toggled: false },
  reducers: {
    setDarkMode: (state) => {
      state.toggled = !state.toggled
    }
  },
})

export const { setDarkMode } = darkModeSlice.actions
export default darkModeSlice.reducer