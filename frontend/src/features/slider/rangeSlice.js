import { createSlice } from "@reduxjs/toolkit";
import initColor from "../../assets/static/init-color";

export const rangeSlice = createSlice({
  name: 'range',
  initialState: { colorData: initColor},
  reducers: {
    changeColor: (state, action) => {
      state.colorData = action.payload
    }
  },
})

export const { changeColor } = rangeSlice.actions
export default rangeSlice.reducer