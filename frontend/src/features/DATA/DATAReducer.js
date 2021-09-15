import { createSlice } from "@reduxjs/toolkit";
import initColor from "../../assets/static/init-color";

const colorData = JSON.stringify(initColor)

export const DATASlice = createSlice({
  name: 'DATASlice',
  initialState: {
    activeColor: colorData,
    currentUser: null,
    savedPalettes: null
  },
  reducers: {
    setActiveColor: (state, action) => {
      state.activeColor = action.payload
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload
    },
    setSavedPalettes: (state, action) => {
      state.savedPalettes = action.payload
    }
  }
})

export const activeColorSelector = state => state.data.activeColor
export const currentUserSelector = state => state.data.currentUser
export const savedPalettesSelector = state => state.data.savedPalettes

export const { setActiveColor, setCurrentUser, setSavedPalettes } = DATASlice.actions
export default DATASlice.reducer