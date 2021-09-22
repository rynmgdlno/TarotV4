import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import UIReducer from '../features/UI/UIReducer'
import DATAReducer from '../features/DATA/DATAReducer'

export const store = configureStore({
  reducer: {
    ui: UIReducer,
    data: DATAReducer,
  },
  middleware: [logger],
});

console.log(store.getState())