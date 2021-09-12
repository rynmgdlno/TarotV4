import { combineReducers } from "redux";

import composer from "./composer/composerReducer";
import darkMode from './darkMode/darkModeSlice'
import menuToggle from './menu/menuSlider/menuSliderSlice'
import modals from "./modals/modalsReducer";

export default combineReducers({
  composer,
  darkMode,
  menuToggle,
  modals
})