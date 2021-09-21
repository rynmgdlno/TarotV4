import { createSlice } from '@reduxjs/toolkit'

export const swipeSlice = createSlice({
  name: 'swipeSlice',
  initialState: {
    activeQueryResult: 0,
    currentPage: 1,
    queryResultLength: null
  },
  reducers: {
    setActiveResult: (state, action) => {
      state.activeQueryResult = action.payload
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
    setResultLength: (state, action) => {
      state.queryResultLength = action.payload
    }
  },
})

export const { setActiveResult, setCurrentPage, setResultLength } = swipeSlice.actions
export default swipeSlice.reducer