import { createSlice } from '@reduxjs/toolkit'

export const sliderSlice = createSlice({
  name: 'slider',
  initialState: {sliderValue: 10},
  reducers: {
    changeValue: (state, action) => {
      state.sliderValue = action.payload
    }
  },
})

export const { changeValue } = sliderSlice.actions

export default sliderSlice.reducer