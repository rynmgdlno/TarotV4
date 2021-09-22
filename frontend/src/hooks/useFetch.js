import { useDispatch } from "react-redux"

import { setColor } from "../features/UI/composer/color/editor/slider/channelEditorSlice"
import {
  setIsLoading,
  setNoResults,
  setQueryResult,
  setQueryPages,
} from "../features/DATA/apiSlice"
import {
  setActiveResult,
  setCurrentPage,
  setResultLength
} from "../features/UI/swipe/swipeSlice"

export const useFetch = async (query) => {
  const dispatch = useDispatch()
  try {
    console.log(query)
    dispatch(setIsLoading(true))
    dispatch(setCurrentPage(1))
    const result = await fetch(`http://localhost:7000/?query=${query}&page=1`, {
      mode: 'cors'
    })
    console.log(result)
    const data = await result.json()
    console.log(data)
    if (!data[2].length) {
      console.log('no results')
      dispatch(setIsLoading(false))
      dispatch(setNoResults(true))
    } else {
      console.log('post fetch updating')
      dispatch(setQueryResult(data[2]))
      dispatch(setQueryPages(data[1]))
      dispatch(setCurrentPage(data[0]))
      dispatch(setActiveResult(1))
      dispatch(setResultLength(data[2].length))
      dispatch(setColor(data[2][0]))
      dispatch(setIsLoading(false))
    }
  } catch (error) {
    console.log(error)
    return error
  }
}