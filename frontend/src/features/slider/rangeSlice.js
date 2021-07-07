import { createSlice } from "@reduxjs/toolkit";
import initColor from "../../assets/static/init-color";

export const rangeSlice = createSlice({
  name: 'range',
  initialState: { colorData: initColor},
  reducers: {
    changeColor: (state, action, id, channelName) => {
      state.colorData.id = action.payload
    }
  },
})

export const { changeColor } = rangeSlice.actions
export default rangeSlice.reducer