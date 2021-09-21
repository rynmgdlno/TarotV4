import { createSlice } from "@reduxjs/toolkit";

export const apiSlice = createSlice({
  name: 'apiSlice',
  initialState: {
    isLoading: false,
    noResults: false,
    queryPages: null,
    queryResult: []
  },
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setNoResults: (state, action) => {
      state.noResults = action.payload
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
export const currentPageSelector = state => state.data.api.currentPage
export const isLoadingSelector = state => state.data.api.isLoading
export const queryPagesSelector = state => state.data.api.queryPages
export const queryResultSelector = state => state.data.api.queryResult

export const {
  setIsLoading,
  setNoResults,
  setQueryPages,
  setQueryResult } = apiSlice.actions

export default apiSlice.reducer

