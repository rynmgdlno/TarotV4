import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import composerAnimateReducer from './features/menuSlider/composerAnimateSlice'
import editorSliderReducer from './features/composer/editorSliderSlice'
import menuAnimateReducer from './features/menuSlider/menuAnimateSlice'
import menuToggleReducer from './features/menuSlider/menuSliderSlice'
// import rangeReducer from './features/slider/rangeSlice'
import rangeReducer from './features/editorRange/rangeSlice'

export const store = configureStore({
  reducer: {
    changeColor: rangeReducer,
    slideEditor: editorSliderReducer,
    menuToggle: menuToggleReducer,
    menuAnimate: menuAnimateReducer,
    composerAnimate: composerAnimateReducer,
  },
  middleware: [logger],
});
