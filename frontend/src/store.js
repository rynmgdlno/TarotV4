import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
// import sliderReducer from './features/slider/sliderSlice'
import rangeReducer from './features/slider/rangeSlice'

export const store = configureStore({
  reducer: {
    // slider: sliderReducer,
    range: rangeReducer,
  },
  // middleware: [logger],
});
