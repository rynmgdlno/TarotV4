import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import rangeReducer from './features/slider/rangeSlice'

export const store = configureStore({
  reducer: {
    range: rangeReducer,
  },
  middleware: [logger],
});
