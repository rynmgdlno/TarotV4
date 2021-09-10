import { combineReducers } from "redux";

import composerReducer from "./composer/composerReducer";
import darkModeReducer from './darkMode/darkModeSlice'
import menuToggleReducer from './menu/menuSlider/menuSliderSlice'
import modalsReducer from "./modals/modalsReducer";

export default combineReducers({
  composerReducer,
  darkModeReducer,
  menuToggleReducer,
  modalsReducer
})