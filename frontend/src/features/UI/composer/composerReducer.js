import { combineReducers } from "redux";

import channelEditorReducer from './color/editor/slider/rangeSlice'
import colorSliderReducer from './color/colorSliderSlice'
import editorSliderReducer from './editorSliderSlice'

export default combineReducers({
  channelEditorReducer,
  colorSliderReducer,
  editorSliderReducer
})