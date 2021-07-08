import { createSlice } from '@reduxjs/toolkit'

export const menuAnimateSlice = createSlice({
  name: 'menuAnimate',
  initialState: { menuInitialClass: 'menu-animate-off' },
  reducers: {
    menuAnimate: (state, action) => {
      state.menuInitialClass = action.payload
    }
  },
})

export const { menuAnimate } = menuAnimateSlice.actions
export default menuAnimateSlice.reducer