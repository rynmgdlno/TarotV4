import { combineReducers } from "redux";

import userModal from './userModal/userModalSlice'
import palettesModal from './palettesModal/palettesSlice'

export default combineReducers({
  userModal,
  palettesModal,
  // saveModal,
  // helpModal
})