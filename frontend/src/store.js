import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import composerAnimateReducer from './features/menuSlider/composerAnimateSlice'
import menuAnimateReducer from './features/menuSlider/menuAnimateSlice'
import menuToggleReducer from './features/menuSlider/menuSliderSlice'
import rangeReducer from './features/slider/rangeSlice'

export const store = configureStore({
  reducer: {
    changeColor: rangeReducer,
    menuToggle: menuToggleReducer,
    menuAnimate: menuAnimateReducer,
    composerAnimate: composerAnimateReducer,
  },
  middleware: [logger],
});
