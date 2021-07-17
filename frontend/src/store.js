import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import colorSliderReducer from './features/composer/color/colorSliderSlice'
import darkModeReducer from './features/menu/darkMode/darkModeSlice'
import editorSliderReducer from './features/composer/editorSliderSlice'
import menuToggleReducer from './features/menu/menuSlider/menuSliderSlice'
import rangeReducer from './features/slider/rangeSlice'

export const store = configureStore({
  reducer: {
    changeColor: rangeReducer,
    colorSlider: colorSliderReducer,
    setDarkMode: darkModeReducer,
    menuToggle: menuToggleReducer,
    slideEditor: editorSliderReducer,
  },
  middleware: [logger],
});
