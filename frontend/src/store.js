import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import colorSliderReducer from './features/composer/color/colorSliderSlice'
import editorSliderReducer from './features/composer/editorSliderSlice'
import menuToggleReducer from './features/menuSlider/menuSliderSlice'
import rangeReducer from './features/editorRange/rangeSlice'

export const store = configureStore({
  reducer: {
    changeColor: rangeReducer,
    colorSlider: colorSliderReducer,
    menuToggle: menuToggleReducer,
    slideEditor: editorSliderReducer,
  },
  middleware: [logger],
});
