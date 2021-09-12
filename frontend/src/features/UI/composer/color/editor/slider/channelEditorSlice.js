import { createSlice } from "@reduxjs/toolkit";
import initColor from '../../../../../../assets/static/init-color'

export const channelEditorSlice = createSlice({
  name: 'changeColor',
  initialState: { colorData: initColor},
  reducers: {
    changeColor: (state, action) => {
      state.colorData = action.payload
    }
  },
})

export const colorDataSelector = state => state.ui.composer.channelEditor.colorData
export const { changeColor } = channelEditorSlice.actions
export default channelEditorSlice.reducer