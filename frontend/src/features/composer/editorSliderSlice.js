import { createSlice } from '@reduxjs/toolkit'

export const editorSliderSlice = createSlice({
  name: 'slideEditor',
  initialState: { editorSlider: false },
  reducers: {
    slideEditor: (state, action) => {
      state.editorSlider = action.payload
    }
  },
})

export const { slideEditor } = editorSliderSlice.actions
export default editorSliderSlice.reducer