import { createSlice } from "@reduxjs/toolkit";

export const DATASlice = createSlice({
  name: 'DATASlice',
  initialState: {
    activeQueryResult: 0,
    currentPage: null,
    currentUser: null,
    isLoading: false,
    savedPalettes: null,
    swipeDelta: false,
    queryPages: null,
    queryResult: []
  },
  reducers: {
    setActiveQueryResult: (state, action) => {
      state.activeQueryResult = action.payload
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload
    },
    setIsLoading: (state) => {
      state.isLoading = !state.isLoading
    },
    setSavedPalettes: (state, action) => {
      state.savedPalettes = action.payload
    },
    setSwipeDelta: (state, action) => {
      state.swipeDelta = action.payload
    },
    setQueryPages: (state, action) => {
      state.queryPages = action.payload
    },
    setQueryResult: (state, action) => {
      state.queryResult = action.payload
    },
  }
})

// export const activeColorSelector = state => state.data.activeColor
export const currentUserSelector = state => state.data.currentUser
export const savedPalettesSelector = state => state.data.savedPalettes

export const {
  setCurrentPage,
  setCurrentUser,
  setIsLoading,
  setSavedPalettes,
  setQueryResult } = DATASlice.actions

export default DATASlice.reducer
