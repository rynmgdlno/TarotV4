import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import UIReducer from '../features/UI/UIReducer'

export const store = configureStore({
  reducer: {
    ui: UIReducer
  },
  // middleware: [logger],
});

// console.log(store.getState())