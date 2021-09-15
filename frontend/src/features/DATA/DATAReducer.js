import { createSlice } from "@reduxjs/toolkit";

export const DATASlice = createSlice({
  name: 'DATASlice',
  initialState: {
    currentUser: null,
    savedPalettes: null
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload
    },
    setSavedPalettes: (state, action) => {
      state.savedPalettes = action.payload
    }
  }
})

export const currentUserSelector = state => state.data.currentUser
export const savedPalettesSelector = state => state.data.savedPalettes

export const { setCurrentUser, setSavedPalettes } = DATASlice.actions
export default DATASlice.reducer