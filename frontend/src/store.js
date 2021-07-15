import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import editorSliderReducer from './features/composer/editorSliderSlice'
import menuToggleReducer from './features/menuSlider/menuSliderSlice'
import rangeReducer from './features/editorRange/rangeSlice'

export const store = configureStore({
  reducer: {
    changeColor: rangeReducer,
    slideEditor: editorSliderReducer,
    menuToggle: menuToggleReducer,
  },
  middleware: [logger],
});
