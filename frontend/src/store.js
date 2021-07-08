import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import menuToggleReducer from './features/menuSlider/menuSliderSlice'
import rangeReducer from './features/slider/rangeSlice'

export const store = configureStore({
  reducer: {
    changeColor: rangeReducer,
    menuToggle: menuToggleReducer,
  },
  middleware: [logger],
});
