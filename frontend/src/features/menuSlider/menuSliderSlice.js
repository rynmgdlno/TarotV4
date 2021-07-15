import { createSlice } from "@reduxjs/toolkit";

export const menuSliderSlice = createSlice({
  name: 'menuToggle',
  initialState: { menuToggled: null },
  reducers: {
    menuToggle: (state, action) => {
      state.menuToggled = action.payload
    }
  }
})

export const { menuToggle } = menuSliderSlice.actions
export default menuSliderSlice.reducer